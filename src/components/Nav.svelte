<script>
  import { _ } from 'svelte-i18n'
  export let segment;
</script>

<style>
  nav {
    align-items: flex-end;
    display: flex;
    flex: 1;
    font-family: Rubik, sans-serif;
    font-weight: 700;
    justify-content: flex-end;
    text-transform: uppercase;
  }

  a {
    text-decoration: none;
    padding: 10px 5px;
    display: block;
    position: relative;
    margin-left: 20px;
  }

  a:not(.selected) {
    opacity: 0.7;
  }

  a::before {
    content: '';
    position: absolute;
    transition: transform .3s ease;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #AAA;
    transform: scaleX(0);
  }

  a:hover::before,
  .selected::before {
    transform: scaleX(1);
  }

  .selected::before {
    background: #fd6378;
  }
</style>

<nav class="text-gray-900 dark:text-gray-100">
  <a class='{segment === undefined ? "selected" : ""}' href='.'>{$_('nav.home')}</a>
  <a class='{segment === "about" ? "selected" : ""}' href='about'>{$_('nav.about')}</a>
  <a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>{$_('nav.blog')}</a>
</nav>
