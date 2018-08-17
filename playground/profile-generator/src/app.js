import Vue from 'vue';
import Vuex from 'vuex';
import ProfileStore from './store/profile-store';
import ProfileGenerator from './components/ProfileGenerator.vue';

Vue.use(Vuex);
const store = ProfileStore();
store.commit('reload');

const app = new Vue({
	el: '#app',
	store,
	components: {ProfileGenerator}
});
