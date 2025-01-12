import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';

export default function CommonComponent() {
  const words = [
    {
      text: 'Build',
      className: 'text-white-500 dark:text-white-500 text-8xl',
    },
    {
      text: 'awesome',
      className: 'text-white-500 dark:text-white-500 text-8xl',
    },
    {
      text: 'apps',
      className: 'text-white-500 dark:text-white-500 text-8xl',
    },
    {
      text: 'with',
      className: 'text-white-500 dark:text-white-500 text-8xl',
    },
    {
      text: 'Aceternity.',
      className: 'text-blue-500 dark:text-blue-500 text-8xl',
    },
  ];

  return (
    <BackgroundBeamsWithCollision className="col-span-4 h-screen md:h-full place-content-center text-center justify-center bg-black">
      <div className="w-full h-screen rounded-none place-content-center text-center justify-center p-4 md:p-8 shadow-input text-white bg-black">
        <div className="flex flex-col items-center justify-center h-[40rem] ">
          <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
            The road to freedom starts from here
          </p>
          <TypewriterEffect words={words} />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
            <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
              Join now
            </button>
            <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
              Signup
            </button>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
