<template>
	<div id="battle">
		<h2>対戦中！！！ 【第 {{matchNum}} 回戦】</h2>
		<p>どちらが強そう？</p>
		<ul class="choice-results">
			<li v-bind:style="{backgroundImage:`url(http://placeimg.com/480/480/people?${nowMatch[0].name}), url(https://fakeimg.pl/480x480/?text=loading&font=noto)`}">
				<a href="javascript:void(0)" v-on:click="result(1)"><span>{{nowMatch[0].name}}</span></a>
			</li>
			<li style="background-image:url(https://fakeimg.pl/480x480/?text=%E5%BC%95%E3%81%8D%E5%88%86%E3%81%91&amp;font=noto);">
				<a href="javascript:void(0)" v-on:click="result(0.5)"> </a>
			</li>
			<li v-bind:style="{backgroundImage:`url(http://placeimg.com/480/480/people?${nowMatch[1].name}), url(https://fakeimg.pl/480x480/?text=loading&font=noto)`}">
				<a href="javascript:void(0)" v-on:click="result(0)"><span>{{nowMatch[1].name}}</span></a>
			</li>
		</ul>
		<hr>
		<div v-if="fixedList.length > 0">
			<h3>レーティング確定者</h3>
			<ul>
				<li v-for="p in fixedList" :key="p.name">{{p.name}} [{{(0|p.rating.getRd())}}]</li>
			</ul>
		</div>
	</div>
</template>
<style>
	.choice-results {
		display: flex;
		width: 100%;
		height: 300px;
		margin: 0;
		padding: 0;
	}
	.choice-results > li {
		display: block;
		width: 100%;
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		text-align: center;
		margin: 0;
		padding: 0;
	}
	.choice-results > li > a {
		display: block;
		width: 100%;
		height: 100%;
		text-decoration: none;
	}
	.choice-results > li > a > span {
		display: block;
		width: 100%;
		background-color: rgba(255,255,255, 0.6);
		line-height: 20px;
	}
</style>
<script>
export default {
	data() {
		const match = this.$store.getters.makeMatch;
		return {
			nowMatch: match
		};
	},
	computed: {
		matchNum () {
			return this.$store.state.matchNum + 1;
		},
		ranking () {
			const entries = this.$store.state.entries;
			return entries.sort((p1, p2) => p2.rating.getRating() - p1.rating.getRating());
		},
		fixedList () {
			return this.$store.getters.fixedPlayers;
		}
	},
	methods: {
		result(result) {
			this.$store.commit('matchResult', {p1: this.nowMatch[0], p2: this.nowMatch[1], result:result});
			this.nowMatch = this.$store.getters.makeMatch;
			if (this.nowMatch.length === 0) {
				// ランキングが決まったので次へ
				this.$store.commit('nextMode');
			}
		}
	}
}
</script>
