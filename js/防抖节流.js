//防抖
function debounce(fn, time) {
    let timer = null;
    return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, time);
    };
}
//节流 第一人说了算
function throttle(fn, time) {
    let t1 = 0;
    return function(...args) {
        let t2 = new Date();
        if (t2 - t1 > time) {
            fn.apply(this, args);
            t1 = t2;
        }
    };
}

//防抖 最后一个人说了算
function debounce(fn, time) {
    let timer = null;
    return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, time);
    };
}

function throttle(fn, time) {
    let t1 = 0;
    return function(...args) {
        let t2 = new Date();
        if (t2 - t1 > time) {
            fn.apply(this, args);
            t1 = t2;
        }
    };
}

//防抖
function debounce(fn, time) {
    let timer = null;
    return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, time)
    }
}

function throttle(fn, time) {
    let t1 = 0;
    return function(...args) {
        let t2 = new Date();
        if (t2 - t1 > time) {
            fn.apply(this, args);
            t1 = t2;
        }
    }
}


function debounce(fn, time) {
    let timer = null;
    return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, time);
    }
}

function throttle(fn) {
    let t1 = 0;
    return function(...args) {
        let t2 = new Date()
        if (t2 - t1 > time) {
            fn.apply(this, args);
            t1 = t2;
        }
    }
}