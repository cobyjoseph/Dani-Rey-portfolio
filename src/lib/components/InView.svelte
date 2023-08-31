<script lang="ts">
	import { onMount } from 'svelte';

	let isVisible = false;
	// let translateAmount = 1;

	let element;

	const handleIntersect = (e) => {
		isVisible = e[0].isIntersecting;
	};

	// const handleScroll = () => {
	// 	scrollAmount = window.scrollY;
	// };

	onMount(() => {
		const root = null;
		const rootMargin = `0px 0px 350px 0px`;
		const options = { root, rootMargin };

		const observer = new IntersectionObserver(handleIntersect, options);
		observer.observe(element);
	});
</script>

<div bind:this={element}>
	<slot {isVisible} />
</div>

<!-- <script lang="ts">
	import { onMount } from 'svelte';

	let isVisible = false;
	let scrollAmount = 3000;
	let element;

	const handleIntersect = (e) => {
		isVisible = e[0].isIntersecting;
	};

	const handleScroll = () => {
		scrollAmount = window.scrollY;
	};

	onMount(() => {
		// Initialize Intersection Observer
		const root = null;
		const rootMargin = `0px 0px 200px 0px`;
		const options = { root, rootMargin };
		const observer = new IntersectionObserver(handleIntersect, options);
		observer.observe(element);

		// Initialize Scroll Listener
		window.addEventListener('scroll', handleScroll);

		return () => {
			observer.disconnect();
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div bind:this={element}>
	<slot {isVisible} {scrollAmount} />
</div> -->

<!-- <script lang="ts">
	import { onMount } from 'svelte';
	let isVisible = false;
	let scrollAmount = 0;
	let element;

	const throttle = (func, limit) => {
		let lastFunc;
		let lastRan;
		return function () {
			const context = this;
			const args = arguments;
			if (!lastRan) {
				func.apply(context, args);
				lastRan = Date.now();
			} else {
				clearTimeout(lastFunc);
				lastFunc = setTimeout(function () {
					if (Date.now() - lastRan >= limit) {
						func.apply(context, args);
						lastRan = Date.now();
					}
				}, limit - (Date.now() - lastRan));
			}
		};
	};

	const handleIntersect = (e) => {
		isVisible = e[0].isIntersecting;
	};

	const handleScroll = throttle(() => {
		scrollAmount = window.scrollY;
	}, 100);

	onMount(() => {
		// For IntersectionObserver
		const observer = new IntersectionObserver(handleIntersect);
		observer.observe(element);

		// For Scroll
		window.addEventListener('scroll', handleScroll);

		return () => {
			observer.disconnect();
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div bind:this={element}>
	<slot {isVisible} {scrollAmount} />
</div> -->
