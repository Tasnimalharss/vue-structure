import PROJECT from "../../apis/project";

export const state = {
    projectList: [],
    project:null
};

export const mutations = {
    SET_PROJECT_LIST(state, data) {
        state.projectList = data
    },
    SET_PROJECT(state, data) {
        state.project = data
    }
};

export const actions = {
    async getProjects({commit }) {
        await PROJECT.getProjects().then(response => {
            if(response.data.type === 1)
            {
                commit('SET_PROJECT_LIST', response.data.content)
            }
            else{
                console.log("ERROR")
            }
        })
    },

    async getProjectById({commit}, id) {
        await PROJECT.getProjectById(id).then(response => {
            if(response.data.type === 1)
            {
                commit('SET_PROJECT', response.data.content)
            }
            else{
                console.log("ERROR")
            }
        })
    },
};

export const getters = {
    projectList: (state) => {
        return state.projectList
    },
    project: (state) => {
        return state.project
    },
};