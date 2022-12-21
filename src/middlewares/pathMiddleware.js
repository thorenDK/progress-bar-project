export default function pathMiddleware(req, res, next) {
  res.locals.path = req.url;
  res.locals.user = req.session?.user;
  next();
}
