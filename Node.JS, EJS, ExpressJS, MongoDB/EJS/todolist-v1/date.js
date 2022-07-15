//export getDate function, so that app.js can call this function
exports.getDate = function() {
    const today = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return today.toLocaleDateString("en-US", options);
}

//export getDay function, so that app.js can call this function
exports.getDay = function() {
    const today = new Date();
    const options = { weekday: 'long' };
    return today.toLocaleDateString("en-US", options);
}