# BirdStrike
Final project for Data Engineering.

Learned we can't push the database itself in its current formating because its 114 mb and the max size allowed is 114.

And Ians copy of that one thing was out of date, so we have to find the one thing. 

Because we need these somewhere accessable. 

http://catalog.data.gov/dataset/aircraft-wildlife-strike-data-raw-data
http://www.faa.gov/airports/airport_safety/wildlife/faq/

Trying to do map reduce
db.wildlife.aggregate([{$group:{_id{Airline:"$OPERATOR"}, NumReports: {$sum:1}}
}]);


var airportsList = db.wildlife.distinct("OPERATOR");

docs.forEach(function(doc) { db.new_collection.insert(doc) });