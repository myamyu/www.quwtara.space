import Vue from 'vue';
import Vuex from 'vuex';
import AppStore from './store/app.store';
import LargeAreaList from './components/LargeAreaList.vue';

Vue.use(Vuex);

const store = AppStore();
store.dispatch('refreshLargeArea');

const app = new Vue({
	el: '#app',
	store,
	components: {LargeAreaList}
});
