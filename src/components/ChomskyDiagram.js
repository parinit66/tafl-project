'use client';

import { motion } from 'framer-motion';
import { chomskyData } from '../data/chomsky';
import './components.css'; // We'll create this to hold some component specific CSS

export default function ChomskyDiagram({ activeTier, setActiveTier }) {
  return (
    <div className="diagram-container flex-center">
      <div className="nested-diagram">
        {/* Type 0 - Outermost */}
        <motion.div 
          className={`layer layer-type0 ${activeTier === 'type0' ? 'active' : ''}`}
          onClick={(e) => { e.stopPropagation(); setActiveTier('type0'); }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <span className="layer-label text-type0">Type 0 (RE)</span>
          
          {/* Type 1 */}
          <motion.div 
            className={`layer layer-type1 ${activeTier === 'type1' ? 'active' : ''}`}
            onClick={(e) => { e.stopPropagation(); setActiveTier('type1'); }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <span className="layer-label text-type1">Type 1 (CSL)</span>
            
            {/* Type 2 */}
            <motion.div 
              className={`layer layer-type2 ${activeTier === 'type2' ? 'active' : ''}`}
              onClick={(e) => { e.stopPropagation(); setActiveTier('type2'); }}
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <span className="layer-label text-type2">Type 2 (CFL)</span>
              
              {/* Type 3 - Innermost */}
              <motion.div 
                className={`layer layer-type3 ${activeTier === 'type3' ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); setActiveTier('type3'); }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="flex-center" style={{ height: '100%' }}>
                  <span className="layer-label text-type3" style={{ position: 'relative', top: 0 }}>Type 3 (RL)</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
