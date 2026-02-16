import heroBg from '@/assets/images/HeroBg.avif';
import GridImage from '@/assets/images/grid.svg';
import Image from 'next/image';
import CountdownTimer from './_components/CountdownTimer/CountdownTimer';
import EnrollmentCTA from './_components/EnrollmentCTA/EnrollmentCTA';
import { PromptBox } from './_components/PromptBox/PromptBox';

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
        <h1 className="my-4 max-w-4xl text-center font-sans text-[40px] leading-[1.05] font-semibold tracking-[-0.03em] md:text-[68px] lg:text-[56px]">
          Master Prompt Engineering in 6 <br />
          Weeks & <span className="text-[#ff7a00]">Supercharge your career.</span>
        </h1>

        <PromptBox />

        {/* CTA */}
        <EnrollmentCTA />

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
