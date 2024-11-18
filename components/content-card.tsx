"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Ghost, Sparkles } from "lucide-react";

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card
        className="group relative overflow-hidden bg-white/90 transition-all hover:shadow-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardHeader className="relative z-10">
          <motion.div
            className="inline-block rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 text-xs font-medium text-white"
            whileHover={{ scale: 1.1 }}
          >
            {category}
          </motion.div>
          <CardTitle className="mt-2 text-2xl font-bold text-purple-800">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-purple-600">{description}</p>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white transition-all hover:from-purple-700 hover:to-pink-700"
            onClick={() => router.push(`/create/jumpscare?content=${id}`)}
          >
            Start with this content
            <Ghost className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
        <motion.div
          className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-purple-300/30 backdrop-blur-md"
          animate={{
            scale: isHovered ? 1.2 : 1,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute -bottom-4 -left-4 h-16 w-16"
          animate={{
            rotate: isHovered ? 360 : 0,
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="h-full w-full text-pink-400" />
        </motion.div>
      </Card>
    </motion.div>
  );
}
