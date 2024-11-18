import { ContentCard } from "@/components/content-card";
import { deceptionContents } from "@/lib/contents";
import Image from "next/image";

export default function CreatePage() {
  const selectedContents = deceptionContents.slice(0, 3);

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">
            Choose Content to Trick Your Friend
          </h1>
          <p className="text-gray-600">
            Select content that will pique your friend&apos;s curiosity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {selectedContents.map((content) => (
            <div key={content.id}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <ContentCard {...content} />
                <div className="p-4 space-y-4">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="relative aspect-[1200/630]">
                      <Image
                        src={content.thumbnail}
                        alt={`Preview of ${content.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 border-t bg-gray-50">
                      <div className="space-y-2">
                        <h3 className="font-bold text-gray-800 line-clamp-1">
                          {content.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {content.description}
                        </p>
                        <p className="text-xs text-gray-500">
                          jumpscare.vercel.app
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 text-center">
                    ↑ Preview of what your friend will see when shared
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
