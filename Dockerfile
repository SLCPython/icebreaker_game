FROM node:current-alpine3.10 AS base

ARG USER=nonroot
ARG APPDIR=/app

WORKDIR ${APPDIR}

# RUN echo "Add User" \ 
#     && adduser --disabled-password --shell=/bin/bash ${USER} \ 
#     && chown -R ${USER}:${USER} ${APPDIR} \
#     && chown -R ${USER}:${USER} /home/${USER}\
#     ``

COPY package*.json ./
RUN echo "Install npm packages" \
    && npm config set prefix ${HOME}/npm \
    && npm install -g npm@7.5.1 \
    && npm install . \
    ``

COPY src src/
COPY public public/

EXPOSE 3000
CMD [ "npm", "start" ]
