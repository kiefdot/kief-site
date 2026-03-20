/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },

    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "X-Robots-Tag",
                        value: "index, follow",
                    },
                    {
                        key: "Access-Control-Allow-Origin",
                        value: "*",
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;