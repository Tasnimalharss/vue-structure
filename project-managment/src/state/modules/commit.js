import COMMIT from "../../apis/commit";

export const state = {
    commitList: [],
};

export const mutations = {
    SET_COMMIT_LIST(state, data) {
        state.commitList = data
    }
};

export const actions = {
    async getCommits({commit },object) {
        await COMMIT.getCommits(object).then(response => {
            if(response.data.type === 1)
            {
                commit('SET_COMMIT_LIST', response.data.content)
            }
            else{
                console.log("ERROR")
            }
        })
    },
};

export const getters = {
    commitList: (state) => {
        return state.commitList
    },
};