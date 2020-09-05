<script>
  import Logo from './Logo.svelte'
  import Nav from './Nav.svelte'
  import LocaleToggle from './LocaleToggle.svelte'
  import ColorModeSwitch from './ColorModeSwitch.svelte'
  export let segment
</script>

<style>
  header {
    display: flex;
    margin: 0 auto;
    max-width: 1400px;
    padding: 2em;
    width: 100%;
  }
  .nav-controls {
    border-left: 1px lightgray solid;
    margin-left: 4px;
    padding-left: 4px;
  }
</style>

<header class="flex align-baseline items-baseline">
  <Logo />
  <Nav {segment} />
  <div class="nav-controls flex flex-col justify-center items-center">
    <LocaleToggle />
    <ColorModeSwitch/>
  </div>
</header>
