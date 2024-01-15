import type { Config } from 'tailwindcss'
// 引入nextui
import { nextui } from "@nextui-org/react";
// 颜色转化 适应透明度
function withOpacity(variableName: string): any {
  return ({ opacityValue }: any) => {
    console.log(opacityValue);

    if (opacityValue) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'blog-text-primary': withOpacity('--blog-text-primary'),
        'blog-hover': withOpacity('--blog-hover'),
        'blog-bg-color': withOpacity('--blog-bg-color'),
        'blog-card-bg': withOpacity('--blog-card-bg-color'),
        'blog-border-color': withOpacity('--blog-card-border-color'),
        'blog-text': withOpacity('--blog-text'),
        'blog-text-black': withOpacity('--blog-text-black'),
        'blog-text-desc': withOpacity('--blog-text-desc'),
      },
      boxShadow: {
        'blog-card-show': 'var(--blog-card-show)'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    // 配置nextui公共参数
    // layout: {
    //   // fontSize: {
    //   //   tiny: "16px",
    //   //   small: "12px",
    //   //   medium: "18px",
    //   //   large: "22px",
    //   // }
    // },
    // themes: {
    //   light: {
    //     // ...
    //     colors: {
    //       // 默认文字颜色
    //       foreground: "#11181C",
    //       primary: {
    //         // 相关文字颜色
    //         foreground: "#FFFFFF",
    //         // 主题色
    //         DEFAULT: "#4f46e5",
    //       },
    //       background: {
    //         DEFAULT: "#4f46e5",
    //       }
    //     },
    //   },
    //   dark: {
    //     // ...
    //     colors: {
    //       foreground: "#11181C",
    //       primary: {
    //         // 相关文字颜色
    //         foreground: "#FFFFFF",
    //         // 主题色
    //         DEFAULT: "red",
    //       },
    //       background: {
    //         DEFAULT: "#4f46e5",
    //       }
    //     },
    //   },
    // }
  })]
}
export default config
