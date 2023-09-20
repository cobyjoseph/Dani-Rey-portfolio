<div class="flex flex-col text-primary mx-[5.5%] gap-4">
	<!-- title of the section -->
	<div class="flex justify-between">
		<!-- top row of boxes -->
		<div class="w-[18%] border border-primary relative pseudoCircleAfter1">
			box with lots of text example blah blah
		</div>
		<div class="w-[18%] border border-primary relative pseudoCircleAfter2">
			box with lots of text example blah blah
		</div>
		<div class="w-[18%] border border-primary relative pseudoCircleAfter3">
			box with lots of text example blah blah
		</div>
	</div>

	<div class="flex justify-between">
		<!-- top row of boxes -->
		<div class="w-[18%] invisible" />
		<div class="w-[18%] border border-primary">box with lots of text example blah blah</div>
		<div class="w-[18%] invisible border border-primary" />

		<div class="w-[18%] border border-primary">box with lots of text example blah blah</div>
		<div class="w-[18%] invisible border border-primary" />
	</div>
</div>

<!-- <div class="flex justify-between mx-[6%]">
      <div class="p-5 w-5 h-5 justify-center items-center border rounded-full">1</div>
      <div class="p-5 w-5 h-5 justify-center items-center border rounded-full">2</div>
      <div class="p-5 w-5 h-5 justify-center items-center border rounded-full">3</div>
      <div class="p-5 w-5 h-5 justify-center items-center border rounded-full">4</div>
      <div class="p-5 w-5 h-5 justify-center items-center border rounded-full">5</div>
</div> -->

<!-- <div class="grid grid-cols-6 row gap-[25px] bg-red-500">
	<div class=" col-span-2 outline border border-primary">
		<div class=" mx-auto border border-primary flex w-20">stuff in here</div>
	</div>
	<div class="col-span-2 border border-primary">
		<div class=" mx-auto border border-primary flex w-20">stuff in here</div>
	</div>
	<div class=" col-span-2 border border-primary">
		<div class=" mx-auto border border-primary flex w-20">stuff in here</div>
	</div>


</div>

<div class="line-container outline">
	<div class="line" />
</div>

<div class="grid grid-cols-6 row gap-[25px] bg-red-500">
	<div class=" col-span-3 outline border border-primary">
		<div class=" mx-auto border border-primary flex w-20">stuff in here</div>
	</div>
	<div class="col-span-3 border border-primary">
		<div class=" mx-auto border border-primary flex w-20">stuff in here</div>
	</div>

</div> -->

<style>
	.pseudoCircleAfter1::after {
		content: '1'; /* The number you want to display */
		position: absolute;
		bottom: -30px; /* Adjust as needed */
		left: 50%;
		transform: translateX(-50%);
		width: 24px; /* Width of the circle */
		height: 24px; /* Height of the circle */
		background-color: #ff4500; /* Color of the circle */
		color: white; /* Color of the number */
		text-align: center;
		line-height: 24px; /* Aligns the text vertically */
		border-radius: 50%; /* Makes it a circle */
	}

	.pseudoCircleAfter2::after {
		content: '2'; /* The number you want to display */
		position: absolute;
		bottom: -30px; /* Adjust as needed */
		left: 50%;
		transform: translateX(-50%);
		width: 24px; /* Width of the circle */
		height: 24px; /* Height of the circle */
		background-color: #ff4500; /* Color of the circle */
		color: white; /* Color of the number */
		text-align: center;
		line-height: 24px; /* Aligns the text vertically */
		border-radius: 50%; /* Makes it a circle */
	}

	.pseudoCircleAfter3::after {
		content: '3'; /* The number you want to display */
		position: absolute;
		bottom: -30px; /* Adjust as needed */
		left: 50%;
		transform: translateX(-50%);
		width: 24px; /* Width of the circle */
		height: 24px; /* Height of the circle */
		background-color: #ff4500; /* Color of the circle */
		color: white; /* Color of the number */
		text-align: center;
		line-height: 24px; /* Aligns the text vertically */
		border-radius: 50%; /* Makes it a circle */
	}
</style>
