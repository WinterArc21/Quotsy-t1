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
"[project]/app/data:9c5fb9 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40bf9b4ecbd9040d371bdd2dd91499106e67eb0b9d":"subscribeAction"},"app/actions.tsx",""] */ __turbopack_context__.s([
    "subscribeAction",
    ()=>subscribeAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var subscribeAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40bf9b4ecbd9040d371bdd2dd91499106e67eb0b9d", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "subscribeAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL2xpYi9zdXBhYmFzZS9zZXJ2ZXJcIlxyXG5pbXBvcnQgeyBSZXNlbmQgfSBmcm9tIFwicmVzZW5kXCJcclxuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN1YnNjcmliZUFjdGlvbihmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZ1xyXG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZ1xyXG4gIGNvbnN0IGdlbnJlc1JhdyA9IGZvcm1EYXRhLmdldChcImdlbnJlc1wiKSBhcyBzdHJpbmdcclxuXHJcbiAgaWYgKCFlbWFpbCkge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRW1haWwgaXMgcmVxdWlyZWRcIiB9XHJcbiAgfVxyXG5cclxuICBsZXQgZ2VucmVzOiBzdHJpbmdbXVxyXG4gIHRyeSB7XHJcbiAgICBnZW5yZXMgPSBKU09OLnBhcnNlKGdlbnJlc1JhdylcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkludmFsaWQgZ2VucmVzIHNlbGVjdGlvblwiIH1cclxuICB9XHJcblxyXG4gIGlmIChnZW5yZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJQbGVhc2Ugc2VsZWN0IGF0IGxlYXN0IG9uZSBnZW5yZVwiIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcclxuXHJcbiAgaWYgKCFzdXBhYmFzZSkge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiU2VydmljZSB1bmF2YWlsYWJsZVwiIH1cclxuICB9XHJcblxyXG4gIC8vIENoZWNrIGlmIGFscmVhZHkgc3Vic2NyaWJlZFxyXG4gIGNvbnN0IHsgZGF0YTogZXhpc3RpbmcgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJzdWJzY3JpYmVyc1wiKS5zZWxlY3QoXCJpZFwiKS5lcShcImVtYWlsXCIsIGVtYWlsKS5tYXliZVNpbmdsZSgpXHJcblxyXG4gIGlmIChleGlzdGluZykge1xyXG4gICAgLy8gVXBkYXRlIGV4aXN0aW5nIHN1YnNjcmlwdGlvblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcInN1YnNjcmliZXJzXCIpLnVwZGF0ZSh7IG5hbWUsIGdlbnJlcywgdmVyaWZpZWQ6IHRydWUgfSkuZXEoXCJlbWFpbFwiLCBlbWFpbClcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRmFpbGVkIHRvIHVwZGF0ZSBzdWJzY3JpcHRpb25cIiB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJZb3VyIHN1YnNjcmlwdGlvbiBoYXMgYmVlbiB1cGRhdGVkIVwiIH1cclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBuZXcgc3Vic2NyaWJlclxyXG4gIGNvbnN0IHsgZXJyb3I6IGluc2VydEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwic3Vic2NyaWJlcnNcIikuaW5zZXJ0KHsgZW1haWwsIG5hbWUsIGdlbnJlcywgdmVyaWZpZWQ6IHRydWUgfSlcclxuXHJcbiAgaWYgKGluc2VydEVycm9yKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJGYWlsZWQgdG8gc3Vic2NyaWJlLiBQbGVhc2UgdHJ5IGFnYWluLlwiIH1cclxuICB9XHJcblxyXG4gIGlmIChwcm9jZXNzLmVudi5SRVNFTkRfQVBJX0tFWSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzZW5kID0gbmV3IFJlc2VuZChwcm9jZXNzLmVudi5SRVNFTkRfQVBJX0tFWSlcclxuICAgICAgYXdhaXQgcmVzZW5kLmVtYWlscy5zZW5kKHtcclxuICAgICAgICBmcm9tOiBcIlF1b3RzeSA8b25ib2FyZGluZ0ByZXNlbmQuZGV2PlwiLFxyXG4gICAgICAgIHRvOiBlbWFpbCxcclxuICAgICAgICBzdWJqZWN0OiBcIldlbGNvbWUgdG8gUXVvdHN5IC0gWW91ciBEYWlseSBRdW90ZSBKb3VybmV5IEJlZ2lucyFcIixcclxuICAgICAgICBodG1sOiBgXHJcbiAgICAgICAgICA8IURPQ1RZUEUgaHRtbD5cclxuICAgICAgICAgIDxodG1sPlxyXG4gICAgICAgICAgPGhlYWQ+XHJcbiAgICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiPlxyXG4gICAgICAgICAgPC9oZWFkPlxyXG4gICAgICAgICAgPGJvZHkgc3R5bGU9XCJmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7IGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IGNvbG9yOiAjMTcxNzE3OyBtYXJnaW46IDA7IHBhZGRpbmc6IDQwcHggMjBweDtcIj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cIm1heC13aWR0aDogNTAwcHg7IG1hcmdpbjogMCBhdXRvO1wiPlxyXG4gICAgICAgICAgICAgIDxoMSBzdHlsZT1cImZvbnQtc2l6ZTogMjhweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IG1hcmdpbi1ib3R0b206IDI0cHg7IGxldHRlci1zcGFjaW5nOiAtMC41cHg7XCI+XHJcbiAgICAgICAgICAgICAgICBXZWxjb21lIHRvIFF1b3RzeVxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6IDE2cHg7IGxpbmUtaGVpZ2h0OiAxLjY7IGNvbG9yOiAjNTI1MjUyOyBtYXJnaW4tYm90dG9tOiAyMHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgJHtuYW1lID8gYEhpICR7bmFtZX0sYCA6IFwiSGVsbG8sXCJ9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4OyBsaW5lLWhlaWdodDogMS42OyBjb2xvcjogIzUyNTI1MjsgbWFyZ2luLWJvdHRvbTogMjBweDtcIj5cclxuICAgICAgICAgICAgICAgIFRoYW5rIHlvdSBmb3Igc3Vic2NyaWJpbmcgdG8gUXVvdHN5ISBZb3UnbGwgbm93IHJlY2VpdmUgZGFpbHkgcXVvdGVzIGZyb20gdGhlc2UgZ2VucmVzOlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDsgbGluZS1oZWlnaHQ6IDEuNjsgY29sb3I6ICMxNzE3MTc7IGZvbnQtd2VpZ2h0OiA1MDA7IG1hcmdpbi1ib3R0b206IDI0cHg7XCI+XHJcbiAgICAgICAgICAgICAgICAke2dlbnJlcy5qb2luKFwiIOKAoiBcIil9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhOyBib3JkZXItbGVmdDogM3B4IHNvbGlkICMxNzE3MTc7IHBhZGRpbmc6IDIwcHg7IG1hcmdpbjogMjRweCAwO1wiPlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6IDE4cHg7IGZvbnQtc3R5bGU6IGl0YWxpYzsgbGluZS1oZWlnaHQ6IDEuNTsgY29sb3I6ICMxNzE3MTc7IG1hcmdpbjogMCAwIDEycHggMDtcIj5cclxuICAgICAgICAgICAgICAgICAgXCJUaGUgam91cm5leSBvZiBhIHRob3VzYW5kIG1pbGVzIGJlZ2lucyB3aXRoIG9uZSBzdGVwLlwiXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM1MjUyNTI7IG1hcmdpbjogMDtcIj5cclxuICAgICAgICAgICAgICAgICAg4oCUIExhbyBUenVcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDsgbGluZS1oZWlnaHQ6IDEuNjsgY29sb3I6ICM1MjUyNTI7IG1hcmdpbi1ib3R0b206IDIwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICBZb3VyIGZpcnN0IGRhaWx5IHF1b3RlIHdpbGwgYXJyaXZlIHRvbW9ycm93IG1vcm5pbmcuIFVudGlsIHRoZW4sIGV4cGxvcmUgb3VyIGZ1bGwgY29sbGVjdGlvbiBhdCBxdW90c3kuYXBwLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICNhM2EzYTM7IG1hcmdpbi10b3A6IDQwcHg7IHBhZGRpbmctdG9wOiAyMHB4OyBib3JkZXItdG9wOiAxcHggc29saWQgI2U1ZTVlNTtcIj5cclxuICAgICAgICAgICAgICAgIFlvdSdyZSByZWNlaXZpbmcgdGhpcyBiZWNhdXNlIHlvdSBzdWJzY3JpYmVkIHRvIFF1b3RzeS4gXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIHN0eWxlPVwiY29sb3I6ICM1MjUyNTI7XCI+VW5zdWJzY3JpYmU8L2E+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYm9keT5cclxuICAgICAgICAgIDwvaHRtbD5cclxuICAgICAgICBgLFxyXG4gICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZW1haWxFcnJvcikge1xyXG4gICAgICAvLyBMb2cgZXJyb3IgYnV0IGRvbid0IGZhaWwgdGhlIHN1YnNjcmlwdGlvblxyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgd2VsY29tZSBlbWFpbDpcIiwgZW1haWxFcnJvcilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgbWVzc2FnZTogXCJXZWxjb21lIHRvIFF1b3RzeSEgQ2hlY2sgeW91ciBpbmJveCBmb3IgYSBjb25maXJtYXRpb24gZW1haWwuXCIsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0UXVvdGVBY3Rpb24oZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgdGV4dCA9IGZvcm1EYXRhLmdldChcInRleHRcIikgYXMgc3RyaW5nXHJcbiAgY29uc3QgYXV0aG9yID0gKGZvcm1EYXRhLmdldChcImF1dGhvclwiKSBhcyBzdHJpbmcpIHx8IFwiQW5vbnltb3VzXCJcclxuICBjb25zdCBnZW5yZSA9IGZvcm1EYXRhLmdldChcImdlbnJlXCIpIGFzIHN0cmluZ1xyXG4gIGNvbnN0IHN1Ym1pdHRlckVtYWlsID0gZm9ybURhdGEuZ2V0KFwic3VibWl0dGVyRW1haWxcIikgYXMgc3RyaW5nIHwgbnVsbFxyXG5cclxuICBpZiAoIXRleHQgfHwgdGV4dC50cmltKCkubGVuZ3RoIDwgMTApIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIlF1b3RlIG11c3QgYmUgYXQgbGVhc3QgMTAgY2hhcmFjdGVycyBsb25nXCIgfVxyXG4gIH1cclxuXHJcbiAgaWYgKCFnZW5yZSkge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiUGxlYXNlIHNlbGVjdCBhIGdlbnJlXCIgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG5cclxuICBpZiAoIXN1cGFiYXNlKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJTZXJ2aWNlIHVuYXZhaWxhYmxlXCIgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcInBlbmRpbmdfcXVvdGVzXCIpLmluc2VydCh7XHJcbiAgICB0ZXh0OiB0ZXh0LnRyaW0oKSxcclxuICAgIGF1dGhvcjogYXV0aG9yLnRyaW0oKSB8fCBcIkFub255bW91c1wiLFxyXG4gICAgZ2VucmUsXHJcbiAgICBzdWJtaXR0ZXJfZW1haWw6IHN1Ym1pdHRlckVtYWlsIHx8IG51bGwsXHJcbiAgfSlcclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHN1Ym1pdCBxdW90ZTpcIiwgZXJyb3IpXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJGYWlsZWQgdG8gc3VibWl0IHF1b3RlLiBQbGVhc2UgdHJ5IGFnYWluLlwiIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgbWVzc2FnZTogXCJUaGFuayB5b3UhIFlvdXIgcXVvdGUgaGFzIGJlZW4gc3VibWl0dGVkIGZvciByZXZpZXcuXCIsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRtaW5Mb2dpbkFjdGlvbihwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgY29uc3QgYWRtaW5QYXNzd29yZCA9IHByb2Nlc3MuZW52LkFETUlOX1BBU1NXT1JEXHJcblxyXG4gIGlmICghYWRtaW5QYXNzd29yZCkge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiQWRtaW4gYWNjZXNzIG5vdCBjb25maWd1cmVkXCIgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHBhc3N3b3JkICE9PSBhZG1pblBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJJbnZhbGlkIHBhc3N3b3JkXCIgfVxyXG4gIH1cclxuXHJcbiAgLy8gU2V0IGFkbWluIHNlc3Npb24gY29va2llIChleHBpcmVzIGluIDI0IGhvdXJzKVxyXG4gIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpXHJcbiAgY29va2llU3RvcmUuc2V0KFwiYWRtaW5fc2Vzc2lvblwiLCBcImF1dGhlbnRpY2F0ZWRcIiwge1xyXG4gICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcclxuICAgIHNhbWVTaXRlOiBcInN0cmljdFwiLFxyXG4gICAgbWF4QWdlOiA2MCAqIDYwICogMjQsIC8vIDI0IGhvdXJzXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJXZWxjb21lLCBhZG1pbiFcIiB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZG1pbkxvZ291dEFjdGlvbigpIHtcclxuICBjb25zdCBjb29raWVTdG9yZSA9IGF3YWl0IGNvb2tpZXMoKVxyXG4gIGNvb2tpZVN0b3JlLmRlbGV0ZShcImFkbWluX3Nlc3Npb25cIilcclxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQWRtaW5TZXNzaW9uKCkge1xyXG4gIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpXHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGNvb2tpZVN0b3JlLmdldChcImFkbWluX3Nlc3Npb25cIilcclxuICByZXR1cm4gc2Vzc2lvbj8udmFsdWUgPT09IFwiYXV0aGVudGljYXRlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcHByb3ZlUXVvdGVBY3Rpb24oaWQ6IG51bWJlciwgZ2VucmU6IHN0cmluZykge1xyXG4gIGNvbnN0IGlzQWRtaW4gPSBhd2FpdCBjaGVja0FkbWluU2Vzc2lvbigpXHJcbiAgaWYgKCFpc0FkbWluKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXHJcblxyXG4gIGlmICghc3VwYWJhc2UpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIlNlcnZpY2UgdW5hdmFpbGFibGVcIiB9XHJcbiAgfVxyXG5cclxuICAvLyBHZXQgdGhlIHBlbmRpbmcgcXVvdGVcclxuICBjb25zdCB7IGRhdGE6IHBlbmRpbmdRdW90ZSwgZXJyb3I6IGZldGNoRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInBlbmRpbmdfcXVvdGVzXCIpXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLmVxKFwiaWRcIiwgaWQpXHJcbiAgICAuc2luZ2xlKClcclxuXHJcbiAgaWYgKGZldGNoRXJyb3IgfHwgIXBlbmRpbmdRdW90ZSkge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiUXVvdGUgbm90IGZvdW5kXCIgfVxyXG4gIH1cclxuXHJcbiAgLy8gSW5zZXJ0IGludG8gcXVvdGVzIHRhYmxlXHJcbiAgY29uc3QgeyBlcnJvcjogaW5zZXJ0RXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJxdW90ZXNcIikuaW5zZXJ0KHtcclxuICAgIHRleHQ6IHBlbmRpbmdRdW90ZS50ZXh0LFxyXG4gICAgYXV0aG9yOiBwZW5kaW5nUXVvdGUuYXV0aG9yLFxyXG4gICAgZ2VucmU6IGdlbnJlLCAvLyBVc2UgdGhlIHBvdGVudGlhbGx5IHVwZGF0ZWQgZ2VucmVcclxuICB9KVxyXG5cclxuICBpZiAoaW5zZXJ0RXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gYXBwcm92ZSBxdW90ZTpcIiwgaW5zZXJ0RXJyb3IpXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJGYWlsZWQgdG8gYXBwcm92ZSBxdW90ZVwiIH1cclxuICB9XHJcblxyXG4gIC8vIFVwZGF0ZSBwZW5kaW5nIHF1b3RlIHN0YXR1c1xyXG4gIGNvbnN0IHsgZXJyb3I6IHVwZGF0ZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJwZW5kaW5nX3F1b3Rlc1wiKVxyXG4gICAgLnVwZGF0ZSh7IHN0YXR1czogXCJhcHByb3ZlZFwiLCBnZW5yZSwgcmV2aWV3ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9KVxyXG4gICAgLmVxKFwiaWRcIiwgaWQpXHJcblxyXG4gIGlmICh1cGRhdGVFcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byB1cGRhdGUgcGVuZGluZyBxdW90ZSBzdGF0dXM6XCIsIHVwZGF0ZUVycm9yKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJRdW90ZSBhcHByb3ZlZCBhbmQgYWRkZWQgdG8gY29sbGVjdGlvbiFcIiB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWplY3RRdW90ZUFjdGlvbihpZDogbnVtYmVyKSB7XHJcbiAgY29uc3QgaXNBZG1pbiA9IGF3YWl0IGNoZWNrQWRtaW5TZXNzaW9uKClcclxuICBpZiAoIWlzQWRtaW4pIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcclxuXHJcbiAgaWYgKCFzdXBhYmFzZSkge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiU2VydmljZSB1bmF2YWlsYWJsZVwiIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbShcInBlbmRpbmdfcXVvdGVzXCIpXHJcbiAgICAudXBkYXRlKHsgc3RhdHVzOiBcInJlamVjdGVkXCIsIHJldmlld2VkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgfSlcclxuICAgIC5lcShcImlkXCIsIGlkKVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkZhaWxlZCB0byByZWplY3QgcXVvdGVcIiB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlF1b3RlIHJlamVjdGVkXCIgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzdG9yZVF1b3RlQWN0aW9uKGlkOiBudW1iZXIpIHtcclxuICBjb25zdCBpc0FkbWluID0gYXdhaXQgY2hlY2tBZG1pblNlc3Npb24oKVxyXG4gIGlmICghaXNBZG1pbikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG5cclxuICBpZiAoIXN1cGFiYXNlKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJTZXJ2aWNlIHVuYXZhaWxhYmxlXCIgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcInBlbmRpbmdfcXVvdGVzXCIpLnVwZGF0ZSh7IHN0YXR1czogXCJwZW5kaW5nXCIsIHJldmlld2VkX2F0OiBudWxsIH0pLmVxKFwiaWRcIiwgaWQpXHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRmFpbGVkIHRvIHJlc3RvcmUgcXVvdGVcIiB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBcIlF1b3RlIHJlc3RvcmVkIHRvIHBlbmRpbmdcIiB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQZW5kaW5nUXVvdGVzQWN0aW9uKHN0YXR1cz86IHN0cmluZykge1xyXG4gIGNvbnN0IGlzQWRtaW4gPSBhd2FpdCBjaGVja0FkbWluU2Vzc2lvbigpXHJcbiAgaWYgKCFpc0FkbWluKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiwgZGF0YTogW10gfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxyXG5cclxuICBpZiAoIXN1cGFiYXNlKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJTZXJ2aWNlIHVuYXZhaWxhYmxlXCIsIGRhdGE6IFtdIH1cclxuICB9XHJcblxyXG4gIGxldCBxdWVyeSA9IHN1cGFiYXNlLmZyb20oXCJwZW5kaW5nX3F1b3Rlc1wiKS5zZWxlY3QoXCIqXCIpLm9yZGVyKFwic3VibWl0dGVkX2F0XCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG5cclxuICBpZiAoc3RhdHVzICYmIHN0YXR1cyAhPT0gXCJhbGxcIikge1xyXG4gICAgcXVlcnkgPSBxdWVyeS5lcShcInN0YXR1c1wiLCBzdGF0dXMpXHJcbiAgfVxyXG5cclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBxdWVyeVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkZhaWxlZCB0byBmZXRjaCBxdW90ZXNcIiwgZGF0YTogW10gfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogZGF0YSB8fCBbXSB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ3UkFNc0IifQ==
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$9c5fb9__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:9c5fb9 [app-client] (ecmascript) <text/javascript>");
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
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$9c5fb9__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["subscribeAction"])(formData);
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

//# sourceMappingURL=_022dc35b._.js.map