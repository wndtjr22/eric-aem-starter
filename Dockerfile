# syntax=docker/dockerfile:1
FROM ubuntu:20.04

#system update
RUN apt update
RUN apt install curl -y

# install java
RUN apt install default-jre -y
RUN apt install default-jdk -y

# install npm
RUN apt install nodejs -y
RUN apt install npm -y

RUN npm cache clean -f
RUN npm install -g n
RUN n 18.17.0

# install aem-cli
RUN npm install -g @adobe/aem-cli

# install nginx
RUN apt install nginx -y
RUN apt install ufw -y
RUN apt install systemd -y
RUN apt install net-tools -y
WORKDIR /etc/nginx/site-available
COPY aem /etc/nginx/sites-available/
RUN ln -s /etc/nginx/sites-available/aem /etc/nginx/sites-enabled/
#RUN service nginx start

WORKDIR /opt
EXPOSE 3030
COPY . /opt/aem
CMD ["nginx", "-g", "daemon off;"]