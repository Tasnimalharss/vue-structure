

<template>
    <VerticalLayout  :current-page="`Branches / ${branch? branch.name :''} Branch Details`">
      <div class="row">
        <div class="col-12" v-if="branch">
          <CardComponent :card-title="`${branch.name} Branch Details`">
            <table class="table align-items-center mb-0">
                <tbody>
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Branch Name</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{ branch.name }}</h6>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Is Branch Merged</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{branch.merged }}</h6>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Is Branch Protected</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{branch.protected }}</h6>
                        </div>
                      </div>
                    </td>
                  </tr>


                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7"> Can Developer Push</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{ branch.developersCanPush }}</h6>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7"> Can Developers Merge</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{ branch.developersCanMerge }}</h6>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Is Default Branch</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{ branch.default }}</h6>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <!-- <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Commits</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{ branch.commit }}</h6>
                        </div>
                      </div>
                    </td>
                  </tr> -->

                </tbody>
              </table>
                      </CardComponent>
        </div>
      </div>
    </VerticalLayout>
  </template>
  
  <script>
  import VerticalLayout from '@/views/layouts/VerticalLayout';
  import CardComponent from '@/components/elements/CardComponent';
  import { mapActions, mapGetters } from "vuex";

  //import TableComponent from '@/components/tables/TableComponent';
  
  export default {
    components: {
      VerticalLayout, CardComponent
    },
    data() {
      return {
        test: "hello",
         object: {
          projectId: this.projectId,
        brancName:this.brancName
         }
      };
    },
    props: ["projectId" , "brancName"],
    computed: {
      ...mapGetters({
        branch : "branch/branch",
  
      }),
    },
    methods: {
      ...mapActions({
        getBranchByName: "branch/getBranchByName",
  
      })
    },
    async created() {
      await this.getBranchByName(this.object)
    },
  };
  </script>  