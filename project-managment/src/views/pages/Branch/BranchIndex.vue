

<template>
    <VerticalLayout current-page="Branchs">
      <div class="row">
        <div class="col-12 ">
          <div class="col-lg-12 pb-1">
            <div class="card my-4 ">
              <div class="card-body p-2">
                <div>Projects</div>
                <select
                class="form-select"
                id="project"
                v-model="projectId"
                @change="getBrancheByProjectId($event.target.value)" >
                   <option
                      v-for="item in projectList"
                      :key="item.id"
                      :value="item.id" >
                        {{ item.name }}
                  </option>
            </select>
              </div>
           
            </div>
            
          </div>
        </div>
        <div class="col-12" v-if="projectId">
          <CardComponent card-title="branch details">
            <div class="table-responsive p-0">
              <table class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"> Branch Name</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"> View</th>
                    <!-- <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"> Commits</th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="branch in branchListByProject" :key="branch.name">
                    <td >
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{ branch.name }}</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center" v-if="projectId">
                          <span class="mb-0 me-3" >
                            <router-link class="text-primary" :to="{ name: 'viewBranch',params: { projectId: projectId , brancName :branch.name}, }" >   
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
        projectId: null,
        test: "hello",
        employees:[
          {
            'name':'name',
            'email':'email@email.com',
            'phone':'0911124321',
            'status':'Active',
            'date':'2022-12-12'
          },
          {
            'name':'name2',
            'email':'email@email.com',
            'phone':'0911124321',
            'status':'Active',
            'date':'2022-12-12'
          }, {
            'name':'name3',
            'email':'email@email.com',
            'phone':'0911124321',
            'status':'Active',
            'date':'2022-12-12'
          },
        ]
      };
    },

    computed: {
      ...mapGetters({
        projectList  : "project/projectList",
        branchListByProject  : "branch/branchListByProject",
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
  
  