import { Metadata } from "next";
import { deceptionContents } from "@/lib/contents";

type Props = {
  children: React.ReactNode;
  params: { content: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const deceptionContent = deceptionContents.find(
    (content) => content.id === params.content
  );

  const title = deceptionContent?.title || "TrickPal";
  const description = deceptionContent?.description || "Share fun moments!";
  const imageUrl =
    deceptionContent?.thumbnail ||
    `${process.env.NEXT_PUBLIC_BASE_URL}/root_metaImage.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [imageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default function ShareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
