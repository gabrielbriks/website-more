import type { Config } from 'tailwindcss';

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				cm: {
					primary: '#5D00A7', //purple 800
					secondary: '#D34B73', //pink 600
					tertiary: '#1F242F', //slate 900
					semiDark: '#525252', //slate 600
					light: '#D2D2D2', // zinc 100
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
			fontFamily: {
				kanit: ['var(--font-kanit)'],
				nunito: ['var(--font-nunito)'],
				opens_sans: ['var(--font-opens-sans)'],
			},
			backgroundColor: {
				'cm-default-light': '#f4f4f5', //zinc 100
				'cm-primary': '#5D00A7', //purple 800
				'cm-secondary': '#D34B73', //pink 600
				cm_gradient:
					'linear-gradient(134deg, #6E07AD 2.81%, #CB457A 75.03%, #E85A6A 95.48%)',
			},
			backgroundImage: {
				'hero-background': "url('/public/colorful-background.svg')",
				'cm-gradient-imgcolor':
					'linear-gradient(134deg, #6E07AD 2.81%, #CB457A 75.03%, #E85A6A 95.48%)',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
