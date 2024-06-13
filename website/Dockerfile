################
# Run in NGINX #
################
FROM nginx:latest

ARG ARG_WEBSITE_URL_APPLICATION
ARG ARG_WEBSITE_URL_GITHUB
ARG ARG_WEBSITE_URL_YOUTUBE
ARG ARG_WEBSITE_URL_LINKEDIN
ARG ARG_WEBSITE_VERSION

ENV WEBSITE_URL_APPLICATION $ARG_WEBSITE_URL_APPLICATION
ENV WEBSITE_URL_GITHUB $ARG_WEBSITE_URL_GITHUB
ENV WEBSITE_URL_YOUTUBE $ARG_WEBSITE_URL_YOUTUBE
ENV WEBSITE_URL_LINKEDIN $ARG_WEBSITE_URL_LINKEDIN
ENV WEBSITE_VERSION $ARG_WEBSITE_VERSION

COPY nginx.conf  /etc/nginx/conf.d/default.conf
COPY dist/website /usr/share/nginx/html

CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
# Expose port 80
EXPOSE $WEBSITE_PORT_INT
