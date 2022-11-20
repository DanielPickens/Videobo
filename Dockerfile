FROM node:12.18.3


RUN git clone https://github.com/DanielPickens/Videobo

# Change directories into what got checked out.
WORKDIR /Videobo
# All of the files are already there, so we only need to
RUN npm install

EXPOSE 8000 9000


CMD ["gatsby", "develop", "-H", "0.0.0.0" ]
