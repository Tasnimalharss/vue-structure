import ISSUE from "../../apis/issue";

export const state = {
    issueList: [],
};

export const mutations = {
    SET_ISSUE_LIST(state, data) {
        state.issueList = data
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
};

export const getters = {
    issueList: (state) => {
        return state.issueList
    },
};