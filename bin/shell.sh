#!/bin/bash

echo "Step 1 - Deleting instructor folders ....."
find . -type d -name facilitator -exec rm -rf  {} \;
rm -rf Code\ Challenges\ Solutions
rm -rf .git

echo "Step 2 - Initiating a new repo ...."
git init
git add .
git commit -m "Init Commit"

echo "Step 3 - Pushing changes to remote repo ...."
git remote add origin $1
git branch -M main
git push origin main

echo "All Done"
