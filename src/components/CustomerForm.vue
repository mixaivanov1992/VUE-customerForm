
<template>
	<div class="customerForm">
		<div class="data" v-if="this.customerCreated">
			<div class="customerCreated">Новый клиент успешно создан</div>
		</div>
		<div class="data" v-else>
            <div class="wrapper">
				<section v-for="(section, sectionIndex) in state.sections" :key="sectionIndex">
					<div v-for="(item, alias) in section" :key="alias">
						<SectionContent
							:data="item"
							:alias="alias"
							:sectionIndex="sectionIndex"
							:resetStyle="resetStyle"
						/>
					</div>
				</section>
            </div>
            <div>
                <button @click="clickAddClient">Добавить</button>
            </div>
		</div>
	</div>
	<!-- <div>{{state}}</div> -->
</template>

<script>
import '../assets/customerForm.scss';
import { useState } from '../store/index';
import useVuelidate from '@vuelidate/core';
import SectionContent from './SectionContent/SectionContent.vue'
import { required, minLength, minValue, maxLength, numeric } from '@vuelidate/validators';

export default {
	name: 'CustomerForm',
	components: {
		SectionContent
	},
	setup(){
		const state = useState();
		const rules = {
			sections: [
				{
					firstName: {
						value: {
							required,
							minLengthValue: minLength(2),
						}
					},
					lastName: {
						value: {
							required,
							minLengthValue: minLength(2),
						}
					},
					birthDate:{
						value: {
							required,
							minLengthValue: minLength(10),
							maxLengthValue: maxLength(10),
						}
					},
					PhoneNumber: {
						value: {
							required,
							minLengthValue: minLength(11),
							maxLengthValue: maxLength(11),
							numeric,
						}
					},
					customerGroup:{
						selected: {
							required,
						}
					},
				},
				{
					city:{
						value: {
							required,
						}
					},
				},
				{
					documentType: { 
						selected: { minValue: minValue(1) }
					},
					documentDate: {
						value: {
							required,
							minLengthValue: minLength(10),
							maxLengthValue: maxLength(10),
						}
					}
				}
			]
		};
		const v$ = useVuelidate(rules, state);
		return { state, v$ }
	},
	data(){
		return { customerCreated: false }
	},
	methods: {
		async clickAddClient() {
			const result = await this.v$.$validate();
			if (!result) {
				for(const index in this.state.sections) {
					for(const key in this.state.sections[index]) {
						if(this.state.sections[index][key].isRequired){
							if(this.v$.sections[index][key].$error){
								this.state.sections[index][key].class = 'warning';
							}else{
								this.state.sections[index][key].class = '';
							}
						}
					}
				}
			}else{
				this.customerCreated = true;
			}
		},
		resetStyle(event, sectionIndex, alias){
            if(event.target.classList.contains(this.state.sections[sectionIndex][alias].class)){
                event.target.classList.remove(this.state.sections[sectionIndex][alias].class);
                this.state.sections[sectionIndex][alias].class = '';
            }
		},
	}
}
</script>