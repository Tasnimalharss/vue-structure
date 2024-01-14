import router from "@/router";
import { createToaster } from "@meforma/vue-toaster";

const toaster = createToaster({
  position: "top-right",
  duration: 8000,
  maxToasts: 4,
});

export const state = {
  isLoading: false,
  pushRedirect: false,
  toastrMsg: "",
};

export const mutations = {
  TOGGLE_LOADING(state, status) {
    state.isLoading = status;
  },
  PUSH_REDIRECT(state, status) {
    state.isLoading = status;
  },
  TOASTR_MSG(state, data) {
    state.toastrMsg = data;
  },
};

export const actions = {
  async redirect({ commit }, routeName) {
    commit("PUSH_REDIRECT", true);
    await router.push({ name: routeName });
    commit("PUSH_REDIRECT", false);
  },
  async fireSuccessToaster({ commit }, message) {
    commit("TOASTR_MSG", message);
    toaster.success(message ?? "تمت العملية بنجاح");
  },
  async fireErrorToaster({ commit }, message) {
    commit("TOASTR_MSG", message);
    toaster.error(message ?? "خطأ, برجاء المحاولة لاحقا");
  },
  async fireInfoToaster({ commit }, message) {
    commit("TOASTR_MSG", message);
    toaster.info(message);
  },
  async fireWarningToaster({ commit }, message) {
    commit("TOASTR_MSG", message);
    toaster.warning(message);
  },
};

export const getters = {
  isLoading: (state) => {
    return state.isLoading;
  },
  pushRedirect: (state) => {
    return state.pushRedirect;
  },
};