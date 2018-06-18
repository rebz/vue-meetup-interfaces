import NProgress from 'nprogress'
window.NProgress = NProgress

axios.interceptors.request.use((config) => {
    NProgress.configure({
        easing: 'ease',
        speed: 500,
        showSpinner: false,
    })
    NProgress.start()
    NProgress.inc(0.3)
    return config
}, (error) => {
    return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
    NProgress.done()
    return response
}, (error) => {
    return Promise.reject(error)
})
