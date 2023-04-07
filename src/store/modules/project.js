import { gql } from 'graphql-request';
import { apiGraph } from '@/assets/utils/api';

const state = () => ({
    projects: [],
    error: null,
    loading: false
});

const getters = {
    projects: (state) => {
        return state.projects
    },

    error: (state) => {
        return state.error
    },

    loading: (state) => {
        return state.loading
    }
};

const actions = {
    async fetchAll({ commit }) {
        try {

            commit('setLoading', true);

            const data = await apiGraph.request(
               gql`
                  query AllProjects() {
                     projects() {
                        stage
                        typeProject
                        createdAt
                        description
                        content {
                            html
                            text
                        }
                        id
                        publishedAt
                        slug
                        tags
                        title
                        updatedAt
                        urlSite
                        heroImage {
                           size
                           fileName
                           height
                           handle
                           id
                           url
                           width
                        }
                        images {
                           fileName
                           height
                           id
                           size
                           url
                           width
                        }
                    }
                  }
               `,
            );

            commit('setData', data);
            commit('setLoading', false);

        } catch (e) {

            console.log(e);
            commit('setError', e);
            commit('setLoading', false);
        }
    }
};

const mutations = {

    setData(state, data) {
        state.projects = data.projects
    },

    setError(state, data) {
        state.error = data
    },

    setLoading(state, data) {
        state.loading = data
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
