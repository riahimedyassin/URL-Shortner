const linkValidator = (link ) => {
    const regex = /^(http|https):\/\/(www)?.*.*/
    return regex.test(link)
}

module.exports = {
    linkValidator
}