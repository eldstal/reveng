#!/bin/bash

mkdir firmwares

VERSION_INFO="http://fw.ota.homesmart.ikea.net/feed/version_info.json"
#VERSION_INFO="http://fw.test.ota.homesmart.ikea.net/feed/version_info.json"

wget -O - ${VERSION_INFO} \
  | sed -re 's/,/\n/g' \
  | grep "fw_binary_url" \
  | sed -re 's/.*"(http:[^"]*)".*/\1/' \
  | xargs --max-lines=1 wget --no-clobber -P firmwares/
