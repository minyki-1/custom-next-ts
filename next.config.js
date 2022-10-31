const nextConfig = {
  // experimental: { appDir: true }, // NextJs 13버전 기능을 사용할려면 추가
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  }
}

module.exports = nextConfig
