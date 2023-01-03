# [111-1] Web Programming Final

## (Group 70) 超級行事曆

**Demo 影片連結:**

**Deploy 連結:**
wpfinal-production.up.railway.app
https://wp-final.onrender.com
用 railway 比較快，但他可能撐不到評分的時候（？

**Github Repo:**
https://github.com/Datou0718/wp_final.git

## 描述這個服務在做什麼

整合行事曆與 To Do List ，方便規畫個人生活。在行事曆中可依個人喜好，用顏色區分不同類型的事件。在 TO Do List 可直觀的看到最快要截止的事件，也可用 filter 篩選事件類別。完成的事件在 Calendar 中會有刪除線，方便區分是否完成，讓使用者能更專注在未完成的事件上。

## 操作方法

#### 登入畫面

- 可點選下方 **not a member? click here!** 註冊會員
- 輸入 username 和 password 登入
- 可直接用 tab 切換輸入格，若完成填寫後按 enter 則可直接送出，使操作更加便捷直觀

#### 主畫面

- **Calendar**
  - 可切換 month 、 week 、 day 模式
  - 點擊日期可以新增事件
    - 可選擇是否為整天事件，若不是整天事件則可以選擇時間
    - 可選擇是否要加入事件到 To Do List
    - 可選擇顏色分類事件
  - 點擊事件會顯示該事件的內容
    - 可選擇要刪除或更新事件
- **To Do List**
  - 上方有 filter 可以用顏色篩選事件
  - 事件根據結束時間排序，越早結束的事件越上面
  - 勾選 check box 後 To Do List 和 Calendar 的事件會有刪除線，讓使用者能在 Calendar 介面清楚得知還有哪些事件未完成
  - 點擊事件會顯示該事件的內容
    - 可選擇要刪除或更新事件
  - 點擊刪除按鈕可刪除事件
- **Setting**
  - 可更新 display name 及 password
  - display name 為顯示在導覽列上方的文字，非登入時的 username
- **Log out**
  - 點擊後會再次詢問是否要登出，若確認登出會返回登入畫面

## 使用與參考之框架/模組/原始碼

#### frontend

- react
- react-router-dom
- antd
- axios
- uuid
- react-fullcalendar
- dayjs

#### backend

- express
- cors
- bcrypt
- dotenv-defaults
- mongoose

#### database

- MongoDB

## 安裝與測試步驟

#### frontend (在 `localhost:3000`)

- 在 `final/frontend`
  ```
  yarn
  yarn start
  ```

#### backend (在 `localhost:4000`)

- 在 `final/backend/` 新增 `.env`
  ```
  MONGO_URL= //your database url
  ```
- 在 `final/backend/`
  ```
  yarn
  yarn server
  ```

## 工作分配

#### 廖奕鈞：

- 前端架構
- 前端設計(css)
- deploy 與報告撰寫
- 作品測試

#### 張晴昀：

- 後端架構
- 前後端連接
- 前端架構
- 報告撰寫
- 作品測試

#### 吳岱凌：

- 影片錄製

## 專題製作心得

#### 廖奕鈞：

這是我第一次接觸到全端 project，深刻感受到合作與團隊分工的重要性。最初因其他課程而較晚起步，第一天與張晴昀合作時效率極差，常常發生雖然我們有兩台電腦，兩個人也坐在一起，但只有一個人可以做事，另外一個人只能看著的狀況。而經過磨合後效率大幅提升，中期開始就可以邊做自己的部分邊跟對方討論哪些需要修正。這次從無到有的生出一個網站讓我對前後端有更深的理解，也讓我擁有寶貴的合作經驗，學會如何與他人溝通、交流與激盪想法、共同寫出一份作品。

#### 張晴昀

#### 吳岱凌
