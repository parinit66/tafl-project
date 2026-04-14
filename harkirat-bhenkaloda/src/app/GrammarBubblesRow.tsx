"use client";
import React from "react";
import GrammarBubble from "./GrammarBubble";


// Aesthetic SVGs for machines
const DFA = () => (
  <svg width="300" height="110">
    {/* States */}
    <circle cx="50" cy="55" r="22" fill="#e0e7ff" stroke="#2563eb" strokeWidth="3" />
    <text x="50" y="60" textAnchor="middle" fontSize="16" fill="#2563eb" fontWeight="bold">q0</text>
    <circle cx="150" cy="55" r="22" fill="#fff" stroke="#2563eb" strokeWidth="3" />
    <text x="150" y="60" textAnchor="middle" fontSize="16" fill="#2563eb">q1</text>
    <circle cx="250" cy="55" r="22" fill="#fff" stroke="#2563eb" strokeWidth="3" />
    <text x="250" y="60" textAnchor="middle" fontSize="16" fill="#2563eb">q2</text>
    {/* Accept state double circle */}
    <circle cx="250" cy="55" r="18" fill="none" stroke="#2563eb" strokeWidth="2" />
    {/* Arrows */}
    <path d="M72,55 Q100,20 150,55" fill="none" stroke="#2563eb" strokeWidth="2" strokeOpacity="0.5" markerEnd="url(#arrow)" />
    <path d="M172,55 Q200,20 250,55" fill="none" stroke="#2563eb" strokeWidth="2" strokeOpacity="0.5" markerEnd="url(#arrow)" />
    {/* Loop on q1 */}
    <path d="M150,33 Q200,10 150,77" fill="none" stroke="#2563eb" strokeWidth="2" strokeOpacity="0.5" markerEnd="url(#arrow)" />
    {/* Start arrow */}
    <path d="M10,55 L28,55" stroke="#2563eb" strokeWidth="2" strokeOpacity="0.5" markerEnd="url(#arrow)" />
    <defs>
      <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,8 L8,4 z" fill="#2563eb" />
      </marker>
    </defs>
    {/* Labels */}
    <text x="75" y="30" fontSize="12" fill="#2563eb">a</text>
    <text x="145" y="30" fontSize="12" fill="#2563eb">b</text>
    <text x="120" y="15" fontSize="12" fill="#2563eb">a</text>
    <text x="25" y="38" fontSize="12" fill="#2563eb">start</text>
  </svg>
);
const PDA = () => (
  <svg width="340" height="130">
    {/* States */}
    <circle cx="60" cy="65" r="22" fill="#dcfce7" stroke="#22c55e" strokeWidth="3" />
    <text x="60" y="70" textAnchor="middle" fontSize="16" fill="#22c55e" fontWeight="bold">q0</text>
    <circle cx="170" cy="65" r="22" fill="#fff" stroke="#22c55e" strokeWidth="3" />
    <text x="170" y="70" textAnchor="middle" fontSize="16" fill="#22c55e">q1</text>
    <circle cx="280" cy="65" r="22" fill="#fff" stroke="#22c55e" strokeWidth="3" />
    <text x="280" y="70" textAnchor="middle" fontSize="16" fill="#22c55e">q2</text>
    {/* Stack */}
    <rect x="270" y="100" width="40" height="18" rx="4" fill="#fff" stroke="#22c55e" strokeWidth="2" />
    <text x="290" y="113" textAnchor="middle" fontSize="12" fill="#22c55e">Stack</text>
    {/* Arrows */}
    <path d="M82,65 Q120,20 170,65" fill="none" stroke="#22c55e" strokeWidth="2" strokeOpacity="0.5" markerEnd="url(#arrowpda)" />
    <path d="M192,65 Q230,20 280,65" fill="none" stroke="#22c55e" strokeWidth="2" strokeOpacity="0.5" markerEnd="url(#arrowpda)" />
    {/* Stack push/pop arrows */}
    <path d="M280,97 L290,100" stroke="#22c55e" strokeWidth="2" strokeOpacity="0.5" markerEnd="url(#arrowpda)" />
    <path d="M290,118 L280,120" stroke="#22c55e" strokeWidth="2" strokeOpacity="0.5" markerEnd="url(#arrowpda)" />
    <defs>
      <marker id="arrowpda" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,8 L8,4 z" fill="#22c55e" />
      </marker>
    </defs>
    {/* Labels */}
    <text x="75" y="40" fontSize="12" fill="#22c55e">a, Z/az</text>
    <text x="145" y="40" fontSize="12" fill="#22c55e">b, a/a</text>
    <text x="200" y="75" fontSize="12" fill="#22c55e">push</text>
    <text x="200" y="110" fontSize="12" fill="#22c55e">pop</text>
  </svg>
);
const LBA = () => (
  <svg width="340" height="120">
    {/* States */}
    <circle cx="60" cy="60" r="22" fill="#fef9c3" stroke="#eab308" strokeWidth="3" />
    <text x="60" y="65" textAnchor="middle" fontSize="16" fill="#eab308" fontWeight="bold">q0</text>
    <circle cx="170" cy="60" r="22" fill="#fff" stroke="#eab308" strokeWidth="3" />
    <text x="170" y="65" textAnchor="middle" fontSize="16" fill="#eab308">q1</text>
    <circle cx="280" cy="60" r="22" fill="#fff" stroke="#eab308" strokeWidth="3" />
    <text x="280" y="65" textAnchor="middle" fontSize="16" fill="#eab308">q2</text>
    {/* Tape */}
    <rect x="120" y="100" width="120" height="14" rx="4" fill="#fff" stroke="#eab308" strokeWidth="2" />
    <text x="180" y="112" textAnchor="middle" fontSize="12" fill="#eab308">Tape: a b c</text>
    {/* Arrows */}
    <path d="M82,60 Q120,20 170,60" fill="none" stroke="#eab308" strokeWidth="2" strokeOpacity="0.5" markerEnd="url(#arrowlba)" />
    <path d="M192,60 Q230,20 280,60" fill="none" stroke="#eab308" strokeWidth="2" strokeOpacity="0.5" markerEnd="url(#arrowlba)" />
    {/* Head movement arrows */}
    <path d="M170,100 L170,84" stroke="#eab308" strokeWidth="2" strokeOpacity="0.5" markerEnd="url(#arrowlba)" />
    <path d="M280,100 L280,84" stroke="#eab308" strokeWidth="2" strokeOpacity="0.5" markerEnd="url(#arrowlba)" />
    <defs>
      <marker id="arrowlba" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,8 L8,4 z" fill="#eab308" />
      </marker>
    </defs>
    {/* Labels */}
    <text x="75" y="35" fontSize="12" fill="#eab308">a</text>
    <text x="145" y="35" fontSize="12" fill="#eab308">b</text>
    <text x="120" y="60" fontSize="12" fill="#eab308">R</text>
    <text x="180" y="60" fontSize="12" fill="#eab308">L</text>
  </svg>
);
const TM = () => (
  <svg width="500" height="180">
    {/* States */}
    <circle cx="70" cy="90" r="28" fill="#ede9fe" stroke="#7c3aed" strokeWidth="3" />
    <text x="70" y="95" textAnchor="middle" fontSize="18" fill="#7c3aed" fontWeight="bold">Q0</text>
    <circle cx="170" cy="90" r="24" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2" />
    <text x="170" y="95" textAnchor="middle" fontSize="16" fill="#7c3aed">Q1</text>
    <circle cx="270" cy="90" r="24" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2" />
    <text x="270" y="95" textAnchor="middle" fontSize="16" fill="#7c3aed">Q2</text>
    <circle cx="370" cy="90" r="24" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2" />
    <text x="370" y="95" textAnchor="middle" fontSize="16" fill="#7c3aed">Q3</text>
    <circle cx="440" cy="140" r="18" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2" />
    <text x="440" y="145" textAnchor="middle" fontSize="14" fill="#7c3aed">Q4</text>
    <circle cx="480" cy="90" r="16" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2" />
    <text x="480" y="95" textAnchor="middle" fontSize="13" fill="#7c3aed">Q5</text>
    {/* Tape */}
    <rect x="120" y="150" width="220" height="18" rx="6" fill="#fff" stroke="#7c3aed" strokeWidth="2" />
    <text x="230" y="164" textAnchor="middle" fontSize="14" fill="#7c3aed">Tape: 0 1 X B C</text>
    {/* Arrows */}
    <path d="M98,90 Q130,40 170,90" fill="none" stroke="#7c3aed" strokeWidth="2" strokeOpacity="0.5" markerEnd="url(#arrowtm)" />
    <path d="M198,90 Q230,40 270,90" fill="none" stroke="#7c3aed" strokeWidth="2" strokeOpacity="0.5" markerEnd="url(#arrowtm)" />
    <path d="M298,90 Q330,40 370,90" fill="none" stroke="#7c3aed" strokeWidth="2" strokeOpacity="0.5" markerEnd="url(#arrowtm)" />
    <path d="M388,90 Q420,120 440,140" fill="none" stroke="#7c3aed" strokeWidth="2" strokeOpacity="0.5" markerEnd="url(#arrowtm)" />
    <path d="M440,140 Q470,120 480,90" fill="none" stroke="#7c3aed" strokeWidth="2" strokeOpacity="0.5" markerEnd="url(#arrowtm)" />
    {/* Loop on Q4 */}
    <path d="M440,158 Q470,170 440,140" fill="none" stroke="#7c3aed" strokeWidth="2" strokeOpacity="0.5" markerEnd="url(#arrowtm)" />
    {/* Start arrow */}
    <path d="M10,90 L38,90" stroke="#7c3aed" strokeWidth="2" strokeOpacity="0.5" markerEnd="url(#arrowtm)" />
    <defs>
      <marker id="arrowtm" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,8 L8,4 z" fill="#7c3aed" />
      </marker>
    </defs>
    {/* Labels */}
    <text x="85" y="50" fontSize="12" fill="#7c3aed">0/X,R</text>
    <text x="155" y="50" fontSize="12" fill="#7c3aed">C/C,R</text>
    <text x="225" y="50" fontSize="12" fill="#7c3aed">B/O,L</text>
    <text x="300" y="100" fontSize="12" fill="#7c3aed">C,B/R</text>
    <text x="340" y="60" fontSize="12" fill="#7c3aed">X/X/R</text>
    <text x="320" y="140" fontSize="12" fill="#7c3aed">0/0/L</text>
    <text x="25" y="63" fontSize="12" fill="#7c3aed">start</text>
  </svg>
);

