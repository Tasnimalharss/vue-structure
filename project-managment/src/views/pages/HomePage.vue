

<template>
  <VerticalLayout current-page="Home">
    <div class="row">
      <div class="col-12">
        <!-- <CardComponent card-title="Test Title2">
          <div class="table-responsive p-0">
            <table class="table align-items-center mb-0">
              <thead>
                <tr>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"> Author</th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"> Function</th>
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"> Status
                  </th>
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Employed</th>
                  <th class="text-secondary opacity-7"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="emp in employees" :key="emp.email">
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{{ emp.name }}</h6>
                        <p class="text-xs text-secondary mb-0">{{ emp.email }}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="text-xs font-weight-bold mb-0">Manager</p>
                  </td>
                  <td class="align-middle text-center text-sm"><span
                      class="badge badge-sm bg-gradient-secondary">{{ emp.status }}</span></td>
                  <td class="align-middle text-center"><span
                      class="text-secondary text-xs font-weight-bold">{{ emp.date }}</span></td>
                  <td class="align-middle">
                    <ModalComponent modal-title="Modal Here" button-label="Open modal">
                      <p>"here"</p>
                      </ModalComponent>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardComponent> -->
      </div>
    </div>
  </VerticalLayout>
</template>

<script>
import VerticalLayout from '@/views/layouts/VerticalLayout';

// import CardComponent from '@/components/elements/CardComponent';
// import ModalComponent from '@/components/elements/ModalComponent';

//import TableComponent from '@/components/tables/TableComponent';

export default {
  components: {
    VerticalLayout, 
    // CardComponent,ModalComponent
  },
  data() {
    return {
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
};
</script>

