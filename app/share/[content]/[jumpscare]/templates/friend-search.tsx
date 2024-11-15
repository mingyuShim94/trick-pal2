"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Loader2 } from "lucide-react";
import type { TemplateProps } from "./index";

export const FriendSearch = ({ onComplete }: TemplateProps) => {
  const [loading, setLoading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  const startAnalysis = () => {
    setLoading(true);
    setTimeout(() => {
      setAnalyzing(true);
      setTimeout(onComplete, Math.random() * 2000 + 3000);
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 space-y-8">
      <div className="flex items-center justify-center space-x-3">
        <Search className="w-12 h-12 text-blue-500" />
        <h1 className="text-4xl font-bold text-blue-500">
          Profile Search Analytics
        </h1>
      </div>

      {!analyzing ? (
        <Card className="p-4">
          <CardHeader>
            <CardTitle className="text-3xl">
              Profile Search Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-12 text-center space-y-6">
              <p className="text-lg text-gray-600 mb-4">
                See how many times your friends have searched for your profile
                across different social platforms.
              </p>
              <Button
                className="w-full text-lg px-8 py-6"
                size="lg"
                onClick={startAnalysis}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                    Connecting to Social Networks...
                  </>
                ) : (
                  "Analyze Search Data"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="p-4">
          <CardContent className="pt-8">
            <div className="space-y-12 text-center py-8">
              <div className="w-32 h-32 mx-auto rounded-full border-4 border-t-blue-500 animate-spin" />
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold">Collecting Data...</h2>
                <p className="text-xl text-gray-600">
                  Analyzing social media search history
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
