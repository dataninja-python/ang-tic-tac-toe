#!/bin/env zsh

podman build -t angular-tic-tac-toe .
podman run -d -p 8080:80 angular-tic-tac-toe
