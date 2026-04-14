'use client';
import { motion } from 'framer-motion';

export default function AutomataDiagram({ type }) {
  // Styles for the SVG elements matching our global colors
  const strokeColor = `var(--color-${type})`;
  const fillColor = `rgba(255, 255, 255, 0.05)`;
  
  if (type === 'type3') {
    // Finite State Automaton
    return (
      <svg viewBox="0 0 400 150" style={{ width: '100%', height: 'auto', display: 'block' }}>
        <defs>
          <marker id="arrow3" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill={strokeColor} />
          </marker>
        </defs>
        {/* Start arrow */}
        <path d="M 30 75 L 70 75" stroke={strokeColor} strokeWidth="2" markerEnd="url(#arrow3)" fill="none" />
        
        {/* State q0 */}
        <circle cx="95" cy="75" r="25" fill={fillColor} stroke={strokeColor} strokeWidth="2" />
        <text x="95" y="80" textAnchor="middle" fill="#fff" fontSize="14">q0</text>

        {/* Transition q0 -> q1 */}
        <path d="M 120 75 L 180 75" stroke={strokeColor} strokeWidth="2" markerEnd="url(#arrow3)" fill="none" />
        <text x="150" y="65" textAnchor="middle" fill="#94a3b8" fontSize="12">a, b</text>

        {/* State q1 */}
        <circle cx="205" cy="75" r="25" fill={fillColor} stroke={strokeColor} strokeWidth="2" />
        <text x="205" y="80" textAnchor="middle" fill="#fff" fontSize="14">q1</text>

        {/* Transition q1 -> q2 */}
        <path d="M 230 75 L 290 75" stroke={strokeColor} strokeWidth="2" markerEnd="url(#arrow3)" fill="none" />
        <text x="260" y="65" textAnchor="middle" fill="#94a3b8" fontSize="12">c</text>

        {/* State q2 (Accepting) */}
        <circle cx="315" cy="75" r="25" fill={fillColor} stroke={strokeColor} strokeWidth="2" />
        <circle cx="315" cy="75" r="20" fill="none" stroke={strokeColor} strokeWidth="1" />
        <text x="315" y="80" textAnchor="middle" fill="#fff" fontSize="14">qf</text>
      </svg>
    );
  }

  if (type === 'type2') {
    // Pushdown Automaton
    return (
      <svg viewBox="0 0 400 200" style={{ width: '100%', height: 'auto', display: 'block' }}>
        <defs>
          <marker id="arrow2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill={strokeColor} />
          </marker>
        </defs>
        
        {/* FSA Part */}
        <rect x="50" y="60" width="100" height="50" rx="8" fill={fillColor} stroke={strokeColor} strokeWidth="2" />
        <text x="100" y="90" textAnchor="middle" fill="#fff" fontSize="14">State Control</text>

        {/* Input Tape */}
        <rect x="50" y="20" width="150" height="25" fill={fillColor} stroke="#94a3b8" strokeWidth="1" />
        <line x1="100" y1="20" x2="100" y2="45" stroke="#94a3b8" strokeWidth="1" />
        <line x1="150" y1="20" x2="150" y2="45" stroke="#94a3b8" strokeWidth="1" />
        <text x="75" y="38" textAnchor="middle" fill="#fff" fontSize="14">a</text>
        <text x="125" y="38" textAnchor="middle" fill="#fff" fontSize="14">b</text>
        <text x="175" y="38" textAnchor="middle" fill="#fff" fontSize="14">c</text>

        {/* Read head */}
        <path d="M 125 45 L 125 60" stroke={strokeColor} strokeWidth="2" markerEnd="url(#arrow2)" />

        {/* Stack */}
        <path d="M 270 50 L 270 160 L 330 160 L 330 50" fill="none" stroke={strokeColor} strokeWidth="2" />
        <rect x="275" y="130" width="50" height="25" fill={strokeColor} opacity="0.3" />
        <text x="300" y="148" textAnchor="middle" fill="#fff" fontSize="14">Z0</text>
        <rect x="275" y="100" width="50" height="25" fill={strokeColor} opacity="0.6" />
        <text x="300" y="118" textAnchor="middle" fill="#fff" fontSize="14">X</text>
        <text x="300" y="180" textAnchor="middle" fill="#94a3b8" fontSize="14">LIFO Stack</text>

        {/* Push/Pop arrows */}
        <path d="M 150 100 L 260 100" stroke={strokeColor} strokeWidth="2" markerEnd="url(#arrow2)" fill="none" strokeDasharray="5,5" />
        <text x="205" y="93" textAnchor="middle" fill="#94a3b8" fontSize="12">Push/Pop</text>
      </svg>
    );
  }

  if (type === 'type1') {
    // Linear Bounded Automaton
    return (
      <svg viewBox="0 0 400 150" style={{ width: '100%', height: 'auto', display: 'block' }}>
        <defs>
          <marker id="arrow1" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill={strokeColor} />
          </marker>
        </defs>
        
        <rect x="150" y="90" width="100" height="40" rx="8" fill={fillColor} stroke={strokeColor} strokeWidth="2" />
        <text x="200" y="115" textAnchor="middle" fill="#fff" fontSize="14">Control</text>

        {/* Bounded Tape */}
        <rect x="40" y="30" width="320" height="30" fill={fillColor} stroke="#94a3b8" strokeWidth="2" />
        {/* Cells */}
        {[80, 120, 160, 200, 240, 280, 320].map(x => (
          <line key={x} x1={x} y1="30" x2={x} y2="60" stroke="#94a3b8" strokeWidth="2" />
        ))}
        {/* Bounds */}
        <text x="60" y="50" textAnchor="middle" fill={strokeColor} fontSize="16" fontWeight="bold">├</text>
        <text x="100" y="50" textAnchor="middle" fill="#fff" fontSize="14">a</text>
        <text x="140" y="50" textAnchor="middle" fill="#fff" fontSize="14">b</text>
        <text x="180" y="50" textAnchor="middle" fill="#fff" fontSize="14">b</text>
        <text x="220" y="50" textAnchor="middle" fill="#fff" fontSize="14">c</text>
        <text x="260" y="50" textAnchor="middle" fill="#fff" fontSize="14">c</text>
        <text x="300" y="50" textAnchor="middle" fill="#fff" fontSize="14">c</text>
        <text x="340" y="50" textAnchor="middle" fill={strokeColor} fontSize="16" fontWeight="bold">┤</text>

        {/* Head */}
        <path d="M 200 90 L 200 65" stroke={strokeColor} strokeWidth="2" markerEnd="url(#arrow1)" fill="none" />
        <path d="M 200 65 L 200 90" stroke={strokeColor} strokeWidth="2" markerEnd="url(#arrow1)" fill="none" />
        <text x="245" y="80" textAnchor="middle" fill="#94a3b8" fontSize="12">Read/Write</text>
      </svg>
    );
  }

  // Type 0
  return (
    <svg viewBox="0 0 400 150" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <defs>
        <marker id="arrow0" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={strokeColor} />
        </marker>
        {/* fade for infinite tape */}
        <linearGradient id="fadeLeft" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--glass-bg)" stopOpacity="0" />
          <stop offset="100%" stopColor="var(--glass-bg)" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="fadeRight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--glass-bg)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--glass-bg)" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      <rect x="150" y="90" width="100" height="40" rx="8" fill={fillColor} stroke={strokeColor} strokeWidth="2" />
      <text x="200" y="115" textAnchor="middle" fill="#fff" fontSize="14">State Control</text>

      {/* Infinite Tape */}
      <rect x="20" y="30" width="360" height="30" fill={fillColor} stroke="#94a3b8" strokeWidth="1" />
      {/* Cells */}
      {[60, 100, 140, 180, 220, 260, 300, 340].map(x => (
        <line key={x} x1={x} y1="30" x2={x} y2="60" stroke="#94a3b8" strokeWidth="1" />
      ))}
      <text x="40" y="50" textAnchor="middle" fill="#fff" fontSize="14">~</text>
      <text x="80" y="50" textAnchor="middle" fill="#fff" fontSize="14">_</text>
      <text x="120" y="50" textAnchor="middle" fill="#fff" fontSize="14">1</text>
      <text x="160" y="50" textAnchor="middle" fill="#fff" fontSize="14">0</text>
      <text x="200" y="50" textAnchor="middle" fill="#fff" fontSize="14">1</text>
      <text x="240" y="50" textAnchor="middle" fill="#fff" fontSize="14">1</text>
      <text x="280" y="50" textAnchor="middle" fill="#fff" fontSize="14">_</text>
      <text x="320" y="50" textAnchor="middle" fill="#fff" fontSize="14">_</text>
      <text x="360" y="50" textAnchor="middle" fill="#fff" fontSize="14">~</text>

      {/* Tape infinite ends */}
      <rect x="10" y="28" width="40" height="34" fill="url(#fadeLeft)" />
      <rect x="350" y="28" width="40" height="34" fill="url(#fadeRight)" />

      {/* Head */}
      <path d="M 200 90 L 200 65" stroke={strokeColor} strokeWidth="2" markerEnd="url(#arrow0)" fill="none" />
      <path d="M 200 65 L 200 90" stroke={strokeColor} strokeWidth="2" markerEnd="url(#arrow0)" fill="none" />
      <path d="M 200 65 L 180 65" stroke={strokeColor} strokeWidth="2" markerEnd="url(#arrow0)" fill="none" />
      <path d="M 200 65 L 220 65" stroke={strokeColor} strokeWidth="2" markerEnd="url(#arrow0)" fill="none" />
      <text x="200" y="80" textAnchor="middle" fill="#94a3b8" fontSize="12" dominantBaseline="middle" dy="-3" dx="-30">L/R</text>
    </svg>
  );
}
