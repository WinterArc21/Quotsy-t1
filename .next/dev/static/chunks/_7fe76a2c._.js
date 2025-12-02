(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/checkbox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Checkbox({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "checkbox",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "checkbox-indicator",
            className: "flex items-center justify-center text-current transition-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                className: "size-3.5"
            }, void 0, false, {
                fileName: "[project]/components/ui/checkbox.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/checkbox.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/checkbox.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Checkbox;
;
var _c;
__turbopack_context__.k.register(_c, "Checkbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GENRES",
    ()=>GENRES
]);
const GENRES = [
    "Philosophy",
    "Love",
    "Success",
    "Wisdom",
    "Motivation",
    "Happiness",
    "Creativity",
    "Leadership",
    "Courage",
    "Life",
    "Change",
    "Friendship",
    "Time"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/data:f5a981 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40bf9b4ecbd9040d371bdd2dd91499106e67eb0b9d":"subscribeAction"},"app/actions.tsx",""] */ __turbopack_context__.s([
    "subscribeAction",
    ()=>subscribeAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var subscribeAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40bf9b4ecbd9040d371bdd2dd91499106e67eb0b9d", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "subscribeAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL2xpYi9zdXBhYmFzZS9zZXJ2ZXJcIlxyXG5pbXBvcnQgeyBSZXNlbmQgfSBmcm9tIFwicmVzZW5kXCJcclxuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN1YnNjcmliZUFjdGlvbihmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZ1xyXG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZ1xyXG4gIGNvbnN0IGdlbnJlc1JhdyA9IGZvcm1EYXRhLmdldChcImdlbnJlc1wiKSBhcyBzdHJpbmdcclxuXHJcbiAgaWYgKCFlbWFpbCkge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRW1haWwgaXMgcmVxdWlyZWRcIiB9XHJcbiAgfVxyXG5cclxuICBsZXQgZ2VucmVzOiBzdHJpbmdbXVxyXG4gIHRyeSB7XHJcbiAgICBnZW5yZXMgPSBKU09OLnBhcnNlKGdlbnJlc1JhdylcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkludmFsaWQgZ2VucmVzIHNlbGVjdGlvblwiIH1cclxuICB9XHJcblxyXG4gIGlmIChnZW5yZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJQbGVhc2Ugc2VsZWN0IGF0IGxlYXN0IG9uZSBnZW5yZVwiIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcclxuXHJcbiAgLy8gQ2hlY2sgaWYgYWxyZWFkeSBzdWJzY3JpYmVkXHJcbiAgY29uc3QgeyBkYXRhOiBleGlzdGluZyB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcInN1YnNjcmliZXJzXCIpLnNlbGVjdChcImlkXCIpLmVxKFwiZW1haWxcIiwgZW1haWwpLm1heWJlU2luZ2xlKClcclxuXHJcbiAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAvLyBVcGRhdGUgZXhpc3Rpbmcgc3Vic2NyaXB0aW9uXHJcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwic3Vic2NyaWJlcnNcIikudXBkYXRlKHsgbmFtZSwgZ2VucmVzLCB2ZXJpZmllZDogdHJ1ZSB9KS5lcShcImVtYWlsXCIsIGVtYWlsKVxyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJGYWlsZWQgdG8gdXBkYXRlIHN1YnNjcmlwdGlvblwiIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIllvdXIgc3Vic2NyaXB0aW9uIGhhcyBiZWVuIHVwZGF0ZWQhXCIgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIG5ldyBzdWJzY3JpYmVyXHJcbiAgY29uc3QgeyBlcnJvcjogaW5zZXJ0RXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJzdWJzY3JpYmVyc1wiKS5pbnNlcnQoeyBlbWFpbCwgbmFtZSwgZ2VucmVzLCB2ZXJpZmllZDogdHJ1ZSB9KVxyXG5cclxuICBpZiAoaW5zZXJ0RXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkZhaWxlZCB0byBzdWJzY3JpYmUuIFBsZWFzZSB0cnkgYWdhaW4uXCIgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHByb2Nlc3MuZW52LlJFU0VORF9BUElfS0VZKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNlbmQgPSBuZXcgUmVzZW5kKHByb2Nlc3MuZW52LlJFU0VORF9BUElfS0VZKVxyXG4gICAgICBhd2FpdCByZXNlbmQuZW1haWxzLnNlbmQoe1xyXG4gICAgICAgIGZyb206IFwiUXVvdHN5IDxvbmJvYXJkaW5nQHJlc2VuZC5kZXY+XCIsXHJcbiAgICAgICAgdG86IGVtYWlsLFxyXG4gICAgICAgIHN1YmplY3Q6IFwiV2VsY29tZSB0byBRdW90c3kgLSBZb3VyIERhaWx5IFF1b3RlIEpvdXJuZXkgQmVnaW5zIVwiLFxyXG4gICAgICAgIGh0bWw6IGBcclxuICAgICAgICAgIDwhRE9DVFlQRSBodG1sPlxyXG4gICAgICAgICAgPGh0bWw+XHJcbiAgICAgICAgICA8aGVhZD5cclxuICAgICAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCI+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCI+XHJcbiAgICAgICAgICA8L2hlYWQ+XHJcbiAgICAgICAgICA8Ym9keSBzdHlsZT1cImZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBzZXJpZjsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgY29sb3I6ICMxNzE3MTc7IG1hcmdpbjogMDsgcGFkZGluZzogNDBweCAyMHB4O1wiPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWF4LXdpZHRoOiA1MDBweDsgbWFyZ2luOiAwIGF1dG87XCI+XHJcbiAgICAgICAgICAgICAgPGgxIHN0eWxlPVwiZm9udC1zaXplOiAyOHB4OyBmb250LXdlaWdodDogYm9sZDsgbWFyZ2luLWJvdHRvbTogMjRweDsgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcIj5cclxuICAgICAgICAgICAgICAgIFdlbGNvbWUgdG8gUXVvdHN5XHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDsgbGluZS1oZWlnaHQ6IDEuNjsgY29sb3I6ICM1MjUyNTI7IG1hcmdpbi1ib3R0b206IDIwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICAke25hbWUgPyBgSGkgJHtuYW1lfSxgIDogXCJIZWxsbyxcIn1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6IDE2cHg7IGxpbmUtaGVpZ2h0OiAxLjY7IGNvbG9yOiAjNTI1MjUyOyBtYXJnaW4tYm90dG9tOiAyMHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgVGhhbmsgeW91IGZvciBzdWJzY3JpYmluZyB0byBRdW90c3khIFlvdSdsbCBub3cgcmVjZWl2ZSBkYWlseSBxdW90ZXMgZnJvbSB0aGVzZSBnZW5yZXM6XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4OyBsaW5lLWhlaWdodDogMS42OyBjb2xvcjogIzE3MTcxNzsgZm9udC13ZWlnaHQ6IDUwMDsgbWFyZ2luLWJvdHRvbTogMjRweDtcIj5cclxuICAgICAgICAgICAgICAgICR7Z2VucmVzLmpvaW4oXCIg4oCiIFwiKX1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7IGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzE3MTcxNzsgcGFkZGluZzogMjBweDsgbWFyZ2luOiAyNHB4IDA7XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMThweDsgZm9udC1zdHlsZTogaXRhbGljOyBsaW5lLWhlaWdodDogMS41OyBjb2xvcjogIzE3MTcxNzsgbWFyZ2luOiAwIDAgMTJweCAwO1wiPlxyXG4gICAgICAgICAgICAgICAgICBcIlRoZSBqb3VybmV5IG9mIGEgdGhvdXNhbmQgbWlsZXMgYmVnaW5zIHdpdGggb25lIHN0ZXAuXCJcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzUyNTI1MjsgbWFyZ2luOiAwO1wiPlxyXG4gICAgICAgICAgICAgICAgICDigJQgTGFvIFR6dVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4OyBsaW5lLWhlaWdodDogMS42OyBjb2xvcjogIzUyNTI1MjsgbWFyZ2luLWJvdHRvbTogMjBweDtcIj5cclxuICAgICAgICAgICAgICAgIFlvdXIgZmlyc3QgZGFpbHkgcXVvdGUgd2lsbCBhcnJpdmUgdG9tb3Jyb3cgbW9ybmluZy4gVW50aWwgdGhlbiwgZXhwbG9yZSBvdXIgZnVsbCBjb2xsZWN0aW9uIGF0IHF1b3RzeS5hcHAuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOiAxNHB4OyBjb2xvcjogI2EzYTNhMzsgbWFyZ2luLXRvcDogNDBweDsgcGFkZGluZy10b3A6IDIwcHg7IGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTVlNWU1O1wiPlxyXG4gICAgICAgICAgICAgICAgWW91J3JlIHJlY2VpdmluZyB0aGlzIGJlY2F1c2UgeW91IHN1YnNjcmliZWQgdG8gUXVvdHN5LiBcclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgc3R5bGU9XCJjb2xvcjogIzUyNTI1MjtcIj5VbnN1YnNjcmliZTwvYT5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9ib2R5PlxyXG4gICAgICAgICAgPC9odG1sPlxyXG4gICAgICAgIGAsXHJcbiAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlbWFpbEVycm9yKSB7XHJcbiAgICAgIC8vIExvZyBlcnJvciBidXQgZG9uJ3QgZmFpbCB0aGUgc3Vic2NyaXB0aW9uXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCB3ZWxjb21lIGVtYWlsOlwiLCBlbWFpbEVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICBtZXNzYWdlOiBcIldlbGNvbWUgdG8gUXVvdHN5ISBDaGVjayB5b3VyIGluYm94IGZvciBhIGNvbmZpcm1hdGlvbiBlbWFpbC5cIixcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJtaXRRdW90ZUFjdGlvbihmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCB0ZXh0ID0gZm9ybURhdGEuZ2V0KFwidGV4dFwiKSBhcyBzdHJpbmdcclxuICBjb25zdCBhdXRob3IgPSAoZm9ybURhdGEuZ2V0KFwiYXV0aG9yXCIpIGFzIHN0cmluZykgfHwgXCJBbm9ueW1vdXNcIlxyXG4gIGNvbnN0IGdlbnJlID0gZm9ybURhdGEuZ2V0KFwiZ2VucmVcIikgYXMgc3RyaW5nXHJcbiAgY29uc3Qgc3VibWl0dGVyRW1haWwgPSBmb3JtRGF0YS5nZXQoXCJzdWJtaXR0ZXJFbWFpbFwiKSBhcyBzdHJpbmcgfCBudWxsXHJcblxyXG4gIGlmICghdGV4dCB8fCB0ZXh0LnRyaW0oKS5sZW5ndGggPCAxMCkge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiUXVvdGUgbXVzdCBiZSBhdCBsZWFzdCAxMCBjaGFyYWN0ZXJzIGxvbmdcIiB9XHJcbiAgfVxyXG5cclxuICBpZiAoIWdlbnJlKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJQbGVhc2Ugc2VsZWN0IGEgZ2VucmVcIiB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXHJcblxyXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJwZW5kaW5nX3F1b3Rlc1wiKS5pbnNlcnQoe1xyXG4gICAgdGV4dDogdGV4dC50cmltKCksXHJcbiAgICBhdXRob3I6IGF1dGhvci50cmltKCkgfHwgXCJBbm9ueW1vdXNcIixcclxuICAgIGdlbnJlLFxyXG4gICAgc3VibWl0dGVyX2VtYWlsOiBzdWJtaXR0ZXJFbWFpbCB8fCBudWxsLFxyXG4gIH0pXHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzdWJtaXQgcXVvdGU6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRmFpbGVkIHRvIHN1Ym1pdCBxdW90ZS4gUGxlYXNlIHRyeSBhZ2Fpbi5cIiB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc3VjY2VzczogdHJ1ZSxcclxuICAgIG1lc3NhZ2U6IFwiVGhhbmsgeW91ISBZb3VyIHF1b3RlIGhhcyBiZWVuIHN1Ym1pdHRlZCBmb3IgcmV2aWV3LlwiLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkbWluTG9naW5BY3Rpb24ocGFzc3dvcmQ6IHN0cmluZykge1xyXG4gIGNvbnN0IGFkbWluUGFzc3dvcmQgPSBwcm9jZXNzLmVudi5BRE1JTl9QQVNTV09SRFxyXG5cclxuICBpZiAoIWFkbWluUGFzc3dvcmQpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkFkbWluIGFjY2VzcyBub3QgY29uZmlndXJlZFwiIH1cclxuICB9XHJcblxyXG4gIGlmIChwYXNzd29yZCAhPT0gYWRtaW5QYXNzd29yZCkge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiSW52YWxpZCBwYXNzd29yZFwiIH1cclxuICB9XHJcblxyXG4gIC8vIFNldCBhZG1pbiBzZXNzaW9uIGNvb2tpZSAoZXhwaXJlcyBpbiAyNCBob3VycylcclxuICBjb25zdCBjb29raWVTdG9yZSA9IGF3YWl0IGNvb2tpZXMoKVxyXG4gIGNvb2tpZVN0b3JlLnNldChcImFkbWluX3Nlc3Npb25cIiwgXCJhdXRoZW50aWNhdGVkXCIsIHtcclxuICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXHJcbiAgICBzYW1lU2l0ZTogXCJzdHJpY3RcIixcclxuICAgIG1heEFnZTogNjAgKiA2MCAqIDI0LCAvLyAyNCBob3Vyc1xyXG4gIH0pXHJcblxyXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiV2VsY29tZSwgYWRtaW4hXCIgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRtaW5Mb2dvdXRBY3Rpb24oKSB7XHJcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKClcclxuICBjb29raWVTdG9yZS5kZWxldGUoXCJhZG1pbl9zZXNzaW9uXCIpXHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0FkbWluU2Vzc2lvbigpIHtcclxuICBjb25zdCBjb29raWVTdG9yZSA9IGF3YWl0IGNvb2tpZXMoKVxyXG4gIGNvbnN0IHNlc3Npb24gPSBjb29raWVTdG9yZS5nZXQoXCJhZG1pbl9zZXNzaW9uXCIpXHJcbiAgcmV0dXJuIHNlc3Npb24/LnZhbHVlID09PSBcImF1dGhlbnRpY2F0ZWRcIlxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBwcm92ZVF1b3RlQWN0aW9uKGlkOiBudW1iZXIsIGdlbnJlOiBzdHJpbmcpIHtcclxuICBjb25zdCBpc0FkbWluID0gYXdhaXQgY2hlY2tBZG1pblNlc3Npb24oKVxyXG4gIGlmICghaXNBZG1pbikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG5cclxuICAvLyBHZXQgdGhlIHBlbmRpbmcgcXVvdGVcclxuICBjb25zdCB7IGRhdGE6IHBlbmRpbmdRdW90ZSwgZXJyb3I6IGZldGNoRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInBlbmRpbmdfcXVvdGVzXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwiaWRcIiwgaWQpXHJcbiAgICAuc2luZ2xlKClcclxuXHJcbiAgaWYgKGZldGNoRXJyb3IgfHwgIXBlbmRpbmdRdW90ZSkge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiUXVvdGUgbm90IGZvdW5kXCIgfVxyXG4gIH1cclxuXHJcbiAgLy8gSW5zZXJ0IGludG8gcXVvdGVzIHRhYmxlXHJcbiAgY29uc3QgeyBlcnJvcjogaW5zZXJ0RXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJxdW90ZXNcIikuaW5zZXJ0KHtcclxuICAgIHRleHQ6IHBlbmRpbmdRdW90ZS50ZXh0LFxyXG4gICAgYXV0aG9yOiBwZW5kaW5nUXVvdGUuYXV0aG9yLFxyXG4gICAgZ2VucmU6IGdlbnJlLCAvLyBVc2UgdGhlIHBvdGVudGlhbGx5IHVwZGF0ZWQgZ2VucmVcclxuICB9KVxyXG5cclxuICBpZiAoaW5zZXJ0RXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gYXBwcm92ZSBxdW90ZTpcIiwgaW5zZXJ0RXJyb3IpXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJGYWlsZWQgdG8gYXBwcm92ZSBxdW90ZVwiIH1cclxuICB9XHJcblxyXG4gIC8vIFVwZGF0ZSBwZW5kaW5nIHF1b3RlIHN0YXR1c1xyXG4gIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJwZW5kaW5nX3F1b3Rlc1wiKVxyXG4gICAgLnVwZGF0ZSh7IHN0YXR1czogXCJhcHByb3ZlZFwiLCBnZW5yZSwgcmV2aWV3ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxyXG4gICAgLmVxKFwiaWRcIiwgaWQpXHJcblxyXG4gIGlmICh1cGRhdGVFcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byB1cGRhdGUgcGVuZGluZyBxdW90ZSBzdGF0dXM6XCIsIHVwZGF0ZUVycm9yKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJRdW90ZSBhcHByb3ZlZCBhbmQgYWRkZWQgdG8gY29sbGVjdGlvbiFcIiB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWplY3RRdW90ZUFjdGlvbihpZDogbnVtYmVyKSB7XHJcbiAgY29uc3QgaXNBZG1pbiA9IGF3YWl0IGNoZWNrQWRtaW5TZXNzaW9uKClcclxuICBpZiAoIWlzQWRtaW4pIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcclxuXHJcbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwicGVuZGluZ19xdW90ZXNcIilcclxuICAgIC51cGRhdGUoeyBzdGF0dXM6IFwicmVqZWN0ZWRcIiwgcmV2aWV3ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxyXG4gICAgLmVxKFwiaWRcIiwgaWQpXHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRmFpbGVkIHRvIHJlamVjdCBxdW90ZVwiIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiUXVvdGUgcmVqZWN0ZWRcIiB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXN0b3JlUXVvdGVBY3Rpb24oaWQ6IG51bWJlcikge1xyXG4gIGNvbnN0IGlzQWRtaW4gPSBhd2FpdCBjaGVja0FkbWluU2Vzc2lvbigpXHJcbiAgaWYgKCFpc0FkbWluKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXHJcblxyXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJwZW5kaW5nX3F1b3Rlc1wiKS51cGRhdGUoeyBzdGF0dXM6IFwicGVuZGluZ1wiLCByZXZpZXdlZF9hdDogbnVsbCB9KS5lcShcImlkXCIsIGlkKVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkZhaWxlZCB0byByZXN0b3JlIHF1b3RlXCIgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJRdW90ZSByZXN0b3JlZCB0byBwZW5kaW5nXCIgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGVuZGluZ1F1b3Rlc0FjdGlvbihzdGF0dXM/OiBzdHJpbmcpIHtcclxuICBjb25zdCBpc0FkbWluID0gYXdhaXQgY2hlY2tBZG1pblNlc3Npb24oKVxyXG4gIGlmICghaXNBZG1pbikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIsIGRhdGE6IFtdIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcclxuXHJcbiAgbGV0IHF1ZXJ5ID0gc3VwYWJhc2UuZnJvbShcInBlbmRpbmdfcXVvdGVzXCIpLnNlbGVjdChcIipcIikub3JkZXIoXCJzdWJtaXR0ZWRfYXRcIiwgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXHJcblxyXG4gIGlmIChzdGF0dXMgJiYgc3RhdHVzICE9PSBcImFsbFwiKSB7XHJcbiAgICBxdWVyeSA9IHF1ZXJ5LmVxKFwic3RhdHVzXCIsIHN0YXR1cylcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHF1ZXJ5XHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRmFpbGVkIHRvIGZldGNoIHF1b3Rlc1wiLCBkYXRhOiBbXSB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBkYXRhIHx8IFtdIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IndSQU1zQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/subscribe-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubscribeForm",
    ()=>SubscribeForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$f5a981__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:f5a981 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function SubscribeForm() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedGenres, setSelectedGenres] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleGenre = (genre)=>{
        setSelectedGenres((prev)=>prev.includes(genre) ? prev.filter((g)=>g !== genre) : [
                ...prev,
                genre
            ]);
    };
    const selectAll = ()=>{
        setSelectedGenres([
            ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GENRES"]
        ]);
    };
    const clearAll = ()=>{
        setSelectedGenres([]);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (selectedGenres.length === 0) {
            setMessage({
                type: "error",
                text: "Please select at least one genre."
            });
            return;
        }
        setIsSubmitting(true);
        setMessage(null);
        const formData = new FormData();
        formData.append("email", email);
        formData.append("name", name);
        formData.append("genres", JSON.stringify(selectedGenres));
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$f5a981__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["subscribeAction"])(formData);
        if (result.success) {
            setMessage({
                type: "success",
                text: result.message
            });
            setEmail("");
            setName("");
            setSelectedGenres([]);
        } else {
            setMessage({
                type: "error",
                text: result.message
            });
        }
        setIsSubmitting(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "name",
                                className: "text-sm font-medium",
                                children: "Name (optional)"
                            }, void 0, false, {
                                fileName: "[project]/components/subscribe-form.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                id: "name",
                                type: "text",
                                placeholder: "Your name",
                                value: name,
                                onChange: (e)=>setName(e.target.value),
                                className: "h-11 bg-background"
                            }, void 0, false, {
                                fileName: "[project]/components/subscribe-form.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/subscribe-form.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "email",
                                className: "text-sm font-medium",
                                children: "Email address"
                            }, void 0, false, {
                                fileName: "[project]/components/subscribe-form.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                id: "email",
                                type: "email",
                                placeholder: "you@example.com",
                                value: email,
                                onChange: (e)=>setEmail(e.target.value),
                                required: true,
                                className: "h-11 bg-background"
                            }, void 0, false, {
                                fileName: "[project]/components/subscribe-form.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/subscribe-form.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/subscribe-form.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                className: "text-sm font-medium",
                                children: "Choose your genres"
                            }, void 0, false, {
                                fileName: "[project]/components/subscribe-form.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: selectAll,
                                        className: "text-xs text-muted-foreground hover:text-foreground transition-colors",
                                        children: "Select all"
                                    }, void 0, false, {
                                        fileName: "[project]/components/subscribe-form.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground",
                                        children: "·"
                                    }, void 0, false, {
                                        fileName: "[project]/components/subscribe-form.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: clearAll,
                                        className: "text-xs text-muted-foreground hover:text-foreground transition-colors",
                                        children: "Clear"
                                    }, void 0, false, {
                                        fileName: "[project]/components/subscribe-form.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/subscribe-form.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/subscribe-form.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2 sm:grid-cols-3",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GENRES"].map((genre)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: `flex cursor-pointer items-center gap-2.5 rounded-lg border px-3 py-2.5 transition-all ${selectedGenres.includes(genre) ? "border-foreground bg-secondary" : "border-border hover:border-muted-foreground bg-background"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                        checked: selectedGenres.includes(genre),
                                        onCheckedChange: ()=>toggleGenre(genre),
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/subscribe-form.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: genre
                                    }, void 0, false, {
                                        fileName: "[project]/components/subscribe-form.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, genre, true, {
                                fileName: "[project]/components/subscribe-form.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/subscribe-form.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    selectedGenres.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground",
                        children: [
                            selectedGenres.length,
                            " genre",
                            selectedGenres.length !== 1 ? "s" : "",
                            " selected"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/subscribe-form.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/subscribe-form.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex items-center gap-2 rounded-lg p-4 text-sm ${message.type === "success" ? "bg-secondary border border-foreground/20 text-foreground" : "bg-destructive/10 border border-destructive/20 text-destructive"}`,
                children: [
                    message.type === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4 shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/components/subscribe-form.tsx",
                        lineNumber: 153,
                        columnNumber: 42
                    }, this),
                    message.text
                ]
            }, void 0, true, {
                fileName: "[project]/components/subscribe-form.tsx",
                lineNumber: 146,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "submit",
                size: "lg",
                className: "w-full h-12",
                disabled: isSubmitting,
                children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "mr-2 h-4 w-4 animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/components/subscribe-form.tsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, this),
                        "Subscribing..."
                    ]
                }, void 0, true) : "Subscribe to Daily Quotes"
            }, void 0, false, {
                fileName: "[project]/components/subscribe-form.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-xs text-muted-foreground",
                children: "No spam, ever. Unsubscribe anytime."
            }, void 0, false, {
                fileName: "[project]/components/subscribe-form.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/subscribe-form.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(SubscribeForm, "KKxCpa6xBP+rMxh1wUgtN8Dd+Ac=");
_c = SubscribeForm;
var _c;
__turbopack_context__.k.register(_c, "SubscribeForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_7fe76a2c._.js.map