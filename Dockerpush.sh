echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker push aikaka/web-fifa
docker push aikaka/web-fifa:0.1.0
