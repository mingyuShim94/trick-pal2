import { jumpscareContents } from "@/lib/contents";
import { Button } from "@/components/ui/button";
import { JumpscareCard } from "@/components/jumpscare-card";
import Link from "next/link";

export default function JumpscareSelectPage({
  searchParams,
}: {
  searchParams: { content?: string };
}) {
  if (!searchParams.content) {
    return (
      <main className="min-h-screen p-4 md:p-8 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="max-w-md mx-auto text-center space-y-4">
          <h1 className="text-2xl font-bold text-red-600">Invalid Access</h1>
          <Button asChild>
            <Link href="/create">Start Over</Link>
          </Button>
        </div>
      </main>
    );
  }

  const deceptionId: string = searchParams.content;

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">
            Choose a Jump Scare
          </h1>
          <p className="text-gray-600">
            Select a scary content to surprise your friend
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jumpscareContents.map((content) => (
            <JumpscareCard
              key={content.id}
              {...content}
              deceptionId={deceptionId}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
