import{_ as e}from"./ASelect.610bf0f6.js";import"./vue.esm-bundler.24f4f1e5.js";const a={parameters:{storySource:{source:`import ASelect from './ASelect.vue';

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
`,locationsMap:{select:{startLoc:{col:17,line:16},endLoc:{col:2,line:22},startBody:{col:17,line:16},endBody:{col:2,line:22}}}}},title:"Atom/Select",component:e,argTypes:{type:{type:"select",options:["checkbox","radio","switch","none"]},disabled:!1,checked:!0,label:"label",direction:{control:"select",options:["ltr","rtl"]}}},n=t=>({components:{ASelect:e},setup(){return{args:t}},template:'<ASelect v-bind="args" />'}),l=n.bind({});l.args={type:"checkbox",label:"label",disabled:!1,checked:!1};const s=["Select"];export{l as Select,s as __namedExportsOrder,a as default};
//# sourceMappingURL=ASelect.stories.f7dc615b.js.map
