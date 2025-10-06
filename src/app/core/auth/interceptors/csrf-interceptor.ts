import { HttpInterceptorFn } from '@angular/common/http';

export const csrfInterceptor: HttpInterceptorFn = (req, next) => {
  const getCsrfToken = () => {
    const name = 'XSRF-TOKEN=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');

    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1);
      if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }

    return null;
  };

  const csrfToken = getCsrfToken();

  if (csrfToken && !req.headers.has('X-XSRF-TOKEN')) {
    req = req.clone({
      headers: req.headers.set('X-XSRF-TOKEN', csrfToken)
    });
  }

  return next(req);
};
