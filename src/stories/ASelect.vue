<template>
	<li
		:class="{
      [`select-${type}`]: type !== null,
      active: activeClass,
      disabled,
      rtl: direction === null ? type === 'switch' : direction === 'rtl',
    }"
		@click="selectItem"
	>
		<a
			href="#"
			@click.prevent
		>
			<slot>{{ label }}</slot>
		</a>
	</li>
</template>

<script setup lang="ts">
import {defineComponent, ref, toRefs, watch} from "vue"

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
})
const emit = defineEmits(["update:checked"])

const {checked, disabled} = toRefs(props)
const activeClass = ref(checked.value)
const toggleClass = () => activeClass.value = !activeClass.value
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

[class^="select-"] {
	display: flex;
	align-items: center;
	cursor: pointer;
	user-select: none;
}

[class^="select-"].rtl {
	flex-direction: row-reverse;
	justify-content: flex-end;
}

[class^="select-"]::before {
	content: '';
	display: inline-block;
	width: 1.25rem;
	height: 1.25rem;
	/* Change direction */
	margin: var(--spacer-5xs) 0.625rem var(--spacer-5xs) var(--spacer-5xs);
	border: 1px solid var(--color-grey-400);
	background-repeat: no-repeat;
	background-position: center center;
}

[class^="select-"].disabled {
	cursor: not-allowed;
}

[class^="select-"].disabled > a {
	cursor: not-allowed;
}

[class^="select-"].active.disabled {
	cursor: pointer;
}


/* ============= Select None ============= */
.select-none {
	background: var(--color-grey-200);
	color: var(--color-grey-900);
	border-radius: var(--border-radius-xs);
	padding: var(--spacer-3xs) var(--spacer-2xs);
}

.select-none::before {
	display: none;
}

.select-none:not(.disabled):hover {
	color: var(--color-grey-800);
	background-color: var(--color-grey-300);
}

.select-none.active {
	color: var(--color-white);
	background: var(--color-primary);
}

.select-none.disabled {
	color: var(--color-grey-600);
	background-color: var(--color-grey-300);
}

.select-none.active.disabled {
	color: var(--color-white);
	background-color: var(--primary-bg);
}


/* ============= Checkbox ============= */
.select-checkbox::before {
	border-radius: var(--border-radius-2xs);
}

.select-checkbox:not(.disabled):hover::before {
	border-color: var(--color-grey-500);
}

.select-checkbox.active::before {
	background-color: var(--primary-bg);
	background-image: url("assets/icons/checkbox/checkmark-active.svg");
	border: 1px solid var(--primary-bg);
}

.select-checkbox.active.disabled::before {
	background-image: url("assets/icons/checkbox/checkmark-disabled.svg");
	background-color: var(--color-grey-400);
	border-color: var(--color-grey-400);
}


/*  ============= Radio =============  */
.select-radio::before {
	border-radius: var(--border-radius-full);
}

.select-radio:not(.disabled):hover::before {

}

.select-radio.active::before {
	background-image: url("assets/icons/radio/radio-button--checked.svg");
	border-color: transparent;;
}


/*  ============= Switch =============  */
.select-switch::before {
	width: 2.5rem;
	height: 1.5rem;
	border: none;
}

.select-switch:not(.active)::before {
	background-image: url("assets/icons/switch/switch--default.svg");
}

.select-switch.active::before {
	background-image: url("assets/icons/switch/switch--checked.svg");
}
</style>
