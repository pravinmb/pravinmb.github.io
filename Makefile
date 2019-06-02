
start: build
	cd _site && http-server

build:
	bundle exec jekyll build --config _config.yml,_config-dev.yml

deploy:
    rm -rf /tmp/thenewspanels
    git clone git@github.com:pravinmb/pravinmb.github.io /tmp/thenewspanels -b gh-pages
    bundle exec jekyll build
    cd /tmp/thenewspanels/
    git add .
    git commit -m "make deploy"
    git push

install:
	bundle install

clean:
	bundle exec jekyll clean
