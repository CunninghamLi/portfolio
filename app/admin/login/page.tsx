"use client";

import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const hasError = searchParams.get("error") === "1";

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100">
      <div className="w-full max-w-sm rounded-lg border border-slate-800 bg-slate-900/70 p-6 shadow-lg">
        <h1 className="text-xl font-semibold mb-4 text-center">Admin Login</h1>

        {hasError && (
          <p className="mb-4 text-sm text-red-400 text-center">
            Invalid username or password. Please try again.
          </p>
        )}

        {/* This form still posts to the server */}
        <form method="POST" action="/admin/login-action" className="space-y-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="text-sm text-slate-300">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-sky-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm text-slate-300">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-sky-500"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-md bg-sky-500 px-3 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400 transition"
          >
            Log in
          </button>
        </form>
      </div>
    </main>
  );
}
