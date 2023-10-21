import {defineStore} from "pinia";
import UserInfo from "@/types/UserInfo";

type State = {
    userInfo: UserInfo,
    isAuth: boolean,
}

export const useAuthStore = defineStore('auth', {
    state: (): State => {
        return {
            userInfo: {
                phone: '',
            } as UserInfo,
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