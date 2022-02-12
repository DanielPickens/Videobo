FROM node:alpine

RUN apk add --no-cache \

    util-linux openssl sudo \

    python g++ \

    autoconf automake libtool gcc make musl-dev file pkgconfig nasm \

    vips \
 && rm -fR /var/cache/apk/*

#
EXPOSE 8000 9000

RUN yarn global add gatsby-cli && yarn cache clean

WORKDIR /workspace
CMD ["gatsby", "develop", "-H", "0.0.0.0" ]
