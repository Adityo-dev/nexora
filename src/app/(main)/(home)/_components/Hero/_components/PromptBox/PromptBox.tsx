'use client';

import { AudioLines, Mic, Plus, SlidersHorizontal } from 'lucide-react';
import { useEffect, useState } from 'react';

const placeholders = [
  'Draft a LinkedIn message to connect...',
  'Write a prompt for a creative logo...',
  'Explain quantum physics to a 5-year old...',
];

export const PromptBox = () => {
  const [text, setText] = useState('');
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const currentFullText = placeholders[placeholderIdx];
    if (charIdx < currentFullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentFullText[charIdx]);
        setCharIdx((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText('');
        setCharIdx(0);
        setPlaceholderIdx((prev) => (prev + 1) % placeholders.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIdx, placeholderIdx]);

  return (
    <div className="w-full max-w-160 rounded-md border border-white/10 bg-[#0c0c0c]/40 p-4 shadow-md backdrop-blur-[3px]">
      <div className="min-h-10 text-[15px] font-medium text-zinc-400 italic">
        &quot;{text}
        <span className="animate-pulse">|</span>&quot;
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4">
        <div className="flex items-center gap-4 text-zinc-500">
          <button className="flex items-center gap-2 text-[12px] font-bold transition-colors">
            <Plus size={16} className="cursor-pointer hover:text-white" />
            <span className="flex cursor-pointer items-center gap-1 hover:text-white">
              <SlidersHorizontal size={14} />
              Tools
            </span>
          </button>
        </div>

        <div className="flex items-center gap-4 text-zinc-500 hover:text-white">
          <Mic size={18} className="cursor-pointer transition-colors hover:text-white" />
          <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-zinc-800 text-white">
            <AudioLines size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};
