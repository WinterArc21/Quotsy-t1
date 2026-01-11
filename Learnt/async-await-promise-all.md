# Async/Await and Promise.all: Parallel vs Sequential Execution

This document explains JavaScript's asynchronous programming model from the ground up, culminating in how `Promise.all` optimizes our homepage queries.

---

## 1. The Problem: JavaScript is Single-Threaded

JavaScript runs on a **single thread**—it can only do one thing at a time. But web applications constantly need to:
- Fetch data from databases
- Call external APIs
- Read files
- Wait for user input

If JavaScript blocked and waited for each of these operations, your entire app would freeze.

```javascript
// ❌ If JavaScript worked synchronously (it doesn't!)
const data = database.query("SELECT * FROM users")  // Blocks for 200ms
console.log("This wouldn't run until query finishes")
```

**Solution:** Asynchronous programming—start an operation, continue doing other things, then handle the result when it's ready.

---

## 2. Callbacks: The Original Async Pattern

The first solution was **callbacks**—pass a function to be called when the operation completes:

```javascript
database.query("SELECT * FROM users", function(error, data) {
  if (error) {
    console.error("Query failed:", error)
    return
  }
  console.log("Got users:", data)
})

console.log("This runs IMMEDIATELY, before query finishes!")
```

**Problem:** Nested callbacks become unreadable ("callback hell"):

```javascript
getUser(userId, function(user) {
  getOrders(user.id, function(orders) {
    getOrderDetails(orders[0].id, function(details) {
      // 3 levels deep... and it gets worse
    })
  })
})
```

---

## 3. Promises: A Better Abstraction

A **Promise** is an object representing a value that will be available in the future. It can be in one of three states:

| State | Meaning |
|-------|---------|
| **pending** | Operation in progress |
| **fulfilled** | Operation completed successfully (has a value) |
| **rejected** | Operation failed (has an error) |

```javascript
// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  // Do some async work...
  if (success) {
    resolve(result)    // Fulfills the promise with a value
  } else {
    reject(error)      // Rejects the promise with an error
  }
})

// Using a Promise
myPromise
  .then(result => console.log("Success:", result))
  .catch(error => console.error("Failed:", error))
```

### Real Example: Supabase Returns Promises

```javascript
// supabase.from("quotes").select("*") returns a Promise
const promise = supabase.from("quotes").select("*")

promise.then(({ data, error }) => {
  console.log("Quotes:", data)
})

console.log("This runs BEFORE we have the quotes!")
```

---

## 4. async/await: Promises Made Readable

`async/await` is **syntactic sugar** over Promises—it makes asynchronous code look synchronous.

### The `async` Keyword

Marks a function as asynchronous. The function automatically returns a Promise.

```javascript
async function getUser() {
  return { id: 1, name: "Ahmed" }
}

// Equivalent to:
function getUser() {
  return Promise.resolve({ id: 1, name: "Ahmed" })
}
```

### The `await` Keyword

**Pauses execution** of the async function until the Promise resolves, then returns the resolved value.

```javascript
async function fetchQuotes() {
  // Execution PAUSES here until the query completes
  const { data } = await supabase.from("quotes").select("*")
  
  // This line only runs AFTER we have the data
  console.log("Got quotes:", data)
  return data
}
```

### Key Insight: `await` is Blocking (Within Its Function)

```javascript
async function example() {
  console.log("1. Starting")
  
  await delay(1000)  // Pauses for 1 second
  
  console.log("2. After delay")  // Runs 1 second later
}

example()
console.log("3. This runs IMMEDIATELY!")

// Output:
// 1. Starting
// 3. This runs IMMEDIATELY!
// 2. After delay (1 second later)
```

The function is "paused" at `await`, but JavaScript continues running other code outside the function.

---

## 5. Sequential vs Parallel: The Performance Problem

### Sequential Execution (Current Homepage Code)

```javascript
async function loadHomepage() {
  // Query 1: Wait 200ms
  const quotes = await supabase.from("quotes").select("*").limit(24)
  
  // Query 2: Wait another 200ms (AFTER Query 1 finishes)
  const { count } = await supabase.from("quotes").select("*", { count: "exact", head: true })
  
  // Query 3: Wait another 200ms (AFTER Query 2 finishes)
  const qotd = await supabase.from("quotes").select("*").range(index, index).single()
  
  // Total time: 200 + 200 + 200 = 600ms
}
```

**Timeline:**
```
Time:     0ms -------- 200ms -------- 400ms -------- 600ms
Query 1:  [==========>]
Query 2:               [==========>]
Query 3:                             [==========>]
```

Each `await` blocks until the previous query completes, even though the queries don't depend on each other's results.

### Parallel Execution (What We Want)

If we start all queries at the same time:

```
Time:     0ms -------- 200ms
Query 1:  [==========>]
Query 2:  [==========>]
Query 3:  [==========>]
```

**Total time: ~200ms** (the slowest query determines total time)

---

## 6. Promise.all: Run Promises in Parallel

