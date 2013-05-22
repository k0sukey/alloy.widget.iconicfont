function SSSocial(options) {
	switch (Ti.Platform.osname) {
		case 'iphone':
		case 'ipad':
			this.fontfamily = 'SS Social';
			break;
		case 'android':
			this.fontfamily = 'ss-social';
	}

	this.charcode = {
		'stack overflow':'\uF672',
		'github octocat':'\uF671',
		'githuboctocat':'\uF671',
		'stackoverflow':'\uF672',
		'google plus':'\uF613',
		'kickstarter':'\uF681',
		'foursquare':'\uF690',
		'googleplus':'\uF613',
		'instagram':'\uF641',
		'pinterest':'\uF650',
		'posterous':'\uF623',
		'wordpress':'\uF621',
		'thumbs up':'\uD83D\uDC4D',
		'dribbble':'\uF660',
		'facebook':'\uF610',
		'linkedin':'\uF612',
		'thumbsup':'\uD83D\uDC4D',
		'google +':'\uF613',
		'readmill':'\uF652',
		'envelope':'\u2709',
		'twitter':'\uF611',
		'behance':'\uF661',
		'dropbox':'\uF653',
		'youtube':'\uF630',
		'octocat':'\uF671',
		'google+':'\uF613',
		'approve':'\uD83D\uDC4D',
		'spotify':'\uF6B1',
		'last fm':'\uF6B2',
		'blogger':'\uF622',
		'flickr':'\uF640',
		'tumblr':'\uF620',
		'paypal':'\uF680',
		'lastfm':'\uF6B2',
		'github':'\uF670',
		'svpply':'\uF651',
		'email':'\u2709',
		'skype':'\uF6A0',
		'vimeo':'\uF631',
		'mail':'\u2709',
		'rdio':'\uF6B0',
		'like':'\uD83D\uDC4D',
		'rss':'\uE310'
	};
}

SSSocial.prototype.getCharcode = function(options) {
	return this.charcode[options];
};

module.exports = SSSocial;
