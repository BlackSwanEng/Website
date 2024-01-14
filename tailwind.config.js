/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backgroundPosition:{
            'bottom-4': 'center bottom -5rem',
        },
        backgroundImage:{
            "hero-bg": "url('https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg')",
            'about-bg': "url('https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        },
        fontFamily:{
            'inter':['Inter','sans-serif']
        }
      },
    },
    plugins: [],
  }