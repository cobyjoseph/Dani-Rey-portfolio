<div class="flex flex-col text-primary mx-[5.5%]">
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

	<div class="flex justify-center h-[100px] items-center">
		<div class="w-[83%] border-t-[2px] border-dashed border-primary" />
	</div>

	<div class="flex justify-between">
		<!-- top row of boxes -->
		<div class="w-[18%] invisible" />
		<div class="w-[18%] border border-primary relative pseudoCircleBefore1">
			box with lots of text example blah blah
		</div>
		<div class="w-[18%] invisible border border-primary" />

		<div class="w-[18%] border border-primary relative pseudoCircleBefore2">
			box with lots of text example blah blah
		</div>
		<div class="w-[18%] invisible border border-primary" />
	</div>
</div>

<style>
	.pseudoCircleAfter1::after {
		content: '1'; /* The number you want to display */
		position: absolute;
		bottom: -80px; /* Adjust as needed */
		left: 50%;
		transform: translateX(-50%);
		width: 60px; /* Width of the circle */
		height: 60px; /* Height of the circle */
		background-color: #333333; /* Color of the circle */
		color: white; /* Color of the number */
		text-align: center;
		line-height: 54px; /* Aligns the text vertically */
		border: 2px solid #fffbde;
		border-radius: 50%; /* Makes it a circle */
		color: #fffbde;
		font-family: General Sans;
		font-size: 30px;
	}

	.pseudoCircleAfter2::after {
		content: '3'; /* The number you want to display */
		position: absolute;
		bottom: -80px; /* Adjust as needed */
		left: 50%;
		transform: translateX(-50%);
		width: 60px; /* Width of the circle */
		height: 60px; /* Height of the circle */
		background-color: #333333; /* Color of the circle */
		color: white; /* Color of the number */
		text-align: center;
		line-height: 54px; /* Aligns the text vertically */
		border: 2px solid #fffbde;

		border-radius: 50%; /* Makes it a circle */
		color: #fffbde;
		font-family: General Sans;
		font-size: 30px;
	}

	.pseudoCircleAfter3::after {
		content: '5'; /* The number you want to display */
		position: absolute;
		bottom: -80px; /* Adjust as needed */
		left: 50%;
		transform: translateX(-50%);
		width: 60px; /* Width of the circle */
		height: 60px; /* Height of the circle */
		background-color: #333333; /* Color of the circle */
		color: white; /* Color of the number */
		text-align: center;
		line-height: 54px; /* Aligns the text vertically */
		border: 2px solid #fffbde;

		border-radius: 50%; /* Makes it a circle */
		color: #fffbde;
		font-family: General Sans;
		font-size: 30px;
	}

	.pseudoCircleBefore1::before {
		content: '2'; /* The number you want to display */
		position: absolute;
		top: -80px; /* Adjust as needed */
		left: 50%;
		transform: translateX(-50%);
		width: 60px; /* Width of the circle */
		height: 60px; /* Height of the circle */
		background-color: #333333; /* Color of the circle */
		color: white; /* Color of the number */
		text-align: center;
		line-height: 54px; /* Aligns the text vertically */
		border: 2px solid #fffbde;

		border-radius: 50%; /* Makes it a circle */
		color: #fffbde;
		font-family: General Sans;
		font-size: 30px;
	}

	.pseudoCircleBefore2::before {
		content: '4'; /* The number you want to display */
		position: absolute;
		top: -80px; /* Adjust as needed */
		left: 50%;
		transform: translateX(-50%);
		width: 60px; /* Width of the circle */
		height: 60px; /* Height of the circle */
		background-color: #333333; /* Color of the circle */
		color: white; /* Color of the number */
		text-align: center;
		line-height: 54px; /* Aligns the text vertically */
		border: 2px solid #fffbde;

		border-radius: 50%; /* Makes it a circle */
		color: #fffbde;
		font-family: General Sans;
		font-size: 30px;
	}
</style>
