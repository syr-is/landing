<script>
	import { formatDate } from '$lib/format-date';
    import { reader } from '$lib/actions/reader.js';

    export let data;
</script>

<svelte:head>
    <title>{data.meta?.title}</title>
    <meta name="description" content={data.meta.description} />
    <meta name="author" content={data.meta.author} />
    <meta name="date" content={data.meta.date ? formatDate(data.meta.date) : undefined} />
    <meta name="categories" content={data.meta?.categories?.join(', ')} />
    <meta name="og:title" content={data.meta.title} />
    <meta name="og:description" content={data.meta.description} />
    <meta name="og:image" content={data.meta.ogImage} />
    <meta name="og:url" content={data.meta.url} />
    <meta name="og:type" content="article" />
    <meta name="og:site_name" content={data.meta.siteName} />
    <meta name="og:locale" content="en_US" />
</svelte:head>

<data.content />