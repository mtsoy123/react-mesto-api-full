const allowedCors = [
  'https://mtsoy.numberone.nomoredomains.sbs',
  'http://mtsoy.numberone.nomoredomains.sbs',
  'localhost:3000',
  'localhost:3001',
  'http://localhost:3000',
  'http://localhost:3001',
];

module.exports = function (req, res, next) {
  const { origin } = req.headers;
  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS';
  const requestHeaders = req.headers['access-control-request-headers'];

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    // res.header('Access-Control-Allow-Headers', requestHeaders);
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Custom-Header');
  }

  if (method === 'OPTIONS') {
    return res.status(200).end();
  }

  next();
};
