import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function logout() {
  "use server";

  const cookieStore = await cookies();
  cookieStore.delete("admin_auth");

  redirect("/admin/login");
}

export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_auth")?.value;
  const expected = process.env.ADMIN_TOKEN_SECRET;

  if (!token || token !== expected) {
    redirect("/admin/login");
  }

  // logged in
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Admin dashboard</h1>
          <p className="text-sm text-slate-300">
            Only you should be able to see this page.
          </p>
        </div>

        <form action={logout}>
          <button
            type="submit"
            className="rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm hover:bg-slate-800"
          >
            Log out
          </button>
        </form>
      </div>

      {/* future: form to add/edit projects */}
      <p className="text-sm text-slate-400">
        Here you’ll manage the projects shown on your portfolio.
      </p>
    </main>
  );
}
