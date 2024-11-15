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
    <div className="max-w-md mx-auto p-4 space-y-4">
      <div className="flex items-center justify-center space-x-2">
        <Instagram className="w-8 h-8" />
        <h1 className="text-2xl font-bold">Instagram Analytics</h1>
      </div>

      {step === 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>Story Screenshot Detection</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Using Instagram&apos;s hidden API, we can detect who took
              screenshots of your stories in the last 30 days.
            </p>
            <Button
              className="w-full"
              onClick={startAnalysis}
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Connecting to Instagram...
                </>
              ) : (
                "Start Analysis"
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
                <h2 className="text-xl font-semibold">Analyzing...</h2>
                <p className="text-gray-600">
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
