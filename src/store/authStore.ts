import {defineStore} from "pinia";
import UserInfo from "@/types/UserInfo";
import api from "@/api/api";
import GeoLocation from "@/types/GeoLocation";

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
                geoLocation: {
                    // дефолтные значения, когда не определена геолокация
                    coords: {
                        latitude: 321,
                        longitude: 123,
                    },
                    address: 'Москва, ул. Театральная, 32'
                } as GeoLocation,
            } as UserInfo,
            isAuth: false,
        }
    },
    getters: {
    },
    actions: {
        setGeoLocation(value: GeoLocation): void {
            this.userInfo.geoLocation = value
        },

        setAuthStatus(value: boolean): void {
            this.isAuth = value
        },

        setName(name: string): void {
            this.userInfo.name = name
        },

        async changeName(): Promise<void> {
            await api.saveName(this.userInfo.name)
        },

        async searchAddress(searchString: string): Promise<string[]> {
            return await api.searchAddress(searchString)
        },
    },
})