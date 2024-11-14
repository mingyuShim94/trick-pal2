import { ContentCard } from "@/components/content-card";
import { deceptionContents } from "@/lib/contents";

export default function CreatePage() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">
            Choose Content to Trick Your Friend
          </h1>
          <p className="text-gray-600">
            Select content that will pique your friend&apos;s curiosity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {deceptionContents.map((content) => (
            <ContentCard key={content.id} {...content} />
          ))}
        </div>
      </div>
    </main>
  );
}
