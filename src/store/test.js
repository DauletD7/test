import axios from "axios";

export default {
  actions: {
    async getDocuments({ commit }) {
      let res = await axios.get(
        "https://test1-1525a-default-rtdb.firebaseio.com/posts.json"
      );
      let newDocuments = res.data;
      commit("updateDocuments", newDocuments);
    },
  },
  mutations: {
    updateDocuments(state, newDocuments) {
      state.documents = newDocuments;
    },
  },
  state: {
    documents: [],
  },
  getters: {
    allDocuments(state) {
      return state.documents;
    },
  },
};
