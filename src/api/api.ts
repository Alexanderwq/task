// здесь запросы на бекенд

import Position from "@/types/Position";
import Coords from "@/types/Coords";

export default {
    isAuth(phone: string): boolean {
        console.log(phone)
        return phone === '+7 (111) 111-11-11'
    },

    sendNotificationCode(phone: string): void {
        console.log(phone)
        console.log('send code')
    },

    async verifyCode(code: string): Promise<boolean> {
        console.log(code)
        console.log('verify code')
        await new Promise((res) => setTimeout(res, 1500))
        return code === '1111'
    },

    saveName(name: string): void {
        console.log(name)
    },

    searchAddress(searchString: string): string[] {
        const exampleAddressList = [
            'Кутузовский проспект',
            'Кутузовский проспект 12',
            'Кутузовский проспект 22',
            'Кутузовский проспект 25',
        ]
        return exampleAddressList
            .filter(address => address.match(searchString))
    },

    getCurrentPosition(coords: Coords): string {
        return 'Москва, ул. Пушкино, 12'
    },
}