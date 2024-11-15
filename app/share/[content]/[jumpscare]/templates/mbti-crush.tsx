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
    <div className="max-w-md mx-auto p-4 space-y-4">
      <div className="flex items-center justify-center space-x-2">
        <Brain className="w-8 h-8 text-purple-500" />
        <h1 className="text-2xl font-bold text-purple-500">
          MBTI Crush Reveal
        </h1>
      </div>

      {!analyzing ? (
        <Card>
          <CardHeader>
            <CardTitle>Secret Admirer MBTI Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Our AI has detected someone who&apos;s been showing interest in
              your social media activity. Discover their MBTI type!
            </p>
            <Button
              className="w-full bg-purple-500 hover:bg-purple-600"
              onClick={startAnalysis}
            >
              Reveal MBTI
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-8 text-center">
              <div className="w-24 h-24 mx-auto rounded-full border-4 border-t-purple-500 animate-spin" />
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">MBTI Analysis...</h2>
                <p className="text-gray-600">
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
