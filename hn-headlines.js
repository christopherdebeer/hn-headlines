var jsdom = require('jsdom');
var colors = require('colors');

jsdom.env({
    html: 'http://news.ycombinator.com/',
    scripts: ['http://code.jquery.com/jquery-1.5.min.js'],
    done: function(errors, window) {
      	var $ = window.$;
      	console.log('HN Links');
      	$('td.title:not(:last) a').each(function() {
	      	console.log(' -'.grey, $(this).text().yellow," - ".grey,$(this).closest("tr").next().find("span").text().white);
		});
	}
 });
