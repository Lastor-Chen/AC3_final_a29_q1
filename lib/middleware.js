// lib middleware.js

// ===============================

function getRequestLog(req, res, next) {
  const path = req.path
  const method = req.method

  const date = new Date()
  const yyyy_mm_dd = date.toISOString().slice(0, 10)
  const localTime = date.toLocaleTimeString().split(' ')[0]

  // 2019-5-17 18:51:12 | GET from /
  req.log = `${yyyy_mm_dd} ${localTime} | ${method} from ${path}`

  next()
}

function ignoreFavicon(req, res, next) {
  if (req.path.includes('favicon.ico')) return res.status(204).json({ nope: true })
  next();
}

// ===============================

module.exports = { getRequestLog, ignoreFavicon }