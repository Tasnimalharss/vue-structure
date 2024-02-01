import ISSUE from "../../apis/issue";

export const state = {
    issueList: [],
    issueListByProjectId: [],
    issue : null

};

export const mutations = {
    SET_ISSUE_LIST(state, data) {
        state.issueList = data
    },
    SET_ISSUE_LIST_BY_PROJECT_ID(state, data) {
        state.issueListByProjectId = data
    },
    SET_ISSUE(state, data) {
        state.issue = data
    }
};

export const actions = {
    async getIssues({commit }) {
        await commit("application/TOGGLE_LOADING", true, { root: true });
        await ISSUE.getIssues().then(response => {
            if(response.data.type === 1)
            {
                commit('SET_ISSUE_LIST', response.data.content)
            }
            else{
                console.log("ERROR")
            }
        })
        await commit("application/TOGGLE_LOADING", false, { root: true });
    },
    async getIssuesByProjectId({commit }, projectId) {
        await commit("application/TOGGLE_LOADING", true, { root: true });
        await ISSUE.getIssuesByProjectId(projectId).then(response => {
            if(response.data.type === 1)
            {
                commit('SET_ISSUE_LIST_BY_PROJECT_ID', response.data.content)
            }
            else{
                console.log("ERROR")
            }
        })
        await commit("application/TOGGLE_LOADING", false, { root: true });
    },

    async GetIssueByIssueId({commit }, object) {
        await commit("application/TOGGLE_LOADING", true, { root: true });
        await ISSUE.GetIssueByIssueId(object).then(response => {
            if(response.data.type === 1)
            {
                commit('SET_ISSUE', response.data.content)
            }
            else{
                console.log("ERROR")
            }
        })
        await commit("application/TOGGLE_LOADING", false, { root: true });
    },
    async AddIssue({commit,dispatch }, payload) {
        await commit("application/TOGGLE_LOADING", true, { root: true });
        await ISSUE.AddIssue(payload).then((response) => {
            if(response.data.type === 1)
          {
            dispatch("application/redirect", "Issue", { root: true });
          }
          else{
            console.log("ERROR")
        }
        });
        await commit("application/TOGGLE_LOADING", false, { root: true });
      },
};

export const getters = {
    issueList: (state) => {
        return state.issueList
    },
    issueListByProjectId: (state) => {
        return state.issueListByProjectId
    },
    issue: (state) => {
        return state.issue
    },
};