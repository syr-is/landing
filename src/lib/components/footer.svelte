<script lang="ts">
    import GithubIcon from '@lucide/svelte/icons/github';
    import { Button } from '$lib/components/ui/button';
</script>

<footer class="py-6 text-center text-sm text-muted-foreground">
    <div class="flex items-center justify-center gap-3">
        <span>
            made with ❤️ by
            <a
                href="https://kodski.com"
                target="_blank"
                rel="noopener noreferrer"
                class="font-medium underline underline-offset-4 hover:text-foreground"
            >
                sosweetham
            </a>
        </span>
        <Button
            variant="outline"
            size="icon"
            href="https://github.com/syr-is/landing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
        >
            <GithubIcon class="h-4 w-4" />
        </Button>
    </div>
</footer>


