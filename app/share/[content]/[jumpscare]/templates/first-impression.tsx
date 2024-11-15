"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import type { TemplateProps } from "./index";

export const FirstImpression = ({ onComplete }: TemplateProps) => {
  const [analyzing, setAnalyzing] = useState(false);

  const startAnalysis = () => {
    setAnalyzing(true);
    setTimeout(onComplete, Math.random() * 2000 + 3000);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 space-y-8">
      <div className="flex items-center justify-center space-x-3">
        <Users className="w-12 h-12 text-green-500" />
        <h1 className="text-4xl font-bold text-green-500">
          Friend Feedback Analysis
        </h1>
      </div>

      {!analyzing ? (
        <Card className="p-4">
          <CardHeader>
            <CardTitle className="text-3xl">
              Anonymous First Impression Data
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-12 text-center space-y-6">
              <p className="text-lg text-gray-600 mb-4">
                Using anonymous data collection, we&apos;ve gathered honest
                feedback about your first impressions from your social circle.
              </p>
              <Button
                className="w-full bg-green-500 hover:bg-green-600 text-lg px-8 py-6"
                size="lg"
                onClick={startAnalysis}
              >
                View My Results
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="p-4">
          <CardContent className="pt-8">
            <div className="space-y-12 text-center py-8">
              <div className="w-32 h-32 mx-auto rounded-full border-4 border-t-green-500 animate-spin" />
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold">
                  Collecting Feedback...
                </h2>
                <p className="text-xl text-gray-600">
                  Gathering anonymous evaluations from your friends
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
