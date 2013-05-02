var args = arguments[0] || {};

var sssocial = require(WPATH('IconicFont')).IconicFont({
	font: WPATH('ti.ss-social'),
	ligature: true
});

args.text = sssocial.icon(args.icon);

if (!args.font) {
	args.font = {};
}
args.font.fontFamily = sssocial.fontfamily();

$.Widget.applyProperties(args);

exports.setProperties = function(options){
	if (options.icon) {
		options.text = sssocial.icon(options.icon);
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