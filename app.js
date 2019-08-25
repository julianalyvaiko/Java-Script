// from data.js
var tableData = data;

// YOUR CODE HERE!
// select the element to put the body of the table in

var tbody = d3.select("tbody");

// select the filter button for future use

var submit = d3.select("#filter-btn");

// create function to display table
function displayTable(info) {
 info.forEach((event) => {
   var tr = tbody.append("tr");
     tr.append("td").text(event.datetime);
     tr.append("td").text(event.city);
     tr.append("td").text(event.state);
     tr.append("td").text(event.country);
     tr.append("td").text(event.shape);
     tr.append("td").text(event.durationMinutes);
     tr.append("td").text(event.comments);
   });
};

// display initial table
displayTable(tableData);

// create function that filters based on the entry and which type
   
function filtering(selection, entry) {

filteredData = tableData.filter(event => event[selection] === entry);

displayTable(filteredData);

};

// When user clicks button do this

submit.on("click", function() {

// prevent reloading of the screen

 d3.event.preventDefault();

// remove previous rows from display

 tbody.html('');

// Select the input element and get the raw HTML node and value

    var dateInput = d3.select("#datetime").property("value");
    var cityInput = d3.select('#city').property("value");
    var stateInput = d3.select("#state").property("value");
    var countryInput = d3.select("#country").property("value");
    var shapeInput = d3.select("#shape").property("value");

    // if input is specific type and variable display for those types

    if (dateInput) {

        filtering('datetime', dateInput);

    } else if (cityInput) {

        filtering('city', cityInput);

    } else if (stateInput) {

        filtering('state', stateInput);

    } else if (countryInput) {

        filtering('country', countryInput);

    } else if (shapeInput) {

        filtering('shape', shapeInput);

    } else {

        alert('You didn\'t input anything')
    };
});