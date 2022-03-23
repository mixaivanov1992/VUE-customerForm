<template>
    <label :for="alias">{{data.name}}</label>
    <span v-if="data.isRequired">*</span>
    <input :placeholder="data.placeholder" :id="alias" :type="data.type" :value="data.mask" :class="data.class" @input="validity" @focus="setRange" @mouseup="setRange">
</template>

<script>
import { useState } from '../../../store/index';
export default {
	name: 'InputPhone',
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
            if(event.inputType !== 'insertFromDrop'){
                const maskChars = this.state.mask.split('');
                this.removeChar(event, maskChars);
                this.addChar(event, maskChars);

                this.state.value = '';
                for(let i=0;i<maskChars.length;i++){
                    if(new RegExp('^[0-9]+$').test(maskChars[i])){
                        this.state.value += maskChars[i];
                    }
                }
            }
            
            event.target.value = this.state.mask;
            this.setRange(event);
		},
        removeChar(event, maskChars){
            if(event.inputType === 'deleteContentBackward' || event.inputType === 'deleteContentForward'){
                const minStartPosition = 2;
                let startPosition = event.target.selectionStart > minStartPosition?event.target.selectionStart:minStartPosition;
                if(maskChars[startPosition] === '-'){
                    startPosition--;
                }
                maskChars.splice(startPosition, 1);

                this.state.mask = this.state.maskDefault;
                for(let i=minStartPosition;i<maskChars.length;i++){
                    if(new RegExp('^[0-9]+$').test(maskChars[i])){
                        this.state.mask = this.state.mask.replace('_', maskChars[i]);
                    }
                }
            }
        },
        addChar(event, maskChars){
            const maxLengthValue = 10;
            if(this.state.value.length <= maxLengthValue && new RegExp('^[0-9]+$').test(event.data)){
                const minStartPosition = 3;
                let startPosition = event.target.selectionStart > minStartPosition?event.target.selectionStart-1:minStartPosition;
                if(maskChars[startPosition] === '-'){
                    startPosition++;
                }
                maskChars[startPosition] = event.data;
                this.state.mask = maskChars.join('');
                startPosition++;
            }
        },
        setRange(event){
            const symbolPosition = event.target.value.indexOf('_');
            if(symbolPosition !== -1){
                event.target.setSelectionRange(symbolPosition, symbolPosition);
                event.preventDefault();
            }
            this.resetStyle(event, this.sectionIndex, this.alias);
        }
	}
}
</script>