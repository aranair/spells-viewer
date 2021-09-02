#!/bin/bash

yarn build
AWS_PROFILE=personal aws s3 sync build s3://spells-explorer/ --delete
