<template>
    <VerticalLayout current-page="Projects">
      <div class="row" v-if="projectStatisticsList!=null">
          <div  class="col-lg-4 col-md-6" v-for="item in projectStatisticsList" :key="item.id">
            <CardComponent :card-title="item.name">
              <div class="row">
                <div class="col-12 text-uppercase text-secondary text-s font-weight-bolder opacity-7">ISSUES:</div>
                <!-- <div class="me-3 ">ALL {{ item.statistics.statistics.counts.all }}</div> -->
                <div class="col-12">CLOSED {{ item.statistics.statistics.counts.closed }}</div>
                <div class="col-12">OPENED {{ item.statistics.statistics.counts.opened }}</div>
             </div>
              <div class="d-flex justify-content-end">
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
    
  export default {
    components: {VerticalLayout, CardComponent},
    data() {
      return { };
    },
  
    computed: {
      ...mapGetters({
        projectList  : "project/projectList",
        projectStatisticsList  : "project/projectStatisticsList",
  
      }),
    },
    methods: {
      ...mapActions({
        getProjects: "project/getProjects",
        getAllProjectIssueStatistics: "project/getAllProjectIssueStatistics",
  
      }),
      dateTime(value) {
      return moment(value).format('YYYY/MM/DD');
    },
    },
    async created() {
      await this.getProjects();
      await this.getAllProjectIssueStatistics();
    },
  };
  </script>  