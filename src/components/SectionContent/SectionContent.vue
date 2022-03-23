<template>
    <div v-if="data.verification === 'phone'">
        <InputPhone
            :data="data"
            :alias="alias"
            :sectionIndex="sectionIndex"
            :resetStyle="resetStyle"
        />
    </div>
    <div v-else-if="data.type === 'checkbox'">
        <InputCheckbox
            :data="data"
            :alias="alias"
            :sectionIndex="sectionIndex"
            :resetStyle="resetStyle"
        />
    </div>
    <div v-else-if="data.type === 'radio'">
        <InputRadio
            :data="data"
            :alias="alias"
            :sectionIndex="sectionIndex"
            :resetStyle="resetStyle"
        />
    </div>
    <div v-else-if="data.type === 'text'">
        <InputText
            :data="data"
            :alias="alias"
            :sectionIndex="sectionIndex"
            :resetStyle="resetStyle"
        />
    </div>
    <div v-else>
        <SelectBox
            :data="data"
            :alias="alias"
            :sectionIndex="sectionIndex"
            :resetStyle="resetStyle"
        />
    </div>
</template>

<script>
import InputCheckbox from './InputField/InputCheckbox.vue';
import InputPhone from './InputField/InputPhone.vue';
import InputRadio from './InputField/InputRadio.vue';
import InputText from './InputField/InputText.vue';
import SelectBox from './SelectBox/SelectBox.vue';
export default {
	name: 'SectionContent',
	components: {
		InputCheckbox,
		InputPhone,
		InputRadio,
		InputText,
        SelectBox
	},
	props: {
        data: Object,
        alias: String,
        sectionIndex: Number,
        resetStyle: Function
    },
}
</script>