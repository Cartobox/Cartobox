import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
    const showContactModal = ref(false);
  
    return { showContactModal }
  })