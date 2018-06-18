// computed props
export const isMobile = function () {
    return this.windowWidth <= 760
}

export const bodyClass = function() {
    return this.bodyClasses ? this.bodyClasses.join(' ') : null
}

// methods
export const addBodyClass = function (string) {
    this.bodyClasses.push(string)
}

export const removeBodyClass = function (string) {
    Vue.set(this, 'bodyClasses', _.reject(this.bodyClasses, _.find(this.bodyClasses, string)))
}

export const slugify = function (string) {
    const a = 'àáäâèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;'
    const b = 'aaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------'
    const p = new RegExp(a.split('').join('|'), 'g')

    return string.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(p, c =>
            b.charAt(a.indexOf(c)))     // Replace special chars
        .replace(/&/g, '-and-')         // Replace & with 'and'
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of texts
        .replace(/-+$/, '')             // Trim - from end of text
}
