<template>
	<div id="results">
		<h2>結果発表！！</h2>
		<p>{{matchNum}}回戦った結果、こうなりました。</p>
		<hr>
		<table>
			<tr><th>Rank</th><th>プレイヤー</th><th>レーティング</th><th>備考</th></tr>
			<tr v-for="(p, i) in ranking" :key="i">
				<td>{{(i + 1)}} 位</td>
				<td>{{p.name}}</td>
				<td>{{(0|p.rating.getRating())}}</td>
				<td>
					Rd:{{(0|p.rating.getRd())}} Vol:{{p.rating.getVol()}}
				</td>
			</tr>
		</table>
		<div><a href="javascript:void(0)" v-on:click="reset()">最初からやる</a></div>
	</div>
</template>
<script>
export default {
	computed: {
		matchNum () {
			return this.$store.state.matchNum;
		},
		ranking () {
			const entries = this.$store.state.entries;
			return entries.sort((p1, p2) => p2.rating.getRating() - p1.rating.getRating());
		}
	},
	methods: {
		reset () {
			this.$store.commit('reset');
		}
	}
}
</script>
