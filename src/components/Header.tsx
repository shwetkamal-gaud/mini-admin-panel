"use client";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { toast } from "react-toastify";


export default function Header() {
    const { logout } = useAuthStore();
    const router = useRouter();

    const handleLogout = () => {
        toast.info('You are logged out')
        logout();

        document.cookie = "token=; Max-Age=0";
        router.push("/");
    };

    return (
        <header className="flex sticky top-0 z-30 justify-between rounded-full items-center py-2 px-4 bg-yellow-500 dark:bg-gray-500 text-black dark:text-yellow-500">
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            <div className="flex items-center gap-4">
                <ThemeToggle />
                <button className="btn btn-black" onClick={handleLogout}>Logout</button>
            </div>
        </header>
    );
}
