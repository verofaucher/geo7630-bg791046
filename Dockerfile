FROM python:3.9-alpine
WORKDIR /app
# COPY . .
EXPOSE 8001
CMD python -m http.server 8001
# docker build -t server-web .