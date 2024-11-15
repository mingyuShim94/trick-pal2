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
    <div className="max-w-md mx-auto p-4 space-y-4">
      <div className="flex items-center justify-center space-x-2">
        <Search className="w-8 h-8 text-blue-500" />
        <h1 className="text-2xl font-bold">Profile Search Analytics</h1>
      </div>

      {!analyzing ? (
        <Card>
          <CardHeader>
            <CardTitle>Profile Search Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              See how many times your friends have searched for your profile
              across different social platforms.
            </p>
            <Button
              className="w-full"
              onClick={startAnalysis}
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Connecting to Social Networks...
                </>
              ) : (
                "Analyze Search Data"
              )}
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-8 text-center">
              <div className="w-24 h-24 mx-auto rounded-full border-4 border-t-blue-500 animate-spin" />
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Collecting Data...</h2>
                <p className="text-gray-600">
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
