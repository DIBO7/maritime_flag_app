/*
const withPWA = require('next-pwa')

module.exports = withPWA({
  reactStrictMode: true,
  pwa:{
  	dest: "public",
  	disable: process.env.NODE_ENV === 'development',
  	register: true,
  	skipWaiting: true
  }
})
//This is making development server load much more slowly
*/
module.exports = {
	reactStrictMode: true
}