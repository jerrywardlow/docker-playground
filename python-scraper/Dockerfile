FROM python:2.7-alpine

WORKDIR /usr/src/app

COPY requirements.txt ./
COPY config.yml ./
COPY scraper.py ./

RUN pip install --no-cache-dir -r requirements.txt

CMD [ "python", "./scraper.py" ]
