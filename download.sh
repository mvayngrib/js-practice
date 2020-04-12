#!/bin/bash

if [[ GOODREADS_KEY = '' ]]
then
  echo "please set the GOODREADS_KEY environment variable to your Goodreads API key"
  exit 1
fi

if [[ "$1" = '' ]]
then
  echo "the first argument should be the author id"
  exit 1
fi

if [[ "$2" = '' ]]
then
  echo "the second argument should be the filename, minus the extension, e.g. shakespeare"
  exit 1
fi

curl "https://www.goodreads.com/author/list/$1?format=xml&key=$GOODREADS_KEY" | ./node_modules/.bin/xml2json | jq .GoodreadsResponse.author > fixtures/books/$2.json
