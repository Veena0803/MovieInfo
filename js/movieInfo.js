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