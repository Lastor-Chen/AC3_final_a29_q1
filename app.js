const express = require('express')
const responseTime = require('response-time')

const app = express()
const port = 3000

const { ignoreFavicon, getRequestLog } = require('./lib/middleware.js')

// ===============================

app.use(ignoreFavicon)

// 一併算入 getRequestLog() 花費時間
app.use(responseTime((req, res, time) => {
  // 2019-5-17 18:51:12 | GET from / | total time: 8ms
  const spendTime = ` | total time: ${time.toFixed(0)}ms`
  console.log(req.log + spendTime)
}))

app.use(getRequestLog)

// 列出全部 Todo
app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

// 新增一筆 Todo 頁面
app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

// 顯示一筆 Todo 的詳細內容
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

// 新增一筆  Todo
app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.delete('/:id/delete', (req, res) => {
  res.send('刪除 Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})