(function(lecture) {
	lecture.on('next', function(e) {
		if(e.index == lecture.deck.length - 1) {
			lecture.activate(0);
			return false;
		}
	});

	lecture.on('prev', function(e) {
		if(e.index == 0) {
			lecture.activate(lecture.deck.length - 1);
			return false;
		}
	});
}(lecture));