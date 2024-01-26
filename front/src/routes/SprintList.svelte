<!-- src/components/SprintList.svelte -->
<script>
	import { onMount } from 'svelte';
	import axios from 'axios';

	/**
	 * @type {any[]}
	 */
	let sprints = [];

	onMount(async () => {
		try {
			const response = await axios.get('http://localhost:3000/sprints'); // Update the URL
			sprints = response.data;
		} catch (error) {
			console.error('Error fetching sprints:', error);
		}
	});
</script>

<div>
	<h2>Sprints</h2>
	<ul>
		{#each sprints as sprint (sprint._id)}
			<li>
				Sprint {sprint.sprintNumber} - Capacity: {sprint.capacity}, Velocity: {sprint.velocity}
			</li>
		{/each}
	</ul>
</div>
