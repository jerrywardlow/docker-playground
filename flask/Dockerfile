FROM ubuntu:16.04

COPY . /app

WORKDIR /app

RUN apt-get update -y \
 && apt-get install -y \
            python-pip \
            python-dev \
            build-essential \
 && pip install -r requirements.txt

ENTRYPOINT ["python"]

CMD ["app.py"]
