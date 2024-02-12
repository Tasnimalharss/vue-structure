

<template>
    <VerticalLayout current-page="Project">
      <BaseSkeleton :loading="isLoading">
      <div class="row">
        <div class="col-12" v-if="project!=null">
          <CardComponent :card-title="project.name">
            <div class="table-responsive p-0">
              <table class="table align-items-center mb-0">
                <tbody>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">name</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{ project.name }}</h6>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">created at</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{ dateTime(project.createdAt)  }}</h6>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">last Activity At</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{ dateTime(project.lastActivityAt) }}</h6>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">name space</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{ project.namespace.kind }} / {{ project.namespace.name }}</h6>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">visibility</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{ project.visibility }}</h6>
                        </div>
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </CardComponent>
        </div>
      </div>
    </BaseSkeleton>

    </VerticalLayout>
  </template>
  
  <script>
  import VerticalLayout from '@/views/layouts/VerticalLayout';
  import CardComponent from '@/components/elements/CardComponent';
  import { mapActions, mapGetters } from "vuex";
  import moment from 'moment';
  import BaseSkeleton from '@/components/Base/BaseSkeleton';
  
  export default {
    components: {
      VerticalLayout, CardComponent,BaseSkeleton
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
        isLoading: "application/isLoading",
      }),
    },
    methods: {
      ...mapActions({
        getProjectById: "project/getProjectById",
  
      }),
      dateTime(value) {
      return moment(value).format('YYYY/MM/DD');
    },
    },
    async created() {
      await this.getProjectById(this.id);
      console.log(this.project)
    },
  };
  </script>  