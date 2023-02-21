export default function initializePrototypes() {
    console.log(' splitLineBreak ');
    Object.defineProperties(Array.prototype, {
        splitLineBreak: {
            value: function () { return this.split('\n') }
        },
    })
}

initializePrototypes()