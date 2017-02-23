/* jsSocials social media sharing jQuery plugin */
/* the link for the plugin is at the folowing: http://js-socials.com/docs/ */
$("#share").jsSocials({
	url: "http://shofootballleaguenews.com/", /* this changes the line to the domain of my website */
	text: "Get the latest in football news from the top leauges in the world at: ", /* this is the text that people will share (the url is automatically included) */
	shares: ['facebook', {share: 'twitter', hashtags: 'football, soccer, news', via : "ShoFootLeagNews"}, 'googleplus', 'email'],
	showCount: false, /* this is a counter that show how many shares, tweets, etc. my website has recieved. currently my showCount is set to false which turns of the counter */
});