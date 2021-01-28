//---------- What are the Dependencies -----------
// - DOM Elements
// - variables

// ----------- Data ----------------------
//--

// ----------- Functions ------------------

// ---------- User Interaction -----------------

// when the user pressed the eat out button --->
// a dish gets randomly generated

// When the user clicks the "Random" button (on page 1) 
// call the function to generate three random dishes
// and display them.
$("#random-button").on("click", function() {

})

// When the user clicks on the "Regenerate" button 
// (on page 2) call a function to get three
// different random recipes and display them.
$("#regenerate-button").on("click", function() {

})

// When the user clicks on the Submit button 
// (on page 2) call a function to get the user's
// choices on page 2 get data based on their choices.
$("#submit-button").on("click", function() {

})

// When the user clicks on the Back button
// (on page 2 - restaurants or recipes) call a 
// function to go back to the list of random
// choices (page 2).
$("#back-button").on("click", function() {

})

// When the user clicks an image of a recipe 
// on the recipe list page (page 3) call a 
// function to display the recipe detail page.
$("#image-click").on("click", function() {

})





// // ---------------Google Places AJAX Call ---------------

var map;
var service;
var infowindow;

function initMap() {
  var sydney = new google.maps.LatLng(-33.867, 151.195);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(document.getElementById("map"), {
    center: sydney,
    zoom: 15,
  });

  var request = {
    query: "Museum of Contemporary Art Australia",
    fields: ["name", "geometry"],
  };

  var service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, function (results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
      map.setCenter(results[0].geometry.location);
    }
  });
}

$.ajax(settings).done(function (response) {
  console.log(response.recipes);
  displayReceipe(response.recipes);
});

function displayReceipe(recipes) {
  for (var i = 0; i < recipes.length; i++) {
    var title = recipes[i].title;
    var instructions = recipes[i].instructions;
    var liEl = $("<li>").html(
      "<h4>" + title + "</h4><p>" + instructions + "</p>"
    );
    var aEl = $("<a>")
      .attr("href", recipes[i].sourceUrl)
      .text(recipes[i].sourceUrl);
    liEl.append(aEl);
    $(".recipes").append(liEl);
  }
}
