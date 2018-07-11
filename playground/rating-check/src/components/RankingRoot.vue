<template>
	<ranking-setting v-if="mode === 'setting'" />
	<entry v-else-if="mode === 'entry'" />
	<battle-field v-else-if="mode === 'match'" />
	<results v-else-if="mode==='finish'" />
</template>
<script>
import RankingSetting from './RankingSetting.vue';
import Entry from './Entry.vue';
import BattleField from './BattleField.vue';
import Results from './Results.vue';

export default {
	computed: {
		mode () {
			return this.$store.getters.mode;
		},
	},
	components: {RankingSetting, Entry, BattleField, Results}
}
</script>
