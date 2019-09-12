.PHONY: build

build:
	mkdir -p functions
	# go dependencies
	go get github.com/aws/aws-lambda-go/lambda
	go get github.com/aws/aws-lambda-go/events
	# Netlify functions
	for dir in server/*; do \
		go build -o functions/$$(basename $$dir) $$dir/main.go; \
	done
	# client
	cd client && \
	npm install && \
	npm run build-prod

