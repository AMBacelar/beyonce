# syntax=docker/dockerfile:1
FROM python:3.12-alpine
EXPOSE 8000
WORKDIR /app
COPY ./requirements.txt ./
RUN pip3 install -r requirements.txt
COPY . /app
ENTRYPOINT ["python3"] 
CMD ["manage.py", "runserver", "0.0.0.0:8000"]