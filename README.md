# TCV for Kafka
TCV for Kafka management

## Requirements
- [Node버전] v16.15.0

## Getting started

Go to tcv for kafka folder
```sh
cd ./tcv-for-kafka-frontend-master
```

Install [pnpm](https://pnpm.io/installation)
```
npm install -g pnpm
```

Install dependencies
```
pnpm install
```

Generate API clients from OpenAPI document
```sh
pnpm gen:sources
```

## Start application
### Proxying API Requests in Development

Create or update existing `.env.local` file with
```
VITE_DEV_PROXY= http://192.168.10.103:8080/ # kafka server
VITE_DEV_PROXY= http://localhost:8080/ # local server
```

Run the application
```sh
pnpm dev
```
