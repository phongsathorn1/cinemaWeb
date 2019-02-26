class Helper{
    static getAccount() {
        return JSON.parse(localStorage.getItem('account'))
    }

    static logout() {
        localStorage.removeItem('account')
        location.reload()
    }
}

export default Helper