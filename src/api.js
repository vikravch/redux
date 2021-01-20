export default class Api {
    // c3bd24f13cecf13f96cfdc182bc8d4e8
    static getToken() {
        return localStorage.getItem("token")
    }

    static setToken(token) {
        localStorage.setItem("token", token)
    }

    static async getCityCurrent(cityName, tokenIn) {
        console.log("Started!");
        const token = tokenIn? tokenIn:this.getToken();
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${token}&units=metric`;
        console.log(url);
        const res = await fetch(url)
        if (res.ok) {
            const jsonRes = await res.json()
            return jsonRes
        } else {
            throw Error("Error")
        }
    }

    static async getCityForecast(cityName) {
        const token = this.getToken()
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${token}&units=metric`)
        if (res.ok) {
            const jsonRes = await res.json()
            return jsonRes
        } else {
            throw Error("Error")
        }
    }
}