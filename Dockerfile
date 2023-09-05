FROM ubuntu:latest
LABEL authors="hwf"

ENTRYPOINT ["top", "-b"]
