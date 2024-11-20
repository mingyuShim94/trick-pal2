"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heart, Instagram, Twitter, Facebook, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { TemplateProps } from "./index";

export const LoveStyle = ({ onComplete }: TemplateProps) => {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (step === 2) {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            clearInterval(timer);
            setTimeout(onComplete, 500);
            return 100;
          }
          return Math.min(oldProgress + 1, 100);
        });
      }, 50);
      return () => clearInterval(timer);
    }
  }, [step, onComplete]);

  const startAnalysis = () => setStep(1);
  const connectSocial = () => setStep(2);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 p-4">
      <Card className="w-full max-w-2xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-600 p-6">
          <CardTitle className="text-4xl font-bold text-white flex items-center justify-center space-x-3">
            <Heart className="w-10 h-10" />
            <span>Love Style AI</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="welcome"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center space-y-6"
              >
                <h2 className="text-2xl font-semibold text-gray-800">
                  Discover Your Unique Dating Style
                </h2>
                <p className="text-lg text-gray-600">
                  Our AI analyzes your social media activity to reveal your
                  dating patterns and compatibility insights.
                </p>
                <Button
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-lg px-8 py-6"
                  size="lg"
                  onClick={startAnalysis}
                >
                  Start Your Love Journey
                </Button>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="connect"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-semibold text-gray-800 text-center">
                  Connect Your Social Media
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Instagram, color: "bg-pink-500" },
                    { icon: Twitter, color: "bg-blue-400" },
                    { icon: Facebook, color: "bg-blue-600" },
                  ].map(({ icon: Icon, color }, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className={`h-20 ${color} text-white hover:brightness-110 transition-all duration-300`}
                      onClick={connectSocial}
                    >
                      <Icon className="w-8 h-8" />
                    </Button>
                  ))}
                </div>
                <p className="text-sm text-gray-500 text-center">
                  Connect at least one social media account to begin the
                  analysis.
                </p>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8 text-center"
              >
                <div className="relative w-32 h-32 mx-auto">
                  <svg
                    className="animate-spin w-full h-full"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#EC4899"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray="283"
                      strokeDashoffset={283 - (progress / 100) * 283}
                    />
                  </svg>
                  <Loader2 className="w-12 h-12 text-pink-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    AI Analysis in Progress
                  </h2>
                  <p className="text-lg text-gray-600">
                    Uncovering your love patterns...
                  </p>
                </div>
                <Progress value={progress} className="w-full" />
                <p className="text-sm text-gray-500">
                  This may take a few moments. Please don&apos;t close the page.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  );
};
