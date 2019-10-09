const express = require('express')
const app = express()
const port = 3000

// middleware
function getRequestLog(req, res, next) {
  const path = req.path
  const method = req.method

  const date = new Date()
  const yyyy_mm_dd = date.toISOString().slice(0, 10)
  const localTime = date.toLocaleTimeString().split(' ')[0]

  // 2019-5-17 18:51:12 | GET from /
  console.log(`${yyyy_mm_dd} ${localTime} | ${method} from ${path}`)

  next()
}

// 列出全部 Todo
app.get('/', getRequestLog, (req, res) => {
  res.send('列出全部 Todo')
})

// 新增一筆 Todo 頁面
app.get('/new', getRequestLog, (req, res) => {
  res.send('新增 Todo 頁面')
})

// 顯示一筆 Todo 的詳細內容
app.get('/:id', getRequestLog, (req, res) => {
  res.send('顯示一筆 Todo')
})

// 新增一筆  Todo
app.post('/', getRequestLog, (req, res) => {
  res.send('新增一筆  Todo')
})

app.delete('/:id/delete', getRequestLog, (req, res) => {
  res.send('刪除 Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})