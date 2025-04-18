import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        
        empathy: {
          purple: '#1877F2', // Facebook Blue
          'dark-purple': '#166DE0', // Darker Facebook Blue
          'soft-purple': '#E7F3FF', // Light Facebook Blue
          'dark-navy': '#18191A', // Facebook Dark Mode Background
          'deep-purple': '#1877F2', // Facebook Blue
          'royal-gold': '#1877F2', // Facebook Blue
          'rich-plum': '#166DE0', // Darker Facebook Blue
          'midnight-blue': '#18191A', // Facebook Dark Mode
          'champagne': '#F0F2F5', // Facebook Light Background
          'emerald': '#42B72A', // Facebook Green
          'lavender-silk': '#E7F3FF', // Light Facebook Blue
          'platinum': '#F0F2F5', // Facebook Light Background
          'pearl': '#FFFFFF', // White
          'wine': '#DC3545', // Error Red
        },
        backgroundImage: {
          'luxury-gradient': 'linear-gradient(135deg, #1877F2 0%, #166DE0 100%)',
          'gold-gradient': 'linear-gradient(90deg, #1877F2 0%, #166DE0 100%)',
          'pearl-gradient': 'linear-gradient(135deg, #F0F2F5 0%, #FFFFFF 100%)',
        },
        boxShadow: {
          'luxury': '0 10px 25px rgba(75, 0, 130, 0.2), 0 5px 15px rgba(102, 56, 84, 0.15)',
          'gold-shine': '0 8px 20px rgba(212, 175, 55, 0.3)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
            opacity: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
            opacity: '1'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
            opacity: '1'
          },
          to: {
            height: '0',
            opacity: '0'
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-out': {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(10px)'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        },
        'pulse-slow': {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0.7'
          }
        },
        'wave': {
          '0%': {
            transform: 'scaleY(0.5)'
          },
          '25%': {
            transform: 'scaleY(1)'
          },
          '50%': {
            transform: 'scaleY(0.75)'
          },
          '75%': {
            transform: 'scaleY(1.25)'
          },
          '100%': {
            transform: 'scaleY(0.5)'
          }
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-out': 'fade-out 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'wave-1': 'wave 1.5s ease-in-out infinite',
        'wave-2': 'wave 1.7s ease-in-out infinite',
        'wave-3': 'wave 1.3s ease-in-out infinite',
        'wave-4': 'wave 1.6s ease-in-out infinite',
        'wave-5': 'wave 1.4s ease-in-out infinite',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
