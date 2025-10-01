<script lang="ts">
	import { onMount } from "svelte";
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import { runtime } from "$lib/controllers/runtime.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />
<Sidebar.Provider bind:open={runtime.sidebarIsOpen}>
	<AppSidebar />
	{#if !runtime.sidebarIsOpen}
        <div class="fixed bottom-[22px] left-[18px] z-50">
            <Sidebar.Trigger />
        </div>
    {/if}
	<div class="flex justify-center w-full">
		<main class={!runtime.sidebarIsOpen ? "container" : "mx-16 container"}>
			{@render children?.()}
		</main>
	</div>
</Sidebar.Provider>
