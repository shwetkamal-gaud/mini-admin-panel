"use client";
import { useState } from "react";
import { login, register } from "@/lib/api";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";

export default function AuthForm({ mode }: { mode: "login" | "signup" }) {
    const [email, setEmail] = useState("eve.holt@reqres.in");
    const [password, setPassword] = useState("pistol");
    const { login: setToken } = useAuthStore();
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        
        try {
            const data = mode === "login" ? await login(email, password) : await register(email, password);
            setToken(data.token);
            document.cookie = `token=${data.token}; path=/; max-age=86400`;
            router.push("/dashboard");
        } catch (err:unknown) {
            if (err instanceof Error) {
                toast.error(err.message)
            } else {
                toast.error("Something went wrong")
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-gray-400 dark:bg-yellow-400 p-8 rounded-xl flex flex-col gap-4 items-center shadow-lg ">
            <h1 className="text-2xl font-bold text-yellow-500">{mode === "login" ? "Login" : "Sign Up"}</h1>
            <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                </div>
                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
            </div>
            <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0,0,256,256"
                        width="50px"
                        height="50px"
                        fillRule="nonzero"
                    >
                        <g
                            fill="#6a7282"
                            fillRule="nonzero"
                            stroke="none"
                            strokeWidth={1}
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            strokeMiterlimit={10}
                            strokeDasharray=""
                            strokeDashoffset={0}
                            fontFamily="none"
                            fontWeight="none"
                            fontSize="none"
                            textAnchor="none"
                            style={{ mixBlendMode: "normal" }}
                        >
                            <g transform="scale(5.12,5.12)">
                                <path d="M34,0c-8.82031,0 -16,7.17969 -16,16c0,1.95703 0.35547,3.82813 1,5.5625l-19,19.03125v6l18.5625,-18.59375l1.4375,1.4375l-19,18.96875l1.59375,1.59375h6.8125l3.59375,-3.59375v-2.40625h2.40625l3.59375,-3.59375v-1.40625h1.40625l2.59375,-2.59375v-1.40625h1.40625l4.03125,-4.03125c1.73828,0.64844 3.60156,1.03125 5.5625,1.03125c8.82031,0 16,-7.17969 16,-16c0,-8.82031 -7.17969,-16 -16,-16zM34,5c2.9375,0 5.70313,1.14063 7.78125,3.21875c2.07813,2.07813 3.21875,4.84375 3.21875,7.78125c0,2.9375 -1.14062,5.70313 -3.21875,7.78125l-0.71875,0.71875l-15.5625,-15.5625l0.71875,-0.71875c2.07813,-2.07812 4.84375,-3.21875 7.78125,-3.21875z" />
                            </g>
                        </g>
                    </svg>
                </div>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
            </div>

            <span className="dark:text-gray-500 text-yellow-400">{mode === "login" ? 'Not have an account?' : 'Already have an account?'}
                <Link className="underline font-bold" href={mode === "login" ? '/signup' : '/'}>{mode === "login" ? 'Signup' : 'Login'}</Link>
            </span>
            <button className="p-2 dark:bg-gray-400 bg-yellow-400 text-gray-600 dark:text-yellow-400  rounded-full  w-full">{mode === "login" ? "Login" : "Sign Up"}</button>
        </form>
    );
}
