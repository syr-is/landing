<script lang="ts">
	import { bionicReader } from '$lib/bionic-reader';
	import type { HTMLAttributes } from 'svelte/elements';
	import { bionicReadingIsEnabledStore } from '$lib/controllers/runtime.svelte';
	import { fromStore } from 'svelte/store';

	interface TextBlockProps extends HTMLAttributes<any> {
		text: string;
	}

	let { text, ...props }: TextBlockProps = $props();
	const bionicOn = $derived(fromStore(bionicReadingIsEnabledStore).current);
	let rendered = $state(text);

	$effect(() => {
		if (bionicOn) {
			rendered = bionicReader(text);
		} else {
			rendered = text;
		}
	});
</script>

<div
	{...props}
	class={`prose mx-auto max-w-[65ch] text-justify md:max-w-[75ch] lg:max-w-[80ch] ${props.class ? props.class + ' ' : ''}`}
>
	{@html rendered}
</div>
