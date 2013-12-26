(function(lecture) {
	var fragment = function(n) {
		if(lecture.index >= 0) {
			var fragment = lecture.deck[lecture.index].querySelectorAll(
				lecture.index - n < 0 ?
					'.fragment:not(.visible)' :
					'.fragment.visible'
			);
			if(fragment.length > 0) {
				if(lecture.index - n < 0)
					fragment[0].classList.add('visible');
				else
					fragment[fragment.length - 1].classList.remove('visible');
				return true; // Fragment found
			}
		}
		// No fragments left
		return false;
	};

	lecture.on('next', function(e) {
		if(fragment(e.index + 1))
			return false;
	});

	lecture.on('prev', function(e) {
		if(fragment(e.index - 1))
			return false;
	});
}(lecture));