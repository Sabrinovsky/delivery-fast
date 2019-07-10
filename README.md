# README

docker-compose run web rails new . --force --no-deps --database=postgresql
docker-compose build
docker-compose up
docker-compose run web rake db:create
docker-compose run web rake db:migrate