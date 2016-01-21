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
  var $newhhSpot = $('.template').clone();
  $newhhSpot.attr('data-bar', this.title);
  $newhhSpot.attr('data-distance', this.distance);
  $newhhSpot.find('h1').html(this.title);
  $newhhSpot.find('h2').html('HH Time: ' + this.hhTime);
  $newhhSpot.find('h3').html(this.distance);
  $newhhSpot.find('.location').html('Address: ' + this.location);
  $newhhSpot.find('.hhMenu').html(this.hhMenuUrl);
  $newhhSpot.find('.venueWebsite').html(this.venueWebsiteUrl);
  $newhhSpot.find('.image').html(this.image);
  $newhhSpot.find('.yelpReviewsUrl').html(this.yelpReviewsUrl);
  $newhhSpot.find('.hh-body').html(this.body);
  $newhhSpot.removeClass('template');
  return $newhhSpot;
}

hhRawData.sort(function(a,b) {
  return (new Date(a.distance)) - (new Date(b.distance));
});

hhRawData.forEach(function(ele) {
  hhSpots.push(new hhSpot(ele));
})

hhSpots.forEach(function(a){
  $('#hhSpots').append(a.toHtml())
});


