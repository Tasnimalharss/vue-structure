

<template>
  <VerticalLayout current-page="Branches">
    <div class="row">
      <div class="col-12 ">
        <CardComponent>
          <h6>Choose a Project</h6>
          <select class="form-select px-3 my-3" id="project" v-model="project"
            @change="getBrancheByProjectId(project.id)">
            <option v-for="item in projectList" :key="item.id" :value="item">
              {{ item.name }}
            </option>
          </select>
        </CardComponent>

      </div>

      <div class="col-12">
        <CardComponent :card-title="`${project ? project.name : ''} Branch Details`">
          <div class="table-responsive p-0">

            <table v-if="project" class="table align-items-center mb-0">
              <thead>
                <tr>
                  <th class="text-uppercase text-dark  text-xs font-weight-bolder opacity-7"> Branch Name</th>
                  <th class="text-uppercase text-dark text-xs font-weight-bolder opacity-7 ps-2"> Action</th>
                  <!-- <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"> Commits</th> -->
                </tr>
              </thead>
              <tbody>
                <tr v-if="branchListByProject.length == 0">
                  <td colspan="3" class="text-center">
                    <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </td>
                </tr>
                <tr v-for="branch in branchListByProject" :key="branch.name">
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm ">{{ branch.name }}</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <span class="mb-0 me-3">
                          <router-link class=" btn btn-primary"
                            :to="{ name: 'viewBranch', params: { projectId: project?.id, brancName: branch?.name }, }">
                            <i class="material-icons opacity-10 text-xl">visibility</i>
                          </router-link></span>
                      </div>
                    </div>
                  </td>
                  <!-- <td class="align-middle">
                      <ModalComponent modal-title="Modal Here" button-label="Open modal">
                        <p>"here"</p>
                        </ModalComponent>
                    </td> -->
                </tr>
              </tbody>
            </table>
            <div v-else>
              <h5 class="text-primary text-center   my-4">Choose a Project First to View Branch Details</h5>
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

//import TableComponent from '@/components/tables/TableComponent';

export default {
  components: {
    VerticalLayout, CardComponent,
    // ModalComponent
  },
  data() {
    return {
      project: null,
    };
  },

  computed: {
    ...mapGetters({
      projectList: "project/projectList",
      branchListByProject: "branch/branchListByProject",
    }),
  },
  methods: {
    ...mapActions({
      getProjects: "project/getProjects",
      getBrancheByProjectId: "branch/getBrancheByProjectId",
    })
  },
  async created() {
    await this.getProjects();

  },
  
};
</script>
  
  