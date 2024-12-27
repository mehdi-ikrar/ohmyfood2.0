import sanitizeHtml from 'sanitize-html';

export function bodySanitizer(req, res, next) {

    
  if (req.body) {

    for (const key in req.body ) {


      req.body[key] = sanitizeHtml(req.body[key]);
    }
  }
  next();
}