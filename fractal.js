// this is in the pattern library that gets imported as a node package

'use strict';

/*
 * Dependencies
 */
 
const paths = {
  build: `${__dirname}/www`,
  src: `${__dirname}/src`,
  static: `${__dirname}/tmp`,
};

const fractal    = module.exports = require('@frctl/fractal').create();
const mandelbrot = require('@frctl/mandelbrot');

// create a new instance with custom config options
const myCustomisedTheme = mandelbrot({
    // any other theme configuration values here
    favicon: '/icons/icon.ico',
    styles: [
        "default",
        "/css/theme.css"
    ]
});

fractal.web.theme(myCustomisedTheme); // tell Fractal to use the configured theme by default


fractal.set('project.title', 'NCC Digital Design Guide');

/* Configure components */

fractal.components.set('title', 'NCC Digital Design Guide');
fractal.components.set('label', 'Components');
fractal.components.set('path', `${paths.src}/patterns`);
fractal.components.set('default.preview', `@preview`);

/* Configure docs */

fractal.docs.set('path', `${paths.src}/docs`);
fractal.docs.set('indexLabel', 'Welcome');
fractal.web.set('builder.dest', paths.build);

/* Configure web */

/*
fractal.web.set('static.path', paths.static);
fractal.web.set('server.sync', true);
fractal.web.set('server.syncOptions', {
    open: true,
    browser: 'default'
});
*/

fractal.web.set('static.path', paths.static);
fractal.web.set('builder.dest', paths.build);
fractal.web.set('server.sync', true);