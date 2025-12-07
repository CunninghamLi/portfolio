// app/admin/dashboard/page.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_auth")?.value;
  const expected = process.env.ADMIN_TOKEN_SECRET;

  if (!token || !expected || token !== expected) {
    redirect("/admin/login");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6">
      <h1 className="text-2xl font-semibold mb-4">Admin dashboard</h1>
      <p className="text-sm text-slate-300 mb-4">
        Only you should be able to see this page.
      </p>

      {/* later: forms to add projects & experience */}
    </main>
  );
}
