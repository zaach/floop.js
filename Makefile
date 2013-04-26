
all: build

build:
	./node_modules/.bin/jison src/parse.y src/lex.l -o lib/parse.js

