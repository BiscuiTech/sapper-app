<script>
  import { onMount } from 'svelte';
  onMount(async() => {
    const toggle = document.querySelector('dark-mode-toggle');
    const body = document.body;

    // Set or remove the `dark` class the first time.
    toggle.mode === 'dark' ? body.classList.add('dark') : body.classList.remove('dark');

    // Listen for toggle changes (which includes `prefers-color-scheme` changes)
    // and toggle the `dark` class accordingly.
    toggle.addEventListener('colorschemechange', () => {
      body.classList.toggle('dark', toggle.mode === 'dark');
    });
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      console.log('🎉 Dark mode is supported');
    }
  })

	let darkMode = false;
	function toggle() {
        darkMode = !darkMode;
        window.document.body.classList.toggle('dark');
    }
</script>

<style>
  span {
    margin-right: 2px;
  }
</style>

<button on:click={toggle}>
  {#if darkMode }
  <div class="flex items-center align-baseline">
    <span>Go light</span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="ml-2 h-6 w-6 text-yellow-300">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  </div>
	{:else}
  <div class="flex items-center align-baseline">
    <span>Go dark</span>
    <svg viewBox="0 0 20 20" fill="currentColor" class="moon w-6 h-6">
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
    </svg>
  </div>
    {/if}
  </button>