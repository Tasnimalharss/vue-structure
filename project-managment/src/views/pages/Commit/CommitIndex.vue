

<template>
  <VerticalLayout current-page="Commits">
    <div class="row">
      <div class="col-12">
        <div class="card my-4 ">
          <div class="card-body p-2">
            <div class="row">
             <div class="col-lg-6">
              <div>Poject</div>
                <select
                    class="form-select"
                    id="project"
                    v-model="projectId"
                    @change="getBrancheByProjectId($event.target.value)"
                >
                  <option
                      v-for="item in projectList"
                      :key="item.id"
                      :value="item.id"
                  >
                    {{ item.name }}
                  </option>
                </select>
             </div>
             <div class="col-lg-6">
              <div>Branch</div>
                <select
                    class="form-select"
                    id="branch"
                    v-model="branchName"
                    @change="getTestFunc(projectId,$event.target.value)" >
                  <option
                      v-for="item in branchListByProject"
                      :key="item.name"
                      :value="item.name"
                  >
                    {{ item.name }}
                  </option>
                </select>
             </div>
            </div>
           </div>
         </div>
    
      </div>
      <div class="col-12" v-if="projectId && branchName">
        <CardComponent card-title="Commits">
          <div class="table-responsive p-0">
            <table class="table align-items-center mb-0">
              <thead>
                <tr>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"> Title</th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"> Author Name</th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"> Authored Date</th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"> Created At</th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"> Commited Date</th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"> Message</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="commit in commitList" :key="commit.id">
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{{ commit.title }}</h6>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{{ commit.author_name }}</h6>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{{ dateTime(commit.authored_date) }}</h6>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{{ dateTime(commit.committed_date)}}</h6>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{{ dateTime(commit.committed_date)}}</h6>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{{ commit.message }}</h6>
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
      branchName: null,
      test: "hello",
    };
  },

  computed: {
    ...mapGetters({
      projectList  : "project/projectList",
      branchListByProject  : "branch/branchListByProject",
      commitList  : "commit/commitList",

    }),
  },
  methods: {
    ...mapActions({
      getProjects: "project/getProjects",
      getBrancheByProjectId  : "branch/getBrancheByProjectId",
      getCommits: "commit/getCommits",
    }),
   async getTestFunc(projectId , branchName)
    {
      const object = {
        projectId : projectId,
        branchName : branchName
      };
      await this.getCommits(object)
    },
    dateTime(value) {
      return moment(value).format('YYYY/MM/DD HH:MM');
    },
  },
  async created() {
    await this.getProjects();
  },
};
</script>

