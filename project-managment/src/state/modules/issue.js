import ISSUE from "../../apis/issue";

export const state = {
    issueList: [],
    issueListByProjectId: [],

};

export const mutations = {
    SET_ISSUE_LIST(state, data) {
        state.issueList = data
    },
    SET_ISSUE_LIST_BY_PROJECT_ID(state, data) {
        state.issueListByProjectId = data
    }
};

export const actions = {
    async getIssues({commit }) {
        await ISSUE.getIssues().then(response => {
            if(response.data.type === 1)
            {
                commit('SET_ISSUE_LIST', response.data.content)
            }
            else{
                console.log("ERROR")
            }
        })
    },
    async getIssueByProjectId({commit }, projectId) {
        await ISSUE.getIssueByProjectId(projectId).then(response => {
            if(response.data.type === 1)
            {
                commit('SET_ISSUE_LIST_BY_PROJECT_ID', response.data.content)
            }
            else{
                console.log("ERROR")
            }
        })
    },
};

export const getters = {
    issueList: (state) => {
        return state.issueList
    },
    issueListByProjectId: (state) => {
        return state.issueListByProjectId
    },
};