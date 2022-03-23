<template>
    <label :for="alias">{{data.name}}</label>
    <span v-if="data.isRequired">*</span>
    <select :multiple="data.multiple" :id="alias" :value="data.selected" :class="data.class" @focus="resetStyle($event, sectionIndex, alias)" @change="validity">
        <option v-for="option in data.options" :key="option.value" :value="option.value">{{option.text}}</option>
    </select>
</template>

<script>
import { useState } from '../../../store/index';
export default {
	name: 'InputBox',
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
            this.state.selected = event.target.value;
		},
	}
}
</script>