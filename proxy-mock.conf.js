const cfg = {
  // host: 'edicion.int.si.orange.es',
  // host: 'api.int.si.orange.es',
  // host: 'atenas-uat.jazztel.com',
  host: 'altamena.int.si.amena.com',
  hostOrange: 'preview-alt.si.orange.es',
  images: 'https://atenas-uat.jazztel.com/',
  headers: {
    server: 'fichadecliente.si.orange.es',
    user: 'Demo',
    loginType: 'cn=DEMO,ou=FICHA_DE_CLIENTE,ou=Web,ou=Perfiles,o=amena.es',
    sfid: 'NOT_FOUND',
    Authorization: 'Basic ZGVzYXJyb2xsbzprazhzUCFkUjRnT2w=',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-cache',
    'Cookie': '_fbp=fb.1.1562068569942.1151349664; _ga=GA1.2.1068403514.1562068570; SITESJSESSIONID=RhHQlZgcGsw7wDkqzH-qyRV0ZJlODHdH8rKDtYX-axCcYXvBTtQn!-348091347; wm_sessionMedium=-; AMP_TOKEN=%24NOT_FOUND; _gid=GA1.2.785364330.1562572596; utag_main=v_id:016bb28acc46001888930872eee203073003406b0086e$_sn:3$_se:4$_ss:0$_st:1562574404012$ses_id:1562572595648%3Bexp-session$_pn:1%3Bexp-session'
  }
};
const PROXY_CONFIG = [
  {
    context: [
      '/api/shoppingCart/'
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

      proxyRequest.setHeader('Authorization', 'Basic ZGVzYXJyb2xsbzprazhzUCFkUjRnT2w=');
      proxyRequest.setHeader('Access-Control-Allow-Origin', '*');
      proxyRequest.setHeader('Cache-Control', 'no-cache');
      proxyRequest.setHeader('Cookie', '_fbp=fb.1.1562068569942.1151349664; _ga=GA1.2.1068403514.1562068570; _gid=GA1.2.2009828768.1563176566; alt-privacy=public; alt-rol=APIGATEKEEPERPUBLIC; alt-login=APIGATEKEEPERPUBLIC; alt-service=ALTAMIRAPUB; SITESJSESSIONID=sLz6SsSlw_PQwfTesBpcIvrucKjb28rBwJ12fY4S1P5TThnUN-as!1847632517; wm_sessionMedium=-; AMP_TOKEN=%24NOT_FOUND; utag_main=v_id:016bb28acc46001888930872eee203073003406b0086e$_sn:16$_se:3$_ss:0$_st:1563274139114$ses_id:1563272334840%3Bexp-session$_pn:1%3Bexp-session');
      proxyRequest.setHeader('X-ACTIVITY-ID', '2019716-1218-5213-1pruebagenlogado-d37e041fef0b');
      proxyRequest.setHeader('X-PROCESS-ID', 'd37e041fef0b-001');
    }
  },
  {
    context: [
      '/api/'
    ],
    logLevel: 'debug',
    // target: `https://${cfg.host}`,
    target: `http://localhost:3000`,
    secure: false,
  }
];

module.exports = PROXY_CONFIG;


