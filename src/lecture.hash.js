(function(lecture) {
	lecture.on('init', function() {
		var hash = function() {
			var slide = parseInt(window.location.hash.substring(1));
			if(slide && slide > 0)
				return slide - 1;
			return -1;
		};

		var slide = hash();
		if(slide >= 0)
			lecture.activate(slide);

		// Set listener
		window.onhashchange = function() {
			lecture.activate(hash());
		};

		if(slide >= 0)
			return false;
		return;
	});

	lecture.on('activate', function(e) {
		// Update hash
		window.location.hash = e.index + 1;// == 1 ? "" : e.index;
	});
}(lecture));