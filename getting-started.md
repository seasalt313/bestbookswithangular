2017 - TIY

Using Mustache, Gulp, Sass and Foundation.

1. Create project folder
2. Create index.html, app.js
3. Create a node_modules directory folder
4. How do we set up gulp ?
  - Install gulp: (npm install gulp)
  - Create a gulpfile: (gulpfile.js)
  - To install gulp sass - (npm install gulp-sass)
  - To run gulp just type: (gulp)
  - Set up tasks
  - Run gulp constantly or gulp watch
GULP can really be copied and pasted…
5. For Sass:
  - Optional - Create a folder for Sass…sass folder.
  - Option 1) sass —watch, 2) gulp-sass (using gulp to run sass)
6. Create .gitignore
  - just add a line to show what file you don’t want on github
7. Install Mustache:
  - add <Script> tag to index.html for mustache
  - mustache tag must be above app.js file
8. Install Foundation
  - npm install foundation-sites
  - then paste the following 3 lines in scss file:

@import "../node_modules/foundation-sites/scss/foundation”;
@include foundation-global-styles;
@include foundation-grid;
