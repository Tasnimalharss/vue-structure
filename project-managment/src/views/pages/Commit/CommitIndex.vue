

<template>
  <VerticalLayout current-page="Commits">
    <div class="row">
      <div class="col-12">
        <CardComponent>
            <div class="row  mb-4">
             <div class="col-lg-6">
              <h6>Choose a Project</h6>
                  <select
                    class="form-select px-3 my-3"
                    id="project"
                    v-model="project"
                    @change="getBrancheByProjectId(project.id)"
                >
                  <option
                      v-for="item in projectList"
                      :key="item.id"
                      :value="item"
                  >
                    {{ item.name }}
                  </option>
                </select>
             </div>
             <div class="col-lg-6">
              <h6>Choose a Branch</h6>
                <select
                    class="form-select  px-3 my-3"
                    id="branch"
                    v-model="branchName"
                    @change="getTestFunc(project.id,$event.target.value)" >
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
         </CardComponent>
    
      </div>
      <div class="col-12">
        <CardComponent :card-title="`Commits ${branchName? ' on Project ' +project.name+ ' Branch ' +branchName  : ''} `">
          <div class="table-responsive p-0">
            <table  v-if="branchName" class="table align-items-center mb-0">
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
                <tr v-if="commitList.length == 0">
                  <td colspan="6" class="text-center">
                    <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </td>
                </tr>
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
            <div v-else>
              <h5 class="text-primary text-center   my-4">Choose a Project and Branch First to View Commit List</h5>

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
      project: null,
      projectId: null,
      branchName: null,
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
      console.log('pro',projectId)
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

