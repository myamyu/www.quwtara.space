<template>
	<div class="large-area-list">
		<h2>都道府県を選んでね</h2>
		<ul class="area-list">
			<li v-for="area in areaList" :key="area.code">
				<a href="javascript:void(0)" v-if="area.code !== selectedArea.code" v-on:click="selectArea(area)">{{area.name}}</a>
				<div v-if="area.code === selectedArea.code">
					<span>{{area.name}}</span>
					<middle-area-list />
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
import MiddleAreaList from './MiddleAreaList.vue';

export default {
	computed: {
		areaList () {
			return this.$store.state.largeArea;
		},
		selectedArea () {
			return this.$store.state.selectedLargeArea || {name: '', code:''};
		}
	},
	components: {MiddleAreaList},
	methods: {
		selectArea (area, event) {
			this.$store.dispatch('selectLargeArea', area);
		}
	}
}
</script>
