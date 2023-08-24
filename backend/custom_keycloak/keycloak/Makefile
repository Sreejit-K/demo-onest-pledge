

build:
	echo "Building docker image"
	@cd ../keycloak-mobile-number-login-spi/ && sh ./build.sh
	@docker build -t sreejith/sunbird-rc-keycloak .

push:
	@docker push dockerhub/sunbird-rc-keycloak
