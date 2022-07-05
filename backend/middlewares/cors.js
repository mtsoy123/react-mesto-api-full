const allowedCors = [
  'https://mtsoy.numberone.nomoredomains.sbs',
  'http://mtsoy.numberone.nomoredomains.sbs',
  'localhost:3000',
  'http://localhost:3000',
];

module.exports = (req, res, next) => {
  console.log('req', req);
  console.log('res', res);
  const { origin } = req.headers;
  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  const requestHeaders = req.headers['access-control-request-headers'];

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }

  next();
};
