"use client";

import { useState } from "react";
import { Camera, Upload, Sparkles } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import type { TemplateProps } from "./index";

export const CelebMatch = ({ onComplete }: TemplateProps) => {
  const [imageUploaded, setImageUploaded] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleUpload = () => {
    setImageUploaded(true);
    setTimeout(() => {
      setAnalyzing(true);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            onComplete();
            return 100;
          }
          return prev + 5;
        });
      }, 150);
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-8 space-y-8">
      <div className="flex flex-col items-center justify-center space-y-3 text-center">
        <div className="relative">
          <Camera className="w-16 h-16 text-purple-500" />
          <Sparkles className="w-6 h-6 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-purple-500 tracking-tight">
          Celebrity Twin Finder
        </h1>
        <p className="text-muted-foreground">
          Discover your famous doppelganger with AI magic!
        </p>
      </div>

      <Card className="overflow-hidden">
        {!imageUploaded ? (
          <div className="relative">
            <div className="w-full h-[400px] bg-gray-100 opacity-20" />

            <CardContent className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-6">
              <Upload className="w-16 h-16 text-purple-500" />
              <CardTitle className="text-2xl font-semibold">
                Ready to find your celebrity twin?
              </CardTitle>
              <p className="text-muted-foreground max-w-md">
                Our AI will analyze your photo and find your celebrity
                look-alike with 99% accuracy!
              </p>
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-purple-500 hover:bg-purple-600 text-white"
                onClick={handleUpload}
              >
                Upload Your Photo
              </Button>
            </CardContent>
          </div>
        ) : (
          <CardContent className="p-6 md:p-8">
            <div className="space-y-8 text-center py-8">
              <div className="relative w-40 h-40 mx-auto">
                <div className="w-full h-full rounded-full border-4 border-purple-500 border-t-transparent animate-spin" />
                <Sparkles className="w-8 h-8 text-yellow-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="space-y-4">
                <CardTitle className="text-3xl font-semibold">
                  AI Magic in Progress...
                </CardTitle>
                <p className="text-xl text-muted-foreground">
                  {analyzing
                    ? "Searching the stars for your twin..."
                    : "Preparing your image for stardust analysis..."}
                </p>
              </div>
              <Progress value={progress} className="w-full max-w-md mx-auto" />
              <p className="text-sm text-muted-foreground">
                {progress}% complete
              </p>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};
