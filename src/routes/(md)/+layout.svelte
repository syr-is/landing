<script>
	import { reader } from '$lib/actions/reader';
    import mermaid from 'mermaid';
	import { onMount } from 'svelte';
    import { mode } from 'mode-watcher';

    let { children } = $props();

    mermaid.initialize({ darkMode: mode.current === 'dark', theme: mode.current === 'dark' ? 'dark' : 'default' });
    
    $effect(() => {
        mermaid.run();
    })
</script>

<article class="prose dark:prose-invert max-w-[65ch] md:max-w-[75ch] lg:max-w-[80ch] mx-auto" use:reader>
    {@render children?.()}
</article>
