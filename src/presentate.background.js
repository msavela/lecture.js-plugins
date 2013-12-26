(function(lecture) {
	lecture.on('activate', function(e) {
		lecture.parent.style.background =
			lecture.deck[e.index].getAttribute('data-background') || 'transparent';
	});
}(lecture));