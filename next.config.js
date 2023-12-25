// next.config.js
module.exports = {
    // ...
    async rewrites() {
        return [
            {
                source: '/comic/:slug',
                destination: '/app/comic/:slug',
            },
        ];
    },

};

