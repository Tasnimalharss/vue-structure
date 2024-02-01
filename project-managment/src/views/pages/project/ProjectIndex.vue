<template>
    <VerticalLayout current-page="Projects">
      <BaseSkeleton :loading="isLoading">
      <div class="row" v-if="projectStatisticsList!=null">
          <div  class="col-lg-4 col-md-6" v-for="item in projectStatisticsList" :key="item.id">
            <CardComponent :card-title="item.name" class="my-card">
  <div class="row">
    <div class="col-12 text-uppercase text-secondary fw-bold opacity-7 mt-3">ISSUES:</div>
    <div class="col-12">
      <span class="text-danger">{{ item.statistics.statistics.counts.closed }} CLOSED</span>
    </div>
    <div class="col-12">
      <span class="text-custom-success">{{ item.statistics.statistics.counts.opened }} OPENED</span>
    </div>
    <div class="col-12 text-uppercase text-secondary fw-bold opacity-7 mt-3">Default Branch:</div>
    <div class="col-12">{{ item.defaultBranch }}</div>
    <div class="col-12 text-uppercase text-secondary fw-bold opacity-7 mt-3">Created At:</div>
    <div class="col-12">{{ dateTime(item.createdAt) }}</div>
  </div>
  <div class="d-flex justify-content-end mt-3">
    <router-link
      class="btn btn-primary btn-sm me-3 text-light"
      :to="{
        name: 'viewProject',
        params: { id: item.id },
      }"
    >
      Details
    </router-link>
  </div>
</CardComponent>
        </div>
      </div>
    </BaseSkeleton>
    </VerticalLayout>
  </template>
 <style>.text-custom-success {
  color: #28a745;
}</style>
  <script>
  import { mapActions, mapGetters } from "vuex";
  import VerticalLayout from '@/views/layouts/VerticalLayout';
  import CardComponent from '@/components/elements/CardComponent';
  import moment from 'moment';
  import BaseSkeleton from '@/components/Base/BaseSkeleton';
    
  export default {
    components: {VerticalLayout, CardComponent,BaseSkeleton},
    data() {
      return { };
    },
  
    computed: {
      ...mapGetters({
        projectList  : "project/projectList",
        projectStatisticsList  : "project/projectStatisticsList",
        isLoading: "application/isLoading",
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