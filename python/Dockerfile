FROM python:3.9.10-slim
COPY . /app
WORKDIR /app
RUN curl https://get.wasmer.io -sSfL | sh
RUN pip install wheel python-dotenv flask flask_cors wasmer wasmer_compiler_cranelift
ENTRYPOINT ["python"]
EXPOSE 5000
CMD ["app.py"]