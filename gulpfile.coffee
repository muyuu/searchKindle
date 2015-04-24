# gulp
g = require "gulp"
$ = require('gulp-load-plugins')()

#conf
cnf = require './conf/'

# main bower files
del = require 'del'
mainBowerFiles = require 'main-bower-files'

# browserify
browserify = require 'browserify'
source = require 'vinyl-source-stream'
buffer = require 'vinyl-buffer'
reactify = require 'reactify'
babelify = require 'babelify'
watchify = require 'watchify'
gutil = require 'gulp-util'
sourcemaps = require 'gulp-sourcemaps'
assign = require 'lodash.assign'

# bower
g.task 'clear-libs', ->
  del.sync "#{cnf.dist.lib}"

g.task "bower", ['clear-libs'], ->
  cssFilter = $.filter "**/*.css"
  fontsFilter = $.filter cnf.dist.font.files

  g.src(mainBowerFiles())
  .pipe(cssFilter)
  .pipe(g.dest("#{cnf.dist.lib}css"))
  .pipe(cssFilter.restore())
  .pipe(fontsFilter)
  .pipe(g.dest("#{cnf.dist.lib}fonts"))


# local server
g.task "connect", ->
  $.connect.server
    root: cnf.dist.html
    port: cnf.port
    livereload: true
  g.src "#{cnf.dist.html}index.html"


# css
g.task "css", ->
  g.src "#{cnf.src.css}style.sass"
    .pipe $.plumber()
    .pipe $['rubySass']
      sourcemap: true
      style: "compressed"
    .pipe g.dest("#{cnf.dist.css}")
    .pipe $.connect.reload()


# watchify
customOpts =
  entries: ["#{cnf.src.js}main.jsx"]
  debug: true
  transform: [reactify, babelify]
  extensions: ['.js', '.jsx']

opts = assign({}, watchify.args, customOpts)
b = watchify(browserify(opts))

bundle = ->
  b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(g.dest("#{cnf.dist.js}"))

g.task('js', bundle)
b.on('update', bundle)
b.on('log', gutil.log)


# watch
g.task "watch", ["js"], ->
  g.watch "#{cnf.src.html}**/*.jade", ["html"]
  g.watch "#{cnf.src.css}**/*.sass", ["css"]

# default task
g.task "default", ->
  g.start ["connect", "watch"]

