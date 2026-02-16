import heroBg from '@/assets/images/HeroBg.avif';
import GridImage from '@/assets/images/grid.svg';
import Image from 'next/image';
import CountdownTimer from './_components/CountdownTimer/CountdownTimer';

function Hero() {
  return (
    <section className="min-h-100vh relative flex w-full flex-col items-center overflow-hidden bg-[#080808] px-4 pt-6 text-white">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg.src})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 -top-30 z-10 flex justify-center overflow-hidden">
        <Image
          src={GridImage}
          width={1200}
          height={600}
          alt=""
          className="h-auto w-full opacity-80 select-none"
          style={{
            maskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)',
          }}
        />
      </div>

      <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_50%_20%,rgba(255,122,0,0.05)_0%,transparent_50%)]" />

      <div className="relative z-30 flex w-full max-w-7xl flex-col items-center pt-44">
        <CountdownTimer />

        {/* হেডলাইন */}
        <h1 className="mt-6 max-w-4xl text-center text-[40px] leading-[1.05] font-semibold tracking-[-0.03em] md:text-[68px] lg:text-[56px]">
          Master Prompt Engineering in 6 <br />
          Weeks & <span className="text-[#ff7a00]">Supercharge your career.</span>
        </h1>

        {/* প্রম্পট বক্স */}
        <div className="mt-12 w-full max-w-150 rounded-2xl border border-white/5 bg-[#0f0f0f]/90 p-5 shadow-2xl backdrop-blur-xl">
          <div className="flex items-start justify-between">
            <p className="text-[14px] font-medium text-zinc-500 italic">
              Draft a LinkedIn message to connect with a job tit
            </p>
            <div className="flex items-center gap-4 text-zinc-600">
              <span className="cursor-pointer transition-colors hover:text-white">🎤</span>
              <span className="cursor-pointer transition-colors hover:text-white">✨</span>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-4 text-[11px] font-semibold text-zinc-700">
            <span className="flex cursor-pointer items-center gap-1 transition-colors hover:text-white">
              <span className="text-lg">+</span> Tools
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-8 md:flex-row">
          <button className="flex items-center gap-4 rounded-xl bg-[#ff7a00] px-10 py-4.5 text-lg font-bold text-white shadow-[0_10px_40px_rgba(255,122,0,0.2)] transition-all hover:scale-[1.02] active:scale-95">
            Enroll now for $499 <span className="text-xl">→</span>
          </button>

          <div className="flex flex-col items-start">
            {/* <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-[#080808] object-cover"
                  src={`https://i.pravatar.cc/100?u=${i + 25}`}
                  alt="user"
                />
              ))}
            </div> */}
            <p className="mt-2 text-[10px] leading-tight font-bold tracking-tight text-zinc-500 uppercase italic">
              2K+ Professionals are <br /> already ahead of you.
            </p>
          </div>
        </div>

        <div className="group relative mt-20 aspect-video w-full max-w-4xl cursor-pointer overflow-hidden rounded-md border border-white/10 shadow-2xl transition-all">
          {/* <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200"
            className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
            alt="Video Preview"
          /> */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ff7a00] pl-1.5 shadow-2xl transition-transform group-hover:scale-110">
              <span className="text-3xl text-white">▶</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
