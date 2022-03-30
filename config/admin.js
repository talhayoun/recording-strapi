module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9533eaf1864ecde681e09a213edc391c'),
  },
});
