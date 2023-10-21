// здесь запросы на бекенд

export default {
    isAuth(phone: string): boolean {
        return phone === '1111111111'
    },

    sendNotificationCode(phone: string): void {
        console.log('send code')
    },
}