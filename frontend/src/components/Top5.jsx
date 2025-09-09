import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = "/api";

export default function Top5() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTop5() {
      setLoading(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/songs/top5`);
        const data = response.data;

        // garante que songs sempre seja array
        setSongs(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Erro ao buscar Top 5:", error);
        setSongs([]);
      } finally {
        setLoading(false);
      }
    }
    fetchTop5();
  }, []);

  if (loading) {
    return <p className="text-gray-500">Carregando Top 5...</p>;
  }

  if (!songs.length) {
    return <p className="text-gray-500">Nenhuma música no Top 5.</p>;
  }

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Top 5</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {songs.map((song) => (
          <div
            key={song.id}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-bold text-indigo-700">{song.title}</h3>
            <a
              href={song.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sm text-indigo-600 hover:underline"
            >
              🎥 Assistir no YouTube
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

