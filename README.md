# lecture.js-plugins

lecture.js plugin repository

# Usage

Plugins need to be included after lecture.js:

```html
<script src="lecture.js"></script>
<!-- Include plugins here -->
<script src="lecture.fragment.js"></script>
<script src="lecture.hash.js"></script>
```

See more detailed [documentation](https://github.com/msavela/lecture.js).

## lecture.fragment.js

Ability to reveal/hide elements while navigating forward/back.

```html
<article>
	<section>
		<h1>Header</h1>
		<!-- Following element will be revealed when navigating forward -->
		<p class="fragment">Reveal me</p>
	</section>
</article>
```

See [example](http://msavela.github.io/lecture.js) for more details.

## lecture.hash.js

Hash URL support adds identifier for each slide to the browser's address bar.

See [example](http://msavela.github.io/lecture.js) for more details.

## lecture.loop.js

Loop plugin enables the presentation to loop from last slide back to first and vice versa.

## lecture.progress.js

Progress plugin dispatches progress event whenever slide changes.

```js
lecture.on('progress', function(e) {
	// Set progress element width
	document.querySelector('.progress').style.width = e.progress + "%";
});
```	

See [example](http://msavela.github.io/lecture.js) for more details.

## lecture.style.js

Add custom style(s) to presentation deck while slide is active:

```html
<article>
	<section data-style="custom">
		<h1>Header</h1>
	</section>
</article>
```

Change deck background-color:

```css
article.custom {
	/* Set deck background color when slide is active */
	background-color: #333;
}
```

See [example](http://msavela.github.io/lecture.js) for more details.
