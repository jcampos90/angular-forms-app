# FormsApp

Run this command to create the docker image
docker build -t angular-forms-app .

Run this command in POWERSHELL to start the container
docker run -it --rm -p 4200:4200 -v ${pwd}/src:/app/src angular-forms-app

To run without docker use the node version 18.18.2