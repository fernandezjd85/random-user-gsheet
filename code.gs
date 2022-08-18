var endpoint = "https://randomuser.me/api/";
let options = {
  page    : 1,
  results : 10,
  nat     : "co,ar,us",
  format  : "json",
  gender  : ""
}

function getRandomuser() {
  var sheet = SpreadsheetApp.getActiveSheet();

  var params = Object.keys(options).map(function(key) {
              return key + '=' + options[key];
            }).join('&');


  var response = UrlFetchApp.fetch(endpoint + "?" + params + "&noinfo", options);
  const data = JSON.parse(response);
  console.log(data.results)

  Object.keys(data.results).forEach(function(key) {

    console.log(key, data.results[key]);

  });
  
  
}
