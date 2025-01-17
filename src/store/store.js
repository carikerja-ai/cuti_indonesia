import { reactive } from 'vue'

export const store = reactive({
    years: new Date().getFullYear(),
    holiday: [],
    setHoliday(data) {
        this.holiday = data
    }
})