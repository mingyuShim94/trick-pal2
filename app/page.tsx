import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          TrickPal
        </h1>
        <p className="text-xl text-gray-600">
          친구들에게 재미있는 깜짝 놀래키기를 선물하세요!
        </p>

        <div className="mt-8">
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700"
            asChild
          >
            <Link href="/create">지금 시작하기</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
