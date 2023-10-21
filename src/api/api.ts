// здесь запросы на бекенд

export default {
    isAuth(phone: string): boolean {
        console.log(phone)
        return phone === '+7 (111) 111-11-11'
    },

    sendNotificationCode(phone: string): void {
        console.log(phone)
        console.log('send code')
    },

    verifyCode(code: string): boolean {
        console.log(code)
        console.log('verify code')
        return code === '1111'
    },

    saveName(name: string): void {
        console.log(name)
    },
}