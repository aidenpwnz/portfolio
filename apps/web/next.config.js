/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["@aidenpwnz/components"]);

module.exports = withTM({
  reactStrictMode: true,
});
