var args = arguments[0] || {};

var sspika = require(WPATH('IconicFont')).IconicFont({
	font: WPATH('ti.ss-pika'),
	ligature: true
});

args.text = sspika.icon(args.icon);

if (!args.font) {
	args.font = {};
}
args.font.fontFamily = sspika.fontfamily();

$.Widget.applyProperties(args);

exports.setProperties = function(options){
	if (options.icon) {
		options.text = sspika.icon(options.icon);
	}

	$.Widget.applyProperties(options);
};

exports.getProperties = function(option){
	return $.Widget[option];
};

[
	'add',
	'addEventListener',
	'animate',
	'applyProperties',
	'convertPointToView',
	'fireEvent',
	'hide',
	'remove',
	'removeEventListener',
	'show',
	'toImage'
].forEach(function(func){
	exports[func] = $.Widget[func];
});