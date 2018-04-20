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

  banner.display();