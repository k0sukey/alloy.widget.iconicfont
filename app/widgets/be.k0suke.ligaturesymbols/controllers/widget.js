var args = arguments[0] || {};

var ligaturesymbols = require(WPATH('IconicFont')).IconicFont({
	font: WPATH('LigatureSymbols')
});

args.text = ligaturesymbols.icon(args.icon);

if (!args.font) {
	args.font = {};
}
args.font.fontFamily = ligaturesymbols.fontfamily();

$.Widget.applyProperties(args);

exports.setProperties = function(options){
	if (options.icon) {
		options.text = ligaturesymbols.icon(options.icon);
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