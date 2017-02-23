//This line of javascript fixes my navbar to top of screen on scroll
window.onscroll = function() {
	var navbar = document.getElementsByTagName('nav')[0];
	var header = document.getElementsByTagName('header')[0];
	var newsbulletin  = document.getElementsByClassName('news-bulletin')[0];
	var body = document.getElementsByTagName('body')[0];

	//this line of javascript is used to calculate how far down the user has scrolled
  var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

	//this line of javascript is used to determine if the navbar is being shown
	var navbarDisplay =  navbar.currentStyle ? navbar.currentStyle.display : getComputedStyle(navbar, null).display;

  //this line of javascript fixes the navbar to the top when the user has scrolled past the header
	if (top > (header.offsetHeight -  newsbulletin.offsetHeight) && navbarDisplay != "none") {
		navbar.style.position = "fixed";
		navbar.style.top = newsbulletin.offsetHeight + "px";
		navbar.style.width = "100%";
		newsbulletin.style.backgroundColor = "black";
		document.getElementsByTagName('main')[0].style.marginTop = "50px";
	}
	//the else statement basically performs the following: when the user scrolls back up, the navbar is put back in place
	else {
		navbar.style.position = "static";
		newsbulletin.style.backgroundColor = "rgba(0,0,0, .5)";
		document.getElementsByTagName('main')[0].style.marginTop = "0px";
	}
}

//this gets the mobile nav's background color
var navBackgroundColor = $('.mobile-nav').css('background-color');

//animation to open mobile nav on click
$('#nav-text').on('click', function() {
  //when the mobile nav is clicked it expands to fit the whole screen
  $('.mobile-nav').animate({
    'width': '100vw',
    'height': '100vh',
	  'position': 'fixed',
	  'top': '0',
	  'left': '0',
}, 500);
	//this changes background and text color
  $('.mobile-nav').css({
	  "background-color": "snow",
	  "color": "black",
  });
	//this line of javascript hides unecessary elements and shows necessary ones
  $('#nav-text').hide();
  $('.close-nav').show();
  $('.mobile-nav-buttons').show();
  $('.nav-links').css('display', 'flex');
});

//animation to close mobile nav
$('.close-nav').on('click', function(){
  //when the close button is clicked, the nav shrinks back to normal size
  $('.mobile-nav').animate({
    'width': '50px',
	 'height': '20px',
	  'position': 'absolute',
	  'top': '35px',
	  'left': '10px',
  }, 500);
	//changes background and text color
  $('.mobile-nav').css({
	  "background-color": navBackgroundColor,
	  "color": "white",
  });
	//hides unecessary elements and shows necessary ones
  $('#nav-text').show();
  $('.close-nav').hide();
  $('.mobile-search').hide();
  $('.mobile-nav-buttons').hide();
  $('.nav-links').hide();
  $('.more-links').hide();
});




//the following switches between links and league titles in mobile nav
function changeTab(currentTab) {

  var links = document.getElementsByClassName('main-menu')[0];
  var leagueLeaders = document.getElementsByClassName('league-leaders')[0];
  var more = document.getElementsByClassName('more')[0];

  if ( currentTab.id === "active-tab") {
    //Do nothing
  }
  else {
	//makes the clicked tab the active one and displays the corresponding content
	currentTab.id = "active-tab";

    if (currentTab.innerHTML == "Main Menu") {
      leagueLeaders.id = "";
      more.id = "";
			$('.more-links').fadeOut(500);
			$('.mobile-search').fadeOut(500);

			setTimeout( function(){
			  $('.nav-links').fadeIn(1000);
			  leagueLeaders.style.display = 'flex';
		  }, 500);

    }
	  else if (currentTab.innerHTML == "League Leaders") {
	    links.id = "";
		more.id = "";
			$('.nav-links').fadeOut(1000);
			$('.more-links').fadeOut(1000);
			setTimeout(function(){
			  $('.mobile-search').fadeIn(500);
			  $('.mobile-search').css('display', 'flex');
			}, 500);


	  }
	 else if (currentTab.innerHTML == "More") {
	    links.id = "";
		leagueLeaders.id = "";
			$('.mobile-search').fadeOut(500);
			$('.nav-links').fadeOut(500);

			setTimeout(function(){
			  $('.more-links').fadeIn(1000);
			  $('.more-links').css('display', 'flex');
			}, 500);


	  }
  }
}

// Image Gallery

//rotates through the images in the gallery
window.onload = function gallery() {
		imageGallery = document.getElementsByClassName('display')[0];
		thumbnailArray = document.getElementsByClassName('thumbnails')[0].children;
		imageArray = [];

		for (i = 0; i < thumbnailArray.length; i++){
			imageArray.push(thumbnailArray[i].getAttribute('src'));
		};

		var j = 0;

		imageGallery.style.backgroundImage = "url(" + imageArray[0] + ")";

		setInterval(function(){
			if (j >= imageArray.length) {
				j = 0;
			}

			imageGallery.style.backgroundImage = "url(" + imageArray[j] + ")";
			j++;
		}, 5000);
}

//  shows enlarged view of images on click
function enlargeImage(thumbnail) {
	var  thumbnailImage = thumbnail.getAttribute('src');
	var enlargedView = document.getElementsByClassName("enlarged-view")[0];
	enlargedView.style.backgroundImage = "url(" + thumbnailImage + ")";
	enlargedView.style.display = "block";
	document.getElementsByTagName('main')[0].style.webkitFilter = "grayscale(200%) blur(3px)";
	document.getElementsByTagName('main')[0].style.filter = "grayscale(200%) blur(10px)";
	document.getElementsByClassName('news-bulletin')[0].style.webkitFilter = "grayscale(200%) blur(3px)";
}

// closes enlarged view of images
function closeView() {
	var enlargedView = document.getElementsByClassName("enlarged-view")[0];

	enlargedView.style.display = "none";
	document.getElementsByTagName('main')[0].style.webkitFilter = "";
	document.getElementsByClassName('news-bulletin')[0].style.webkitFilter = "";
}




//carousel for team list
var scrollLeft  = document.getElementsByClassName('scrollLeft')[0];
var scrollRight = document.getElementsByClassName('scrollRight')[0];

//scrolls carousel to the right
function carouselRight(clickedButton){

	//gets the carousel of the corresponding button clicked
	if (clickedButton.classList.contains("mobile-scroll")) {
		var carousel = clickedButton.parentNode.previousElementSibling.previousElementSibling;
	}
	else {
	  var carousel = clickedButton.previousElementSibling;
	}

  //carousel properties
  var carouselWidth = carousel.offsetWidth;

	//scrolls carousel right
  carousel.scrollLeft += carouselWidth;

};

//scrolls carousel to the left
function carouselLeft(clickedButton) {

	//gets the carousel of the corresponding button clicked
	if (clickedButton.classList.contains("mobile-scroll")) {
		var carousel = clickedButton.parentNode.previousElementSibling.previousElementSibling;
	}
	else {
	  var carousel = clickedButton.nextElementSibling;
	}

  //carousel properties
  var carouselWidth = carousel.offsetWidth;

	//scrolls carousel left
  carousel.scrollLeft -= carouselWidth;
};
