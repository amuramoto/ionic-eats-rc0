# Ionic Eats Demo Code

This is a single page sample app built with the Ionic2 RC0 blank starter. Features used in this app are:

- ion-list
- ion-item
- ion-grid
- ion-row
- ion-searchbar
- utility attributes
- geolocation (Ionic Native)
- Sass theming

## Getting Started

To run the app, clone or download it, then do the following in the project directory:

# `npm install` to install dependencies
# `ionic plugin add geolocation` to get the Cordova Geolocation plugin
# `ionic serve` to run in the browser

If you want to run this on a device, you'll have to do the song and dance of either setting up USB debugging on your Android device, or code signing and etc. on your iOS device.

## Please Be Kind to My API

Feel free to checkout this sample, but please remember it pulls it's data from a lightweight Express.js API that proxies the Foursquare API. I built the API for demo purposes, so I'm not sure what will happen if it gets too much traffic, so be kind to it. =)