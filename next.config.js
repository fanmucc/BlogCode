/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
	compilerOptions: {
		paths: {
			"@/components/*": ["components/*"],
			"@/lib/*": ["lib/*"],
		},
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	experimental: {
		serverActions: true,
		// 大小限制
		// serverActionsBodySizeLimit: "2mb",
	},
};

module.exports = nextConfig;
