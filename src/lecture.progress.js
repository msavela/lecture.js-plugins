(function(lecture) {
	lecture.on('activate', function(e) {
		lecture.dispatch('progress', {
			progress: ((e.index) / (lecture.deck.length - 1)) * 100
		});
	});
}(lecture));