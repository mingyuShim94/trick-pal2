import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShareButtons } from "@/components/share-buttons";
import { deceptionContents, jumpscareContents } from "@/lib/contents";
import Link from "next/link";
import Image from "next/image";

export default function PreviewPage({
  searchParams,
}: {
  searchParams: { content?: string; jumpscare?: string };
}) {
  if (!searchParams.content || !searchParams.jumpscare) {
    return (
      <main className="min-h-screen p-4 md:p-8 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="max-w-md mx-auto text-center space-y-4">
          <h1 className="text-2xl font-bold text-red-600">잘못된 접근입니다</h1>
          <Button asChild>
            <Link href="/create">처음부터 다시 시작하기</Link>
          </Button>
        </div>
      </main>
    );
  }

  const deceptionContent = deceptionContents.find(
    (content) => content.id === searchParams.content
  );
  const jumpscareContent = jumpscareContents.find(
    (content) => content.id === searchParams.jumpscare
  );

  if (!deceptionContent || !jumpscareContent) {
    return (
      <main className="min-h-screen p-4 md:p-8 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="max-w-md mx-auto text-center space-y-4">
          <h1 className="text-2xl font-bold text-red-600">
            잘못된 컨텐츠입니다
          </h1>
          <Button asChild>
            <Link href="/create">처음부터 다시 시작하기</Link>
          </Button>
        </div>
      </main>
    );
  }

  const shareUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/share/${searchParams.content}/${searchParams.jumpscare}`;

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">최종 확인</h1>
          <p className="text-gray-600">
            선택하신 컨텐츠를 확인하고 공유해보세요
          </p>
        </div>

        <div className="space-y-6">
          <Card className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">속이기용 컨텐츠</h2>
            <div className="space-y-2">
              <div className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                {deceptionContent.category}
              </div>
              <h3 className="text-lg font-medium">{deceptionContent.title}</h3>
              <p className="text-gray-600">{deceptionContent.description}</p>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">깜짝 컨텐츠</h2>
            <div className="space-y-4">
              <div className="relative aspect-video">
                <Image
                  src={jumpscareContent.thumbnail}
                  alt={jumpscareContent.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium">
                  {jumpscareContent.title}
                </h3>
                <p className="text-gray-600">{jumpscareContent.description}</p>
              </div>
            </div>
          </Card>

          <ShareButtons shareUrl={shareUrl} />
        </div>
      </div>
    </main>
  );
}
