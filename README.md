# pokemon-finder-server

This lean node.js server handles the PokemonGo-Map python script

usage:

- git clone https://github.com/Shim2k/pokemon-finder-server.git

- npm install

- node app.js

- open browser and go to: 127.0.0.1:8001/setup

- get the your location coordinates from Google Maps

- go to: 127.0.0.1:8001/map?q=(INSERT COORDINATES) - example: 127.0.0.1/map?q=32.086999,34.776301

Make sure you remove the space after the comma in your coordinates (32.086999, 34.776301 to 32.086999,34.776301)
