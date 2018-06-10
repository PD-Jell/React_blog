FROM node:8
LABEL Jell <jellive7@gmail.com>
RUN echo 'Jell client install..'
WORKDIR /client
COPY . /client
RUN yarn && yarn build
EXPOSE 3000

CMD ["yarn", "start"]
