import type { Config } from 'tailwindcss'
// 引入nextui
import { nextui } from "@nextui-org/react";
const { addDynamicIconSelectors } = require('@iconify/tailwind')
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
        // 蓝色和黄色
        'blog-text-primary': withOpacity('--blog-text-primary'),
        // 蓝色
        'blog-hover': withOpacity('--blog-hover'),
        // 灰色和黑色
        'blog-bg-color': withOpacity('--blog-bg-color'),
        // 白色色和偏黑色
        'blog-card-bg': withOpacity('--blog-card-bg-color'),
        // 灰色和偏黑色
        'blog-border-color': withOpacity('--blog-card-border-color'),
        // 黑色和白色
        'blog-text': withOpacity('--blog-text'),
        // 白色和黑色
        'blog-text-black': withOpacity('--blog-text-black'),
        // 白色和黑色
        'blog-text-desc': withOpacity('--blog-text-desc'),
        // 黑色和白色
        'blog-bg-op': withOpacity('--blog-bg-op'),
        // 黑色
        'blog-publish-text': withOpacity('--blog-publish-text'),
        // 白色和黑色
        'blog-black-white': withOpacity('--blog-text-black-white'),
        // #号特殊颜色 白色浅灰  黑色深灰
        'blog-symbol-text': withOpacity('--blog-symbol-color'),
        // 白色略灰和黑色略灰
        'blog-card-op-color': withOpacity('--blog-card-op-color'),
        /* 白天灰色和夜晚灰色*/
        'blog-tag-color': withOpacity('--blog-tag-color')
      },
      boxShadow: {
        'blog-card-show': 'var(--blog-card-show)'
      },
      // 动画 帧
      keyframes: {
        banners: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-50px)' },
          '100%': { transform: 'translateY(-100px)' },
        },
        'text-scale': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.2)' },
        }
      },
      // 动画
      animation: {
        banners: 'banners 10s linear infinite 5s',
        'text-scale': 'all .3s linear forwards',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    // 配置nextui公共参数
    layout: {
    },
    defaultTheme: 'light',
    defaultExtendTheme: "light",
    themes: {
      light: {
        // ...
        colors: {
          // 默认文字颜色
          foreground: "#11181C",
          primary: {
            // 相关文字颜色
            foreground: "#FFFFFF",
            // 主题色
            DEFAULT: '#4f46e5',
          },
        },
      },
      dark: {
        // ...
        colors: {
          foreground: "#11181C",
          primary: {
            // 相关文字颜色
            foreground: "#FFFFFF",
            // 主题色
            DEFAULT: '#ffc848',
          },
        },
      },
    }
  }), addDynamicIconSelectors()]
}
export default config
