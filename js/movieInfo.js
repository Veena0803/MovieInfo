  var banner = {
      "name": "MovieInfo",
      "tag": "Your one stop shop to all things movies",
      "contacts": {
          "mobile": "412-656-4646",
          "email": "iyerveena08@gmail.com",
          "github": "VeenaIyer",
          "twitter": "Veena",
          "location": "Plainville, MA"
      }
  };

  var data = "%data%";

  banner.display = function() {

      var formattedName = HTMLheaderName.replace(data, banner.name);
      var formattedTag = HTMLheaderTag.replace(data, banner.tag);
      $(".header").prepend(formattedName, formattedTag);

      var formattedMobile = HTMLmobile.replace(data, banner.contacts.mobile);
      var formattedEmail = HTMLemail.replace(data, banner.contacts.email);
      var formattedGithub = HTMLgithub.replace(data, banner.contacts.github);
      var formattedTwitter = HTMLtwitter.replace(data, banner.contacts.twitter);
      var formattedLocation = HTMLlocation.replace(data, banner.contacts.location);


      $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
  };
  
  var drama = {
      movies: [{
          "title": "The Godfather",
		  "bio": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
	  },{
		  "title": "Schindler's List",
		  "bio": "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans." 
	  },{
		  "title": "Forrest Gump",
		  "bio": "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75." 
	  },{
		  "title": "Goodfellas",
		  "bio": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate." 
	  },{
		  "title": "The Shawshank Redemption",
		  "bio": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency." 
	  },{
		  "title": "12 Angry Men",
		  "bio": "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence." 
	  }
	]
  };
  drama.display = function() {
      drama.movies.forEach(function(movie) {
          $("#drama").append(HTMLdramaStart);
		  
		  var formattedTitle = HTMLmovieTitle.replace(data, movie.title);
          var formattedBio = HTMLmovieBio.replace(data, movie.bio);
		  
		  $(".drama-entry:last").append(formattedTitle);
		  $(".drama-entry:last").append(formattedBio);
      });
  };
  
  var thriller = {
      movies: [{
          "title": "The Godfather",
		  "bio": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
	  },{
		  "title": "Schindler's List",
		  "bio": "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans."
	  }
	]
  };
  thriller.display = function() {
      thriller.movies.forEach(function(movie) {
          $("#thriller").append(HTMLthrillerStart);
		  
		  var formattedTitle = HTMLmovieTitle.replace(data, movie.title);
          var formattedBio = HTMLmovieBio.replace(data, movie.bio);
		  
		  $(".thriller-entry:last").append(formattedTitle);
		  $(".thriller-entry:last").append(formattedBio);
      });
  };
  
  var action = {
      movies: [{
          "title": "The Godfather",
		  "bio": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
	  },{
		  "title": "Schindler's List",
		  "bio": "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans."
	  }
	]
  };
  action.display = function() {
      action.movies.forEach(function(movie) {
          $("#action").append(HTMLactionStart);
		  
		  var formattedTitle = HTMLmovieTitle.replace(data, movie.title);
          var formattedBio = HTMLmovieBio.replace(data, movie.bio);
		  
		  $(".action-entry:last").append(formattedTitle);
		  $(".action-entry:last").append(formattedBio);
      });
  };

  banner.display();
  drama.display();
  action.display();
  thriller.display();