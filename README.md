# mikimikity/yuushin

## deploy
#### Sync with s3bucket easily.

- brew install
```
$ brew install s3cmd
```

- create .env
```
$ cp .env.sample .env
$ vi .env

S3_ACCESS_KEY = 'AK1234556'
S3_SECRET_KEY = 'DFEWAefwj381012'
DEPLOY_DIR = './public/'
S3_BUCKET_NAME = 'bucket_name'
```
- deploy command

```
$ ./bucketsync -e
```

## ACCCESS
- `mikity-yuushin.s3-website-ap-northeast-1.amazonaws.com`

- `http://qq2q.biz/BzsS`
