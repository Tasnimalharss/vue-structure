

<template>
    <VerticalLayout current-page="Projects">
      <div class="row" v-if="projectList!=null">
          <div  class="col-lg-4 col-md-6" v-for="item in projectList" :key="item.id">
            <CardComponent :card-title="item.name">
              <div class="d-flex justify-content-end">
                <!-- <div>{{dateTime(item.createdAt) }}</div> -->
                <button type="button" class="btn btn-outline-primary btn-sm mb-0 me-3" > 
                     <router-link
                          class="text-primary"
                          :to="{
                            name: 'viewProject',
                            params: { id: item.id },
                          }"
                        >
                       Details 
                    </router-link></button>
                    </div>
            </CardComponent>
        </div>
      </div>
    </VerticalLayout>
  </template>
  
  <script>
  import { mapActions, mapGetters } from "vuex";
  import VerticalLayout from '@/views/layouts/VerticalLayout';
  import CardComponent from '@/components/elements/CardComponent';
  import moment from 'moment';
  
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
  
      }),
      dateTime(value) {
      return moment(value).format('YYYY/MM/DD');
    },
    },
    async created() {
      await this.getProjects();
      console.log(this.projectList)
    },
  };
  </script>  