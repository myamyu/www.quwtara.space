<template>
	<div id="setting">
		<h2>レーティング算出セッティング</h2>
		<p>よくわからない値ばかりだけど、初期値を変えることによっていろいろ変わります。</p>
		<table>
			<tr>
				<th>tau値</th>
				<td><input type="text" v-model.number="tau"></td>
				<td><p>なんだかわからないけど、0.3～1.2の間で入れる</p></td>
			</tr>
			<tr>
				<th>rating初期値</th>
				<td><input type="text" v-model.number="rating"></td>
				<td><p>プレイヤーに割り当てられるレーティングの初期値</p></td>
			</tr>
			<tr>
				<th>rd初期値</th>
				<td><input type="text" v-model.number="rd"></td>
				<td><p>プレイヤーに割り当てられるレーティング標準偏差の初期値</p></td>
			</tr>
			<tr>
				<th>vol初期値</th>
				<td><input type="text" v-model.number="vol"></td>
				<td><p>プレイヤーに割り当てられるレーティング変動率の初期値</p></td>
			</tr>
		</table>
		<div><button v-on:click="next()">設定を保存して次へ</button></div>
	</div>
</template>
<script>
export default {
	computed: {
		setting() {
			return this.$store.state.setting;
		},
		tau: {
			get() {return this.$store.state.setting.tau;},
			set(val) {this.$store.commit('ratingSetting', {tau: val});}
		},
		rating: {
			get() {return this.$store.state.setting.rating;},
			set(val) {this.$store.commit('ratingSetting', {rating: val});}
		},
		rd: {
			get() {return this.$store.state.setting.rd;},
			set(val) {this.$store.commit('ratingSetting', {rd: val});}
		},
		vol: {
			get() {return this.$store.state.setting.vol;},
			set(val) {this.$store.commit('ratingSetting', {vol: val});}
		},
	},
	methods: {
		next() {
			this.$store.commit('nextMode');
		}
	}
}
</script>
