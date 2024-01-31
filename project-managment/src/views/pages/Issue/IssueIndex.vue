

<template>
  <VerticalLayout current-page="Issues">
    <div class="row">
      <div class="col-12 ">
        <div class="d-flex justify-content-end">
          <button type="button" class="btn btn-outline-primary btn-sm mb-0 me-3" > 
            <router-link
                  class="text-primary"
                  :to="{name: 'addIssue'}">
              Add Issue 
            </router-link>
          </button>
        </div>
        <CardComponent>
          <h6>Choose Project</h6>
          <select class="form-select px-3 my-3" id="project" v-model="project" @change="getIssuesByProjectId(project.id)">
            <option v-for="item in projectList" :key="item.id" :value="item">
              {{ item.name }}
            </option>
          </select>
        </CardComponent>
      </div>
      <div class="col-12" >
        <CardComponent :card-title="`${project ? project.name : ''} Issues List`">
          <div class="table-responsive p-0">
            <table v-if="project" class="table align-items-center mb-0">
              <thead>
                <tr>
                  <th class="text-uppercase text-dark  text-xs font-weight-bolder opacity-7"> Issue Title</th>
                  <th class="text-uppercase text-dark  text-xs font-weight-bolder opacity-7"> Author Name</th>
                  <th class="text-uppercase text-dark  text-xs font-weight-bolder opacity-7"> Create At</th>
                  <th class="text-uppercase text-dark  text-xs font-weight-bolder opacity-7"> Confidential</th>
                  <th class="text-uppercase text-dark  text-xs font-weight-bolder opacity-7">State</th>
                  <th class="text-uppercase text-dark  text-xs font-weight-bolder opacity-7">Type</th>
                  <th class="text-uppercase text-dark  text-xs font-weight-bolder opacity-7"> Details</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="issueListByProjectId.length == 0">
                  <td colspan="7" class="text-center">
                    <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </td>
                </tr>
                <tr v-for="issue in issueListByProjectId" :key="issue.id">
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm ">{{ issue.title }}</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm ">{{ issue.author.name }}</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm ">{{ dateTime(issue.createdAt) }}</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm ">{{ issue.confidential }}</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm ">{{ issue.state }}</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm ">{{ issue.type }}</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center"
                        v-if="project.id && issueListByProjectId?.length >= 1">
                        <span class="mb-0 me-3">
                          <router-link class=" btn btn-primary"
                            :to="{ name: 'viewIssue', params: { projectId: project.id, issueId: issue.iid }, }">
                            <i class="material-icons opacity-10 text-xl">visibility</i>
                          </router-link>
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div v-else>
              <h5 class="text-primary text-center   my-4">Choose a Project First to View Issue List</h5>
            </div>
          </div>
        </CardComponent>
      </div>
    </div>
  </VerticalLayout>
</template>

<script>
import VerticalLayout from '@/views/layouts/VerticalLayout';
import CardComponent from '@/components/elements/CardComponent';
import { mapActions, mapGetters } from "vuex";
import moment from 'moment';

export default {
  components: {VerticalLayout, CardComponent,},
  data() {
    return {
      project: null,
      projectId: null,
    };
  },

  computed: {
    ...mapGetters({
      projectList: "project/projectList",
      issueListByProjectId: "issue/issueListByProjectId",
    }),
  },
  methods: {
    ...mapActions({
      getProjects: "project/getProjects",
      getIssuesByProjectId: "issue/getIssuesByProjectId",
    }),
    dateTime(value) {
      return moment(value).format('YYYY/MM/DD');
    },
  },
  async created() {
    await this.getProjects();
  },
};
</script>

