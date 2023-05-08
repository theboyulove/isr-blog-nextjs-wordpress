module.exports = {
  async redirects() {
    return [
      {
        source: '/posts/:path*',
        has: [
          {
            type: 'query',
            key: 'fbclid'
          }
        ],
        destination: 'https://selectednews.live/:path*',
        permanent: false,
      },
      {
        source: '/posts/:path*',
        has: [
          {
            type: 'header',
            key: 'referer',
          }
        ],
        destination: 'https://selectednews.live/:path*',
        permanent: false,
      },
    ]
  },
  images: {
    domains: [
      process.env.WORDPRESS_API_URL.match(/(?!(w+)\.)\w*(?:\w+\.)+\w+/)[0], // Valid WP Image domain.
      '0.gravatar.com',
      '1.gravatar.com',
      '2.gravatar.com',
      'secure.gravatar.com',
    ],
  },
}
