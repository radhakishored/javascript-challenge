// from data.js
var tableData = data;

// YOUR CODE HERE!

console.log(tableData);

//var table = d3.select("table");
//table.attr("class", "table table-striped");
var tbody = d3.select("tbody");

//Loop through all data
tableData.forEach(function(td) {
    console.log(td);
});

tableData.forEach(function(td) {
    console.log(td);
    var row = tbody.append("tr");
});

tableData.forEach(function(td) {
    console.log(td);
    var row = tbody.append("tr");
    Object.entries(td).forEach(function([key, value]) {
        console.log(key, value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});



// Getting a reference to the button and getting a reference to the input element on the page 
var button = d3.select("#filter-btn");
button.on("click", function() {
    tbody.html(" ");
    //d3.event.preventDefault();


    // Input fields can trigger a change event when new text is entered.
    var dateInputField = d3.select("#datetime");
 

    // Get the value property of the input element
    var dateValue = dateInputField.property("value").trim();
    

    //For filters need to create if statements
    var fd = tableData.filter(entry => entry.datetime === dateValue);
    console.log(fd);


    fd.forEach(function(select) {
        console.log(select);
        var row = tbody.append("tr");
        Object.entries(select).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});
