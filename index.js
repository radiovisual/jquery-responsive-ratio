/*!
 * jQuery plugin: jquery.responsive-ratio
 * https://github.com/radiovisual/jquery-responsive-ratio
 * @license MIT
 *
 * Packed with Browserify
 * https://github.com/substack/node-browserify
 * @license MIT
 */
(function ($, window, document, undefined) {
	'use strict';

	var debounce = require('lodash.debounce');

	var pluginName = 'makeResponsive';
	var defaults = {
		ratio: '16:9',
		class: 'responsive-ratio'
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
			var element = $(this.element);

			$(window).resize(debounce(function () {
				self.setResponsive(self.settings);
			}, 100));

			self.setResponsive(self.settings);
		},

		setResponsive: function (settings) {
			var el = $(this.element);
			var width = el.width();

			var ratio = this.getRatio();

			var calculatedHeight = Math.round((width/ratio.width) * ratio.height);

			if (!el.hasClass(settings.class)) {
				el.addClass(settings.class);
			}

			el.attr('height', calculatedHeight + 'px');
		},

		getRatio: function () {
			var input = this.settings.ratio;
			var type = typeof input;

			if (type !== 'string') {
				throw new Error('jquery-responsive-ratio ratio parameter expects a string ratio like "16:9", got ' + type);
			}

			var parts = input.split(':');

			if (parts.length === 2) {
				return this.getRatioObject(parts[0], parts[1]);
			} else if (parts.length === 1) {
				return this.getRatioObject(parts[0], parts[0]);
			}
		},

		getRatioObject: function (w, h) {
			return {
				width: parseInt(w, 10),
				height: parseInt(h, 10)
			};
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
})(jQuery, window, document);
