<template>
    <div>
       <p class="text-danger">
            {{ objectKey in errors? errors[objectKey][0]:'' }}
       </p>
    </div>
</template>
<script>
export default {
  props: {
    errors: Object,
    objectKey : String,

  }
}
</script>