// Static export preserves the existing production Nginx architecture.
/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  eslint: { dirs: ["app", "lib"] },
};
