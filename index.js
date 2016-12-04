function xTime(time, value) {
    return new Promise(resolve => setTimeout(resolve, time, value));
}

module.exports = xTime;
