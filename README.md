## ECR へのプッシュ方法

- `commands.sh`を作成
- AWS コンソールを参考に、`commands.sh`に以下を記述

```
aws ecr ~
docker build -t example --platform linux/x86_64 .
docker tag ~
docker push ~
```

※ Mac なら `build` に `--platform linux/x86_64` を追記

- シェルの起動

```
chmod +x commands.sh
./commands.sh
```

## CORS の確認

### GET リクエスト

```
curl -i -X GET <API_GATEWAY_URL> -H "Origin: https://example.com"

```

### POST リクエスト

```
curl -i -X POST <API_GATEWAY_URL> -H "Origin: https://example.com" -H "Content-Type: application/json" -d '{"key1":"value1"}'

```

###　以下殴り書き

ECR に プッシュ

lambda 関数作成
lambda 環境変数

apigateway retapi 作成
メソッド　ラムダ関数　プロキシ統合
デプロイしてステージ
