import React, { useState } from "react";
import Top5 from "./components/Top5";
import SongsList from "./components/SongsList";
import Login from "./components/Login";
import Register from "./components/Register";
import AdminPanel from "./components/AdminPanel";

export default function App() {
  // Recupera do localStorage (se existir)
  const [auth, setAuth] = useState(() => {
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("token");

    if (savedUser && savedToken) {
      return { user: JSON.parse(savedUser), token: savedToken };
    }
    return null;
  });

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuth(null);
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Cabeçalho */}
      <header className="bg-indigo-700 text-white px-6 py-4 flex justify-between items-center shadow">
        <h1 className="text-2xl font-bold">
          🎶 Top 5 - Tião Carreiro e Pardinho
        </h1>
        <div>
          {auth ? (
            <span className="flex items-center gap-2">
              Olá, <strong>{auth.user.name}</strong>
              <button
                onClick={handleLogout}
                className="ml-4 px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition"
              >
                Sair
              </button>
            </span>
          ) : (
            <span className="italic">Não autenticado</span>
          )}
        </div>
      </header>

      {/* Conteúdo */}
      <main className="max-w-5xl mx-auto p-6">
        <Top5 />
        <hr className="my-6 border-gray-300" />
        <h2 className="text-xl font-semibold mb-4">Lista completa (paginada)</h2>
        <SongsList />
        <hr className="my-6 border-gray-300" />

        {/* Área de autenticação */}
        {!auth && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Login onLogin={(userData) => setAuth(userData)} />
            <Register onRegister={(userData) => setAuth(userData)} />
          </div>
        )}

        {/* Painel Admin */}
        {auth && <AdminPanel />}
      </main>
    </div>
  );
}
