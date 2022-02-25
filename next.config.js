
const withPWA = require('next-pwa')

module.exports = withPWA({
  reactStrictMode: true,
  pwa:{
  	dest: "public",
  	register: true,
  	skipWaiting: true
  },
  images:{
		domains: ["firebasestorage.googleapis.com"],
	}
})
//This is making development server load much more slowly so i swicth to speed up
/*

disable: process.env.NODE_ENV === 'development',

module.exports = {
	reactStrictMode: true,
	images:{
		domains: ["firebasestorage.googleapis.com"],
	}
}
*/