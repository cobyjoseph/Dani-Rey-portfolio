<div class="grid-container">
	<div class="grid-item" />
	<div class="grid-item" />
	<div class="grid-item" />
	<div class="grid-item" />
	<div class="grid-item" />
	<div class="grid-item" />
</div>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 40px; /* Adjust as needed for your small buffer */
		height: 500vh; /* Make it full height */
		position: absolute; /* So it overlays on top of other content */
		pointer-events: none; /* So you can click through it */
		z-index: 9999; /* High z-index to make sure it's above other elements */
		opacity: 0.5; /* Adjust to your preferred visibility */
		width: 92%; /* Set the width to 92% of the parent */
		max-width: 1530px; /* Set the max-width to 1530px */
		left: 50%; /* Center the element horizontally */
		transform: translateX(-50%); /* Center the element horizontally */
	}

	.grid-item {
		background-color: rgba(255, 0, 0, 0.3); /* Adjust color and opacity as needed */
		border: 1px solid rgba(255, 255, 255, 0.3);
	}
</style>
