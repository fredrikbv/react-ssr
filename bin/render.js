var fs =  require('fs')
var React = require('react')
var ReactDOMServer =  require('react-dom/server')

var ssr = require("../build/main.ssr.js")

const markup = ssr.ut.default();

fs.writeFileSync("./bin/markup.html", markup);