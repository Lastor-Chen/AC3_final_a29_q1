# Q2 實作 Middleware
Alpha Camp 學期三期末考 A29-Q2。 <br>

檢視是否理解 Express middleware。製作一個 middleware 來檢查每一筆 request，於 log 中顯示 request 相關內容。 <br>

延伸 Q1 內容，修改 middleware 使其回傳 req -> res 花費時間。


| 單元 | branch |
| -------- | -------- |
| Q1     | master     |
| Q2     | q2     |

## Usage
安裝方法，請參考下方 [Dependency packages](#Dependency-packages) 與 [Installation](#Installation) 項目。 <br>
安裝完成後，使用以下步驟於本機端啟動專案。

1. 安裝 dependency npm pakages
    * 如果已在 global 安裝 nodemon，或是不使用 nodemon
    ```
    $ npm install --only=prod
    ```
    * 一併安裝 nodemon 於專案中
    ```
    $ npm install
    ```
1. 切換 branch q2
    ```
    $ git checkout q2
    ```

1. 啟動 Node.js Server
    
    * 有安裝 nodemon，於專案根目錄執行
    ```
    $ npm run dev
    ```

    * 未安裝 nodemon，於專案根目錄執行
    ```
    $ npm start
    ```

1. 於瀏覽器開啟網頁
    ```
    http://localhost:3000
    ```

1. 瀏覽完畢後，關閉 Node.js Server
    ```
    回到 cmd 按下 Ctrl + C
    ```

## Dependency packages
#### main
* [Node.js](https://nodejs.org/en/) v10.16.3

#### npm package
[link to check package.json](./package.json)


## Installation
於本機端執行前，請確認是否已安裝下列內容。

#### Download Project
1. 直接於 Github 上用瀏覽器下載 ZIP file
2. 用 Git clone 專案 (推薦)
```
$ git clone https://github.com/Lastor-Chen/todo_sequelize.git [資料夾名稱]
```

#### Install Node.js
本機端必須安裝 Node.js 與相關 package 才能執行此專案。 <br>
如尚未安裝 Node.js，建議使用 nvm toolkit 下載指定版本的 Node.js

| OS | URL |
| -------- | -------- |
| nvm-windows     | [Link to](https://github.com/coreybutler/nvm-windows) |
| nvm-macOS     | [Link to](https://github.com/nvm-sh/nvm) |

#### Install dependency npm packages
已在 package.json 中登入相關訊息，可直接執行下列指令安裝所需套件。
```
$ npm install
```

#### 選擇安裝 nodemon
本專案推薦使用 [nodemon](https://github.com/remy/nodemon) 來取代原生的 Node.js 啟動方法。
```
$ npm install -g nodemon
```