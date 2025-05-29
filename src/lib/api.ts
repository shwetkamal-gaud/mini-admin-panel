export async function login(email: string, password: string) {
    const res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-api-key": " reqres-free-v1" },
        body: JSON.stringify({ email, password }),
        
    });
    if (!res.ok) throw new Error("Login failed");
    return res.json();
}

export async function register(email: string, password: string) {
    const res = await fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-api-key": " reqres-free-v1" },
        body: JSON.stringify({ email, password }),
    });
    if (!res.ok) throw new Error("Registration failed");
    return res.json();
}

export async function getUsers(page:number) {
    const res = await fetch(`https://reqres.in/api/users?page=${page}`, { headers: { "Content-Type": "application/json", "x-api-key": " reqres-free-v1" }, });
    if (!res.ok) throw new Error("Failed to fetch users");
    return res.json();
}

export async function getUserById(id: string) {
    const res = await fetch(`https://reqres.in/api/users/${id}`, { headers: { "Content-Type": "application/json", "x-api-key": " reqres-free-v1" }, });
    if (!res.ok) throw new Error("User not found");
    return res.json();
}
  