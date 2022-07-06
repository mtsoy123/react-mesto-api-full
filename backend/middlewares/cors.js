const allowedCors = [
  'https://mtsoy.numberone.nomoredomains.sbs',
  'http://mtsoy.numberone.nomoredomains.sbs',
  'localhost:3000',
  'http://localhost:3000',
];

module.exports = function (req, res, next) {
  const { origin } = req.headers;
  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS';
  const requestHeaders = req.headers['access-control-request-headers'];

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', 'https://mtsoy.numberone.nomoredomains.sbs');
  }

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.status(200).end();
  }

  next();
};
