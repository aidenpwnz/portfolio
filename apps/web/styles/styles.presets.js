module.exports = {
  theme: {
    extend: {
      fontFamily: {
        default: "Inter"
      },
      screens: {
        sm: "400px",
        md: "830px"
      },
      keyframes: {
        "wiggle": {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        },
        "wiggle-big": {
          "0%": { transform: "rotate(-15deg)" },
          "50%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(-360deg)" }
        },
        "breathing": {
          "0%, 50%, 100%": { transform: "scale(1.8)", opacity: 0 },
          "25%, 75%": { transform: "scale(2)", opacity: 0.6 }
        }
      },
      animation: {
        "wiggle": "wiggle 200ms ease-in-out",
        "wiggle-big": "wiggle-big 1000ms ease-in-out",
        "breathing": "breathing 10s ease-out infinite normal",
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite"
      },
      colors: {
        "ebony-clay": "#232934",
        "blue-haze": "#C0CADD"
      },
      backgroundImage: {
        grad: "linear-gradient(to right, red, purple)"
      },
      fontSize: {
        important: "50px",
        h1: "18px",
        h2: "17px",
        button: "16px",
        p: "15px",
        psm: "14px"
      },
      spacing: {
        sub: "4px",
        sm: "8px",
        md: "16px",
        lg: "32px"
      },
      borderWidth: {
        DEFAULT: "1px"
      },
      borderColor: {
        DEFAULT: "black"
      },
      borderRadius: {
        sub: "4px",
        sm: "8px",
        md: "16px",
        lg: "32px"
      },
      boxShadow: {
        DEFAULT: "0px 3px 6px rgba(0, 0, 0, 0.1)"
      }
    }
  }
};
