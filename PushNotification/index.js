const https = require('https');

exports.handler = async (event) => {
  const data = JSON.stringify({
    app_id: process.env.ONESIGNAL_APP_ID,
    included_segments: ['All'],
    // タイトル
    // headings: { en: "" },
    // 内容
    contents: { en: "新しい記事が公開されました！" },
    url: "https://realunivlog.com"
  });

  const options = {
    hostname: 'onesignal.com',
    path: '/api/v1/notifications',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${process.env.ONESIGNAL_REST_API_KEY}`
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let responseBody = '';

      res.on('data', (chunk) => {
        responseBody += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve({
            statusCode: 200,
            body: responseBody
          });
        } else {
          reject({
            statusCode: res.statusCode,
            body: responseBody
          });
        }
      });
    });

    req.on('error', (error) => {
      reject({
        statusCode: 500,
        body: JSON.stringify({ error: error.message })
      });
    });

    req.write(data);
    req.end();
  });
};
