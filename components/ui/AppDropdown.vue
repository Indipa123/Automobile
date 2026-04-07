<script setup lang="ts">
interface Props {
  modelValue: string | null
  options: { value: string; label: string }[]
  placeholder?: string
  searchable?: boolean
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Select...',
  searchable: false,
})

const emit = defineEmits<{ 'update:modelValue': [value: string | null] }>()

const open = ref(false)
const search = ref('')
const dropdownRef = ref<HTMLElement>()

onClickOutside(dropdownRef, () => { open.value = false })

const filtered = computed(() =>
  props.searchable && search.value
    ? props.options.filter(o => o.label.toLowerCase().includes(search.value.toLowerCase()))
    : props.options
)

const selectedLabel = computed(() =>
  props.options.find(o => o.value === props.modelValue)?.label || props.placeholder
)

const select = (value: string) => {
  emit('update:modelValue', value)
  open.value = false
  search.value = ''
}
</script>

<template>
  <div ref="dropdownRef" class="relative">
    <label v-if="label" class="block text-xs text-muted mb-1">{{ label }}</label>
    <button
      type="button"
      class="w-full flex items-center justify-between gap-2 px-3 py-2.5 bg-background border border-border rounded-lg text-sm text-gray-900 hover:border-primary/50 transition-colors"
      @click="open = !open"
    >
      <span :class="modelValue ? 'text-gray-900' : 'text-muted'">{{ selectedLabel }}</span>
      <svg class="w-4 h-4 text-muted transition-transform" :class="open ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <Transition name="dropdown">
      <div
        v-if="open"
        class="absolute top-full left-0 right-0 mt-1 bg-white border border-border rounded-xl shadow-lg z-50 overflow-hidden"
      >
        <div v-if="searchable" class="p-2 border-b border-border">
          <input
            v-model="search"
            type="text"
            placeholder="Search..."
            class="w-full bg-background border border-border rounded-lg px-3 py-1.5 text-sm text-gray-900 placeholder-muted focus:outline-none focus:border-primary"
          />
        </div>
        <div class="max-h-60 overflow-y-auto">
          <button
            v-if="modelValue"
            type="button"
            class="w-full text-left px-3 py-2 text-sm text-muted hover:bg-gray-50 transition-colors"
            @click="emit('update:modelValue', null); open = false"
          >
            {{ placeholder }}
          </button>
          <button
            v-for="option in filtered"
            :key="option.value"
            type="button"
            :class="[
              'w-full text-left px-3 py-2 text-sm transition-colors',
              modelValue === option.value
                ? 'bg-primary/10 text-primary'
                : 'text-gray-900 hover:bg-gray-50',
            ]"
            @click="select(option.value)"
          >
            {{ option.label }}
          </button>
          <p v-if="filtered.length === 0" class="px-3 py-2 text-sm text-muted">No options found</p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.dropdown-enter-active, .dropdown-leave-active { transition: all 0.15s ease; }
.dropdown-enter-from, .dropdown-leave-to { opacity: 0; transform: translateY(-4px); }
</style>
