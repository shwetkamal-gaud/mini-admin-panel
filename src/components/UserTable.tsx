import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export interface User {
    id: string,
    avatar: string,
    first_name: string,
    last_name: string,
    email: string
}
export default function UserTable({ users, onSelect, setIsModal }: { users: User[], onSelect: (value: string) => void, setIsModal: Dispatch<SetStateAction<boolean>> }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {users.map((user: User) => (
                <div key={user.id} onClick={() => { onSelect(user.id); setIsModal(true) }} className="bg-yellow-300 dark:bg-gray-600 dark:text-yellow-300 p-4 flex flex-col rounded-lg cursor-pointer  transition">
                    <Image width={100} height={100} src={user.avatar} alt={user.first_name} className="rounded-full w-16 h-16 mb-2 self-center md:self-start" />
                    <p className="font-bold md:text-start text-center">{user.first_name} {user.last_name}</p>
                    <p className="text-sm md:text-start text-center break line-clamp break-words">{user.email}</p>
                </div>
            ))}
        </div>
    );
}
