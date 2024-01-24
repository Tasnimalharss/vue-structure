

<template>
  <VerticalLayout current-page="Issues">
    <div class="row">
      <div class="col-12">
        <div class="card my-4 ">
          <div class="card-body p-2">
           <div class="col-lg-12">
            <div>Projects</div>
            <select
                class="form-select"
                id="project"
                v-model="projectId"
                @change="getIssuesByProjectId($event.target.value)" >
              <option
                  v-for="item in projectList"
                  :key="item.id"
                  :value="item.id"
              >
                {{ item.name }}
              </option>
            </select>
        </div>
      </div>
    </div>
      </div>
      <div class="col-12" v-if="projectId">
        <CardComponent card-title="Issues">
          <div class="table-responsive p-0">
            <table class="table align-items-center mb-0">
              <thead>
                <tr>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"> Issue Title</th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"> Author Name</th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"> Create At</th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"> Confidential</th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"> state</th> 
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"> Type</th> 
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"> Details</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="issue in issueListByProjectId" :key="issue.id">
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{{ issue.title }}</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{{ issue.author.name }}</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{{ dateTime(issue.createdAt) }}</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{{ issue.confidential }}</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{{ issue.state }}</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{{ issue.type }}</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center" v-if="projectId && issueListByProjectId?.length >=1">
                          <span class="mb-0 me-3" >
                            <router-link class="text-primary" :to="{ name: 'viewIssue',params: { projectId: projectId , issueId :issue.iid}, }" >   
                                 <i class="material-icons opacity-10 text-xl">info</i>
                            </router-link>
                          </span>
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
  </VerticalLayout>
</template>

<script>
import VerticalLayout from '@/views/layouts/VerticalLayout';
import CardComponent from '@/components/elements/CardComponent';
// import ModalComponent from '@/components/elements/ModalComponent';
import { mapActions, mapGetters } from "vuex";
import moment from 'moment';

//import TableComponent from '@/components/tables/TableComponent';

export default {
  components: {
    VerticalLayout, CardComponent,
    // ModalComponent
  },
  data() {
    return {
      projectId: null,
      test: "hello",
    };
  },

  computed: {
    ...mapGetters({
      projectList  : "project/projectList",
      issueListByProjectId  : "issue/issueListByProjectId",
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

