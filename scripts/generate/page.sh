#!/bin/bash

# Prints text in bolg green color
green_bold() {
	echo -e "$(tput bold)$(tput setaf 2)$(echo "$1")$(tput sgr0)"
}

# Reading module name
echo "Page name:"
read -r page_name

page_dir="$(pwd)/app/$page_name"

# Creating folder
mkdir -p $page_dir
echo "Created folder:
   $(green_bold "$page_dir")
"

mkdir $page_dir
cp $(pwd)/templates/page.tsx $page_dir/page.tsx
