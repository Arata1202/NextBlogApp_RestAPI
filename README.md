## RestAPI デプロイ手順

### Docker Container

- CORS の設定をする。

```
"Access-Control-Allow-Headers"
"Access-Control-Allow-Origin
"Access-Control-Allow-Methods
```

### AWS Elastic Container Registry

- プッシュのみ。特別な設定はなし。

### AWS Lambda

- プッシュしたコンテナを関数としてデプロイ。
- 環境変数を設定する。

### AWS API Gateway

- RestAPI の新規作成。
- メソッドを作成。
  - メソッドタイプ（GET や POST）を選択。OPTION は不要。
  - 統合タイプは Lambda 関数を選択。
  - Lambda プロキシを選択。
- デプロイ
  - ステージ名を設定し、デプロイ。

### 完成

- 関数 URL にリクエスト。
