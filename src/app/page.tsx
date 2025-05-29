import AuthForm from "@/components/AuthForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-yellow-100 dark:bg-dark-100">
      <AuthForm mode="login" />
    </main>
  );
}
