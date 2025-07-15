<script lang="ts">
    import { page } from '$app/stores';
    import { navbar_items } from '$lib/navigation';
    import { onMount } from 'svelte';

    let mobileMenuOpen = false;
</script>

<nav class="bg-white shadow sticky top-0 z-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
            <!-- 로고 -->
            <a href="/" class="text-xl font-bold text-emerald-600">TEF</a>

            <!-- 데스크탑 메뉴 -->
            <div class="hidden md:flex gap-6">
                {#each navbar_items as item}
                    <a
                            href={item.href}
                            class="text-stone-700 hover:text-emerald-600 font-medium transition-colors"
                    >
                        {item.label}
                    </a>
                {/each}
            </div>

            <!-- 모바일 메뉴 버튼 -->
            <button
                    class="inline-flex items-center md:hidden text-stone-700 hover:text-emerald-600"
                    on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
            >
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="{mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}"
                    />
                </svg>
            </button>
        </div>
    </div>

    <!-- 모바일 메뉴 드롭다운 -->
    {#if mobileMenuOpen}
        <div class="md:hidden bg-white shadow px-4 pb-4">
            {#each navbar_items as item}
                <a
                        href={item.href}
                        class="block py-2 text-stone-700 hover:text-emerald-600 font-medium"
                >
                    {item.label}
                </a>
            {/each}
        </div>
    {/if}
</nav>
