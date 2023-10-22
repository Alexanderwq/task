import {defineStore} from "pinia";
import UserInfo from "@/types/UserInfo";
import api from "@/api/api";

type State = {
    userInfo: UserInfo,
    isAuth: boolean,
}

export const useAuthStore = defineStore('auth', {
    state: (): State => {
        return {
            userInfo: {
                phone: '',
                name: '',
                geoIsAvailable: false,
            } as UserInfo,
            isAuth: false,
        }
    },
    getters: {
    },
    actions: {
        setGeoIsAvailable(value: boolean): void {
            this.userInfo.geoIsAvailable = value
        },

        setAuthStatus(value: boolean): void {
            this.isAuth = value
        },

        setName(name: string): void {
            this.userInfo.name = name
        },

        async changeName(): Promise<void> {
            await api.saveName(this.userInfo.name)
        }
    },
})