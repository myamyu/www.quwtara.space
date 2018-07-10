import Vuex from 'vuex';
import glicko2 from 'glicko2';
const setting = {
	tau: 0.5,
	rating: 1500,
	rd: 350,
	vol: 0.06
};
const stopRD = 50;
let ranking = new glicko2.Glicko2(setting);

export default () => new Vuex.Store({
	state: {
		ranking: ranking,
		players: [
			'Natascha', 'Wels', 'Adonis', 'Stanislava', 'Bernhard',
			'Matthieu', 'Gianna', 'Elisabetha', 'Oleg', 'Oswaldo',
			'Patrik', 'Gwendal', 'Celine', 'Janet', 'David',
			'Lilly', 'Meg', 'Jerker', 'Yulya', 'Laura', 
			'Andree', 'Thomas', 'Hosea', 'Moran', 'Ruth',
			'Ebel', 'Florian', 'Benita', 'Francis', 'Edith'
		],
		entries: [],
		matchNum: 0
	},
	mutations: {
		entry (state, player) {
			if (!state.entries.some((e) => e.name === player)) {
				return;
			}
			state.entries.push({name:player, rating: ranking.makePlayer()});
		},
		resetEntries (state) {
			state.entries = [];
		},
		reset (state) {
			state.entries = [];
			state.matchNum = 0;
			ranking = new glicko2.Glicko2(setting);
			state.ranking = ranking;
		},
		setMatchResult (state, p1, p2, result) {
			ranking.addResult(p1.rating, p2.rating, result);
			ranking.calculatePlayersRatings();
			state.matchNum++;
		}
	},
	getters: {
		makeMatch (state) {
			const targets = state.entries.filter((e) => e.rating.getRd() >= stopRD);
			if (targets.length === 0) {
				return [];
			}
			const p1 = targets[0|Math.random()*targets.length];
			const p2 = (
				(list) => list.filter((e) => e.name !== p1.name)[Math.random()*list.length - 1]
			)(targets.length === 1 ? state.entries : targets);
			return [p1, p2];
		}
	}
});
