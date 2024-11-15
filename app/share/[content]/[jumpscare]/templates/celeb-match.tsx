"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Upload } from "lucide-react";
import type { TemplateProps } from "./index";

export const CelebMatch = ({ onComplete }: TemplateProps) => {
  const [imageUploaded, setImageUploaded] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  const handleUpload = () => {
    setImageUploaded(true);
    setTimeout(() => {
      setAnalyzing(true);
      setTimeout(onComplete, Math.random() * 2000 + 3000);
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 space-y-8">
      <div className="flex items-center justify-center space-x-3">
        <Camera className="w-12 h-12 text-purple-500" />
        <h1 className="text-4xl font-bold text-purple-500">
          Celebrity Twin Finder
        </h1>
      </div>

      {!imageUploaded ? (
        <Card className="p-4">
          <CardHeader>
            <CardTitle className="text-3xl">
              99% Accurate Celebrity Match
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed rounded-lg p-12 text-center space-y-6">
              <Upload className="w-20 h-20 mx-auto text-gray-400" />
              <p className="text-lg text-gray-500">
                Drop your photo here or click to upload
              </p>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6"
                onClick={handleUpload}
              >
                Upload Photo
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
                <h2 className="text-3xl font-semibold">AI Analysis...</h2>
                <p className="text-xl text-gray-600">
                  {analyzing
                    ? "Finding your celebrity look-alike..."
                    : "Processing image..."}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
