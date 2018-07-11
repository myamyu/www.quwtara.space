import Vuex from 'vuex';
import glicko2 from 'glicko2';
const defaultSetting = {
	tau: 0.5,
	rating: 1500,
	rd: 350,
	vol: 0.06
};
const stopRD = 50;
const mode = [
	'setting',
	'entry',
	'match',
	'finish'
];

export default () => new Vuex.Store({
	state: {
		mode: 0,
		ranking: new glicko2.Glicko2(defaultSetting),
		setting: {
			tau: defaultSetting.tau,
			rating: defaultSetting.rating,
			rd: defaultSetting.rd,
			vol: defaultSetting.vol
		},
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
		ratingSetting (state, {tau, rating, rd, vol}) {
			state.setting.tau = tau || state.setting.tau;
			state.setting.rating = rating || state.setting.rating;
			state.setting.rd = rd || state.setting.rd;
			state.setting.vol = vol || state.setting.vol;
			state.ranking = new glicko2.Glicko2(state.setting);
		},
		entry (state, player) {
			if (state.entries.some((e) => e.name === player)) {
				return;
			}
			state.entries.push({name:player, rating:state.ranking.makePlayer()});
		},
		resetEntries (state) {
			state.entries = [];
		},
		reset (state) {
			state.mode = 0;
			state.entries = [];
			state.matchNum = 0;
			state.ranking = new glicko2.Glicko2(state.setting);
		},
		matchResult (state, {p1, p2, result}) {
			state.ranking.addResult(p1.rating, p2.rating, result);
			state.ranking.calculatePlayersRatings();
			state.matchNum++;
		},
		nextMode (state) {
			state.mode = state.mode === mode.length - 1 ? state.mode : state.mode + 1;
		}
	},
	getters: {
		fixedPlayers (state) {
			return state.entries.filter((e) => e.rating.getRd() < stopRD);
		},
		makeMatch (state) {
			const targets = state.entries.filter((e) => e.rating.getRd() >= stopRD);
			if (targets.length === 0) {
				return [];
			}
			const p1 = targets[0|Math.random()*targets.length];
			const p2 = (
				(list) => list.filter((e) => e.name !== p1.name)[0|Math.random()*list.length - 1]
			)(targets.length === 1 ? state.entries : targets);
			return [p1, p2];
		},
		mode (state) {
			return mode[state.mode];
		}
	}
});
