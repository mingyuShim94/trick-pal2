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
import Image from "next/image";
import { motion } from "framer-motion";
import { Ghost, Zap } from "lucide-react";

interface JumpscareCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  deceptionId: string;
  isSelected?: boolean;
}

export function JumpscareCard({
  id,
  title,
  description,
  thumbnail,
  deceptionId,
  isSelected,
}: JumpscareCardProps) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card
        className={`group relative overflow-hidden transition-all ${
          isSelected ? "ring-4 ring-purple-500" : "hover:shadow-xl"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-purple-800">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="relative aspect-square overflow-hidden rounded-md">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-110"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute bottom-4 left-4 flex items-center space-x-2 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <Zap className="h-6 w-6" />
            <span className="text-lg font-semibold">Scare Factor: High</span>
          </motion.div>
        </CardContent>
        <CardContent>
          <p className="text-purple-600">{description}</p>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white transition-all hover:from-purple-700 hover:to-pink-700"
            onClick={() =>
              router.push(
                `/create/preview?content=${deceptionId}&jumpscare=${id}`
              )
            }
          >
            Choose this scare
            <Ghost className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
        {isSelected && (
          <motion.div
            className="absolute right-2 top-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
          >
            <div className="rounded-full bg-purple-500 p-2">
              <Ghost className="h-6 w-6 text-white" />
            </div>
          </motion.div>
        )}
      </Card>
    </motion.div>
  );
}
