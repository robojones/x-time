const xTime = require('./../index')

const assert = require('assert')

describe('xTime', function () {

    it('should return a promise', function () {

        let r = xTime(0)

        assert(r instanceof Promise)
    })

    it('should resolve with the given value', function () {

        let arg = "test-1001"

        return xTime(10, arg).then(v => {
            assert.strictEqual(v, arg)
        })
    })

    it('should resolve after the given time (circa 10ms)', function () {

        let r = xTime(10)

        let t0 = process.hrtime()

        return r.then(() => {
            let t = process.hrtime(t0)

            let duration = t[0] *1000 + Math.round(t[1] /1000000)

            assert(8 < duration && 12 > duration)
        })
    })
})
