import React from 'react';
import { TitleText } from './TitleText';
export const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-silver relative flex w-full flex-col items-center justify-center gap-[2rem] py-10 sm:gap-[2rem] sm:py-[2.5rem]"
    >
      <TitleText>Kontakt</TitleText>

      <div className=" flex items-center justify-center text-center font-light text-gray-500">
        <div className="mr-[0.5rem] flex max-w-xs items-center justify-center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/milan.uhrin.5"
            className="text-blue-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
            aria-label="Facebook"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="  text-xl transition-colors duration-200 hover:text-gray-800  dark:hover:text-white"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
            </svg>
          </a>
        </div>
        <span className=" black  text-xl  ">Milan Uhrin, 0905 405 802</span>
      </div>
    </footer>
  );
};
