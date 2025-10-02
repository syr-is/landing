<script>
	import { reader } from '$lib/actions/reader';

    let { children } = $props();
</script>

<article class="prose dark:prose-invert max-w-[65ch] md:max-w-[75ch] lg:max-w-[80ch] mx-auto" use:reader>
    {@render children?.()}
</article>
