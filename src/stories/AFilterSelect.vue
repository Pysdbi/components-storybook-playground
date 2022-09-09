<template>
	<ASelect v-bind="props">
		<span v-if="icon">[icon--{{icon}}]</span>
		{{label}}
		<span v-if="count">({{count}})</span>
	</ASelect>
</template>

<script setup lang="ts">
import {defineComponent} from "vue"
import ASelect from "./ASelect.vue";

defineComponent({name: "ASelect"})
const props = defineProps({
	type: {
		type: String,
		default: null,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	checked: {
		type: Boolean,
		default: false,
	},
	label: {
		type: String,
		required: true,
	},
	direction: {
		type: String,
		default: null,
	},
	count: {
		type: Number,
		default: null
	},
	icon: {
		type: String,
		default: null,
	}
})
</script>

<style>
[class^="select-"] > a > span:last-child {
	color: var(--color-grey-600);
	margin-left: var(--spacer-5xs);
}
</style>
