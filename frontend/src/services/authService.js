import { API_URL } from "../config";

export async function login(username, password) {
    const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Invalid credentials");
    }

    const data = await res.json();

    // simpan token
    localStorage.setItem("token", data.token);

    return data;
}
