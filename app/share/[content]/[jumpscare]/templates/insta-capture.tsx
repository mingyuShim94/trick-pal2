"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Instagram } from "lucide-react";
import type { TemplateProps } from "./index";

export const InstaCapture = ({ onComplete }: TemplateProps) => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);

  const startAnalysis = () => {
    setLoading(true);
    setTimeout(() => {
      setStep(1);
      setTimeout(() => {
        onComplete();
      }, Math.random() * 2000 + 3000);
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 space-y-8">
      <div className="flex items-center justify-center space-x-3">
        <Instagram className="w-12 h-12 text-blue-500" />
        <h1 className="text-4xl font-bold text-blue-500">
          Instagram Analytics
        </h1>
      </div>

      {step === 0 ? (
        <Card className="p-4">
          <CardHeader>
            <CardTitle className="text-3xl">
              Story Screenshot Detection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-12 text-center space-y-6">
              <p className="text-lg text-gray-600 mb-4">
                Using Instagram&apos;s hidden API, we can detect who took
                screenshots of your stories in the last 30 days.
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
                    Connecting to Instagram...
                  </>
                ) : (
                  "Start Analysis"
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
                <h2 className="text-3xl font-semibold">Analyzing...</h2>
                <p className="text-xl text-gray-600">
                  Checking story screenshot records
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
