# Sử dụng image Node.js chính thức
FROM node:14

# Tạo thư mục ứng dụng trong container
WORKDIR /usr/src/app

# Sao chép package.json và package-lock.json
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép mã nguồn ứng dụng
COPY . .

# Mở cổng 3000 cho ứng dụng
EXPOSE 3000

# Lệnh chạy ứng dụng
CMD ["npm", "start"]
