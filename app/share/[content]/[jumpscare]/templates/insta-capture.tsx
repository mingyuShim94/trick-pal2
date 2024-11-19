"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Instagram, Camera, Search, Users, Eye } from "lucide-react";
import type { TemplateProps } from "./index";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

export const InstaCapture = ({ onComplete }: TemplateProps) => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const startAnalysis = () => {
    setLoading(true);
    setStep(1);
  };

  useEffect(() => {
    if (step === 1) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            setStep(2);
            return 100;
          }
          return prevProgress + 1;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [step]);

  useEffect(() => {
    if (step === 2) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [step, onComplete]);

  const features = [
    {
      icon: <Camera className="w-6 h-6 text-pink-500" />,
      text: "Analyze story records from the last 30 days",
    },
    {
      icon: <Search className="w-6 h-6 text-purple-500" />,
      text: "Using screenshot detection technology",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      text: "View list of users who captured",
    },
  ];

  const mockResults = [
    { name: "Alex", username: "alex123", captured: 3 },
    { name: "Sam", username: "samantha22", captured: 2 },
    { name: "Jordan", username: "jord_an", captured: 1 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto p-8 space-y-8"
    >
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="flex items-center justify-center space-x-3"
      >
        <Instagram className="w-12 h-12 text-gradient-to-r from-purple-500 to-pink-500" />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          InstaCapture
        </h1>
      </motion.div>

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Card className="p-4 bg-gradient-to-br from-white to-gray-50">
              <CardHeader>
                <CardTitle className="text-3xl text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                  Story Screenshot Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-8 text-center space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.2 }}
                        className="p-4 rounded-lg border bg-white shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex flex-col items-center space-y-3">
                          {feature.icon}
                          <p className="text-sm text-gray-600">
                            {feature.text}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <Button
                    className="w-full text-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all"
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
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <Card className="p-4 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="pt-8">
                <div className="space-y-12 text-center py-8">
                  <div className="relative w-32 h-32 mx-auto">
                    <div className="absolute inset-0 rounded-full border-4 border-blue-200 opacity-20" />
                    <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 animate-spin" />
                    <div
                      className="absolute inset-0 rounded-full border-4 border-l-purple-500 animate-spin"
                      style={{ animationDuration: "3s" }}
                    />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-3xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                      Analyzing...
                    </h2>
                    <p className="text-xl text-gray-600">
                      Checking story screenshot records
                    </p>
                    <Progress value={progress} className="w-full" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <Card className="p-4 bg-gradient-to-br from-white to-gray-50">
              <CardHeader>
                <CardTitle className="text-3xl text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                  Analysis Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-center text-lg text-gray-600">
                    We found {mockResults.length} users who captured your
                    stories:
                  </p>
                  {mockResults.map((user, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-center justify-between p-4 rounded-lg border bg-white shadow-sm"
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage
                            src={`https://i.pravatar.cc/150?u=${user.username}`}
                          />
                          <AvatarFallback>{user.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{user.name}</p>
                          <p className="text-sm text-gray-500">
                            @{user.username}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Eye className="w-5 h-5 text-gray-400" />
                        <span className="font-semibold">{user.captured}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
