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
          "title": "Seven",
		  "bio": "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives."
	  },{
		  "title": "Psycho",
		  "bio": "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother."
	  },{
		  "title": "The Silence of the Lambs",
		  "bio": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims."
	  },{
		  "title": "Memento",
		  "bio": "A man juggles searching for his wife's murderer and keeping his short-term memory loss from being an obstacle."
	  },{
		  "title": "Inception",
		  "bio": "A thief, who steals corporate secrets through the use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO."
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
          "title": "Die Hard",
		  "bio": "John McClane, officer of the NYPD, tries to save his wife Holly Gennaro and several others that were taken hostage by German terrorist Hans Gruber during a Christmas party at the Nakatomi Plaza in Los Angeles"
	  },{
		  "title": "The Dark Knight",
		  "bio": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice."
	  },{
		  "title": "The Avengers",
		  "bio": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
	  },{
		  "title": "Raiders of the Lost Ark",
		  "bio": "Archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before the Nazis."
	  },{
		  "title": "Mad Max : Fury Road",
		  "bio": " A woman rebels against a tyrannical ruler in postapocalyptic Australia in search for her home-land with the help of a group of female prisoners, a psychotic worshipper, and a drifter named Max."
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
  
  var comedy = {
      movies: [{
          "title": "Die Hard",
		  "bio": "John McClane, officer of the NYPD, tries to save his wife Holly Gennaro and several others that were taken hostage by German terrorist Hans Gruber during a Christmas party at the Nakatomi Plaza in Los Angeles"
	  },{
		  "title": "The Dark Knight",
		  "bio": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice."
	  },{
		  "title": "The Avengers",
		  "bio": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
	  },{
		  "title": "Raiders of the Lost Ark",
		  "bio": "Archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before the Nazis."
	  },{
		  "title": "Mad Max : Fury Road",
		  "bio": " A woman rebels against a tyrannical ruler in postapocalyptic Australia in search for her home-land with the help of a group of female prisoners, a psychotic worshipper, and a drifter named Max."
	  }
	]
  };
  comedy.display = function() {
      comedy.movies.forEach(function(movie) {
          $("#comedy").append(HTMLcomedyStart);
		  
		  var formattedTitle = HTMLmovieTitle.replace(data, movie.title);
          var formattedBio = HTMLmovieBio.replace(data, movie.bio);
		  
		  $(".comedy-entry:last").append(formattedTitle);
		  $(".comedy-entry:last").append(formattedBio);
      });
  };

  banner.display();
  drama.display();
  action.display();
  thriller.display();
  comedy.display();