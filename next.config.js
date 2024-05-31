const { hostname } = require("os");

module.exports = {
    images : {
        remotePatterns : [
            {
                hostname: "images.unsplash.com"
            }
        ]
    }
}