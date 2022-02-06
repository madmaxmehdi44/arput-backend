module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0231aac736e1ab3768fe477c754a912a'),
  },
});
