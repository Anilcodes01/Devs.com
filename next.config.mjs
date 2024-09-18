/** @type {import('next').NextConfig} */
const nextConfig = {
  
    images: {
      domains: [
        "lh3.googleusercontent.com",
        "ih1.redbubble.net",
        "demo.yournextstore.com",
        "encrypted-tbn0.gstatic.com",
        "m.media-amazon.com",
        "c.media-amazon.com",
        "pbs.twimg.com",
        "codeop.tech"
      ],
    },
    api: {
      bodyParser: {
        sizeLimit: '5mb', // Set the limit that suits your needs
      },
    },
  };

export default nextConfig;
