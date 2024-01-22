import BRANCH from "../../apis/branch";

export const state = {
    branchList: [],
    branchListByProject:[],
    branch : null
};

export const mutations = {
    SET_BRANCH_LIST(state, data) {
        state.branchList = data
    },
    SET_BRANCH_LIST_BY_PROJECT(state, data) {
        state.branchListByProject = data
    },
    SET_BRANCH(state, data) {
        state.branch = data
    },
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
    async getBrancheByProjectId({commit}, id) {
        await BRANCH.getBrancheByProjectId(id).then(response => {
            if(response.data.type === 1)
            {
                console.log( response.data.content)
                commit('SET_BRANCH_LIST_BY_PROJECT', response.data.content)
            }
            else{
                console.log("ERROR")
            }
        })
    },
    async getBranchByName({commit}, object) {
        await BRANCH.getBranchByName(object).then(response => {
            if(response.data.type === 1)
            {
                console.log( response.data.content)
                commit('SET_BRANCH', response.data.content)
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
    branchListByProject: (state) => {
        return state.branchListByProject
    },
    branch: (state) => {
        return state.branch
    },
};