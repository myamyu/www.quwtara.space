<template>
	<div class="small-area-list">
		<h2>エリアをもっと選んでね</h2>
		<ul class="area-list">
			<li v-for="area in areaList" :key="area.code">
				<a href="javascript:void(0)" v-if="area.code !== selectedArea.code" v-on:click="selectArea(area)">{{area.name}}</a>
				<div v-if="area.code === selectedArea.code">
					<span>{{area.name}}</span>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	computed: {
		areaList () {
			return this.$store.state.smallArea;
		},
		selectedArea () {
			return this.$store.state.selectedSmallArea || {name: '', code:''};
		}
	},
	methods: {
		selectArea (area, event) {
			this.$store.dispatch('selectSmallArea', area);
		}
	}
}
</script>
