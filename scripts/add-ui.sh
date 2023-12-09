#!/bin/bash

npx --yes shadcn-ui@latest add $1

yarn fix
