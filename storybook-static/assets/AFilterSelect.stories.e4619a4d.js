import{d as a,a as s,w as i,n as u,g as d,o as t,b as o,t as l,e as c,f as p}from"./vue.esm-bundler.24f4f1e5.js";import{_ as m}from"./ASelect.610bf0f6.js";const f={key:0},b={key:1},n=a({__name:"AFilterSelect",props:{type:{type:String,default:null},disabled:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},label:{type:String,required:!0},direction:{type:String,default:null},count:{type:Number,default:null},icon:{type:String,default:null}},setup(e){const r=e;return a({name:"ASelect"}),(g,h)=>(t(),s(m,u(d(r)),{default:i(()=>[e.icon?(t(),o("span",f,"[icon--"+l(e.icon)+"]",1)):c("",!0),p(" "+l(e.label)+" ",1),e.count?(t(),o("span",b,"("+l(e.count)+")",1)):c("",!0)]),_:1},16))}});n.__docgenInfo={exportName:"default",displayName:"AFilterSelect",description:"",tags:{},props:[{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"checked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string"},required:!0},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"count",type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:"null"}}]};const x={parameters:{storySource:{source:`import AFilterSelect from './AFilterSelect.vue';

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
`,locationsMap:{"filter-select":{startLoc:{col:17,line:16},endLoc:{col:2,line:22},startBody:{col:17,line:16},endBody:{col:2,line:22}}}}},title:"Atom/Select",component:n,argTypes:{type:{type:"select",options:["checkbox","radio","switch","none"]},disabled:!1,checked:!0,label:"label",direction:{control:"select",options:["ltr","rtl"]}}},y=e=>({components:{AFilterSelect:n},setup(){return{args:e}},template:'<AFilterSelect v-bind="args" />'}),S=y.bind({});S.args={type:"checkbox",label:"label",disabled:!1,checked:!1};const F=["FilterSelect"];export{S as FilterSelect,F as __namedExportsOrder,x as default};
//# sourceMappingURL=AFilterSelect.stories.e4619a4d.js.map
