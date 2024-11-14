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

interface ContentCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
}

export function ContentCard({
  id,
  title,
  description,
  category,
}: ContentCardProps) {
  const router = useRouter();

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="inline-block px-2 py-1 mb-2 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
          {category}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={() => router.push(`/create/jumpscare?content=${id}`)}
        >
          Start with This
        </Button>
      </CardFooter>
    </Card>
  );
}
