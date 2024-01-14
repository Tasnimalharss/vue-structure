<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
  test: "hello"
    };
  },

  computed: {
    ...mapGetters({
      weatherList: "test/weatherList",
    }),
  },
  methods: {
    ...mapActions({
      getWeatherList: "test/getWeatherList",
    })
  },
  async created() {
    await this.getWeatherList();
  },
};
</script>


<template>
  <div>
    {{ test }}
  </div>
</template>


