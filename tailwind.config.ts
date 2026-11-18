import type { Config } from 'tailwindcss'
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { midway: { blue: '#1263d8', navy: '#07172d', ink: '#101827', mist: '#f3f7fc' } }, boxShadow: { soft: '0 18px 60px rgba(14, 42, 82, .10)' } } }, plugins: [] }
export default config
