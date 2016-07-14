FROM alpine:latest

RUN apk update \
    && apk add git \
               python \
               py-pip \
               sqlite

RUN git clone http://github.com/jerrywardlow/p3catalog \
    && mkdir /itemcatalog \
    && mv /p3catalog/app/* /itemcatalog \
    && rm -rf /p3catalog

WORKDIR /itemcatalog

RUN pip install -r requirements.txt \
    && sed -i 's/postgresql/sqlite/' database_model.py \
    && touch itemcatalog \
    && python database_model.py \
    && python populator.py 

EXPOSE 5000
