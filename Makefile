
start: build
	open http://localhost:8080
	cd _site/; \
	mogrify -quality 5 ./images/comics/*/*/*/*.jpg; \
	http-server

build:
	bundle exec jekyll build --config _config.yml,_config-dev.yml

algolia:
	eval 'export ALGOLIA_API_KEY="$$(cat ./algolia-api)"'; \
	bundle exec jekyll algolia;

deploy: algolia
	rm -rf /tmp/thenewspanels
	git clone git@github.com:pravinmb/pravinmb.github.io /tmp/thenewspanels -b gh-pages
	bundle exec jekyll build
	cd /tmp/thenewspanels/; \
	mogrify -quality 5 ./images/comics/*/*/*/*.jpg; \
	git add .; \
	git commit -m "make deploy"; \
	git push;

install:
	bundle install

clean:
	bundle exec jekyll clean
