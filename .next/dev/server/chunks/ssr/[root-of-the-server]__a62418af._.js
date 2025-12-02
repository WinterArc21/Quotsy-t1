module.exports = [
"[project]/lib/supabase/server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
;
;
async function createClient() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        return null;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            },
            setAll (cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options })=>cookieStore.set(name, value, options));
                } catch  {
                // The "setAll" method was called from a Server Component.
                // This can be ignored if you have middleware refreshing
                // user sessions.
                }
            }
        },
        auth: {
            persistSession: false,
            autoRefreshToken: false,
            detectSessionInUrl: false
        }
    });
}
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/app/actions.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"009f42ad3df8ac84bdbae8943dbc9ca44124d95acc":"checkAdminSession","00b2d0acd71d2327fb17885cb2bd9b188bb4c05956":"adminLogoutAction","4008833df78a5b0a2e42fcc2926b274b484a220a70":"adminLoginAction","4039688ede86a3f8915ec18530c3f53318f2a40c99":"submitQuoteAction","404f5da62a983e3880236a193cc85bfb14099048ca":"rejectQuoteAction","406c30fe2293bcaae309a5a445af13ab28b0319b50":"getPendingQuotesAction","4087ae79bed4ae7cb0020524e2e6b1921b84f57ae9":"restoreQuoteAction","40bf9b4ecbd9040d371bdd2dd91499106e67eb0b9d":"subscribeAction","60e1b276e59e9c33bbfbdb80035c975598b399ff0f":"approveQuoteAction"},"",""] */ __turbopack_context__.s([
    "adminLoginAction",
    ()=>adminLoginAction,
    "adminLogoutAction",
    ()=>adminLogoutAction,
    "approveQuoteAction",
    ()=>approveQuoteAction,
    "checkAdminSession",
    ()=>checkAdminSession,
    "getPendingQuotesAction",
    ()=>getPendingQuotesAction,
    "rejectQuoteAction",
    ()=>rejectQuoteAction,
    "restoreQuoteAction",
    ()=>restoreQuoteAction,
    "submitQuoteAction",
    ()=>submitQuoteAction,
    "subscribeAction",
    ()=>subscribeAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/resend/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function subscribeAction(formData) {
    const email = formData.get("email");
    const name = formData.get("name");
    const genresRaw = formData.get("genres");
    if (!email) {
        return {
            success: false,
            message: "Email is required"
        };
    }
    let genres;
    try {
        genres = JSON.parse(genresRaw);
    } catch  {
        return {
            success: false,
            message: "Invalid genres selection"
        };
    }
    if (genres.length === 0) {
        return {
            success: false,
            message: "Please select at least one genre"
        };
    }
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    if (!supabase) {
        return {
            success: false,
            message: "Service unavailable"
        };
    }
    // Check if already subscribed
    const { data: existing } = await supabase.from("subscribers").select("id").eq("email", email).maybeSingle();
    if (existing) {
        // Update existing subscription
        const { error } = await supabase.from("subscribers").update({
            name,
            genres,
            verified: true
        }).eq("email", email);
        if (error) {
            return {
                success: false,
                message: "Failed to update subscription"
            };
        }
        return {
            success: true,
            message: "Your subscription has been updated!"
        };
    }
    // Create new subscriber
    const { error: insertError } = await supabase.from("subscribers").insert({
        email,
        name,
        genres,
        verified: true
    });
    if (insertError) {
        return {
            success: false,
            message: "Failed to subscribe. Please try again."
        };
    }
    if (process.env.RESEND_API_KEY) {
        try {
            const resend = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resend"](process.env.RESEND_API_KEY);
            await resend.emails.send({
                from: "Quotsy <onboarding@resend.dev>",
                to: email,
                subject: "Welcome to Quotsy - Your Daily Quote Journey Begins!",
                html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: Georgia, serif; background-color: #ffffff; color: #171717; margin: 0; padding: 40px 20px;">
            <div style="max-width: 500px; margin: 0 auto;">
              <h1 style="font-size: 28px; font-weight: bold; margin-bottom: 24px; letter-spacing: -0.5px;">
                Welcome to Quotsy
              </h1>
              
              <p style="font-size: 16px; line-height: 1.6; color: #525252; margin-bottom: 20px;">
                ${name ? `Hi ${name},` : "Hello,"}
              </p>
              
              <p style="font-size: 16px; line-height: 1.6; color: #525252; margin-bottom: 20px;">
                Thank you for subscribing to Quotsy! You'll now receive daily quotes from these genres:
              </p>
              
              <p style="font-size: 16px; line-height: 1.6; color: #171717; font-weight: 500; margin-bottom: 24px;">
                ${genres.join(" • ")}
              </p>
              
              <div style="background-color: #fafafa; border-left: 3px solid #171717; padding: 20px; margin: 24px 0;">
                <p style="font-size: 18px; font-style: italic; line-height: 1.5; color: #171717; margin: 0 0 12px 0;">
                  "The journey of a thousand miles begins with one step."
                </p>
                <p style="font-size: 14px; color: #525252; margin: 0;">
                  — Lao Tzu
                </p>
              </div>
              
              <p style="font-size: 16px; line-height: 1.6; color: #525252; margin-bottom: 20px;">
                Your first daily quote will arrive tomorrow morning. Until then, explore our full collection at quotsy.app.
              </p>
              
              <p style="font-size: 14px; color: #a3a3a3; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
                You're receiving this because you subscribed to Quotsy. 
                <a href="#" style="color: #525252;">Unsubscribe</a>
              </p>
            </div>
          </body>
          </html>
        `
            });
        } catch (emailError) {
            // Log error but don't fail the subscription
            console.error("Failed to send welcome email:", emailError);
        }
    }
    return {
        success: true,
        message: "Welcome to Quotsy! Check your inbox for a confirmation email."
    };
}
async function submitQuoteAction(formData) {
    const text = formData.get("text");
    const author = formData.get("author") || "Anonymous";
    const genre = formData.get("genre");
    const submitterEmail = formData.get("submitterEmail");
    if (!text || text.trim().length < 10) {
        return {
            success: false,
            message: "Quote must be at least 10 characters long"
        };
    }
    if (!genre) {
        return {
            success: false,
            message: "Please select a genre"
        };
    }
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    if (!supabase) {
        return {
            success: false,
            message: "Service unavailable"
        };
    }
    const { error } = await supabase.from("pending_quotes").insert({
        text: text.trim(),
        author: author.trim() || "Anonymous",
        genre,
        submitter_email: submitterEmail || null
    });
    if (error) {
        console.error("Failed to submit quote:", error);
        return {
            success: false,
            message: "Failed to submit quote. Please try again."
        };
    }
    return {
        success: true,
        message: "Thank you! Your quote has been submitted for review."
    };
}
async function adminLoginAction(password) {
    const adminPassword = process.env.ADMIN_PASSWORD;
    if (!adminPassword) {
        return {
            success: false,
            message: "Admin access not configured"
        };
    }
    if (password !== adminPassword) {
        return {
            success: false,
            message: "Invalid password"
        };
    }
    // Set admin session cookie (expires in 24 hours)
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.set("admin_session", "authenticated", {
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24
    });
    return {
        success: true,
        message: "Welcome, admin!"
    };
}
async function adminLogoutAction() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.delete("admin_session");
    return {
        success: true
    };
}
async function checkAdminSession() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const session = cookieStore.get("admin_session");
    return session?.value === "authenticated";
}
async function approveQuoteAction(id, genre) {
    const isAdmin = await checkAdminSession();
    if (!isAdmin) {
        return {
            success: false,
            message: "Unauthorized"
        };
    }
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    if (!supabase) {
        return {
            success: false,
            message: "Service unavailable"
        };
    }
    // Get the pending quote
    const { data: pendingQuote, error: fetchError } = await supabase.from("pending_quotes").select("*").eq("id", id).single();
    if (fetchError || !pendingQuote) {
        return {
            success: false,
            message: "Quote not found"
        };
    }
    // Insert into quotes table
    const { error: insertError } = await supabase.from("quotes").insert({
        text: pendingQuote.text,
        author: pendingQuote.author,
        genre: genre
    });
    if (insertError) {
        console.error("Failed to approve quote:", insertError);
        return {
            success: false,
            message: "Failed to approve quote"
        };
    }
    // Update pending quote status
    const { error: updateError } = await supabase.from("pending_quotes").update({
        status: "approved",
        genre,
        reviewed_at: new Date().toISOString()
    }).eq("id", id);
    if (updateError) {
        console.error("Failed to update pending quote status:", updateError);
    }
    return {
        success: true,
        message: "Quote approved and added to collection!"
    };
}
async function rejectQuoteAction(id) {
    const isAdmin = await checkAdminSession();
    if (!isAdmin) {
        return {
            success: false,
            message: "Unauthorized"
        };
    }
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    if (!supabase) {
        return {
            success: false,
            message: "Service unavailable"
        };
    }
    const { error } = await supabase.from("pending_quotes").update({
        status: "rejected",
        reviewed_at: new Date().toISOString()
    }).eq("id", id);
    if (error) {
        return {
            success: false,
            message: "Failed to reject quote"
        };
    }
    return {
        success: true,
        message: "Quote rejected"
    };
}
async function restoreQuoteAction(id) {
    const isAdmin = await checkAdminSession();
    if (!isAdmin) {
        return {
            success: false,
            message: "Unauthorized"
        };
    }
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    if (!supabase) {
        return {
            success: false,
            message: "Service unavailable"
        };
    }
    const { error } = await supabase.from("pending_quotes").update({
        status: "pending",
        reviewed_at: null
    }).eq("id", id);
    if (error) {
        return {
            success: false,
            message: "Failed to restore quote"
        };
    }
    return {
        success: true,
        message: "Quote restored to pending"
    };
}
async function getPendingQuotesAction(status) {
    const isAdmin = await checkAdminSession();
    if (!isAdmin) {
        return {
            success: false,
            message: "Unauthorized",
            data: []
        };
    }
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    if (!supabase) {
        return {
            success: false,
            message: "Service unavailable",
            data: []
        };
    }
    let query = supabase.from("pending_quotes").select("*").order("submitted_at", {
        ascending: false
    });
    if (status && status !== "all") {
        query = query.eq("status", status);
    }
    const { data, error } = await query;
    if (error) {
        return {
            success: false,
            message: "Failed to fetch quotes",
            data: []
        };
    }
    return {
        success: true,
        data: data || []
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    subscribeAction,
    submitQuoteAction,
    adminLoginAction,
    adminLogoutAction,
    checkAdminSession,
    approveQuoteAction,
    rejectQuoteAction,
    restoreQuoteAction,
    getPendingQuotesAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(subscribeAction, "40bf9b4ecbd9040d371bdd2dd91499106e67eb0b9d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitQuoteAction, "4039688ede86a3f8915ec18530c3f53318f2a40c99", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(adminLoginAction, "4008833df78a5b0a2e42fcc2926b274b484a220a70", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(adminLogoutAction, "00b2d0acd71d2327fb17885cb2bd9b188bb4c05956", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(checkAdminSession, "009f42ad3df8ac84bdbae8943dbc9ca44124d95acc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(approveQuoteAction, "60e1b276e59e9c33bbfbdb80035c975598b399ff0f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(rejectQuoteAction, "404f5da62a983e3880236a193cc85bfb14099048ca", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(restoreQuoteAction, "4087ae79bed4ae7cb0020524e2e6b1921b84f57ae9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPendingQuotesAction, "406c30fe2293bcaae309a5a445af13ab28b0319b50", null);
}),
"[project]/.next-internal/server/app/submit/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions.tsx [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/submit/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "4039688ede86a3f8915ec18530c3f53318f2a40c99",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitQuoteAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$submit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/submit/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions.tsx [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a62418af._.js.map