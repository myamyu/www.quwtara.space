<template>
	<div class="profile-generator">
		<p id="profileGeneratorResult">
			{{age1}}ぐらいの時が一番女の子してたと思う{{wara}}
			{{age2}}の{{area}}産の都内住み{{person}}です{{star}}
			基本カギなしだから仲良くしてくれる人フォロー嬉しいな{{face}}
			好き{{arrow}}{{likes}}/
			{{angry}}嫌い{{hate}} 
			❤️FF外の絡み無言フォロー大丈夫です❢
		</p>
		<div class="buttons">
			<a href="javascript:void(0);" v-on:click="reload()" class="reload">リロード</a>
			<a href="javascript:void(0);" v-on:click="tweet()" class="tweet">ツイート</a>
		</div>
	</div>
</template>
<style scoped>
.profile-generator {
	background-color: #e6ecf0;
	border: solid 1px #aaaaaa;
	box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25);
	font-family: Arial, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Osaka, メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
	width: 300px;
}
#profileGeneratorResult {
	color: #14171a;
	font-size: 14px;
	font-weight: normal;
	line-height: 20px;
	margin: 0 auto;
	width: 260px;
	word-wrap: break-word;
}
</style>
<script>
export default {
	computed: {
		age1 () {
			return this.$store.state.age1;
		},
		wara () {
			return this.$store.state.wara;
		},
		age2 () {
			return this.$store.state.age2;
		},
		area () {
			return this.$store.state.area;
		},
		person () {
			return this.$store.state.person;
		},
		star () {
			return this.$store.state.star;
		},
		face () {
			return this.$store.state.face;
		},
		arrow () {
			return this.$store.state.arrow;
		},
		likes () {
			return this.$store.state.likes;
		},
		angry () {
			return this.$store.state.angry;
		},
		hate () {
			return this.$store.state.hate;
		}
	},
	methods: {
		reload () {
			this.$store.commit('reload');
		},
		tweet () {
			return;
		}
	}
};
</script>
