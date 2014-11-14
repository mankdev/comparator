(function(glob, document, undefined) {
	'use strict';

	Array.prototype.forEach.call(document.querySelectorAll('[data-loader]'), function(loader) {
		new Loader(loader);
	});

})(window, document);