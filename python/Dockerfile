FROM python:3.9.10-slim
COPY . /app
WORKDIR /app
RUN pip install wheel python-dotenv flask flask_cors
ENTRYPOINT ["python"]
EXPOSE 5000
CMD ["app.py"]