<script lang="ts">
    import { ArrowRight, Zap, Recycle, ShieldCheck } from 'lucide-svelte';
    import { navbar_items } from '$lib/navigation';
    import { fly } from 'svelte/transition';

    const businessSection = navbar_items.find((item) => item.href === '/business');

    const features = businessSection?.dropdown?.map((item, index) => ({
        icon: [Zap, Recycle, ShieldCheck][index % 3],
        title: item.page,
        description: item.description ?? '해당 사업 분야에 대한 간략한 설명입니다.',
        href: item.href
    }));
</script>

<div class="bg-white text-stone-800">
    <!-- Hero Section -->
    <section class="relative h-[80vh] min-h-[600px] w-full">
        <div class="absolute inset-0 bg-stone-800">
            <!-- TODO: need to change background image -->
            <div class="h-full w-full bg-stone-200 opacity-30"></div>
        </div>
        <div class="relative z-10 flex h-full items-center">
            <div class="container mx-auto px-6 text-left">
                <div in:fly={{ y: 50, duration: 800, delay: 200 }}>
                    <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
                        문장을,
                        <br />
                        <span class="text-emerald-400">채워주세요.</span>
                    </h1>
                    <p class="mt-6 max-w-xl text-lg text-stone-300 md:text-xl">
                        문장을 채워주세요. 문장을 채워주세요. 문장을 채워주세요. 문장을 채워주세요.
                    </p>
                    <div class="mt-10">
                        <a
                                href="/about"
                                class="inline-flex items-center rounded-full bg-emerald-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-emerald-500"
                        >
                            회사소개 바로가기 <ArrowRight class="ml-2 h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features/Business Section -->
    <section class="bg-stone-50 py-24 sm:py-32">
        <div class="container mx-auto px-6">
            <div class="mx-auto max-w-2xl text-center">
                <p class="font-semibold text-emerald-600">Core Business</p>
                <h2 class="mt-2 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
                    문장을 채워주세요.
                </h2>
                <p class="mt-6 text-lg text-stone-600">
                    문장을 채워주세요. 문장을 채워주세요. 문장을 채워주세요. 문장을 채워주세요.
                </p>
            </div>
            <div class="mt-20 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-3">
                {#if features}
                    {#each features as feature, i}
                        <div in:fly={{ y: 50, duration: 600, delay: i * 150 + 200 }}>
                            <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-600 text-white">
                                <svelte:component this={feature.icon} class="h-7 w-7" />
                            </div>
                            <h3 class="mt-6 text-xl font-semibold leading-7 text-stone-800">{feature.title}</h3>
                            <p class="mt-4 text-base leading-7 text-stone-600">{feature.description}</p>
                        </div>
                    {/each}
                {/if}
            </div>
        </div>
    </section>

    <!-- Philosophy Section -->
    <section class="overflow-hidden bg-white py-24 sm:py-32">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 items-center gap-x-16 gap-y-10 md:grid-cols-2">
                <div class="order-2 md:order-1">
                    <h2 class="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">문장을 채워주세요.</h2>
                    <p class="mt-6 text-lg leading-8 text-stone-600">
                        문장을 채워주세요. 문장을 채워주세요. 문장을 채워주세요. 문장을 채워주세요. 문장을 채워주세요. 문장을 채워주세요.
                        문장을 채워주세요.문장을 채워주세요.
                    </p>
                    <div class="mt-10">
                        <a
                                href="/about/vision"
                                class="inline-flex items-center rounded-md border border-transparent bg-stone-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-stone-900"
                        >비전 자세히 보기</a
                        >
                    </div>
                </div>
                <div class="order-1 h-80 w-full rounded-2xl bg-stone-200 shadow-lg md:order-2 md:h-full"></div>
            </div>
        </div>
    </section>

    <!-- Final CTA -->
    <section class="bg-stone-900">
        <div class="container mx-auto px-6 py-24 sm:py-32">
            <div class="mx-auto max-w-2xl text-center">
                <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    문장을 채워주세요.
                </h2>
                <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-stone-300">
                    문장을 채워주세요.
                </p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <a
                            href="/customer/map"
                            class="rounded-md bg-emerald-600 px-5 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-emerald-500"
                    >문의하기</a
                    >
                    <a href="/business" class="text-base font-semibold leading-6 text-white"
                    >사업분야 보기 <span aria-hidden="true">→</span></a
                    >
                </div>
            </div>
        </div>
    </section>
</div>