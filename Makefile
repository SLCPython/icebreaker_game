

build:
	docker-compose build web

build-local:
	npm install .

start:
	docker-compose up web
