# generic-react-hooks: useSWR vs useState

Since you mentioned you weren't sure what `useState` is, let's start from the very beginning.

## 1. The Core: What is `useState`?

Think of a React component like a person.
-   **Props** are what people *tell* you (external instructions).
-   **State (`useState`)** is what you *remember* (your internal memory).

`useState` is usually the first "Hook" you learn. It lets a component "remember" something between renders.

### Example: A Counter
If you want to count how many times a button was clicked, you can't just use a normal variable like `let count = 0`. Why? because React components are functions that run over and over again. If the function runs again, `let count = 0` resets to 0!

You need a special memory box that survives those resets. That is `useState`.

```tsx
import { useState } from 'react';

function Counter() {
  // [The Memory, The Way to Change It] = useState(Initial Value)
  const [count, setCount] = useState(0); 

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```

**Use `useState` for:**
-   Is this menu open or closed? (`true`/`false`)
-   What did the user type in this input? (`"hello"`)
-   What is the current number? (`42`)

---

## 2. The Specialist: What is `useSWR`?

`useState` is great for memory, but it's bad at **fetching data** from the outside world (like a server or database).

If you want to load data from a server using just `useState`, you have to do a lot of manual work:
1.  Create a state for `data` (to hold the result).
2.  Create a state for `isLoading` (to show a spinner).
3.  Create a state for `error` (if it fails).
4.  Write a `useEffect` (a side-effect hook) to actually run the fetch command when the component mounts.
5.  Handle "race conditions" (what if I click "Load" twice?).

This is officially "The Hard Way."

**`useSWR` is a library that does all of that for you.** It stands for "Stale-While-Revalidate." It's a strategy that says:
> *"Show the user the cached data we have (Stale), while simultaneously checking the server for updates (Revalidate)."*

### Comparing the Code

#### The Hard Way (useState + useEffect)
This is what we had to do before `useSWR`:

```tsx
function Profile() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Manually track loading

  useEffect(() => {
    setIsLoading(true);
    fetch('/api/user')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      });
  }, []); // <--- Easy to mess up this dependency array!!

  if (isLoading) return <div>Loading...</div>;
  return <div>Hello {data.name}</div>;
}
```

#### The Easy Way (useSWR)
This is what we switched to:

```tsx
import useSWR from 'swr';

function Profile() {
  // One line does it all.
  // It handles loading, data, caching, and updating automatically.
  const { data, isLoading } = useSWR('/api/user', fetcher);

  if (isLoading) return <div>Loading...</div>;
  return <div>Hello {data.name}</div>;
}
```

## 3. Why we switched in `QuotesFeed`

In your `QuotesFeed` component, we were managing a lot of state manually:
-   `quotes` (the list)
-   `isLoading`
-   `isLoadingMore`
-   `hasMore` (for pagination)

We were essentially rebuilding a complex data-fetching engine from scratch using `useState`.

By switching to `useSWR` (specifically `useSWRInfinite` for the "Load More" feature), we got:
1.  **Caching**: If you search for "Philosophy", then "Funny", then go back to "Philosophy", `useSWR` remembers the result instantly. The old `useState` version would have shown a loading spinner again.
2.  **Simplicity**: We deleted a lot of manual "if loading then..." logic.
3.  **Correctness**: `useSWR` handles tricky edge cases (like network requests arriving out of order) that are very hard to fix with just `useState`.

## Summary

| Feature | `useState` | `useSWR` |
| :--- | :--- | :--- |
| **Primary Job** | Remembering local UI state (inputs, toggles) | Fetching & syncing remote data (API, Database) |
| **Where data lives** | In the browser's memory | On a Server (synced to browser) |
| **Caching** | No (lost on refresh/unmount) | Yes (smart caching & deduplication) |
| **Loading States** | You must build them manually | Built-in |
| **Best For** | "Is the dropdown open?" | "Get me the latest quotes" |
