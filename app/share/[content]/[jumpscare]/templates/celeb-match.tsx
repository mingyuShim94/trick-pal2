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
    <div className="max-w-md mx-auto p-4 space-y-4">
      <div className="flex items-center justify-center space-x-2">
        <Camera className="w-8 h-8 text-purple-500" />
        <h1 className="text-2xl font-bold text-purple-500">
          Celebrity Twin Finder
        </h1>
      </div>

      {!imageUploaded ? (
        <Card>
          <CardHeader>
            <CardTitle>99% Accurate Celebrity Match</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed rounded-lg p-8 text-center space-y-4">
              <Upload className="w-12 h-12 mx-auto text-gray-400" />
              <p className="text-sm text-gray-500">
                Drop your photo here or click to upload
              </p>
              <Button variant="outline" onClick={handleUpload}>
                Upload Photo
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-8 text-center">
              <div className="w-24 h-24 mx-auto rounded-full border-4 border-t-purple-500 animate-spin" />
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">AI Analysis...</h2>
                <p className="text-gray-600">
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
