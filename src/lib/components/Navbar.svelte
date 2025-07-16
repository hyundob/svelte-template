<script lang="ts">
    import { isLoggedIn, login, logout } from '$lib/stores/auth';
    import { navbar_items } from '$lib/navigation';
    import { onMount } from 'svelte';

    let mobileMenuOpen = false;

    function handleLogin() {
        const username = prompt('아이디를 입력하세요');
        const password = prompt('비밀번호를 입력하세요');

        if (username && password) {
            login(username, password).then(success => {
                if (!success) alert('로그인 실패!');
            });
        }
    }

    function handleLogout() {
        logout();
    }

    // 새로고침 시 로그인 유지
    onMount(() => {
        const token = localStorage.getItem('accessToken');
        if (token) isLoggedIn.set(true);
    });
</script>

<nav class="bg-white sticky top-0 z-50 shadow">
    <div class="container mx-auto px-6 flex h-16 items-center justify-between">
        <!-- 로고 -->
        <a href="/" class="text-2xl font-bold text-emerald-600">회사이름</a>

        <!-- 메뉴 -->
        <div class="hidden md:flex items-center gap-6">
            {#each navbar_items as item}
                <a href={item.href} class="text-stone-800 hover:text-emerald-600 font-medium">{item.label}</a>
            {/each}
        </div>

        <!-- 로그인/로그아웃 -->
        <div class="hidden md:block">
            {#if $isLoggedIn}
                <button
                        on:click={handleLogout}
                        class="text-stone-800 hover:text-red-500 font-semibold w-[80px] text-center"
                >
                    로그아웃
                </button>
            {:else}
                <button
                        on:click={handleLogin}
                        class="text-emerald-600 hover:text-emerald-800 font-semibold w-[80px] text-center"
                >
                    로그인
                </button>
            {/if}
        </div>

        <!-- 모바일 메뉴 버튼 -->
        <button class="md:hidden" on:click={() => (mobileMenuOpen = !mobileMenuOpen)}>
            <svg class="w-6 h-6 text-stone-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="{mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}" />
            </svg>
        </button>
    </div>

    <!-- 모바일 로그인/로그아웃 메뉴 -->
    {#if mobileMenuOpen}
        <div class="md:hidden px-6 pb-4 bg-white shadow">
            {#each navbar_items as item}
                <a href={item.href} class="block py-2 text-stone-800">{item.label}</a>
            {/each}
            <hr class="my-2" />
            {#if $isLoggedIn}
                <button class="text-red-500" on:click={handleLogout}>로그아웃</button>
            {:else}
                <button class="text-emerald-600" on:click={handleLogin}>로그인</button>
            {/if}
        </div>
    {/if}
</nav>
