(function(lecture) {
	var style = function(e, method) {
		var attr = lecture.deck[e.index].getAttribute('data-style');
		if(attr) {
			attr.split(' ').forEach(function(style) {
				lecture.parent.classList[method](style);
			});
		}
	};

	lecture.on('deactivate', function(e) {
		style(e, 'remove');
	});

	lecture.on('activate', function(e) {
		style(e, 'add');
	});
}(lecture));