export default function GrammarBubblesRow() {
  return (
    <div className="w-full flex flex-col gap-8 py-6 px-2 items-center">
      <GrammarBubble
        title="Regular"
        color="blue"
        description="Regular languages are the simplest class in the Chomsky hierarchy. They can be described by regular expressions and are recognized by deterministic or nondeterministic finite automata (DFA/NFA). Regular languages cannot count or match nested structures."
        example={
          <div>
            <div className="mb-1">L = {'{'} w | w ∈ (ab)* {'}'}</div>
            <div className="text-xs text-zinc-500">Example: ababab, ε, but not aba or abb</div>
          </div>
        }
        machine={<DFA />}
      />
      <GrammarBubble
        title="Context-Free"
        color="green"
        description="Context-free languages are more powerful than regular languages. They are described by context-free grammars and recognized by pushdown automata (PDA), which have a stack for memory. These languages can model nested structures, such as balanced parentheses."
        example={
          <div>
            <div className="mb-1">L = {'{'} a<sup>n</sup>b<sup>n</sup> | n ≥ 0 {'}'}</div>
            <div className="text-xs text-zinc-500">Example: ab, aabb, aaabbb, but not aab or abb</div>
          </div>
        }
        machine={<PDA />}
      />
      <GrammarBubble
        title="Context-Sensitive"
        color="yellow"
        description="Context-sensitive languages are described by context-sensitive grammars and recognized by linear bounded automata (LBA). They can express more complex relationships, such as equal numbers of different symbols, and are strictly more powerful than context-free languages."
        example={
          <div>
            <div className="mb-1">L = {'{'} a<sup>n</sup>b<sup>n</sup>c<sup>n</sup> | n ≥ 0 {'}'}</div>
            <div className="text-xs text-zinc-500">Example: abc, aabbcc, but not aabcc or abcc</div>
          </div>
        }
        machine={<LBA />}
      />
      <GrammarBubble
        title="Recursively Enumerable"
        color="purple"
        description="Recursively enumerable languages are the most general class in the Chomsky hierarchy. They are described by unrestricted grammars and recognized by Turing machines. These languages include all problems that can be solved by an algorithm, but not all are decidable."
        example={
          <div>
            <div className="mb-1">L = {'{'} w | Turing machine M accepts w {'}'}</div>
            <div className="text-xs text-zinc-500">Example: All valid programs in a programming language</div>
          </div>
        }
        machine={<TM />}
      />
    </div>
  );
}
