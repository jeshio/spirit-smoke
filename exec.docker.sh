#!/bin/bash

container_id=$1

docker exec -it --user node "$container_id" /bin/sh

exit 0