const withImages = require('next-images')
const withCSS = require('@zeit/next-css')
const withHtml = require('next-html');

module.exports = withHtml(withImages(withCSS({
    cssModules: true
})))