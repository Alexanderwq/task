// здесь запросы на бекенд

export default {
    isAuth(phone: string): boolean {
        return phone === '1111111111'
    },

    sendNotificationCode(phone: string): void {
        console.log('send code')
    },

    verifyCode(code: string): boolean {
        console.log('verify code')
        return code === '1111'
    },
}