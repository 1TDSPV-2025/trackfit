import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow mb-6">
        <div className="justify-center items-center p-4 flex gap-5">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <Link to="/add" className="text-blue-600 hover:underline">
            Novo Treino
          </Link>
        </div>
      </nav>
      <main className="flex flex-col justify-center items-center px-4 w-full">
        <Outlet />
      </main>
    </div>
  );
}
