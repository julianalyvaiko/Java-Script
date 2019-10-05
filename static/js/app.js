// from data.js
var tableData = data;

//separate each data into its own categories
var dates = data.map(function (date) {
  return date.datetime;
});

var cities = data.map(function (town) {
  return town.city
});

var states = data.map(function (st) {
  return st.state;
});

var countries = data.map(function (ctry) {
  return ctry.country;
});

var shapes = data.map(function (objshape) {
  return objshape.shape;
});

var minutes = data.map(function (mins) {
  return mins.durationMinutes;
});

var allcomments = data.map(function (talks) {
  return talks.comments;
});

// Use D3 to create a reference to the table body
var tbody = d3.select("tbody");

// For loop through all the lists (Arrays), create rows & their cells using the data from each list
for (var counter = 0; counter < dates.length; counter++) {
  // create a tr (row)
  var row = tbody.append("tr");

  // create a td (cell) for each data point in the dictionary
  row.append("td").text(dates[counter]);
  row.append("td").text(cities[counter]);
  row.append("td").text(states[counter]);
  row.append("td").text(countries[counter]);
  row.append("td").text(shapes[counter]);
  row.append("td").text(minutes[counter]);
  row.append("td").text(allcomments[counter]);
}


//                   BUTTON HANDLING SECTION                //

// Grab reference to the button
var button = d3.select("#filter-btn");

console.log('Here is the button:', button);

button.on("click", function () {
  // Prevents the page from refreshing
  d3.event.preventDefault();

  console.log('HEY THE BUTTON CLICK HANDLER WORKS!');

  // Select the input element (date time)
  var dateInputElement = d3.select("#datetime");
  console.log('Date Input Element:', dateInputElement);

  // Get value
  var dateInput = dateInputElement.property('value');
  console.log('Date Input:', dateInput);

  // Select the input element (date time)
  var cityInputElement = d3.select("#city");
  console.log('City Input Element:', cityInputElement);

  // Get value
  var cityInput = cityInputElement.property('value');
  console.log('City Input:', cityInput);


  // 1.) Remove the existing data from tbody
  tbody.html('');

  // 2.) loop through, filtering the data based on the specified date and create rows that match the input fields (date, etc)
  var filtered_dates = [];
  var filtered_cities = [];
  var filtered_states = [];
  var filtered_countries = [];
  var filtered_shapes = [];
  var filtered_minutes = [];
  var filtered_allcomments = [];

  // 2.a) Filter by Date
  if (dateInput === '') {

    console.log('No date has been specified')

    var filtered_dates = dates;
    var filtered_cities = cities;
    var filtered_states = states;
    var filtered_countries = countries;
    var filtered_shapes = shapes;
    var filtered_minutes = minutes;
    var filtered_allcomments = allcomments;

  } else {

    for (var counter = 0; counter < dates.length; counter++) {

      if (dateInput === dates[counter]) {

        // adding only the proper data that matches the date
        filtered_dates.push(dates[counter]);
        filtered_cities.push(cities[counter]);
        filtered_states.push(states[counter]);
        filtered_countries.push(countries[counter]);
        filtered_shapes.push(shapes[counter]);
        filtered_minutes.push(minutes[counter]);
        filtered_allcomments.push(allcomments[counter]);

      }

    }

  }

  //                           BONUS                    //
  // 2.b) Filter by City
  if (cityInput === '') {

    console.log('No city has been specified')

    var c_filtered_dates = filtered_dates;
    var c_filtered_cities = filtered_cities;
    var c_filtered_states = filtered_states;
    var c_filtered_countries = filtered_countries;
    var c_filtered_shapes = filtered_shapes;
    var c_filtered_minutes = filtered_minutes;
    var c_filtered_allcomments = filtered_allcomments;

  } else {

    // create new empty lists
    var c_filtered_dates = [];
    var c_filtered_cities = [];
    var c_filtered_states = [];
    var c_filtered_countries = [];
    var c_filtered_shapes = [];
    var c_filtered_minutes = [];
    var c_filtered_allcomments = [];

    for (var counter = 0; counter < filtered_dates.length; counter++) {

      if (cityInput === filtered_cities[counter]) {

        c_filtered_dates.push(filtered_dates[counter]);
        c_filtered_cities.push(filtered_cities[counter]);
        c_filtered_states.push(filtered_states[counter]);
        c_filtered_countries.push(filtered_countries[counter]);
        c_filtered_shapes.push(filtered_shapes[counter]);
        c_filtered_minutes.push(filtered_minutes[counter]);
        c_filtered_allcomments.push(filtered_allcomments[counter]);

      }

    }

  }

  for (var counter = 0; counter < c_filtered_dates.length; counter++) {
    // create a tr (row)
    var row = tbody.append("tr");

    // create a td (cell) for each data point in the dictionary
    row.append("td").text(c_filtered_dates[counter]);
    row.append("td").text(c_filtered_cities[counter]);
    row.append("td").text(c_filtered_states[counter]);
    row.append("td").text(c_filtered_countries[counter]);
    row.append("td").text(c_filtered_shapes[counter]);
    row.append("td").text(c_filtered_minutes[counter]);
    row.append("td").text(c_filtered_allcomments[counter]);
  }
})
