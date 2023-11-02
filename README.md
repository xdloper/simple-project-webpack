##  **Project Management Configuration for Basic Level Applications**

> **Supported**

- The root folder path can be called with the '@' alias.

- Supports EJS template engine.

- Supports Handlebars template engine (recommended).

- Supports SASS-css.

- Supports optional react.

- Supports video, image, json formats.

- Supports jquery.


> **Information**

- **first 3 items required**

- The main script file (src/index.js) uses default index.js if it is not available.

- src/public/... folder is where we run html files. If not defined, the default value will be used

- To run it, run node_modules/simple-project-webpack/npm then npm run tsDev and everything is ready.

- Some file extensions are not required to be entered. Ex(js,ts,jsx,jsx,...)

- Dotenv is installed, it automatically finds the folder path and searches for the .env file anywhere in the root folder.

- The default file name for script tags is index.(ext). Scripts are not injected into files other than index files.

- In the Ejs Template engine, include operations should be written as include ./example, not include('./example').


> **Warning!**

- You can use template engines with the same name and different extensions, such as index.html, index.ejs, indx.hbs, in different directories with the same name, but not in the same directory.

Signature:**y.yasir.k** >> github:**XDLOPER**