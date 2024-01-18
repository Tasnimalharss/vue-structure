

<template>
    <VerticalLayout>
      <div class="row" v-if="projectList!=null">
          <div  class="col-4" v-for="item in projectList" :key="item.id">
            <CardComponent :card-title="item.name">
                {{ item.createdAt }}
                <button type="button" class="btn btn-outline-primary btn-sm mb-0 me-3" >    <router-link
                          class="text-primary"
                          :to="{
                            name: 'viewProject',
                            params: { id: item.id },
                          }"
                        >
                       Details    
                                          </router-link></button>
            </CardComponent>
        </div>
      </div>
    </VerticalLayout>
  </template>
  
  <script>
  import { mapActions, mapGetters } from "vuex";
  import VerticalLayout from '@/views/layouts/VerticalLayout';
  import CardComponent from '@/components/elements/CardComponent';
  
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
  
    computed: {
      ...mapGetters({
        projectList  : "project/projectList",
  
      }),
    },
    methods: {
      ...mapActions({
        getProjects: "project/getProjects",
  
      })
    },
    async created() {
      await this.getProjects();
      console.log(this.projectList)
    },
  };
  </script>  