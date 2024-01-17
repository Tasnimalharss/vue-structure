import BRANCH from "../../apis/branch";

export const state = {
    branchList: [],
};

export const mutations = {
    SET_BRANCH_LIST(state, data) {
        state.branchList = data
    }
};

export const actions = {
    async getBranches({commit }) {
        await BRANCH.getBranches().then(response => {
            if(response.data.type === 1)
            {
                commit('SET_BRANCH_LIST', response.data.content)
            }
            else{
                console.log("ERROR")
            }
        })
    },
};

export const getters = {
    branchList: (state) => {
        return state.branchList
    },
};