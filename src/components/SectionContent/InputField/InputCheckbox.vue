<template>
    <div class="label">{{data.name}}</div>
    <span v-if="data.isRequired">*</span>
    <label v-for="(item, index) in data.list" :key="index" :for="alias+index">
        {{item.text}}
        <input :id="alias+index" :type="data.type" :name="alias" :value="item.value" :class="data.class" @input="validity" @focus="resetStyle($event, sectionIndex, alias)">
    </label>
</template>

<script>
import { useState } from '../../../store/index';
export default {
	name: 'InputCheckbox',
	props: {
        data: Object,
        alias: String,
        sectionIndex: Number,
        resetStyle: Function
    },
	setup(props) {
        const state = useState();
        return { state: state.sections[props.sectionIndex][props.alias] };
    },
	methods: {
		validity(event){
            if(event.target.checked){
                this.state.value = event.target.value;
            }else{
                this.state.value = 0;
            }
		},
	}
}
</script>