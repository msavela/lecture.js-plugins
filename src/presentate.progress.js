(function(lecture) {
	lecture.on('activate', function(e) {
		var percent = ((e.index) / (lecture.deck.length - 1)) * 100;
		document.querySelector('.progress').style.width = percent + "%";
		lecture.dispatch('progress', {
			progress: ((e.index) / (lecture.deck.length - 1)) * 100
		});
	});
}(lecture));