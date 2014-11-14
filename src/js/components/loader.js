var Loader = (function(glob, document, undefined) {
	'use strict';

	var tpl = Handlebars.compile(document.querySelector('#loaderTpl').innerHTML);

	return function Loader(element) {
		element.innerHTML = tpl();
	}
})(window, document);