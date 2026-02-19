module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./*.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#030303",
          alt: "#0a0a0a",
        },
        primary: {
          DEFAULT: "#00FFFF", // Cyber Blue
          purple: "#9966FF", // Electric Purple
          red: "#FF4444",    // Emergency Red
        },
        border: {
          glass: "rgba(255, 255, 255, 0.05)",
          "glass-heavy": "rgba(255, 255, 255, 0.1)",
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      borderRadius: {
        'bento': '2rem',
        'bento-lg': '3rem',
      },
      boxShadow: {
        'premium': '0 0 50px rgba(0, 0, 0, 0.5)',
        'glow-blue': '0 0 20px rgba(0, 255, 255, 0.3)',
        'glow-purple': '0 0 20px rgba(153, 102, 255, 0.3)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
