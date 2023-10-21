import {defineStore} from "pinia";

type State = {
    userInfo: object,
    isAuth: boolean,
}

export const useAuthStore = defineStore('auth', {
    state: (): State => {
        return {
            userInfo: {},
            isAuth: false,
        }
    },
    getters: {
    },
    actions: {
        setAuthStatus(value: boolean): void {
            this.isAuth = value
        },
    },
})