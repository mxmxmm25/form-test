export interface FormField {
  type: 'input' | 'select' | 'checkbox' | 'textarea'
  label: string
  key: string
  required?: boolean
  placeholder?: string
  validators: Array<(value: any) => boolean | string>
}

export interface InputField extends FormField {
  type: 'input'
  inputType?: 'text' | 'number' | 'email' | 'password'
}

export interface SelectField extends FormField {
  type: 'select'
  multiple?: boolean
  options?: { value: string; label: string }[]
}

export interface CheckboxField extends FormField {
  type: 'checkbox'
}

export interface TextareaField extends FormField {
  type: 'textarea'
  rows?: number
}

export type FormFieldType = InputField | SelectField | CheckboxField | TextareaField

export interface FormType {
  fields: FormFieldType[]
}
