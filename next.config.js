const nextConfig = {
  // experimental: { appDir: true }, // NextJs 13버전 기능을 사용할려면 추가
  reactStrictMode: true, // true면 문제 감지와 경고를 위해 두번 렌더링함
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
