"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import type { TemplateProps } from "./index";

export const LoveStyle = ({ onComplete }: TemplateProps) => {
  const [analyzing, setAnalyzing] = useState(false);

  const startAnalysis = () => {
    setAnalyzing(true);
    setTimeout(onComplete, Math.random() * 2000 + 3000);
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <div className="flex items-center justify-center space-x-2">
        <Heart className="w-8 h-8 text-pink-500" />
        <h1 className="text-2xl font-bold text-pink-500">Love Style AI</h1>
      </div>

      {!analyzing ? (
        <Card>
          <CardHeader>
            <CardTitle>AI Dating Pattern Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Our advanced AI analyzes your social media activity to reveal your
              unique dating style and compatibility patterns.
            </p>
            <Button
              className="w-full bg-pink-500 hover:bg-pink-600"
              onClick={startAnalysis}
            >
              Connect Social Media
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-8 text-center">
              <div className="w-24 h-24 mx-auto rounded-full border-4 border-t-pink-500 animate-spin" />
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">AI Analysis...</h2>
                <p className="text-gray-600">Analyzing social media data</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
