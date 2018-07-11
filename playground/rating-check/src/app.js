import Vue from 'vue';
import Vuex from 'vuex';
import RankingStore from './store/ranking.store';
import RankingRoot from './components/RankingRoot.vue';

Vue.use(Vuex);
const store = RankingStore();

const app = new Vue({
	el: '#app',
	store,
	components: {RankingRoot}
});
