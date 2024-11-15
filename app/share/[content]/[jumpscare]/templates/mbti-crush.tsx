"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import type { TemplateProps } from "./index";

export const MbtiCrush = ({ onComplete }: TemplateProps) => {
  const [analyzing, setAnalyzing] = useState(false);

  const startAnalysis = () => {
    setAnalyzing(true);
    setTimeout(onComplete, Math.random() * 2000 + 3000);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 space-y-8">
      <div className="flex items-center justify-center space-x-3">
        <Brain className="w-12 h-12 text-purple-500" />
        <h1 className="text-4xl font-bold text-purple-500">
          MBTI Crush Reveal
        </h1>
      </div>

      {!analyzing ? (
        <Card className="p-4">
          <CardHeader>
            <CardTitle className="text-3xl">
              Secret Admirer MBTI Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-12 text-center space-y-6">
              <p className="text-lg text-gray-600 mb-4">
                Our AI has detected someone who&apos;s been showing interest in
                your social media activity. Discover their MBTI type!
              </p>
              <Button
                className="w-full bg-purple-500 hover:bg-purple-600 text-lg px-8 py-6"
                size="lg"
                onClick={startAnalysis}
              >
                Reveal MBTI
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="p-4">
          <CardContent className="pt-8">
            <div className="space-y-12 text-center py-8">
              <div className="w-32 h-32 mx-auto rounded-full border-4 border-t-purple-500 animate-spin" />
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold">MBTI Analysis...</h2>
                <p className="text-xl text-gray-600">
                  Analyzing your secret admirer&apos;s personality type
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
