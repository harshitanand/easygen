import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';

export default function CommonComponent() {
  const text = 'Create, Collaborate and Share apps with EasyGene Apps builder';

  // Split the text into individual words
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const words = text.split(' ').map((word, index) => {
    // Apply a special class for the "EasyGenerator" keyword, for example
    const isHighlighted = word.toLowerCase().includes('easygene');

    return {
      text: word, // Each word from the split
      className: isHighlighted
        ? 'text-blue-500 dark:text-blue-500 text-7xl' // Highlighted class for EasyGenerator
        : 'text-white-500 dark:text-white-500 text-6xl', // Default class for other words
    };
  });

  return (
    <BackgroundBeamsWithCollision className="col-span-4 h-screen md:h-full place-content-center text-center justify-center bg-black">
      <div className="w-full h-screen rounded-none place-content-center text-center justify-center p-4 md:p-8 shadow-input text-white bg-black">
        <div className="flex flex-col items-center justify-center h-[40rem] ">
          <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
            Empower Your Learning and Creative Journey
          </p>
          <TypewriterEffect words={words} />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
            <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
              See How It Works
            </button>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
