# random-user-gsheet
Google gSheet integration to pull data from RandomUser API

Simple script to extract data from randomuser.me and place it inside current active sheet.

## API Documentation

The object options has all the parameters GET based on the following link documentation.
https://randomuser.me/documentation

If you need to make specifict changes based on your need you can change the 

```
let options = {
  page    : 1,
  results : 10,
  nat     : "co,ar,us",
  format  : "json",
  gender  : ""
}
```
