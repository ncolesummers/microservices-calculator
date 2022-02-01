FROM rust:latest as builder
WORKDIR /usr/src/rust
COPY . .
RUN cargo install --path .

FROM debian:buster-slim
RUN apt-get update && apt-get install -y extra-runtime-dependencies && rm -rf /var/lib/apt/lists/*
COPY --from=builder /usr/local/cargo/bin/rust /usr/local/bin/rust
EXPOSE 8008
CMD ["rust"]