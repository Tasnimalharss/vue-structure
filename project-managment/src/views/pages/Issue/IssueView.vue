

<template>
  <VerticalLayout>
    <BaseSkeleton :loading="isLoading">
    <div class="row">
      <div class="col-12" v-if="issue!=null">
        <CardComponent :card-title="issue.title">
           <table class="table align-items-center mb-0">
              <tbody>
                <tr>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Title</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{{ issue.title }}</h6>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Author</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{{ issue.author?.name }}</h6>
                      </div>
                    </div>
                  </td>
                </tr>
<!-- 
                <tr>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Assignees</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">
                          <li v-for="item in issue.assignees" :key="item.username">
                            {{ item.name }}
                          </li>
                        </h6>
                      </div>
                    </div>
                  </td>
                </tr> -->

                <!-- <tr>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Assignee</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{{ issue.assignee.name }}</h6>
                      </div>
                    </div>
                  </td>
                </tr> -->

                <tr>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Created At</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{{ dateTime(issue.createdAt)}}</h6>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Closed At</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{{ issue.closedAt }}</h6>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">closedBy</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{{ dateTime(issue.closedBy) }}</h6>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">state</h6>
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
                </tr>

                <tr>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">description</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{{ issue.description }}</h6>
                      </div>
                    </div>
                  </td>
                </tr>
<!-- 
                <tr>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">labels</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{{ issue.labels }}</h6>
                      </div>
                    </div>
                  </td>
                </tr> -->

                <tr>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">type</h6>
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
                </tr>

                <tr>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">due Date</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{{ dateTime(issue.dueDate)}}</h6>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">confidential</h6>
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
                </tr>

              </tbody>
            </table> 
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

// import ModalComponent from '@/components/elements/ModalComponent';

//import TableComponent from '@/components/tables/TableComponent';

export default {
  components: {
    VerticalLayout, CardComponent, BaseSkeleton,
    // ModalComponent
  },
  data() {
    return {
      test: "hello",
       object: {
        projectId: this.projectId,
        issueId:this.issueId
       }
    };
  },
  props: ["projectId" , "issueId"],
  computed: {
    ...mapGetters({
      issue : "issue/issue",
      isLoading: "application/isLoading",

    }),
  },
  methods: {
    ...mapActions({
      GetIssueByIssueId: "issue/GetIssueByIssueId",

    }),
    dateTime(value) {
      if(value)
      return moment(value).format('YYYY/MM/DD HH:MM');
    },
  },
  async created() {
    await this.GetIssueByIssueId(this.object)
  },
};
</script>  