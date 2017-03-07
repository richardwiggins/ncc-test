# NCC Digital Design Guide

## Requirements
The NCC Digital Design Guide is built upon [Fractal](https://github.com/frctl/fractal), a tool that enables the rapid development of components, templates and pages. Fractal uses a number of ES6 features, so this project requires [Node.js](https://nodejs.org/) v4.0+ to be installed locally. A global install of Gulp is also required.

## Installation
To get the project up and running, and view components in the browser, complete the following steps:

1. Download and install Node: <https://nodejs.org/>
2. Clone this repo: `git clone git@github.com:richardwiggins/ncc-test.git` (SSH) or `https://github.com/richardwiggins/ncc-test.git` (HTTPS)
3. [Optional] Install Gulp globally: `npm install gulp -g`
4. [Optional] Install Fractal globally: `npm install fractal -g`
5. Install project dependancies: `npm install`
6. Start the development environment: `gulp dev`
7. Open your browser and visit <http://localhost:3000>

## Development
When developing components, you may want assets automatically compiled and the browser to refresh automatically. To do this, run the following task:

* `gulp dev`

## Creating a static build
To create a static instance of this project, run the following task:

* `gulp build`

This will create a folder called `www`, into which the required files will be created.

## Deployment
To make this project publicly accessible, you can deploy a static instance by running the following task:

* `gulp publish`

This will publish the contents of `public` to your `gh-pages` branch.