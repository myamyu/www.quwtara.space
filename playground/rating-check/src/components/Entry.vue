<template>
	<div id="entry">
		<h2>プレイヤーのエントリー</h2>
		<p>戦わせるプレイヤーを選んでください</p>
		<a v-for="player in players" :key="player" style="display:inline-block; margin: 4px;"
			href="javascript:void(0)" v-on:click="entry(player)">{{player}}</a>
		<hr>
		<h3>エントリーした猛者</h3>
		<p v-if="entries.length === 0">まだエントリーされていないよ</p>
		<ul v-else>
			<li v-for="ep in entries" :key="ep.name">
				<span>{{ep.name}}</span> <span>Rt.{{ep.rating.getRating()}}</span>
			</li>
		</ul>
		<div v-if="entries.length >= 2">
			<button v-on:click="next()">バトルを開始する</button>
		</div>
	</div>
</template>
<script>
export default {
	computed: {
		players () {
			const entries = this.$store.state.entries;
			return this.$store.state.players.filter((e) => entries.findIndex((e2) => e === e2.name) === -1);
		},
		entries () {
			return this.$store.state.entries;
		}
	},
	methods: {
		entry(player) {
			this.$store.commit('entry', player);
		},
		next() {
			this.$store.commit('nextMode');
		}
	}
}
</script>
