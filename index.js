/*!
 * jQuery plugin: jquery.responsive-ratio
 * https://github.com/radiovisual/jquery-responsive-ratio
 * @license MIT
 *
 * Packed with Browserify
 * https://github.com/substack/node-browserify
 * @license MIT
 */
(function ($, window, document, undefined) { // eslint-disable-line no-shadow-restricted-names, no-unused-vars
	'use strict';

	var debounce = require('lodash.debounce');

	var pluginName = 'makeResponsive';
	var defaults = {
		ratio: 0.563
	};

	function Plugin(element, options) {
		this.element = element;

		this.settings = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	$.extend(Plugin.prototype, {
		init: function () {
			var self = this;

			$(window).resize(debounce(function () {
				self.setResponsive(self.settings);
			}, 100));

			self.setResponsive(self.settings);
		},

		setResponsive: function (settings) {
			var el = $(this.element);
			var ratio = settings.ratio;
			el.attr('height', el.width() * ratio + 'px');
		}
	});

	// lightweight plugin wrapper preventing multiple instantiations
	$.fn[pluginName] = function (options) {
		return this.each(function () {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' +
					pluginName, new Plugin(this, options));
			}
		});
	};
})(jQuery, window, document); // eslint-disable-line no-undef
