# [111-1] Web Programming Final
## (Group 70) 超級行事曆

**Demo 影片連結:** 

**Deploy 連結:**

## 描述這個服務在做什麼
整合行事曆與 To Do List ，方便規畫個人生活，也可依顏色區分不同類型的事件，在 TO Do List 可直觀的看到最快要截止的事件，完成的事件在 Calendar 中會有刪除線，方便區分是否完成，能更好的關注在未完成的事件上


## 操作方法
#### 登入畫面
* 可點選下方 **not a member? click here!** 註冊會員
* 輸入 username 和 password 登入

#### 主畫面
* **Calendar**
  * 可切換 month 、 week 、 day 模式
  * 點擊日期可以新增事件
    * 可選擇是否為整天事件，若不是整天事件則可以選擇時間
    * 可選擇是否要加入事件到 To Do List
  * 點擊事件會顯示該事件的內容
    * 可選擇要刪除或更新事件
* **To Do List**
  * 上方有 filter 可以選擇顏色篩選事件
  * 事件根據結束時間排序，越早結束的事件越上面
  * 勾選 check box 後 To Do List 和 Calendar 的事件會有刪除線
  * 點擊事件會顯示該事件的內容
    * 可選擇要刪除或更新事件
  * 點擊刪除按鈕可刪除事件
* **Setting**
  * 可更新 display name 及 password
  * display name 為顯示在導覽列上方的文字，非登入時的 username
* **Log out**
  * 點擊後會再次詢問是否要登出，若確認登出會返回登入畫面

## 使用與參考之框架/模組/原始碼
#### frontend
* react
* react-router-dom
* antd
* axios
* uuid
* react-fullcalendar
* dayjs

#### backend
* express
* cors
* bcrypt
* dotenv-defaults
* mongoose

#### database
* MongoDB

## 安裝與測試步驟
#### frontend (在 `localhost:3000`)
* 在 `final/frontend`
  ```
  yarn
  yarn start
  ```
#### backend (在 `localhost:4000`)
* 在 `final/backend/` 新增 `.env`
  ```
  MONGO_URL= //your database url
  ```
* 在 `final/backend/`
  ```
  yarn
  yarn server
  ```

## 工作分配
#### 廖奕鈞

#### 張晴昀

#### 吳岱凌

## 專題製作心得
#### 廖奕鈞

#### 張晴昀

#### 吳岱凌