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
    <div className="max-w-md mx-auto p-4 space-y-4">
      <div className="flex items-center justify-center space-x-2">
        <Users className="w-8 h-8 text-green-500" />
        <h1 className="text-2xl font-bold">Friend Feedback Analysis</h1>
      </div>

      {!analyzing ? (
        <Card>
          <CardHeader>
            <CardTitle>Anonymous First Impression Data</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Using anonymous data collection, we&apos;ve gathered honest
              feedback about your first impressions from your social circle.
            </p>
            <Button
              className="w-full bg-green-500 hover:bg-green-600"
              onClick={startAnalysis}
            >
              View My Results
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-8 text-center">
              <div className="w-24 h-24 mx-auto rounded-full border-4 border-t-green-500 animate-spin" />
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">
                  Collecting Feedback...
                </h2>
                <p className="text-gray-600">
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
