

<template>
    <VerticalLayout>
      <div class="row">
        <div class="col-12" v-if="branch!=null">
          <CardComponent :card-title="branch.name">
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
                          <h6 class="mb-0 text-sm">{{ branch.name }}</h6>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">merged</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{ branch.merged }}</h6>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">merged</h6>
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
                          <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">developers Can Push</h6>
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
                          <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">developers Can Merge</h6>
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
                          <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">default</h6>
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