/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
	// 设置别名
	compilerOptions: {
		paths: {
			"@/components/*": ["components/*"],
			"@/lib/*": ["lib/*"],
		},
	},
	// 配置sass路径
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	experimental: {
		serverActions: true,
		// 大小限制
		// serverActionsBodySizeLimit: "2mb",
	},
	output: "standalone",
};

module.exports = nextConfig;
