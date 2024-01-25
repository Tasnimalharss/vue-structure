

<template>
  <VerticalLayout current-page="Branch">
    <div class="row">
      <div class="col-12 ">
        <CardComponent>
          <h6>Projects</h6>
          <select class="form-select px-3 my-3" id="project" v-model="project"
            @change="getBrancheByProjectId(project.id)">
            <option v-for="item in projectList" :key="item.id" :value="item">
              {{ item.name }}
            </option>
          </select>
        </CardComponent>

      </div>

      <div class="col-12">
        <CardComponent :card-title="`${project? project.name:''} Branch Details`">
          <div class="table-responsive p-0">

          
            <table v-if="project" class="table align-items-center mb-0">
              <thead>
                <tr>
                  <th class="text-uppercase text-secondary  text-xs font-weight-bolder opacity-7"> Branch Name</th>
                  <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2"> View</th>
                  <!-- <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"> Commits</th> -->
                </tr>
              </thead>
              <tbody >
                <tr v-for="branch in branchListByProject" :key="branch.name">
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm font-weight-normal">{{ branch.name }}</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center" v-if="project">
                        <span class="mb-0 me-3">
                          <router-link class="text-primary"
                            :to="{ name: 'viewBranch', params: { projectId: project.id, brancName: branch.name }, }">
                            <i class="material-icons opacity-10 text-xl">info</i>
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
                <h5 class="text-danger text-center font-weight-normal my-4">Choose a Project first to view Branch Details </h5>
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
      employees: [
        {
          'name': 'name',
          'email': 'email@email.com',
          'phone': '0911124321',
          'status': 'Active',
          'date': '2022-12-12'
        },
        {
          'name': 'name2',
          'email': 'email@email.com',
          'phone': '0911124321',
          'status': 'Active',
          'date': '2022-12-12'
        }, {
          'name': 'name3',
          'email': 'email@email.com',
          'phone': '0911124321',
          'status': 'Active',
          'date': '2022-12-12'
        },
      ]
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
  
  