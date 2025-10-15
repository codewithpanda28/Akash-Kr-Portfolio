module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./*.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E6FFFF", // very light cyan
          100: "#CCFFFF", // light cyan
          200: "#99FFFF", // lighter cyan
          300: "#66FFFF", // medium light cyan
          400: "#33FFFF", // medium cyan
          500: "#00FFFF", // electric cyan base
          600: "#00CCCC", // darker cyan
          700: "#009999", // dark cyan
          800: "#006666", // darker cyan
          900: "#003333", // darkest cyan
          DEFAULT: "#00FFFF", // electric cyan
        },
        secondary: {
          50: "#F5F0FF", // very light purple
          100: "#EBE0FF", // light purple
          200: "#D6C2FF", // lighter purple
          300: "#C2A3FF", // medium light purple
          400: "#AD85FF", // medium purple
          500: "#9966FF", // purple base
          600: "#7A52CC", // darker purple
          700: "#5C3D99", // dark purple
          800: "#3D2966", // darker purple
          900: "#1a0033", // deep purple base
          DEFAULT: "#1a0033", // deep purple
        },
        accent: {
          50: "#FFE6F5", // very light pink
          100: "#FFCCEB", // light pink
          200: "#FF99D6", // lighter pink
          300: "#FF66C2", // medium light pink
          400: "#FF33AD", // medium pink
          500: "#FF0080", // neon pink base
          600: "#CC0066", // darker pink
          700: "#99004D", // dark pink
          800: "#660033", // darker pink
          900: "#33001A", // darkest pink
          DEFAULT: "#FF0080", // neon pink
        },
        background: {
          50: "#F7F7F7", // very light gray
          100: "#EEEEEE", // light gray
          200: "#DDDDDD", // lighter gray
          300: "#CCCCCC", // medium light gray
          400: "#BBBBBB", // medium gray
          500: "#999999", // gray base
          600: "#777777", // darker gray
          700: "#555555", // dark gray
          800: "#333333", // darker gray
          900: "#000000", // pure black base
          DEFAULT: "#000000", // pure black
        },
        surface: {
          50: "#F0EDFF", // very light electric purple
          100: "#E0DBFF", // light electric purple
          200: "#C2B7FF", // lighter electric purple
          300: "#A394FF", // medium light electric purple
          400: "#8570FF", // medium electric purple
          500: "#664CFF", // electric purple base
          600: "#523DCC", // darker electric purple
          700: "#3D2E99", // dark electric purple
          800: "#2D1B69", // electric purple base
          900: "#1F1247", // darkest electric purple
          DEFAULT: "#2D1B69", // electric purple
        },
        text: {
          primary: "#FFFFFF", // pure white
          secondary: "#B3FFFF", // light cyan
          tertiary: "#80CCCC", // medium cyan
        },
        success: {
          50: "#E6FFF5", // very light green
          100: "#CCFFEB", // light green
          200: "#99FFD6", // lighter green
          300: "#66FFC2", // medium light green
          400: "#33FFAD", // medium green
          500: "#00FF88", // bright green base
          600: "#00CC6E", // darker green
          700: "#009954", // dark green
          800: "#00663A", // darker green
          900: "#003320", // darkest green
          DEFAULT: "#00FF88", // bright green
        },
        warning: {
          50: "#FFF9E6", // very light amber
          100: "#FFF2CC", // light amber
          200: "#FFE599", // lighter amber
          300: "#FFD966", // medium light amber
          400: "#FFCC33", // medium amber
          500: "#FFB800", // electric amber base
          600: "#CC9300", // darker amber
          700: "#996E00", // dark amber
          800: "#664A00", // darker amber
          900: "#332500", // darkest amber
          DEFAULT: "#FFB800", // electric amber
        },
        error: {
          50: "#FFEBEB", // very light red
          100: "#FFD6D6", // light red
          200: "#FFADAD", // lighter red
          300: "#FF8585", // medium light red
          400: "#FF5C5C", // medium red
          500: "#FF4444", // bright red base
          600: "#CC3636", // darker red
          700: "#992929", // dark red
          800: "#661B1B", // darker red
          900: "#330E0E", // darkest red
          DEFAULT: "#FF4444", // bright red
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        exo: ['Exo 2', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        fira: ['Fira Code', 'monospace'],
        sans: ['Exo 2', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        black: '900',
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(0, 255, 255, 0.3)',
        'glow-accent': '0 0 10px rgba(255, 0, 128, 0.2)',
        'glow-primary-lg': '0 0 30px rgba(0, 255, 255, 0.4)',
        'glow-accent-lg': '0 0 20px rgba(255, 0, 128, 0.3)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            opacity: '0.6',
          },
          '50%': {
            opacity: '1.0',
          },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'smooth': '300ms',
        'reveal': '600ms',
      },
    },
  },
  plugins: [],
}