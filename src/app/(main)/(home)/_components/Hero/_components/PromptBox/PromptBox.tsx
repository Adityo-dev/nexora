'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { AudioLines, Loader2, Mic, Plus, SendHorizontal, SlidersHorizontal } from 'lucide-react';
import { useEffect, useState } from 'react';

const placeholders = [
  'Draft a LinkedIn message to connect...',
  'Write a prompt for a creative logo...',
  'Explain quantum physics to a 5-year old...',
];

export const PromptBox = () => {
  const [inputValue, setInputValue] = useState('');
  const [animatedPlaceholder, setAnimatedPlaceholder] = useState('');
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState('');
  const [typedResponse, setTypedResponse] = useState('');

  // আপনার API Key সরাসরি এখানে
  const DIRECT_GEMINI_KEY = 'AIzaSyCATUSASflw9dAr4ktNoxQzHNcNqsAjtkY';

  // প্লেসহোল্ডার এনিমেশন
  useEffect(() => {
    if (inputValue.length > 0) return;
    const currentFullText = placeholders[placeholderIdx];
    if (charIdx < currentFullText.length) {
      const timeout = setTimeout(() => {
        setAnimatedPlaceholder((prev) => prev + currentFullText[charIdx]);
        setCharIdx((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setAnimatedPlaceholder('');
        setCharIdx(0);
        setPlaceholderIdx((prev) => (prev + 1) % placeholders.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIdx, placeholderIdx, inputValue]);

  // এআই রেসপন্স টাইপিং ইফেক্ট
  useEffect(() => {
    if (aiResponse) {
      setTypedResponse('');
      let i = 0;
      const interval = setInterval(() => {
        setTypedResponse((prev) => prev + aiResponse.charAt(i));
        i++;
        if (i >= aiResponse.length) clearInterval(interval);
      }, 10);
      return () => clearInterval(interval);
    }
  }, [aiResponse]);

  const handleSend = async () => {
    if (!inputValue || loading) return;

    setLoading(true);
    setAiResponse('');
    setTypedResponse('Thinking...');

    try {
      // আমরা v1 ব্যবহার করছি এবং একদম সরাসরি gemini-1.5-flash কল করছি
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${DIRECT_GEMINI_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: inputValue }] }],
          }),
        },
      );

      const data = await response.json();

      if (data.error) {
        setTypedResponse(`আপনার এই API Key-তে সমস্যা আছে। এরর: ${data.error.message}`);
        setLoading(false);
        return;
      }

      if (data.candidates && data.candidates[0].content) {
        const result = data.candidates[0].content.parts[0].text;
        setAiResponse(result);
        setInputValue('');
      }
    } catch (error) {
      setTypedResponse('ইন্টারনেট বা কানেকশনে সমস্যা হচ্ছে।');
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-160 flex-col gap-4">
      <div className="rounded-md border border-white/10 bg-[#0c0c0c]/40 p-4 shadow-md backdrop-blur-[3px]">
        <div className="relative min-h-12">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full resize-none bg-transparent text-[15px] font-medium text-white italic outline-none placeholder:text-zinc-500"
            rows={2}
            placeholder={inputValue === '' ? `"${animatedPlaceholder}"` : ''}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
          <div className="flex items-center gap-4 text-zinc-500">
            <button className="flex items-center gap-2 text-[12px] font-bold transition-colors hover:text-white">
              <Plus size={16} />
              <SlidersHorizontal size={14} />
              Tools
            </button>
          </div>

          <div className="flex items-center gap-4 text-zinc-500">
            {loading ? (
              <Loader2 size={18} className="animate-spin text-[#ff7a00]" />
            ) : inputValue ? (
              <SendHorizontal
                size={18}
                className="cursor-pointer text-[#ff7a00] transition-all hover:scale-110"
                onClick={handleSend}
              />
            ) : (
              <Mic size={18} className="cursor-pointer transition-colors hover:text-white" />
            )}
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-white">
              <AudioLines size={16} />
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {typedResponse && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-md border border-white/5 bg-white/5 p-4 text-sm text-zinc-300"
          >
            <p className="mb-2 text-[10px] font-bold text-[#ff7a00] uppercase">Response:</p>
            <div className="whitespace-pre-wrap">{typedResponse}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
