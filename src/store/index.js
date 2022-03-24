import { reactive, provide, inject } from 'vue';
export const stateSymbol = Symbol('state');
export const createState = () => reactive({
    sections: [
        {
            firstName: {
                value: '',
                class: '',
                isRequired: true,
                type: 'text',
                verification: 'text',
                name: 'Имя',
                placeholder: 'Имя',
            },
            lastName:  {
                value: '',
                class: '',
                isRequired: true,
                type: 'text',
                verification: 'text',
                name: 'Фамилия',
                placeholder: 'Фамилия',
            },
            patronymic: {
                value: '',
                class: '',
                isRequired: false,
                type: 'text',
                verification: 'text',
                name: 'Отчество',
                placeholder: 'Отчество',
            },
            birthDate: {
                value: '',
                class: '',
                isRequired: true,
                type: 'date',
                verification: 'date',
                name: 'Дата рождения',
                placeholder: '',
            },
            PhoneNumber:{
                maskDefault: '+7 ___-___-__-__',
                mask: '+7 ___-___-__-__',
    
                
                value: '',
                class: '',
                isRequired: true,
                type: 'text',
                verification: 'phone',
                name: 'Номер телефона',
                placeholder: '',
            },
            gender: {
                value: '',
                class: '',
                isRequired: false,
                type: 'radio',
                verification: 'radio',
                name: 'Пол',
                list: [
                    { text: 'Муж.', value: 'man' },
                    { text: 'Жен.', value: 'woman' },
                ]
            },
            customerGroup: {
                selected: [],
                options: [
                    { text: 'VIP', value: '1' },
                    { text: 'Проблемные', value: '2' },
                    { text: 'ОМС', value: '3' },
                ],
                class: '',
                isRequired: true,
                multiple: true,
                name: 'Группа клиентов',
            },
            attendingPhysician: {
                selected: 0,
                options: [
                    { text: 'Выберите врача', value: '0' },
                    { text: 'Иванов', value: '1' },
                    { text: 'Захаров', value: '2' },
                    { text: 'Чернышева', value: '3' },
                ],
                class: '',
                isRequired: false,
                name: 'Лечащий врач',
            },
            SMS: {
                value: 0,
                class: '',
                isRequired: false,
                type: 'checkbox',
                verification: 'checkbox',
                name: '',
                list: [
                    { text: 'Не отправлять СМС', value: 1 },
                ]
            },
        },
        {
            index: {
                value: '',
                class: '',
                isRequired: false,
                type: 'text',
                verification: 'text',
                name: 'Индекс',
                placeholder: 'Индекс',
            },
            country: {
                value: '',
                class: '',
                isRequired: false,
                type: 'text',
                verification: 'text',
                name: 'Страна',
                placeholder: 'Страна',
            },
            area: {
                value: '',
                class: '',
                isRequired: false,
                type: 'text',
                verification: 'text',
                name: 'Область',
                placeholder: 'Область',
            },
            city: {
                value: '',
                class: '',
                isRequired: true,
                type: 'text',
                verification: 'text',
                name: 'Город',
                placeholder: 'Город',
            },
            street: {
                value: '',
                class: '',
                isRequired: false,
                type: 'text',
                verification: 'text',
                name: 'Улица',
                placeholder: 'Улица',
            },
            house: {
                value: '',
                class: '',
                isRequired: false,
                type: 'text',
                verification: 'text',
                name: 'Дом',
                placeholder: 'Дом',
            },
        },
        {
            documentType: {
                selected: 0,
                class: '',
                options: [
                    { text: 'Выберите тип документа', value: '0' },
                    { text: 'Паспорт', value: '1' },
                    { text: 'Свидетельство о рождении', value: '2' },
                    { text: 'Вод. удостоверение', value: '3' },
                ],
                isRequired: true,
                name: 'Тип документа',
            },
            issuedWhom: {
                value: '',
                class: '',
                isRequired: false,
                type: 'text',
                verification: 'number',
                name: 'Серия',
                placeholder: 'Серия',
            },
            number: {
                value: '',
                class: '',
                isRequired: false,
                type: 'text',
                verification: 'number',
                name: 'Номер',
                placeholder: 'Номер',
            },
            series: {
                value: '',
                class: '',
                isRequired: false,
                type: 'text',
                verification: 'text',
                name: 'Кем выдан',
                placeholder: 'Кем выдан',
            },
            documentDate: {
                value: '',
                class: '',
                isRequired: true,
                type: 'date',
                verification: 'date',
                name: 'Дата выдачи',
                placeholder: '',
            },
        },
    ]
});

export const useState = () => inject(stateSymbol);
export const provideState = () => provide(
    stateSymbol, 
    createState()
);