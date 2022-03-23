<template>
    <label :for="alias">{{data.name}}</label>
    <span v-if="data.isRequired">*</span>
    <input :placeholder="data.placeholder" :id="alias" :type="data.type" :value="data.value" :class="data.class" @input="validity" @focus="resetStyle($event, sectionIndex, alias)">
</template>

<script>
import { useState } from '../../../store/index';
export default {
	name: 'InputText',
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
            const value = event.target.value;
            if(this.data.verification === 'number'){
                if(new RegExp('^[0-9]+$').test(value) || value === ''){
                    this.state.value = value;
                }
            }else if(this.data.verification === 'date'){
                if(/^\d{0,4}$|^\d{4}-0?$|^\d{4}-(?:0?[1-9]|1[012])(?:-(?:0?[1-9]?|[12]\d|3[01])?)?$/.test(value) || value === ''){
                    this.state.value = value;
                }
            }else{
                this.state.value = value;
            }
            event.target.value = this.state.value;
		},
	}
}
</script>