<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
    import Footer from '$lib/components/footer.svelte';
	import { dyslexicFontIsEnabledStore, sidebarIsOpenStore } from '$lib/controllers/runtime.svelte';
	import { fromStore } from 'svelte/store';
	const sidebarStore = fromStore(sidebarIsOpenStore);
	let sidebarIsOpen = $derived(sidebarStore.current);
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	injectSpeedInsights();

	let { children } = $props();

	// Meta defaults for the main page
	const siteName = 'Self Yield Representations';
	const title = 'Self Yield Representations — The Internet We Got vs. The Internet We Need';
	const description =
		'The internet shifted from packets to people, but platforms came to decide what counts. A reflection on control, culture, and portable presence.';
	const author = 'sosweetham@syr.is';
	const siteUrl = import.meta.env?.VITE_SITE_URL as string | undefined;
	const canonical = siteUrl ? new URL('/', siteUrl).toString() : '';
	const ogImagePath = '/syr-tease.gif';
	const ogImage = siteUrl ? new URL(ogImagePath, siteUrl).toString() : ogImagePath;

	// Apply dyslexic font class to the document root when enabled
	$effect(() => {
		const root = document.documentElement;
		const on = fromStore(dyslexicFontIsEnabledStore).current;
		if (on) root.classList.add('font-opendyslexic');
		else root.classList.remove('font-opendyslexic');
	});

	onMount(() => {
		// Stores now self-seed from localStorage on the client; nothing else needed.
		// We only ensure the font class matches the current store once after mount.
		queueMicrotask(() => {
			const root = document.documentElement;
			const on = fromStore(dyslexicFontIsEnabledStore).current;
			if (on) root.classList.add('font-opendyslexic');
			else root.classList.remove('font-opendyslexic');
		});

		// No runtime; store is the single source of truth.
	});
</script>

<svelte:head>
	<link rel="icon" href={"/favicons/favicon.ico"} />
	{#if canonical}
		<link rel="canonical" href={canonical} />
	{/if}
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<meta name="author" content={author} />
	<meta name="theme-color" content="#111827" />

	<!-- Open Graph / Discord -->
	<meta property="og:type" content="article" />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	{#if canonical}
		<meta property="og:url" content={canonical} />
	{/if}
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:alt" content="Thinking support graphic" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />

	<!-- Article metadata -->
	<meta property="article:author" content={author} />

	<!-- Structured Data -->
	<script type="application/ld+json">
		{JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'Article',
			headline: title,
			description,
			author: [{ '@type': 'Organization', name: author }],
			image: [ogImage],
			url: canonical || undefined,
			mainEntityOfPage: canonical
				? { '@type': 'WebPage', '@id': canonical }
				: undefined
		})}
	</script>
</svelte:head>

<ModeWatcher />
<Sidebar.Provider bind:open={sidebarIsOpen}>
	<AppSidebar />
	{#if !sidebarIsOpen}
		<div class="fixed bottom-[22px] left-[18px] z-50">
			<Sidebar.Trigger />
		</div>
	{/if}
    <div class="flex w-full justify-center">
        <div class={!sidebarIsOpen ? 'container' : 'container mx-16'}>
            <main>
                {@render children?.()}
            </main>
            <Footer />
        </div>
    </div>
</Sidebar.Provider>
