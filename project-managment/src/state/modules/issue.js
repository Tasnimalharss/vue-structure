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
    async getIssuesByProjectId({commit }, projectId) {
        await ISSUE.getIssuesByProjectId(projectId).then(response => {
            if(response.data.type === 1)
            {
                commit('SET_ISSUE_LIST_BY_PROJECT_ID', response.data.content)
            }
            else{
                console.log("ERROR")
            }
        })
    },

    async GetIssueByIssueId({commit }, object) {
        await ISSUE.GetIssueByIssueId(object).then(response => {
            if(response.data.type === 1)
            {
                commit('SET_ISSUE', response.data.content)
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
    issue: (state) => {
        return state.issue
    },
};