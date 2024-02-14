/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				hostname: 'e7.pngegg.com',
				protocol: 'https',
			},
			{
				hostname: 'logosmarcas.net',
				protocol: 'https',
			},
		],
	},
};

export default nextConfig;
