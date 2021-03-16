// from data.js
var tableData = data;

// declaring tbody as global variable
let tbody = d3.select("tbody");

function createtable (data) {
// clearing out existing data
tbody.html("")
data.forEach(function(sighting){
    // console.log(sighting)

    var row = tbody.append("tr");

    Object.entries(sighting).forEach(function([key,value]) {
        // console.log(key,value)

        var cell = row.append("td");
        cell.text(value)
    })
})
}
createtable(data)


// Create the function to run for both events
function runEnter() {
//   console.log(this)
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filtereddata = data.filter(data => data.datetime === inputValue)

  console.log(filtereddata);

  // Print the value to the console
  console.log(inputValue);

  createtable(filtereddata);

  // Set the span tag in the h1 element to the text
  // that was entered in the form
//   d3.select("h1>span").text(inputValue);
}

var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);
