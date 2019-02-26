class Helper{
    static getAccount() {
        return JSON.parse(localStorage.getItem('account'))
    }
}

export default Helper