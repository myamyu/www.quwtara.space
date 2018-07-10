<template>
	<div class="middle-area-list">
		<h2>エリアを選んでね</h2>
		<ul class="area-list">
			<li v-for="area in areaList" :key="area.code">
				<a href="javascript:void(0)" v-if="area.code !== selectedArea.code" v-on:click="selectArea(area)">{{area.name}}</a>
				<div v-if="area.code === selectedArea.code">
					<span>{{area.name}}</span>
					<small-area-list />
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
import SmallAreaList from './SmallAreaList.vue';

export default {
	computed: {
		areaList () {
			return this.$store.state.middleArea;
		},
		selectedArea () {
			return this.$store.state.selectedMiddleArea || {name: '', code:''};
		}
	},
	components: {SmallAreaList},
	methods: {
		selectArea (area, event) {
			this.$store.dispatch('selectMiddleArea', area);
		}
	}
}
</script>
