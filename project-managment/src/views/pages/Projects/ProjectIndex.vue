<template>
  <VerticalLayout current-page="Projects">
    <BaseSkeleton :loading="isLoading">
      <div class="row" v-if="projectStatisticsList != null">
        <div class="col-lg-4 col-md-6" v-for="item in projectStatisticsList" :key="item.id">
          <CardComponent :card-title="item.name" class="my-card">
            <!-- <div class="row">
              <div class="col-12 text-uppercase text-secondary fw-bold opacity-7 mt-3 mb-2">ISSUES STATS:</div>
            </div> -->

            <div class="row mt-2">
              <div class="col-4">
                <h4 class="text-center  pe-4">
                  <i class="material-icons opacity-10 pe-1 text-success">check_circle</i>
                  {{ item.statistics.statistics.counts.opened }}

                </h4>
              </div>
              <div class="col-4">
                <h4 class="text-center pe-4">
                  <i class="material-icons opacity-10 pe-1 text-danger">cancel</i>
                 {{ item.statistics.statistics.counts.closed }} 
                </h4>
              </div>
              <div class="col-4 ps-0 pe-0">
                <p class="h5 mt-1">
                  <i class="material-icons opacity-10 pe-1 text-primary">calendar_today</i>
                  {{ dateTime(item.createdAt) }}
                </p>
              </div>
            </div>

            <div class="row mt-2 mb-3">
              <div class="col-4">
                <p class="text-muted text-center">
                  Open Issues 
                </p>
              </div>
              <div class="col-4">
                <p class="text-muted text-center">
                  Closed Issues
                </p>
              </div>
              <div class="col-4">
                <p class="text-muted text-center">
                 Created At
                </p>
              </div>
              <!-- <div class="col-4">
                <p class="text-muted text-center">Created At</p>
              </div> -->
            </div>

            <!-- <div class="row mb-2 mt-3">
              <div class="col-6 text-uppercase text-secondary fw-bold opacity-7 mt-3">Default Branch:</div>
              <div class="col-6 text-uppercase text-secondary fw-bold opacity-7 mt-3">Created At:</div>
            </div>
            <div class="row">
              <div class="col-6">{{ item.defaultBranch }}</div>
              <div class="col-6">{{ dateTime(item.createdAt) }}</div>
            </div> -->
            <template #footer>
              <div class="card-footer pb-1 mt-2 border-top border-secondary ">
                <div class="row">
                  <div class="col-md-6">
                    <p class="text-muted">
                      <i class="material-icons opacity-10">account_tree</i>
                       Default Branch : {{ item.defaultBranch }}
                     </p>
                  </div>
                <div class="col-md-6 text-end">
                  <router-link class="btn btn-primary px-4" :to="{
                    name: 'ViewProject',
                    params: { id: item.id },
                  }">
                    Details
                  </router-link>
                </div>

                </div>
               
              </div>
            </template>

          </CardComponent>
        </div>
      </div>
    </BaseSkeleton>
  </VerticalLayout>
</template>
<style>
.text-custom-success {
  color: #28a745;
}
</style>
<script>
import { mapActions, mapGetters } from "vuex";
import VerticalLayout from '@/views/layouts/VerticalLayout';
import CardComponent from '@/components/elements/CardComponent';
import moment from 'moment';
import BaseSkeleton from '@/components/Base/BaseSkeleton';

export default {
  components: { VerticalLayout, CardComponent, BaseSkeleton },
  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      projectList: "project/projectList",
      projectStatisticsList: "project/projectStatisticsList",
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