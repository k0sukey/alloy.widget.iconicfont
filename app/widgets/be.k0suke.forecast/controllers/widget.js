var args = arguments[0] || {};

var ssforecast = require(WPATH('IconicFont')).IconicFont({
	font: WPATH('ti.ss-forecast'),
	ligature: true
});

args.text = ssforecast.icon(args.icon);

if (!args.font) {
	args.font = {};
}
args.font.fontFamily = ssforecast.fontfamily();

$.Widget.applyProperties(args);

exports.setProperties = function(options){
	if (options.icon) {
		options.text = ssforecast.icon(options.icon);
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