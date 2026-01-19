# first is the os layer

FROM node:22-alpine AS builder

# set the workdir

WORKDIR /app


# copying everythin


COPY . .

RUN npm ci --omit=dev


#STAGE 2


FROM gcr.io/distroless/nodejs22-debian12


WORKDIR /app



COPY --from=builder /app .


EXPOSE 3000

CMD ["app.js"]




