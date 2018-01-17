FROM python:2.7-alpine

WORKDIR /usr/src/app

COPY config.yml ./

COPY scraper.py ./

CMD [ "python", "./scraper.py" ]
