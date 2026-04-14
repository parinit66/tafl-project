'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { chomskyData } from '../data/chomsky';
import { Network, Settings, BookOpen, Layers } from 'lucide-react';
import AutomataDiagram from './AutomataDiagram';

export default function HierarchyDetails({ activeTier }) {
  const data = chomskyData.find(d => d.id === activeTier) || chomskyData[0];

  return (
    <div style={{ padding: '1rem', width: '100%', maxWidth: '600px' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={data.id}
          initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
          transition={{ duration: 0.4 }}
          className={`glass-panel info-card ${data.colorClass}`}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div className={`metric-badge border-${data.colorClass} bg-${data.colorClass}`}>
              <Layers size={16} />
              <span className={`text-${data.colorClass}`}>{data.tier}</span>
            </div>
            <h2 style={{ fontSize: '2rem', margin: 0 }}>{data.name}</h2>
          </div>

          <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            {data.description}
          </p>

          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {/* Automaton Section */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--text-color)' }}>
                <Settings size={20} className={`text-${data.colorClass}`} />
                <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Accepting Machine</h3>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <p style={{ margin: '0 0 1rem 0', fontWeight: 600 }}>{data.machine}</p>
                <AutomataDiagram type={data.id} />
              </div>
            </div>

            {/* Grammar Section */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--text-color)' }}>
                <Network size={20} className={`text-${data.colorClass}`} />
                <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Grammar Rules</h3>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontWeight: 600, marginBottom: '4px' }}>{data.grammar}</div>
                <div style={{ fontFamily: 'monospace', color: 'var(--text-muted)' }}>{data.rule}</div>
              </div>
            </div>

            {/* Examples Section */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--text-color)' }}>
                <BookOpen size={20} className={`text-${data.colorClass}`} />
                <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Examples</h3>
              </div>
              <ul className="examples-list">
                {data.examples.map((example, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                  >
                    {example}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
