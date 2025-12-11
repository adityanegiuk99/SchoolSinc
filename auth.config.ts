
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { prisma } from "@/lib/prisma"; // We need to ensure lib/prisma exists or create it
// Note: We'll fix the db import in auth.ts if needed, but for config we often keep it light.
// Actually, for v5 edge compatibility, we usually separate the config that relies on DB adapters vs pure config.
// But we are not using an intricate adapter yet, just credentials.

export const authConfig = {
    pages: {
        signIn: "/auth/login",
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith("/admin") ||
                nextUrl.pathname.startsWith("/faculty") ||
                nextUrl.pathname.startsWith("/student");

            if (isOnDashboard) {
                if (isLoggedIn) return true;

                // Redirect unauthenticated users to specific portal login
                if (nextUrl.pathname.startsWith("/admin")) {
                    return Response.redirect(new URL("/auth/login/admin", nextUrl));
                } else if (nextUrl.pathname.startsWith("/faculty")) {
                    return Response.redirect(new URL("/auth/login/faculty", nextUrl));
                } else if (nextUrl.pathname.startsWith("/student")) {
                    return Response.redirect(new URL("/auth/login/student", nextUrl));
                }

                return false; // Fallback to default login
            } else if (isLoggedIn) {
                // Redirect logged-in users away from auth pages to their dashboard
                // if (nextUrl.pathname.startsWith("/auth")) {
                //    // We can rely on a default, or try to infer. 
                //    // For now, let's redirect to home which links to dashboards.
                //    return Response.redirect(new URL("/", nextUrl));
                // }
            }
            return true;
        },
        async session({ session, token }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }
            if (token.role && session.user) {
                // @ts-ignore
                session.user.role = token.role;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.role = (user as any).role;
            }
            return token;
        }
    },
    providers: [
        // We will define providers in auth.ts to avoid edge runtime issues with bcrypt if any
        // But for now, let's put it here or keep it empty and merge in auth.ts?
        // NextAuth v5 pattern: auth.config.ts has everything EXCEPT database adapters/providers that use node modules not compatible with Edge.
        // Credentials provider is fine if we don't import bcrypt here directly? 
        // Actually standard practice: put empty providers here, merge in auth.ts
    ] satisfies NextAuthConfig["providers"],
} satisfies NextAuthConfig;
