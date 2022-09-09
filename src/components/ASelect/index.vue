<template>
	<li
		:class="{
      'is-chip': isChip,
      active: activeClass,
      disabled,
      [`select-${type}`]: type !== null,
    }"
		@click="selectItem"
	>
		<a
			:href="path"
			@click.prevent
		>
			<slot>{{ label }}</slot>
		</a>
	</li>
</template>

<script setup lang="ts">
import { defineComponent, PropType, toRefs, watch } from "vue"
import { useBooleanRef } from "@/utils/boolean-ref"

defineComponent({ name: "ASelect" })
const props = defineProps({
	type: {
		type: String as PropType<"checkbox" | "radio" | "switch">,
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
	count: {
		type: Number,
		default: 0,
	},
	isChip: {
		type: Boolean,
		default: false,
	},
	path: {
		type: String,
		default: "",
	},
})
const emit = defineEmits([ "update:checked" ])

const { checked, disabled } = toRefs(props)
const [ activeClass, toggleClass ] = useBooleanRef(checked.value)
watch(() => checked.value, () => !checked.value && activeClass.value ? toggleClass() : checked.value && !activeClass.value ? toggleClass() : "")

const selectItem = (): any => {
	return disabled.value && checked.value ? emitSelect() : !checked.value && disabled.value ? "" : emitSelect()
}

const emitSelect = async (): Promise<void> => {
	toggleClass()
	emit("update:checked", activeClass.value)
}
</script>

<style>

/* Checkbox */
.select-checkbox {
	display: flex;
	align-items: center;
	cursor: pointer;
	user-select: none;
}

.select-checkbox::before {
	content: '';
	display: inline-block;
	min-width: 1.25rem;
	height: 1.25rem;
	margin: var(--spacer-5xs) 0.625rem var(--spacer-5xs) var(--spacer-5xs);
	border: 1px solid var(--color-grey-400);
	border-radius: var(--border-radius-2xs);
	background-repeat: no-repeat;
	background-position: center center;
}

.select-checkbox:not(.disabled):hover::before {
	border-color: var(--color-grey-500);
}

.select-checkbox.active::before {
	background-color: var(--primary-bg);
	background-image: url("../../assets/icons/checkbox/checkmark-active.svg");
	border: 1px solid var(--primary-bg);
}

/* Radio */
.filter-group__radio li {

}

/* Switch */
.filter-group__switch li {

}

.select-checkbox.disabled {
	cursor: not-allowed;
}

.select-checkbox.disabled > a {
	cursor: not-allowed;
}

.select-checkbox.active.disabled {
	cursor: pointer;
}

@media (--screen-xs) {
	.select-checkbox {
		display: flex;
		flex-direction: row-reverse;
		margin-right: var(--spacer-4xs);
	}

	.select-checkbox > span.fi {
		order: 3;
	}

	.select-checkbox > a {
		order: 1;
	}

	.select-checkbox::before {
		margin-left: auto;
	}

	.select-checkbox.disabled:not(.is-chip) {
		color: var(--color-grey-600);
		background-color: var(--color-grey-300);
	}

	.select-checkbox.active.disabled:not(.is-chip) {
		color: var(--color-white);
		background-color: var(--primary-bg);
	}

[class^="filter-group__"].is-chip li:before,
li[class^="select-"].is-chip:before{
	display: none;
}

	/* Select CHIP */
	.filter-group__checkbox.is-chip li,
	.select-checkbox.is-chip {
		background: var(--color-grey-200);
		color: var(--color-grey-900);
		border-radius: var(--border-radius-xs);
		padding: var(--spacer-3xs) var(--spacer-2xs);
	}

	/* Select CHIP ACTIVE */
	.filter-group__checkbox.is-chip li.active,
	.select-checkbox.is-chip.active {
		background: var(--color-primary);
		color: var(--color-white);
	}

	/* Select CHIP DISABLED */
	.filter-group__checkbox.is-chip li.disabled,
	.select-checkbox.is-chip.disabled {
		background: var(--color-grey-300);
		color: var(--color-grey-600);
	}
}
</style>
