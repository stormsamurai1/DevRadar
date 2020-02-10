module.exports = function parseStringArray(str){
    return str.split(',').map( (tech) => tech.trim())

}