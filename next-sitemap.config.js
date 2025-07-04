/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://yusufizzetgenc.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/admin", "/secret"], // varsa gizli sayfaları dışla
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: ["https://yusufizzetgenc.com/sitemap-0.xml"],
  },
};
