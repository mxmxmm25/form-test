<script setup lang="ts">
import { useStore } from 'vuex'
import FormComponent from '@/components/FormComponent.vue'
import { computed } from 'vue'
import type { FormType } from '@/types/Form'

const store = useStore()
const props = defineProps<{
  id: number
}>()

const currentTemplate = computed<FormType>(() => store.getters.getFormTemplateByID(props.id) ?? {})

function onSubmit(data: Record<string, any>) {
  store.dispatch('addFormTemplate', data)
}

function onClear() {
  store.dispatch('removeFormTemplate', props.id)
}
</script>

<template>
  <main>
    <FormComponent :form-data="currentTemplate" @submit="onSubmit" @cancel="onClear" />
  </main>
</template>