`Promise.all` takes an array of Promises and returns a single Promise that:
- **Resolves** when ALL input promises resolve (with an array of results)
- **Rejects** immediately if ANY input promise rejects

```javascript
const [result1, result2, result3] = await Promise.all([
  asyncOperation1(),
  asyncOperation2(),
  asyncOperation3(),
])
```

### Detailed Example

```javascript
async function loadHomepageParallel() {
  // Start ALL queries simultaneously
  const [quotesResult, countResult] = await Promise.all([
    supabase.from("quotes").select("*").limit(24),
    supabase.from("quotes").select("*", { count: "exact", head: true }),
  ])
  
  // Both results are now available
  const quotes = quotesResult.data || []
  const count = countResult.count || 0
  
  // Query 3 still runs after (it needs count for calculation)
  const index = seed % count
  const { data: qotd } = await supabase.from("quotes").select("*").range(index, index).single()
  
  // Total time: ~200ms + ~200ms = 400ms (instead of 600ms)
}
```

### Array Destructuring Syntax

```javascript
// Promise.all returns an array of results in the SAME ORDER as input
const results = await Promise.all([promise1, promise2, promise3])
// results = [result1, result2, result3]

// Array destructuring extracts them into named variables
const [first, second, third] = results

// Combined in one line:
const [first, second, third] = await Promise.all([promise1, promise2, promise3])
```

---

## 7. When to Use Promise.all vs Sequential await

### Use `Promise.all` When:
- Queries/operations are **independent** (don't need each other's results)
- You want **maximum performance**
- All operations must succeed for the overall operation to succeed

### Use Sequential `await` When:
- Query B needs the result of Query A
- You need to conditionally run operations based on previous results
- Order of execution matters for side effects

### Hybrid Approach (Our Homepage)

```javascript
// Parallel: These don't depend on each other
const [quotesResult, countResult] = await Promise.all([
  fetchQuotes(),
  fetchCount(),
])

// Sequential: This depends on count
const count = countResult.count || 0
if (count > 0) {
  const index = seed % count
  const qotd = await fetchQuoteAtIndex(index)  // Must wait for count
}
```

---

## 8. Error Handling with Promise.all

### Default Behavior: Fail-Fast

If ANY promise rejects, `Promise.all` immediately rejects with that error:

```javascript
try {
  const [a, b, c] = await Promise.all([
    successfulQuery(),
    failingQuery(),      // Throws an error
    anotherQuery(),      // Never completes—Promise.all already rejected
  ])
} catch (error) {
  console.error("One of the queries failed:", error)
}
```

### Alternative: Promise.allSettled

If you want all promises to complete regardless of failures:

```javascript
const results = await Promise.allSettled([query1(), query2(), query3()])

// results = [
//   { status: "fulfilled", value: result1 },
//   { status: "rejected", reason: error2 },
//   { status: "fulfilled", value: result3 },
// ]

results.forEach((result, index) => {
  if (result.status === "fulfilled") {
    console.log(`Query ${index} succeeded:`, result.value)
  } else {
    console.error(`Query ${index} failed:`, result.reason)
  }
})
```

---

## 9. Applied to Quotsy Homepage

### Before (Sequential)

```typescript
// app/page.tsx - Original code
const { data: fetchedQuotes } = await supabase
  .from("quotes").select("*").order("created_at", { ascending: false }).limit(24)

const { count } = await supabase
  .from("quotes").select("*", { count: "exact", head: true })

// ... calculate index from count ...
const { data } = await supabase
  .from("quotes").select("*").range(index, index).single()
```

### After (Optimized with Promise.all)

```typescript
// Parallel: Run independent queries simultaneously
const [quotesResult, countResult] = await Promise.all([
  supabase.from("quotes").select("*").order("created_at", { ascending: false }).limit(24),
  supabase.from("quotes").select("*", { count: "exact", head: true }),
])

const quotes = quotesResult.data || []
const count = countResult.count || 0

// Sequential: This depends on count
if (count > 0) {
  const index = seed % count
  const { data } = await supabase.from("quotes").select("*").range(index, index).single()
  quoteOfTheDay = data
}
```

**Performance improvement:** ~100-200ms faster page load

---

## 10. Quick Reference

| Pattern | Use Case | Behavior |
|---------|----------|----------|
| `await promise` | Need result before continuing | Blocks until resolved |
| `Promise.all([...])` | Multiple independent operations | Parallel, fails fast |
| `Promise.allSettled([...])` | Independent ops, need all results | Parallel, waits for all |
| `Promise.race([...])` | First result wins | Returns fastest |
| `Promise.any([...])` | First success wins | Returns first fulfilled |

---

## Key Takeaways

1. **`await` pauses execution** within its async function until the Promise resolves
2. **Sequential `await`s** make each operation wait for the previous one
3. **`Promise.all`** runs multiple Promises in parallel
4. **Use parallel execution** when operations are independent
5. **Array destructuring** cleanly extracts Promise.all results
6. **Hybrid approaches** combine parallel and sequential as needed
