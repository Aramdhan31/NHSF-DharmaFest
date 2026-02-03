"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Small delay for UX
    await new Promise((resolve) => setTimeout(resolve, 300));

    const success = login(username, password, remember);
    
    if (success) {
      router.push("/");
      router.refresh();
    } else {
      setError("Invalid username or password");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <header className="mb-8 text-center">
          <Link href="/" className="inline-block logo-no-bg mb-4" aria-label="Back to DharmaFest">
            <Image
              src="/logo-nobg.png"
              alt="DharmaFest"
              width={280}
              height={84}
              className="h-16 w-auto object-contain mx-auto"
            />
          </Link>
          <h1 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-white sm:text-3xl">
            Admin Login
          </h1>
          <p className="mt-2 text-sm text-[var(--fg-muted)]">
            Access backend planning pages
          </p>
        </header>

        {/* Login Form */}
        <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-white mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-white placeholder-[var(--fg-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition"
                placeholder="Enter username"
                autoComplete="username"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-white placeholder-[var(--fg-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition"
                placeholder="Enter password"
                autoComplete="current-password"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 rounded border-[var(--border)] bg-[var(--bg)] text-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-0 cursor-pointer"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-[var(--fg-muted)] cursor-pointer">
                Remember login on this device
              </label>
            </div>

            {/* Info Message */}
            {remember && (
              <div className="rounded-lg border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-3 text-sm text-[var(--accent)]">
                💡 <strong>Tip:</strong> We recommend saving your login for easier access to admin pages. Your device will remember you until you log out.
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full py-3 text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>

        {/* Back to Home */}
        <p className="mt-6 text-center">
          <Link href="/" className="text-sm text-[var(--fg-muted)] underline underline-offset-2 hover:text-white">
            ← Back to DharmaFest
          </Link>
        </p>
      </div>
    </div>
  );
}
