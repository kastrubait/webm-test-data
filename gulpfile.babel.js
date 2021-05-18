"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
  paths = {
    views: {
      src: [
        "./src/views/index.pug",
        "./src/views/pages/*.pug"
      ],
      dist: "./dist/",
      watch: [
        "./src/blocks/**/*.pug",
        "./src/views/**/*.pug"
      ]
    },
    styles: {
      src: "./src/styles/main.{scss,sass}",
      dist: "./dist/styles/",
      watch: [
        "./src/blocks/**/*.{scss,sass}",
        "./src/styles/**/*.{scss,sass}"
      ]
    },
    scripts: {
      src: "./src/js/index.js",
      dist: "./dist/js/",
      watch: [
        "./src/blocks/**/*.js",
        "./src/js/**/*.js"
      ]
    },
    images: {
      src: [
        "./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}",
        "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
      ],
      dist: "./dist/img/",
      watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg}"
    },
    fonts: {
      src: "./src/fonts/**/*.{woff,woff2}",
      dist: "./dist/fonts/",
      watch: "./src/fonts/**/*.{woff,woff2}"
    },
    gzip: {
      src: "./src/.htaccess",
      dist: "./dist/"
    },
    data: {
      src: "./src/data/data.json",
      dist: "./dist/",
      watch: "./src/data/*.{json}"
    },
  };

requireDir("./gulp-tasks/");

export { paths };

export const development = gulp.series("clean", "smart-grid",
  gulp.parallel(["views", "styles", "scripts", "images", "webp", "fonts"]),
  gulp.parallel("serve"));

export const prod = gulp.series("clean",
  gulp.parallel(["views", "styles", "scripts", "images", "webp", "fonts","gzip"]));

export default development;