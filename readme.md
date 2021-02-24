## [Free Business HTML Template by UI Lib](https://ui-lib.com/downloads//)
![Business HTML Template by UI Lib](https://ui-lib.com/wp-content/uploads/2021/02/kalista-banner.jpg)

Klista is a business HTML template built with bootstrap. You can use this template for your personal or commercial projects.

## Quick start

1. Clone the project with `git clone https://github.com/uilibrary/kalista-html-template.git`
2. Run `npm install` in the root folder.
3. Run `npm start` to launch the local server.
4. Visit http://localhost:3000

Modify SCSS/CSS, js, images in `assets` folder. Gulp will automatically compile and copy the files in `dist` folder

## Build assets
Run `npm run build` or `gulp build` to build. 

## Troubleshooting

### npm and Node.js

Kalista uses `npm` to manage dependencies. [install Node.js](https://nodejs.org), and try running `npm install` again.

### JavaScript and compilation issues
Follow these steps to give a fresh start to your development environment:

1. The installed `npm` version must be at least v6.9.0 You can update your npm with: `npm install npm -g` (`sudo` may be required).
2. Re-install dependencies: `rm -Rf node_modules && npm install`
3. `npm start`

If this did not work, try running `npm cache clean` and repeat the above steps.