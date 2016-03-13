# LoLiT

This is a cursus project Webapp written for the TDLE class [@ENSIIE](http://www.ensiie.fr/).

The goal is to provide data and statistics on League of Legends games through charts using new technologies.

All credit about the games goes to [RiotGames](http://www.riotgames.com/). *(Data not provided here)*


This project is based on [Sails.js](http://sailsjs.org/documentation/concepts/) and is modified to work with [MongoDB](https://docs.mongodb.org/manual/) and [AngularJS](https://angularjs.org/).

## Basic informations

Status : **Project submitted**

Release : ***0.1.0*** First release for project submission.


##Prerequistes

For this application to work you will need : 
- NodeJS
- MongoDB

To install NodeJS : [Choose your system here](https://nodejs.org/en/download/package-manager/)

For MongoDB : [See supported platforms](https://docs.mongodb.org/manual/installation/)

##Installation

On Linux (but should also work under Windows and MacOSX with few adjustements) just run : 

```bash
sudo npm install -g bower gulp

git clone https://github.com/farfeduc/LoLiT

sudo npm install

sudo npm install machinepack-sailsgulpify

sudo npm install machinepack-prompts

sudo node node_modules/machinepack-sailsgulpify/templates/toggleEngine.js

# Then type : "gulpifysails" (cf : https://github.com/Karnith/machinepack-sailsgulpify)

cd assets/
bower install

sails lift
```

and then go to :  `http://localhost:1337`

##Documentation

- [Sails.js](http://sailsjs.org/documentation/concepts/)
- [MongoDB](https://docs.mongodb.org/manual/)
- [AngularJS](https://angularjs.org/)
- [Gulp](http://gulpjs.com/)
- [Npm](https://www.npmjs.com/) 
- [Bower](http://bower.io/)
- [Angular-nvd3](http://krispo.github.io/angular-nvd3/#/)
- [Bootstrap](http://getbootstrap.com/)
- [Gulpifysails](https://github.com/Karnith/machinepack-sailsgulpify)

##Possible enhancements

- Make website responsive (Bootstrap is included in the projet)