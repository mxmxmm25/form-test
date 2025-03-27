<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import type { FormField, FormType } from '@/types/Form'

const props = defineProps<{
  formData: FormType
  initialValues?: Record<string, any>
}>()
const emit = defineEmits<{
  (e: 'submit', value: typeof formValues.value): void
  (e: 'cancel'): void
}>()

const formValues = ref(props.initialValues || {})

function validateField(field: FormField, value: any): string | boolean {
  if (field.validators) {
    for (const validator of field.validators) {
      const result = validator(value)
      if (result !== true) return result as string
    }
  }
  return true
}

function handleSubmit() {
  const isValid = props.formData.fields.every(
    (field) => validateField(field, formValues.value[field.key]) === true,
  )
  if (isValid) emit('submit', formValues.value)
}

function handleCancel() {
  emit('cancel')
}

onMounted(() => {
  console.log('1111111', props.formData)
})
</script>

<template>
  <form @submit.prevent="handleSubmit" class="form-component">
    <div v-for="field in formData.fields" :key="field.key" class="form-field">
      <label :for="field.key">{{ field.label }}</label>
      <slot :name="field.key" :field="field">
        <input
          v-if="field.type === 'input'"
          v-model="formValues[field.key]"
          :type="field.inputType || 'Введите текст'"
          :placeholder="field.placeholder"
          :required="field.required"
        />

        <select
          v-if="field.type === 'select'"
          v-model="formValues[field.key]"
          :id="field.key"
          :multiple="field.multiple"
          :required="field.required"
        >
          <option v-for="option in field.options" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>

        <input
          v-if="field.type === 'checkbox'"
          v-model="formValues[field.key]"
          :id="field.key"
          type="checkbox"
          :required="field.required"
        />

        <textarea
          v-if="field.type === 'textarea'"
          v-model="formValues[field.key]"
          :id="field.key"
          :rows="field.rows || 3"
          :placeholder="field.placeholder"
        ></textarea>
      </slot>

      <div
        v-if="
          field.validators.length && typeof validateField(field, formValues[field.key]) === 'string'
        "
        class="error-message"
      >
        {{ validateField(field, formValues[field.key]) }}
      </div>
    </div>

    <div class="form-actions">
      <button type="submit">Сохранить</button>
      <button type="button" @click="handleCancel">Сброс</button>
    </div>
  </form>
</template>

<style scoped lang="sass">
.form-component
  display: flex
  flex-direction: column
  gap: 15px

  .form-field
    display: flex
    flex-direction: column
    gap: 5px

    label
      font-weight: bold

    input, select, textarea
      padding: 8px
      border: 1px solid #ccc
      border-radius: 4px

  .error-message
    color: red
    font-size: 0.8em

  .form-actions
    display: flex
    gap: 10px
    margin-top: 15px

    button
      padding: 10px 15px
      border: none
      border-radius: 4px
      cursor: pointer

      &:first-child
        background-color: #4CAF50
        color: white

      &:last-child
        background-color: #f44336
        color: white
</style>
