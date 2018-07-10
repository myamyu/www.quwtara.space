import Vuex from 'vuex';
import {largeArea, middleArea, smallArea} from '../api-client/hotpepper-api';

export default () => new Vuex.Store({
	state: {
		largeArea: [],
		selectedLargeArea: null,
		middleArea: [],
		selectedMiddleArea: null,
		smallArea: [],
		selectedSmallArea: null
	},
	mutations: {
		clearLargeArea (state) {
			state.largeArea = [], state.selectedLargeArea = null;
		},
		setLargeAreaList (state, areaList) {
			state.largeArea = areaList;
		},
		selectLargeArea (state, selectedArea) {
			state.selectedLargeArea = selectedArea;
		},
		clearMiddleArea (state) {
			state.middleArea = [], state.selectedMiddleArea = null;
		},
		setMiddleAreaList (state, areaList) {
			state.middleArea = areaList;
		},
		selectMiddleArea (state, selectedArea) {
			state.selectedMiddleArea = selectedArea;
		},
		clearSmallArea (state) {
			state.smallArea = [], state.selectedSmallArea = null;
		},
		setSmallAreaList (state, areaList) {
			state.smallArea = areaList;
		},
		selectSmallArea (state, selectedArea) {
			state.selectedSmallArea = selectedArea;
		},
	},
	actions: {
		refreshLargeArea ({commit}) {
			commit('clearLargeArea');
			commit('clearMiddleArea');
			commit('clearSmallArea');
			largeArea()
			.then((res) => {
				commit('setLargeAreaList', res.results.large_area.map((e) => ({name: e.name, code: e.code})));
			});
		},
		selectLargeArea ({commit}, area) {
			commit('selectLargeArea', area);
			commit('clearMiddleArea');
			commit('clearSmallArea');
			middleArea({large_area: area.code})
			.then((res) => {
				commit('setMiddleAreaList', res.results.middle_area.map((e) => ({name: e.name, code: e.code})));
			});
		},
		selectMiddleArea ({commit}, area) {
			commit('selectMiddleArea', area);
			commit('clearSmallArea');
			smallArea({middle_area: area.code})
			.then((res) => {
				commit('setSmallAreaList', res.results.small_area.map((e) => ({name: e.name, code: e.code})));
			});
		},
		selectSmallArea ({commit}, area) {
			commit('selectSmallArea', area);
		}
	}
});
