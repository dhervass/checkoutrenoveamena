const cfg = {
  // host: 'tiendaonline-int.jazztel.com', // componente base
  // host: 'atenas-int.jazztel.com', // del componente descargado
  // host: 'api-uat.int.si.orange.es', // del componente descargado
  // host: 'api.int.si.orange.es', // 
  host: 'altamena.int.si.amena.com', // el bueno.
  images: 'http://ecareresidencial.int.si.orange.es',
  headers: {
    server: 'fichadecliente.si.orange.es',
    user: 'Demo',
    loginType: 'cn=DEMO,ou=FICHA_DE_CLIENTE,ou=Web,ou=Perfiles,o=amena.es',
    sfid: 'NOT_FOUND'
  }
};

const PROXY_CONFIG = [
  {
    context: [
      '/api/'
    ],
    target: `https://${cfg.host}`,
    secure: false,
    changeOrigin: true,
    rejectUnauthorized: false,
    logLevel: 'debug',
    onProxyReq: (proxyRequest) => {
      proxyRequest.setHeader('OAM_SFID', cfg.headers.sfid);
      proxyRequest.setHeader('X-FORWARDED-SERVER', cfg.headers.server);
      proxyRequest.setHeader('OAM_TIENE_PERFIL', cfg.headers.loginType);
      proxyRequest.setHeader('OAM_REMOTE_USER', cfg.headers.user);
      proxyRequest.setHeader('content-type', 'application/json;charset=UTF-8');
      proxyRequest.setHeader('accept', 'application/json');
    }
  },
  // {
  //   context: [
  //     '/sites/'
  //   ],
  //   target: `https://${cfg.host}`,
  //   secure: false,
  //   changeOrigin: true,
  //   rejectUnauthorized: false,
  //   logLevel: 'debug',
  //   onProxyReq: (proxyRequest, req, res) => {
  //     res.redirect(cfg.images + req.originalUrl);
  //   }
  // }
];

module.exports = PROXY_CONFIG;
