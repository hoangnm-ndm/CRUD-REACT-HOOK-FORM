## 1: Khởi tạo dự án

```bash
npm create vite@latest ten-du-an -- --template react
```

## 2: Cài đặt các thư viện cần thiết

```bash
npm i concurrently axios react-router-dom react-hook-form @hookform/resolvers zod json-server@0.17.0 json-server-auth
```

## 3: Bỏ code thừa cũ đi

- Xoá code css trong các file css.
- Xoá code cũ trong App.jsx

## 4: Cập nhật package.json

```json
"dev": "concurrently \"vite\" \"json-server --watch db.json --port 3000 -m ./node_modules/json-server-auth\"",
```

## 5: Khởi động

```
npm run dev
```

có 2 ứng dụng khác nhau:

client chạy ở : 5173
server chạy ở : 3000
