# Microservices Calculator

A microservices example using Dapr

This project uses Dapr to create a distributed calculator. The services are written in multiple languages including Go, Python, TS/JS, and C#.  Frameworks used include Deno, Gorilla/mux, Flask, .NET, and React.

## Run Locally

### Addition - Navigate to the python directory and follow the steps below

* Install required packages:
  
```shell
pip3 install wheel python-dotenv flask_cors flask
```

* Run dapr using the command:
  
```shell
dapr run --app-id addapp --app-port 5000 --dapr-http-port 3501 flask run
```

### Subtraction - Navigate to the deno directory and follow the steps below

* Run dapr using the command:

```shell
dapr run --app-id subtractapp --app-port 1447 --dapr-http-port 3502 deno run --allow-net app.ts
```

### Multiply - Navigate to the go directory and follow the steps below

* install dependencies:
  
```shell
go mod tidy
```

* Build the app

```shell
go build multiply.go
```

* Run dapr using the command:

```shell
dapr run --app-id multiplyapp --app-port 7286 --dapr-http-port 3503 ./multiply
```

### Divide - Navigate to the csharp directory and follow the steps below

* Build the app.  Run:

```shell
dotnet build
```

* Navigate to ./bin/Debug/net6.0 and start Dapr using the following command:

```shell
dapr run --app-id divideapp --app-port 8889 --dapr-http-port 3504 dotnet csharp.dll
```

### POW - Navigate to the rust directory and follow the steps below

* Build the app.  Run:

```shell
cargo build --release
```

* Start dapr using the command:

```shell
dapr run --app-id exponentapp --app-port 8008 --dapr-http-port 3505 ./target/release/rust
```

[![Postman Tests](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/8071108-278e03d1-bb5f-42c3-9728-3251fece7e0c?action=collection%2Ffork&collection-url=entityId%3D8071108-278e03d1-bb5f-42c3-9728-3251fece7e0c%26entityType%3Dcollection%26workspaceId%3Dae9a77b0-1281-478f-b464-9be1483b04f3)

### Frontend Calculator app - navigate to the react-calculator directory and follow the steps below

