

<template>
    <VerticalLayout>
      <div class="row">
        <div class="col-12" v-if="project!=null">
          <CardComponent :card-title="project.name">
            
        {{ project }}
          </CardComponent>
        </div>
      </div>
    </VerticalLayout>
  </template>
  
  <script>
  import VerticalLayout from '@/views/layouts/VerticalLayout';
  import CardComponent from '@/components/elements/CardComponent';
  import { mapActions, mapGetters } from "vuex";

  //import TableComponent from '@/components/tables/TableComponent';
  
  export default {
    components: {
      VerticalLayout, CardComponent
    },
    data() {
      return {
        test: "hello"
      };
    },
    props: ["id"],
    computed: {
      ...mapGetters({
        project : "project/project",
  
      }),
    },
    methods: {
      ...mapActions({
        getProjectById: "project/getProjectById",
  
      })
    },
    async created() {
      await this.getProjectById(this.id);
      console.log(this.project)
    },
  };
  </script>  