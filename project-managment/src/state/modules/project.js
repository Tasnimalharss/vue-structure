import PROJECT from "../../apis/project";

export const state = {
    projectList: [],
};

export const mutations = {
    SET_PROJECT_LIST(state, data) {
        state.projectList = data
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
};

export const getters = {
    projectList: (state) => {
        return state.projectList
    },
};