<script context="module">
  import { useData } from "../../clientUtilities";
  // import { fadeIn, fadeOut } from "../../components/Fade";
  export async function preload() {
    const posts = await useData(this, "posts");
    return { posts };
  }
</script>

<script>
  export let posts;
</script>

<style>
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  li {
    margin-bottom: 3rem;
  }
  a {
    font-size: 2rem;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<ul >
  {#each posts as post}
    <li>
      <a rel="prefetch" href="posts/{post.slug}">{post.title}</a>
    </li>
  {/each}
</ul>