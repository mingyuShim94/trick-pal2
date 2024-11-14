"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface JumpscareCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  deceptionId: string;
}

export function JumpscareCard({
  id,
  title,
  description,
  thumbnail,
  deceptionId,
}: JumpscareCardProps) {
  const router = useRouter();

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="relative aspect-square">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover rounded-md"
        />
      </CardContent>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={() =>
            router.push(
              `/create/preview?content=${deceptionId}&jumpscare=${id}`
            )
          }
        >
          이 콘텐츠로 결정하기
        </Button>
      </CardFooter>
    </Card>
  );
}
