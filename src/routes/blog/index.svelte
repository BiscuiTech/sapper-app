<script context="module">
  import { useData } from "../../clientUtilities";
  // import { fadeIn, fadeOut } from "../../components/Fade";
  export async function preload() {
    const posts = await useData(this, "blog");
    return { posts };
  }
</script>

<script>import PageHeader from "../../components/PageHeader.svelte";

  export let posts;
</script>

<style>

</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<!-- <ul >
  {#each posts as post}
    <li>
      <a rel="prefetch" href="posts/{post.slug}">{post.title}</a>
    </li>
  {/each}
</ul> -->

<div class="">
  <PageHeader text="Blog"/>
  <div class="bg-white pt-16 pb-20 px-4 sm:px-6">
    <div class="relative max-w-lg mx-auto lg:max-w-7xl">
      <div class="mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
        <div>
          <p class="text-sm leading-5 text-gray-500">
            <time datetime="2020-03-16">Mar 16, 2020</time>
          </p>
          <a href="#" class="block">
            <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
              Boost your conversion rate
            </h3>
            <p class="mt-3 text-base leading-6 text-gray-500">
              Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
            </p>
          </a>
          <div class="mt-3">
            <a href="#" class="text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
              Read full story
            </a>
          </div>
        </div>
        <div>
          <p class="text-sm leading-5 text-gray-500">
            <time datetime="2020-03-10">Mar 10, 2020</time>
          </p>
          <a href="#" class="block">
            <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
              How to use search engine optimization to drive sales
            </h3>
            <p class="mt-3 text-base leading-6 text-gray-500">
              Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.
            </p>
          </a>
          <div class="mt-3">
            <a href="#" class="text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
              Read full story
            </a>
          </div>
        </div>
        <div>
          <p class="text-sm leading-5 text-gray-500">
            <time datetime="2020-02-12">Feb 12, 2020</time>
          </p>
          <a href="#" class="block">
            <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
              Improve your customer experience
            </h3>
            <p class="mt-3 text-base leading-6 text-gray-500">
              Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.
            </p>
          </a>
          <div class="mt-3">
            <a href="#" class="text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
              Read full story
            </a>
          </div>
        </div>
        <div>
          <p class="text-sm leading-5 text-gray-500">
            <time datetime="2020-01-29">Jan 29, 2020</time>
          </p>
          <a href="#" class="block">
            <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
              Writing effective landing page copy
            </h3>
            <p class="mt-3 text-base leading-6 text-gray-500">
              Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.
            </p>
          </a>
          <div class="mt-3">
            <a href="#" class="text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
              Read full story
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>