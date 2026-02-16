'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const RollingNumber = ({ val }: { val: string | number }) => (
  <div className="relative flex h-4 items-center justify-center overflow-hidden">
    <AnimatePresence mode="popLayout">
      <motion.span
        key={val}
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -12, opacity: 0 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="block"
      >
        {val}
      </motion.span>
    </AnimatePresence>
  </div>
);

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 145,
    hours: 14,
    minutes: 21,
    seconds: 50,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev?.seconds > 0) return { ...prev, seconds: prev?.seconds - 1 };
        if (prev?.minutes > 0) return { ...prev, minutes: prev?.minutes - 1, seconds: 59 };
        if (prev?.hours > 0) return { ...prev, hours: prev?.hours - 1, minutes: 59, seconds: 59 };
        if (prev?.days > 0)
          return { ...prev, days: prev?.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center overflow-hidden rounded-xs border border-white/20 bg-white p-px shadow-sm">
        <div className="rounded-l-[1px] bg-black px-2.5 py-1">
          <p className="text-xs text-white capitalize">Limited time offer ends in</p>
        </div>

        <div className="bg-white px-3 py-1">
          <div className="flex items-center gap-2 text-sm leading-none font-bold tracking-tight text-black">
            <span>{timeLeft.days}</span>
            <span className="mx-px">:</span>
            <RollingNumber val={String(timeLeft.hours).padStart(2, '0')} />
            <span className="mx-px">:</span>
            <RollingNumber val={String(timeLeft.minutes).padStart(2, '0')} />
            <span className="mx-px">:</span>
            <RollingNumber val={String(timeLeft.seconds).padStart(2, '0')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
