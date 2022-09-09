import ASelect from './ASelect.vue';

export default {
  title: 'Atom/Select',
  component: ASelect,
  argTypes: {
    type: { type: 'select', options: ['checkbox', 'radio', 'switch', 'none'] },
    disabled: false,
    checked: true,
    label: 'label',
    direction: { control: 'select', options: ['ltr', 'rtl'] }
  },
};


const Template = (args) => ({
  components: { ASelect },
  setup() {
    return { args };
  },
  template: '<ASelect v-bind="args" />',
});

export const Select = Template.bind({});
Select.args = {
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
