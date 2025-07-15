<script lang="ts">
    import '../app.css';  // JS import가 핵심
    import Navbar from '$lib/components/Navbar.svelte';
    //export let data;
</script>

<Navbar />
<slot />
