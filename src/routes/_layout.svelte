<script context="module">
  import { waitLocale } from 'svelte-i18n'

  export async function preload() {
    // awaits for the loading of the 'en-US' and 'en' dictionaries
    return waitLocale()
  }
</script>

<script>
  import Header from '../components/Header.svelte';

  export let segment;
</script>

<style>
  :root{
    --bg-color: #FFFFFF;
    --text-color: #000000;
  }

  :global(body) {
    background: var(--bg-color);
    color: var(--text-color);
  }

  :global(body.dark) {
    --bg-color: #000000;
    --text-color: #FFFFFF;
  }
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    min-height: 100vh;
  }

  main {
    flex: 1;
    position: relative;
    margin: 0 auto;
    max-width: 1400px;
    padding: 1em 2em;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  footer {
    color: #AAA;
    font-size: 1em;
    font-family: Rubik, sans-serif;
    margin: 1em auto;
    max-width: 1400px;
    padding: 1em 2em;
    text-align: center;
    width: 100%;
  }
</style>

<div class="layout">
  <Header {segment}/>

  <main>
    <slot></slot>
  </main>

  <footer>
    <span>
      &copy; {new Date().getFullYear()} BiscuiTech's blog.
    </span>
  </footer>
</div>
