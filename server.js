require('harp').server(__dirname + '/public', { port: process.env.PORT || 5000 });
 
var marked = require('./node_modules/harp/node_modules/terraform/node_modules/marked');
var highlight = require('highlight.js');
 
marked.setOptions({
  langPrefix: '',
  highlight: function (code, language) {
    if (language) {
      return highlight.highlight(language, code).value;
    }
 
    return code;
  }
});