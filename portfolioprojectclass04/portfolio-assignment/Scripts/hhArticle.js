var hhSpots = [];

function hhSpot (opts) {
  this.title = opts.title;
  this.hhTime = opts.hhTime;
  this.location = opts.location;
  this.hhMenuUrl = opts.hhMenuUrl;
  this.venueWebsiteUrl = opts.venueWebsiteUrl;
  this.distance = opts.distance;
  this.image = opts.image;
  this.yelpReviewsUrl = opts.yelpReviewsUrl;
  this.body = opts.body;
}

hhSpot.prototype.toHtml = function() {
  var newhhSpot = Handlebars.compile($('#hh-template').text());
  return newhhSpot(this);
};

if (typeof rawData !== 'undefined') {
  hhRawData.sort(function(a,b) {
    return (new Date(a.distance)) - (new Date(b.distance));
  });

  hhRawData.forEach(function(ele) {
    hhSpots.push(new hhSpot(ele));
    })
}

hhSpots.forEach(function(a){
  $('#hhSpots').append(a.toHtml())
});
