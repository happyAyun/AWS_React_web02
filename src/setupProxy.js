const { createProxyMiddleware } = require('http-proxy-middleware'); // yarn add http-proxy-middleware

module.exports = function (app) {
  app.use(
    '/api/community/',
    createProxyMiddleware({
      target: 'http://localhost:8000/',
      changeOrigin: true,
    })
  );
};
