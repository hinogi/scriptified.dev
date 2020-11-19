/* eslint-disable max-len */

export type Theme = 'blue' | 'teal' | 'green' | 'indigo' | 'pink' | 'purple';

export const THEMES: Theme[] = ['blue', 'green', 'teal', 'indigo', 'pink', 'purple'];

export const TextType = {
  h1: `font-sniglet text-4xl font-extrabold`,
  h2: `font-sniglet text-2xl font-extrabold`,
  h3: `font-sniglet font-semibold text-xl`,
  base: `font-roboto text-base`,
  small: `font-sniglet text-sm`,
};

export const ButtonType = (theme: Theme, disabled: boolean): Record<string, string> => ({
  primary: ` ${
    disabled
      ? `bg-${theme}-400 cursor-not-allowed`
      : `bg-gradient-to-br from-${theme}-400 to-${theme}-600 hover:from-${theme}-600 hover:to-${theme}-800 active:bg-${theme}-700 focus:outline-none focus:shadow-outline`
  }  text-white font-bold rounded`,
  secondary: `bg-gradient-to-br from-white to-white border border-${theme}-500 hover:from-${theme}-400 hover:to-${theme}-600 text-${theme}-500 hover:text-white focus:outline-none focus:shadow-outline active:bg-${theme}-700 font-bold rounded`,
  basic: `bg-gradient-to-br from-white to-white hover:from-white hover:to-${theme}-300 text-gray-700 font-bold rounded`,
  delete: 'bg-red-300 hover:bg-red-500 text-white font-bold rounded',
});

export const ButtonSize = {
  sm: 'py-2 px-4 text-xs',
  md: 'py-2 px-4 text-lg',
  lg: 'py-3 px-6 text-xl',
};
