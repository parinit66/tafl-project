"use client";
import React from "react";

interface GrammarBubbleProps {
  title: string;
  color: string;
  example: React.ReactNode;
  machine: React.ReactNode;
  description: string;
}

export default function GrammarBubble({ title, color, example, machine, description }: GrammarBubbleProps) {
  return (
    <div className={`w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border-2 border-${color}-400 flex flex-col items-center mx-auto p-8 mb-2 animate-fade-in transition-transform hover:scale-105 hover:shadow-2xl`}>
      <h3 className={`text-2xl font-extrabold mb-3 text-${color}-600 drop-shadow`}>{title}</h3>
      <div className="mb-3 text-zinc-700 dark:text-zinc-200 text-center text-lg leading-relaxed">{description}</div>
      <div className="mb-1 text-sm text-zinc-500 dark:text-zinc-400 font-semibold">Example:</div>
      <div className="mb-5 font-mono text-lg text-center text-zinc-800 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-lg shadow-inner">{example}</div>
      <hr className="w-full border-t border-dashed border-zinc-300 dark:border-zinc-700 my-4" />
      <div className="flex flex-col items-center scale-110 mt-2 mb-1">{machine}</div>
    </div>
  );
}
