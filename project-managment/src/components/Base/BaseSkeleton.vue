<template>
  <div class="base-skeleton">
    <template v-if="loading">
        <p class="placeholder-glow">
            <span class="placeholder col-6"></span>
            <span class="placeholder w-75"></span>
            <span class="placeholder col-12"></span>
        </p>
    </template>
    <slot  v-else/>
  </div>
</template>

<script>
export default {
    name: 'BaseSkeleton',
    props:{
        loading:{
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>

</style>