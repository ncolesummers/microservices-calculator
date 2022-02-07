FROM rust:1.58-buster as builder
WORKDIR /usr/src/rust
COPY . .
RUN cargo install --path .

FROM rust:1.58-slim-buster
ENV ROCKET_PORT=8008
COPY --from=builder /usr/local/cargo/bin/rust /usr/local/bin/rust
EXPOSE 8008
CMD ["rust"]