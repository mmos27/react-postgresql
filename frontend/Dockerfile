# 基盤イメージを指定
FROM node:20

# 作業ディレクトリを作成
WORKDIR /app

# package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# ソースコードをコピー
COPY . .

# Next.jsアプリをビルド
RUN npm run build

# アプリケーションを起動
CMD ["npm", "start"]

