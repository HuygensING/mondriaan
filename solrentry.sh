#!/bin/sh

/opt/solr/bin/solr start
/opt/solr/bin/solr create_core -c mondrian
/opt/solr/bin/post -c mondrian /opt/solr/mondrian-json/input.json
