// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// Automatic Table and Date Search
// Refactor to use Arrow Functions
function loadTableData(InputData) {
    InputData.forEach((UFOreport) => {
    var row = tbody.append("tr");
    Object.entries(UFOreport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  }); 
}
loadTableData(tableData);

//---Listen for events and search through the `date/time` column to find rows that match input
var button = d3.select("#filter-btn");
var Date = d3.select("#datetime");
var City = d3.select("#city");
var State = d3.select("#state");
var Country = d3.select("#country");
var Shape = d3.select("#shape");

// Clicks the button to filter data
button.on("click", function() {
    d3.event.preventDefault(); // Prevent the page from refreshing
  
    var inputDate  = Date.property("value"); // Get the value property of the input element
    var inputCity  = City.property("value"); 
    var inputState = State.property("value"); 
    var inputCountry = Country.property("value"); 
    var inputShape = Shape.property("value"); 
    console.log(inputDate)

    // Create Filtered dataset based on Input Values
    if (inputDate) {
        var filterdata = tableData.filter(onerec => onerec.datetime === inputDate);}
    if (inputCity) {
        var filterdata = filterdata.filter(onerec => onerec.city === inputCity);}
    if (inputState) {
        var filterdata = filterdata.filter(onerec => onerec.state === inputShape);}
    if (inputCountry) {
        var filterdata = filterdata.filter(onerec => onerec.country === inputCountry);}
    if (inputShape) {
        var filterdata = filterdata.filter(onerec => onerec.shape === inputShape);}
        
    // Build new UFO Table with the filtered subset of UFO Sighting data
    tbody.html("");
    loadTableData(filterdata);
  });
