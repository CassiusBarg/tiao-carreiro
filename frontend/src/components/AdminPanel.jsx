import React, { useState } from "react";
import axios from "axios";

const API_BASE_URL = "/api";

export default function AdminPanel() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");

  async function handleAddSong(e) {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/songs`, { title, url });
      setMessage("✅ Música adicionada com sucesso!");
      setTitle("");
      setUrl("");
    } catch (error) {
      setMessage("❌ Erro ao adicionar música");
    }
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Painel do Admin</h2>
      {message && <p className="mb-4 text-sm">{message}</p>}
      <form onSubmit={handleAddSong} className="space-y-4">
        <input
          type="text"
          placeholder="Título da música"
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="url"
          placeholder="URL do YouTube"
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Adicionar Música
        </button>
      </form>
    </div>
  );
}
