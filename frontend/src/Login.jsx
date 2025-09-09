import React, { useState } from "react";
import axios from "axios";
import { API } from "../utils/api";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(`${API}/login`, {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      onLogin(response.data.user);
    } catch (err) {
      console.error(err);
      setError("Credenciais inválidas");
    }
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Login</h2>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="E-mail"
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
