<script>
  import { locale, locales } from 'svelte-i18n'
  const handleClick = (event) => {
     if ($locale === 'fr') {
       locale.set('en')
      }else {
        locale.set('fr')
      }
  }
</script>

<div class="flex justify-center items-center">
  <span class={`mx-1 ${$locale === 'fr' ? 'text-yellow-400 border-b border-yellow-400': 'text-gray-700'}`}>FR</span>
  <span role="checkbox" tabindex="0" aria-checked="false" class="group relative inline-flex items-center justify-center flex-shrink-0 h-5 w-10 cursor-pointer focus:outline-none" on:click="{handleClick}">
    <span aria-hidden="true" class="bg-yellow-400 absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200"></span>
    <span aria-hidden="true" class={`${$locale === 'fr' ? 'translate-x-0':'translate-x-5'} absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform group-focus:shadow-outline group-focus:border-blue-300 transition-transform ease-in-out duration-200`}></span>
  </span>
  <span class={`mx-1 ${$locale === 'en' ? 'text-yellow-400 border-b border-yellow-400': 'text-gray-700'}`}>EN</span>
</div>