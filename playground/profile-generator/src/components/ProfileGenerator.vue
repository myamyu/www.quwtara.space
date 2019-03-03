<template>
	<div class="profile-generator">
		<p id="quwtaraProfileGeneratorResult">{{age1}}ぐらいの時が一番女の子してたと思う{{wara}}{{age2}}の{{area}}産の都内住み{{person}}です{{star}}基本カギなしだから仲良くしてくれる人フォロー嬉しいな{{face}}好き{{arrow}}{{likes}}/{{angry}}嫌い{{hate}} ❤️FF外の絡み無言フォロー大丈夫です❢</p>
		<div class="buttons">
			<a href="javascript:void(0);" v-on:click="reload()" class="reload">リロード</a>
			<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button-template"
				data-size="large" 
				v-bind:data-text="result" 
				data-url="https://www.quwtara.space/playground/profile-generator/" 
				data-hashtags="quwtara_profile_generator" 
				data-related="myamyu" 
				data-show-count="true">Tweet</a>
			<span id="quwtaraProfileGeneratorTweetArea"></span>
		</div>
		<div class="signature">
			by <a href="https://www.quwtara.space/playground/profile-generator/" target="_blank">Quwtara Profile Generator</a>
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
#quwtaraProfileGeneratorResult {
	color: #14171a;
	font-size: 14px;
	font-weight: normal;
	line-height: 22px;
	margin: 1em auto;
	min-height: 150px;
	width: 260px;
	word-wrap: break-word;
}
.buttons {
	display: flex;
	flex-direction: row;
	height: 44px;
	justify-content: space-around;
}
.reload {
	background-color: #FFFFFF;
	border: solid 1px;
	border-radius: 4px;
	box-sizing: border-box;
	display: inline-block;
	height: 28px;
	line-height: 28px;
	width: 93px;
	text-align: center;
	text-decoration: none;	
}
#quwtaraProfileGeneratorTweetArea {
	min-width: 93px;
}
.twitter-share-button-template {
	display: none;
}
.signature {
	font-size: 12px;
	padding: 0px 25px 16px;
	text-align: right;
}
</style>
<script>
export default {
	data () {
		return {
			res: ''
		};
	},
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
		},
		result() {
			return `${this.res}\n`;
		}
	},
	methods: {
		reload () {
			this.$store.commit('reload');
		},
		refreshTweet () {
			const res = document.getElementById('quwtaraProfileGeneratorResult');
			this.res = res ? res.textContent : '？？？？ミスったかも。ごめん。';
			const d = document;
			const buttonTmpl = d.getElementsByClassName('twitter-share-button-template')[0];
			const button = buttonTmpl.cloneNode();
			button.classList.add('twitter-share-button');
			const tweetArea = d.getElementById('quwtaraProfileGeneratorTweetArea');
			tweetArea.innerHTML = '';
			tweetArea.appendChild(button);

			const sc = d.createElement('script'),
				hd = d.getElementsByTagName('head')[0];
			sc.src = 'https://platform.twitter.com/widgets.js';
			hd.appendChild(sc);
		}
	},
	mounted () {
		this.refreshTweet();
	},
	updated () {
		this.refreshTweet();
	}
};
</script>
