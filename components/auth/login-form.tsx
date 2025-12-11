
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { signIn } from "next-auth/react"; // We might need to wrap in SessionProvider or use server action
// Actually, for client side login with credentials in v5, it's often easier to use a Server Action that calls signIn
// OR use "next-auth/react" signIn. But since we haven't set up the API route fully yet...
// Let's create the API route first? 
// No, let's use a Server Action approach as it is cleaner in v5?
// Simpler: use the client `signIn` but we need `app/api/auth/[...nextauth]/route.ts`.
// I will create the API route in the next step to ensure this works.

import { useSearchParams } from "next/navigation";

interface LoginFormProps extends React.ComponentPropsWithoutRef<"div"> {
    role?: "ADMIN" | "FACULTY" | "STUDENT";
}

export default function LoginForm({
    className,
    role,
    ...props
}: LoginFormProps) {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";
    const [error, setError] = useState<string | null>(null);
    const [isPending, setIsPending] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsPending(true);
        setError(null);

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        // We can use the import { signIn } from "next-auth/react" if we have the API route.
        // Or we can define a server action.
        // Let's assume standard client-side signIn for now which requires the API route.

        try {
            const result = await signIn("credentials", {
                email,
                password,
                role: role, // Pass role to authorize
                callbackUrl,
                redirect: false,
            });

            if (result?.error) {
                setError("Invalid email or password");
            } else {
                // Determine redirect URL based on role
                let redirectUrl = callbackUrl;
                if (redirectUrl === "/" || redirectUrl === "/auth/login") {
                    if (role === "ADMIN") redirectUrl = "/admin/dashboard";
                    else if (role === "FACULTY") redirectUrl = "/faculty/dashboard";
                    else if (role === "STUDENT") redirectUrl = "/student/dashboard";
                }

                // Force reload or redirect to dashboard
                window.location.href = redirectUrl;
            }
        } catch (err) {
            console.error(err);
            setError("An error occurred. Please try again.");
        } finally {
            setIsPending(false);
        }
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">
                        {role ? `${role.charAt(0) + role.slice(1).toLowerCase()} Login` : "Login"}
                    </CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <a
                                        href="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                                <Input id="password" name="password" type="password" required />
                            </div>
                            {error && <div className="text-red-500 text-sm">{error}</div>}
                            <Button type="submit" className="w-full" disabled={isPending}>
                                {isPending ? "Logging in..." : "Login"}
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <a href={role ? `/auth/signup/${role.toLowerCase()}` : "/auth/signup"} className="underline underline-offset-4">
                                Sign up
                            </a>
                        </div>
                    </form>
                </CardContent>
            </Card>
            <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
                By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy</a>.
            </div>
        </div>
    );
}
