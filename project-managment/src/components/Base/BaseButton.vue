<template>
    <button :disabled="loading" class="btn waves-effect waves-light" @click.prevent="!loading && $emit('wasClicked', $event)">
      <template v-if="loading">
        <b-spinner small/>
      </template>
      <template v-else>
        <i v-if="icon" class="bx bx-smile font-size-16 align-middle me-2" :class="icon"></i>
        <slot/>
      </template>
    </button>
  </template>
  
  <script>
  export default {
      name:"BaseButton",
      props:{
          icon:{
              type:String,
              default:''
          },
          loading:{
              type:Boolean,
              default:false
          },
      }
  };
  </script>