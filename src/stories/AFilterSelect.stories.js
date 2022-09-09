import AFilterSelect from './AFilterSelect.vue';

export default {
  title: 'Atom/Select',
  component: AFilterSelect,
  argTypes: {
    type: { type: 'select', options: ['checkbox', 'radio', 'switch', 'none'] },
    disabled: false,
    checked: true,
    label: 'label',
    direction: { control: 'select', options: ['ltr', 'rtl'] },
  },
};


const Template = (args) => ({
  components: { AFilterSelect },
  setup() {
    return { args };
  },
  template: '<AFilterSelect v-bind="args" />',
});

export const FilterSelect = Template.bind({});
FilterSelect.args = {
  type: "checkbox",
  label: "label",
  disabled: false,
  checked: false,
};
//
// export const Radio = Template.bind({});
// Radio.args = {
//   type: "radio",
//   label: 'label',
// };
//
// export const Switch = Template.bind({});
// Switch.args = {
//   type: "switch",
//   label: 'label'
// };
