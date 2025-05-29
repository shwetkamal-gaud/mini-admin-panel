"use client";
import { AnimatePresence, motion } from "framer-motion";
import { User } from "./UserTable";
import Image from "next/image";

export default function UserModal({ user, onClose, loading }: { user: User | null, onClose: () => void, loading: boolean }) {
    if (!user) return null;
    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 1, y: 10, rotateX: 15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: 10, rotateX: 15 }} className="fixed inset-0 bg-black/60 flex backdrop-blur-[2px] justify-center items-center z-50" onClick={onClose}>
                <motion.div className="bg-gray-500 dark:bg-yellow-500 flex flex-col gap-2   p-6 rounded-xl shadow-xl w-80" onClick={(e) => e.stopPropagation()}>
                    {loading ? <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-400/10 z-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow-500 border-t-transparent"></div>
                    </div> :
                        <>
                            <Image alt={user.first_name} width={100} height={100} src={user.avatar} className="w-24 h-24 rounded-full mx-auto " />
                            <h2 className="text-center dark:text-gray-500 text-yellow-500 text-xl font-bold">{user.first_name} {user.last_name}</h2>
                            <p className="text-center dark:text-gray-500 text-yellow-500 ">{user.email}</p>
                            <button
                                onClick={onClose}
                                className="mt-4 px-4 py-2 dark:bg-gray-500 bg-yellow-400  self-end text-gray-500 dark:text-yellow-500 text-black rounded "
                            >
                                Close
                            </button>
                        </>
                    }
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
