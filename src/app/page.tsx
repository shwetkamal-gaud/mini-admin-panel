import AuthForm from "@/components/AuthForm";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-[100vh]">
      <AuthForm mode="login" />
    </main>
  );
}
