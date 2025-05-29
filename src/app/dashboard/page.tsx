"use client";
import { useEffect, useState } from "react";
import { getUsers } from "@/lib/api";
import Header from "@/components/Header";
import UserTable from "@/components/UserTable";
import UserModal from "@/components/UserModal";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [error, setError] = useState("");
    const [page, setPages] = useState(1)
    const [totalPages, setTotalPages] = useState()
    const { logout } = useAuthStore();
    const [loading, setLoading] = useState(false)
       const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem("token");
        const expiry = localStorage.getItem("token_expiry");
        if (!token || !expiry || Date.now() > parseInt(expiry)) {
            logout();
            router.push("/");
        } else {
            const timeout = parseInt(expiry) - Date.now();
            const timer = setTimeout(() => {
                logout();
                router.push("/");
            }, timeout);

            return () => clearTimeout(timer);
        }
    }, []);
    useEffect(() => {
        setLoading(true)
        getUsers(page)
            .then((res) => { setUsers(res.data); setTotalPages(res.total_pages) })
            .catch((e) => setError("Failed to fetch users")).finally(() => setLoading(false))
    }, [page]);

    return (
        <div className="min-h-screen bg-gray-100 text-black">
            <Header />
            {loading ? <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-400/10 z-20">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow-500 border-t-transparent"></div>
            </div> :

                error ? (
                    <p className="text-red-500 text-center mt-4">{error}</p>
                ) : (
                    <>
                        <UserTable users={users} onSelect={setSelectedUser} />
                        <div className="flex justify-end items-center gap-3 p-4">
                            <button onClick={() => setPages((prev) => prev - 1)} className="bg-gray-500 dark:bg-yellow-500 text-yellow-500 dark:text-gray-500 disabled:opacity-60 rounded-lg p-2" disabled={page === 1}>
                                Previous
                            </button>
                            <button onClick={() => setPages((prev) => prev + 1)} className="bg-yellow-500 dark:bg-gray-500 text-gray-500 dark:text-yellow-500 disabled:opacity-60 rounded-lg p-2" disabled={page === totalPages}>
                                Next
                            </button>
                        </div>

                    </>
                )
            }
            {selectedUser && <UserModal userId={selectedUser} onClose={() => setSelectedUser(null)} />}
        </div>
    );
}
