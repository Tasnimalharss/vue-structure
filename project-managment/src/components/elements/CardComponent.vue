<template>
    <div class="card my-4 ">
        <div v-if="cardTitle" class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h6 class="text-white text-capitalize ps-3">{{ cardTitle }}</h6>
            </div>
        </div>
        <div class="card-body px-4 pb-2 ">
            <slot/>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    cardTitle: String,
  }
}
</script>