var hhView = {};

hhView.populateFilters = function () {
	$('bar').each(function () {
		if(!$(this).hasClass('template')){
			var val = $(this).find('h1').text();
			var optionTag = '<option value="' + val + '">' + val + '</option>';
			$('#bar-filter').append(optionTag);
		}
		if(!$(this).hasClass('template')){
			var val = $(this).find('h3').text();
			var optionTag = '<option value="' + val + '">' + val + '</option>';
			$('#distance-filter').append(optionTag);
		}
	});
};

hhView.handleBarFilter = function () {
	$('#bar-filter').on('change', function () {
		if($(this).val()) {
			$('bar').hide();
			$('bar[data-bar="' + $(this).val() + '"]').fadeIn();
		} else {
			$('bar').fadeIn();
			$('template').hide();
		}
		$('#distance-filter').val('');
	});
};

hhView.handleDistanceFilter =  function () {
	$('#distance-filter').on('change', function () {
		if($(this).val()) {
			$('bar').hide();
			$('bar[data-distance="' + $(this).val() + '"]').fadeIn();
		} else {
			$('bar').fadeIn();
			$('template').hide();
		}
		$('#bar-filter').val('');
	});
};

hhView.handleMainNav = function() {
	$('.main-nav').on('click', '.tab', function(e) {
		$('.tab-content').hide();
		$('.tab-content').fadeIn();
	});

	$('.main-nav .tab:first').click();
};

hhView.setTeasers = function() {
  $('.hh-body *:nth-of-type(n+2)').hide();

  $('#hhSpots').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    $(this).parent().find('*').fadeIn();
    $(this).hide();
  });
};

$(document).ready(function() {
  hhView.populateFilters();
  hhView.handleBarFilter();
  hhView.handleDistanceFilter();
  hhView.handleMainNav();
  hhView.setTeasers();
})
