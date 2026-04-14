'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ChomskyDiagram from '@/components/ChomskyDiagram';
import HierarchyDetails from '@/components/HierarchyDetails';
import { Sparkles } from 'lucide-react';

export default function Home() {
  const [activeTier, setActiveTier] = useState('type3');

  return (
    <main className="container">
      {/* Hero Section */}
      <section style={{ textAlign: 'center', marginBottom: '4rem', marginTop: '2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex-center animate-float" style={{ gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-type1)' }}>
            <Sparkles size={24} />
            <span style={{ fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Theoretical Computer Science</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', margin: '0 0 1rem 0' }}>
            The <span className="gradient-text">Chomsky Hierarchy</span>
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem' }}>
            A beautiful, interactive visualization of formal languages and their corresponding automata constraints. Click on a tier in the diagram to explore.
          </p>
        </motion.div>
      </section>

      {/* Main Content Area */}
      <section style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '4rem', 
        alignItems: 'center', 
        justifyContent: 'center',
        paddingBottom: '4rem'
      }}>
        {/* Left/Top: Interactive Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}
        >
          <ChomskyDiagram activeTier={activeTier} setActiveTier={setActiveTier} />
        </motion.div>

        {/* Right/Bottom: Specific Details Panels */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ flex: '1 1 500px', display: 'flex', justifyContent: 'center' }}
        >
          <HierarchyDetails activeTier={activeTier} />
        </motion.div>
      </section>

      {/* Footer Instructions for Student Use */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{ textAlign: 'center', padding: '2rem 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}
      >
        <p>Built with Next.js & Framer Motion to visualize complex theoretical concepts.</p>
      </motion.footer>
    </main>
  );
}
