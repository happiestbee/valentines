<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<script>
	import img from '$lib/assets/Peach Goma.gif';
	import cheer from '$lib/assets/cheer.gif';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	export let data

	let yes = false
	const scale = tweened(1, {
		duration: 300,
		easing: cubicOut
	});
	let yes_scale = tweened(1, {
		duration: 300,
		easing: cubicOut
	});
	let i = 1
	let reverse = false
	function no() {
		if (i < 9) {
			i += 1
			$scale -= 0.05
			$yes_scale += 0.1
			// reverse = !reverse
		}			
	}

</script>

<div class="h-screen mx-auto flex justify-center items-center px-5 text-center">
	<div class="space-y-12">
		{#if !yes}
		<img src={img} alt="Peach Goma" class="w-[24rem] shadow-xl dark:shadow-gray-800 rounded-lg mx-auto"/>

		<h1 class="h1 font-indie">hihi {data.name} !! will u be my valentine ? </h1>
		<div class='space-x-20 flex justify-center items-center '>
			{#if !reverse}
				<button type="button" class='text-2xl btn-lg variant-filled-success shadow-lg rounded-lg font-indie'  style='transform: scale({$yes_scale})' on:click={() => yes = true}>yes 🥳</button>
				<button id="no" type="button" class="text-2xl btn-lg variant-filled-error shadow-lg rounded-lg font-indie" style='transform: scale({$scale}); transform-origin: 0 0' on:click={no}>no 😔</button>
			{:else}
				<button id="no" type="button" class="text-2xl btn-lg variant-filled-error shadow-lg rounded-lg font-indie" style='transform: scale({$scale})' on:click={no}>no 😔</button>
				<button type="button" class='text-2xl btn-lg variant-filled-success shadow-lg rounded-lg font-indie'  style='transform: scale({$yes_scale})' on:click={() => yes = true}>yes 🥳</button>
			{/if}
		</div>
		{:else}
		<img src={cheer} alt="Cheer" class="w-[24rem] shadow-xl dark:shadow-gray-800 rounded-lg mx-auto"/>
		<div class="space-y-5">
			<h1 class="h2 font-indie">{data.message}</h1>
			<h1 class="h2 font-indie">{data.message2}</h1>
		</div>
		{/if}
	</div>
</div>
