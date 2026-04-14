"use client";

import React from "react";

// Simple SVG-based Chomsky hierarchy diagram
export default function ChomskyDiagram() {
  // Helper to scroll to section
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-row items-center justify-center mb-10 animate-fade-in gap-8">
      <div className="relative">
        <svg width="520" height="420" viewBox="0 0 520 420" style={{ cursor: 'pointer' }}>
          {/* Recursively Enumerable (outermost) */}
          <ellipse
            cx="260" cy="210" rx="240" ry="180"
            fill="#a78bfa" stroke="#7c3aed" strokeWidth="3"
            onClick={() => scrollToSection('recursively-enumerable')}
            onMouseOver={e => (e.currentTarget.style.opacity = '0.7')}
            onMouseOut={e => (e.currentTarget.style.opacity = '1')}
            style={{ transition: 'opacity 0.2s' }}
          />
          {/* Context-Sensitive */}
          <ellipse
            cx="260" cy="210" rx="190" ry="140"
            fill="#fde047" stroke="#eab308" strokeWidth="3"
            onClick={() => scrollToSection('context-sensitive')}
            onMouseOver={e => (e.currentTarget.style.opacity = '0.7')}
            onMouseOut={e => (e.currentTarget.style.opacity = '1')}
            style={{ transition: 'opacity 0.2s' }}
          />
          {/* Context-Free */}
          <ellipse
            cx="260" cy="210" rx="130" ry="90"
            fill="#4ade80" stroke="#22c55e" strokeWidth="3"
            onClick={() => scrollToSection('context-free')}
            onMouseOver={e => (e.currentTarget.style.opacity = '0.7')}
            onMouseOut={e => (e.currentTarget.style.opacity = '1')}
            style={{ transition: 'opacity 0.2s' }}
          />
          {/* Regular */}
          <ellipse
            cx="260" cy="210" rx="70" ry="40"
            fill="#60a5fa" stroke="#2563eb" strokeWidth="3"
            onClick={() => scrollToSection('regular')}
            onMouseOver={e => (e.currentTarget.style.opacity = '0.7')}
            onMouseOut={e => (e.currentTarget.style.opacity = '1')}
            style={{ transition: 'opacity 0.2s' }}
          />
        </svg>
      </div>
      {/* Bulleted grammar list */}
      <ul className="ml-8 space-y-4 text-lg font-semibold">
        <li className="text-blue-600">• Regular</li>
        <li className="text-green-600">• Context-Free</li>
        <li className="text-yellow-600">• Context-Sensitive</li>
        <li className="text-purple-600">• Recursively Enumerable</li>
      </ul>
    </div>
  );
}
