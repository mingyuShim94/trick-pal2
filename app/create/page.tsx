import { ContentCard } from "@/components/content-card";
import { deceptionContents } from "@/lib/contents";

export default function CreatePage() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">
            친구를 속일 컨텐츠를 선택하세요
          </h1>
          <p className="text-gray-600">
            친구의 호기심을 자극할 만한 컨텐츠를 골라보세요
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
