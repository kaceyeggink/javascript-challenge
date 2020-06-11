// from data.js
var DataSet = data;
var tbody = d3.select("tbody");

// Populate the data 
DataSet.forEach((sighting) => {
    console.log(sighting);
    var row = tbody.append('tr');

    Object.entries(sighting).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

// Select button
var Filter = d3.select("#filter-btn");

//Click event 
Filter.on("click", function() {

// Remove complete data
d3.select("tbody").html("");

// Prevent refresh
d3.event.preventDefault();

// Populate filtered data
var datetime = d3.select("#datetime").property("value");
console.log(datetime);

var filterdata = DataSet.filter(record => record.datetime === datetime);
console.log(filterdata);

filterdata.forEach((sighting) => {
    var row = tbody.append('tr');

    Object.entries(sighting).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

});