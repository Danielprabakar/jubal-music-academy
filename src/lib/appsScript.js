export class BackendError extends Error {
  constructor(kind, message) {
    super(message);
    this.kind = kind; // "network" | "parse" | "backend"
  }
}

export async function callBackend(action, payload) {
  let res;
  try {
    res = await fetch(import.meta.env.VITE_APPS_SCRIPT_URL, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ action, ...payload }),
    });
  } catch {
    throw new BackendError("network", "Couldn't reach the server. Check your connection and try again.");
  }

  let json;
  try {
    json = await res.json();
  } catch {
    throw new BackendError("parse", "Unexpected response from server. Please try again or contact support.");
  }

  if (!json.success) {
    throw new BackendError("backend", json.message || "Something went wrong. Please try again.");
  }
  return json.data;
}
