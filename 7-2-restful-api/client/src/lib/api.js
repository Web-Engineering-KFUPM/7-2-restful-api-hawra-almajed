const BASE = import.meta.env.VITE_API_URL || "http://localhost:5174";

const handle = async (res) => {
  if (!res.ok && res.status !== 204) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || `Request failed: ${res.status}`);
  }
  if (res.status === 204) return null;
  return res.json();
};

export const apiGetSongs   = ()          => fetch(`${BASE}/api/songs`).then(handle);
export const apiGetSong    = (id)        => fetch(`${BASE}/api/songs/${id}`).then(handle);
export const apiCreateSong = (body)      => fetch(`${BASE}/api/songs`, { method: "POST",   headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }).then(handle);
export const apiUpdateSong = (id, body)  => fetch(`${BASE}/api/songs/${id}`, { method: "PUT",    headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }).then(handle);
export const apiDeleteSong = (id)        => fetch(`${BASE}/api/songs/${id}`, { method: "DELETE" }).then(handle);