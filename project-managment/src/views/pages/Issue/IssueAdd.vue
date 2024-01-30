

<template>
    <VerticalLayout current-page="Add Issue">
      <div class="row">
        <div class="col-12" >
          <CardComponent card-title="Add Issue">
            <form>
                <div class="row">
                 <div class="col-6" >
                  <div class="mb-3">
                    <label for="projectId" class="form-label">Project</label>
                        <select
                            class="form-select"
                            id="projectId"
                            v-model="form.projectId" >
                                <option
                                    v-for="item in projectList"
                                    :key="item.id"
                                    :value="item.id.toString()"
                                >
                                    {{ item.name }}
                                </option>
                       </select>   
                     </div>                     </div>
                    </div>

                    <div class="row">
                 <div class="col-6" >
                    <div class="mb-3">
                        <label for="title" class="form-label">Title</label>
                        <input type="text"  v-model="form.title"  class="form-control" id="title">
                    </div>                    </div>
                </div>


                    <div class="row">
                 <div class="col-6" >
                    <div class="mb-3">
                        <label for="description" class="form-label">Description</label>
                        <input type="text"   v-model="form.description"   class="form-control" id="description">
                    </div>                    </div>
                </div>
                    <button type="button" class="btn btn-primary" v-on:click="submit" >Submit</button>
                </form>
           
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
        form : 
        {
            projectId : null,
            title: null,
            description : null,
        }
      };
    },
  
    computed: {
      ...mapGetters({
        projectList  : "project/projectList",
      }),
    },
    methods: {
      ...mapActions({
        getProjects: "project/getProjects",
        AddIssue  : "issue/AddIssue",
      }),
      dateTime(value) {
        return moment(value).format('YYYY/MM/DD');
      },
      formValidity() {
      return this.form.projectId !=null && this.form.title != null && this.form.description !=null;
    },
     async submit() {
        console.log("hi")
        await this.AddIssue(this.form)
      },
    },
    async created() {
      await this.getProjects();
    },
  };
  </script>
  
  