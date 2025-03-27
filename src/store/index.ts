import { createStore } from 'vuex'
import type { FormFieldType } from '@/types/Form'
import type { FormTemplate } from './types'

export default createStore<{ templates: FormTemplate[] }>({
  state: {
    templates: [
      {
        id: 1,
        fields: [
          {
            type: 'input',
            key: 'name',
            label: 'Имя',
            required: true,
            validators: [
              (value) => !!value || 'Имя обязательно',
              (value) => value.length >= 2 || 'Имя слишком короткое',
            ],
          },
          {
            type: 'input',
            key: 'email',
            label: 'Email',
            inputType: 'email',
            placeholder: 'example@email.com',
            validators: [(value) => /\S+@\S+\.\S+/.test(value) || 'Некорректный email'],
          },
          {
            type: 'input',
            key: 'age',
            label: 'Возраст',
            inputType: 'number',
            validators: [(value) => value > 0 || 'Возраст должен быть положительным'],
          },
          {
            type: 'select',
            key: 'department',
            label: 'Отдел',
            options: [
              { value: 'IT', label: 'Информационные технологии' },
              { value: 'HR', label: 'Отдел кадров' },
              { value: 'Sales', label: 'Продажи' },
            ],
            validators: [],
          },
          {
            type: 'checkbox',
            key: 'isActive',
            label: 'Активный сотрудник',
            validators: [],
          },
          {
            type: 'textarea',
            key: 'biography',
            label: 'Биография',
            rows: 4,
            placeholder: 'Расскажите немного о себе...',
            validators: [],
          },
        ],
      },
      {
        id: 2,
        fields: [
          {
            type: 'input',
            key: 'fullName',
            label: 'ФИО',
            required: true,
            placeholder: 'Введите полное имя',
            validators: [
              (value) => !!value || 'ФИО обязательно',
              (value) => value.split(' ').length >= 2 || 'Введите фамилию и имя',
            ],
          },
          {
            type: 'input',
            key: 'email',
            label: 'Email',
            inputType: 'email',
            required: true,
            validators: [
              (value) => !!value || 'Email обязателен',
              (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Некорректный email',
            ],
          },
          {
            type: 'select',
            key: 'eventType',
            label: 'Тип мероприятия',
            required: true,
            options: [
              { value: 'CONFERENCE', label: 'Конференция' },
              { value: 'WORKSHOP', label: 'Воркшоп' },
              { value: 'SEMINAR', label: 'Семинар' },
              { value: 'WEBINAR', label: 'Вебинар' },
            ],
            validators: [],
          },
          {
            type: 'select',
            key: 'participants',
            label: 'Количество участников',
            required: true,
            options: [
              { value: '1', label: '1 человек' },
              { value: '2', label: '2 человека' },
              { value: '3', label: '3 человека' },
              { value: '4', label: '4 человека' },
              { value: '5+', label: '5 и более' },
            ],
            validators: [],
          },
          {
            type: 'textarea',
            key: 'additionalRequirements',
            label: 'Дополнительные пожелания',
            rows: 3,
            placeholder: 'Опишите дополнительные требования или особенности',
            validators: [],
          },
          {
            type: 'checkbox',
            key: 'agreeProcessing',
            label: 'Согласен на обработку персональных данных',
            required: true,
            validators: [(value) => value === true || 'Необходимо согласие на обработку данных'],
          },
        ],
      },
      {
        id: 3,
        fields: [
          {
            type: 'input',
            key: 'productName',
            label: 'Название продукта',
            required: true,
            placeholder: 'Введите название продукта',
            validators: [
              (value) => !!value || 'Название продукта обязательно',
              (value) => value.length >= 2 || 'Слишком короткое название',
            ],
          },
          {
            type: 'select',
            key: 'purchaseDate',
            label: 'Дата покупки',
            required: true,
            options: [
              { value: 'LAST_MONTH', label: 'За последний месяц' },
              { value: 'LAST_3_MONTHS', label: 'За последние 3 месяца' },
              { value: 'LAST_6_MONTHS', label: 'За последние 6 месяцев' },
              { value: 'MORE_THAN_6_MONTHS', label: 'Более 6 месяцев назад' },
            ],
            validators: [],
          },
          {
            type: 'select',
            key: 'rating',
            label: 'Общая оценка продукта',
            required: true,
            options: [
              { value: '5', label: '5 - Отлично' },
              { value: '4', label: '4 - Хорошо' },
              { value: '3', label: '3 - Удовлетворительно' },
              { value: '2', label: '2 - Плохо' },
              { value: '1', label: '1 - Очень плохо' },
            ],
            validators: [],
          },
          {
            type: 'textarea',
            key: 'positiveComments',
            label: 'Что вам понравилось в продукте',
            rows: 3,
            placeholder: 'Опишите положительные стороны продукта',
            validators: [],
          },
          {
            type: 'textarea',
            key: 'improvementSuggestions',
            label: 'Что можно улучшить',
            rows: 3,
            placeholder: 'Ваши предложения по улучшению продукта',
            validators: [],
          },
          {
            type: 'select',
            key: 'wouldRecommend',
            label: 'Порекомендуете ли вы этот продукт?',
            required: true,
            options: [
              { value: 'DEFINITELY', label: 'Определенно да' },
              { value: 'MAYBE', label: 'Возможно' },
              { value: 'NO', label: 'Нет' },
            ],
            validators: [],
          },
          {
            type: 'checkbox',
            key: 'agreeFurtherContact',
            label: 'Согласен на дополнительный опрос',
            required: false,
            validators: [],
          },
        ],
      },
    ],
  },
  mutations: {
    add_form(state, template: FormTemplate) {
      state.templates.push(template)
    },
    remove_form(state, templateId: number) {
      state.templates = state.templates.filter((t) => t.id !== templateId)
    },
  },
  actions: {
    addFormTemplate({ commit }, data: FormFieldType) {
      commit('add_form', data)
      return { ...data }
    },
    removeFormTemplate({ commit }, id: number) {
      commit('remove_form', id)
    },
  },
  getters: {
    allFormTemplates: (state) => state.templates,
    getFormTemplateByID: (state) => (id: number) => state.templates.find((t) => t.id === id),
  },
})
