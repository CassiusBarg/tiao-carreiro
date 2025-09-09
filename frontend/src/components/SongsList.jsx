import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = "/api";

export default function SongsList() {
  const [songs, setSongs] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSongs() {
      setLoading(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/songs?page=${page}`);
        const data = response.data;

        // garante que songs sempre seja array
        setSongs(Array.isArray(data.data) ? data.data : []);
        setLastPage(data.last_page || 1);
      } catch (error) {
        console.error("Erro ao buscar músicas:", error);
        setSongs([]);
      } finally {
        setLoading(false);
      }
    }
    fetchSongs();
  }, [page]);

  if (loading) {
    return <p className="text-gray-500">Carregando músicas...</p>;
  }

  if (!songs.length) {
    return <p className="text-gray-500">Nenhuma música encontrada.</p>;
  }

  return (
    <section>
      <div className="space-y-3">
        {songs.map((song) => (
          <div
            key={song.id}
            className="bg-white rounded-lg shadow p-3 flex justify-between items-center hover:shadow-md transition"
          >
            <span className="text-gray-700">{song.title}</span>
            <a
              href={song.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-indigo-600 hover:underline"
            >
              🎶 Ver
            </a>
          </div>
        ))}
      </div>

      {/* Paginação */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-300"
        >
          ⬅ Anterior
        </button>
        <span className="text-gray-700">
          Página {page} de {lastPage}
        </span>
        <button
          disabled={page === lastPage}
          onClick={() => setPage((p) => Math.min(p + 1, lastPage))}
          className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-300"
        >
          Próxima ➡
        </button>
      </div>
    </section>
  );
}
