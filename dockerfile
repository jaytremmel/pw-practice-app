FROM mcr.microsoft.com/playwright:v1.52.0-noble

RUN mkdir /app
WORKDIR /app
COPY . /app/

RUN npm install --force
RUN npx playwright install

# Install Angular CLI globally for ng serve to work
RUN npm install -g @angular/cli@14.2.10
