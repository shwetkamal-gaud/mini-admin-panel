"use client";
import { useEffect, useState } from "react";
import { getUserById } from "@/lib/api";
import { AnimatePresence, motion } from "framer-motion";

export default function UserModal({ userId, onClose }: any) {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        getUserById(userId).then((res) => setUser(res.data));
    }, [userId]);

    if (!user) return null;

    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 1, y: 10, rotateX: 15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: 10, rotateX: 15 }} className="fixed inset-0 bg-black/60 flex backdrop-blur-[2px] justify-center items-center z-50" onClick={onClose}>
                <motion.div className="bg-gray-500 dark:bg-yellow-500   p-6 rounded-xl shadow-xl w-80" onClick={(e) => e.stopPropagation()}>
                    <img src={user.avatar} className="w-24 h-24 rounded-full mx-auto mb-2" />
                    <h2 className="text-center dark:text-gray-500 text-yellow-500 text-xl font-bold">{user.first_name} {user.last_name}</h2>
                    <p className="text-center dark:text-gray-500 text-yellow-500 ">{user.email}</p>
                    <button
                        onClick={onClose}
                        className="mt-4 px-4 py-2 dark:bg-gray-500 bg-yellow-400 text-gray-500 dark:text-yellow-500 text-black rounded "
                    >
                        Close
                    </button>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
