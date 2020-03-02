<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">
      404 Page not found
    </h1>
    <h1 v-else-if="error.statusCode === 403">
      403 Permission denied
    </h1>
    <h1 v-else>
      An error occurred
    </h1>
    <!-- <h3>{{ error.message }}</h3> -->
    <nuxt-link to="/">
      Home page
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>
