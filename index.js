function xTime(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

module.exports = xTime;
