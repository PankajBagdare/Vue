import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    users: [
      { id: 1, name: 'Mr Albert', email: 'albert@gmail.com', password: '123456', address: 'Germany' },
      { id: 2, name: 'Mr Aryabhatta', email: 'aryabhatta@gmail.com', password: '123456', address: 'India' },
      { id: 3, name: 'Mr Newton', email: 'newton@gmail.com', password: '123456', address: 'France' },
      { id: 4, name: 'Mr Varahmir', email: 'varahmir@gmail.com', password: '123456', address: 'India' },
      { id: 5, name: 'Mr Ramanujan', email: 'ramanujan@gmail.com', password: '123456', address: 'India' }
    ]
  }
});
