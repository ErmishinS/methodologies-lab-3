FROM golang:1.24.3-alpine AS builder

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY . .

RUN go build -o fizzbuzz

FROM gcr.io/distroless/base

WORKDIR /app

COPY --from=builder /app/fizzbuzz .
COPY --from=builder /app/templates ./templates

EXPOSE 8080

CMD ["./fizzbuzz", "serve", "--port", "8080"]