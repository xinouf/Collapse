class Promise {
    state = 'pending'
    succeed = null
    fail = null

    resolve(resolve) {
        console.log('resolve', resolve)
        setTimeout(() => {
            this.state = 'fulfilled'
            this.succeed(resolve)
        })
    }
    reject(err) {
        console.log('reject', err)
        setTimeout(() => {
            this.state = 'rejected'
            this.fail(err)
        })
    }
    constructor(fn) {
        fn(this.resolve.bind(this), this.reject.bind(this))
    }
    then(succeed, fail) {
        this.succeed = succeed
        this.fail = fail
    }

}

const getWeather = city => new Promise((resolve, reject) => {

    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://rap2api.taobao.org/app/mock/244238/weather?city=' + city, true)
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log('resolve1')
            resolve(JSON.parse(xhr.responseText))
        } else {
            reject(`获取${city}天气失败`)
        }
    }
    /* xhr.onerror = () => reject('获取天气失败') */
    xhr.send()
})
getWeather('北京')
    .then(data => {
        console.log(data)
    }, err => {
        console.log(data)
    })