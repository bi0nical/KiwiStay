# KiwiStay
A hypothetical accommodation booking website for Tourism New Zealand.
Designed and developed by Calum Turner (2021).

Upcoming additions:
* Better responsiveness to device sizes
* Improved styling
* Dynamic map interactions
* Saved listings
* User profile

### Installation

1. Find "mapKey copy.js" and replace the field with your google maps API key. Rename this file to "mapKey.js".


## Style Guide

### JavaScript

* Only use let or const for variables
* Use single quotes for strings where possible
* Written in camelCase
* Use comment blocks to differentiate contexts, ie for the home page, the listing page, the summary page
* Use ID tags for dynamic elements that are used in a single instance (ie: section containers, buttons), and classes for dynamic elements that have multiple instances in the DOM (ie: total cost, guest amount)
* The maps API key must remain seperate from the "script.js" file

### CSS/SCSS

* Written following BEM guidelines
* Use seperate SCSS files for each major section of the web app
* Use classes to style wherever possible
* Try to write in order of visual appearance on the DOM
* Variables are used for media queries, colours and fonts
* Mix-ins are used for common text formatting and common container styling
* Block comments are used to differentiate between major visual sections

### HTML

* Written following BEM guidelines
* ID tags are written in camelCase
* Block comments sections are used as buffers between different major sections of the document structure (ie: between section tags)