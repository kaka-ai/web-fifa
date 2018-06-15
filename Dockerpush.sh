echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker push jsboilerplates/web-fifa
docker push jsboilerplates/web-fifa:0.1.0
