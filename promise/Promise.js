class MyPromise {
    constructor(executor) {
        this.initBind();
        this.initValue();
        try {
            executor(this.resolve, this.reject);
        } catch (error) {
            this.reject(error);
        }
    }
    initBind() {
        //初始化this
        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);
    }
    initValue() {
        this.PromiseResult = null;
        this.PromiseState = 'pending';
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];
    }
    resolve(value) {
        if (this.PromiseState !== 'pending') return;
        this.PromiseState = 'fulfilled';
        this.PromiseResult = value;
        while (this.onFulfilledCallbacks.length) {
            this.onFulfilledCallbacks.shift()(this.PromiseResult);
        }
    }
    reject(reason) {
        if (this.PromiseState !== 'pending') return;
        this.PromiseState = 'rejected';
        this.PromiseResult = reason;
        while (this.onRejectedCallbacks.length) {
            this.onRejectedCallbacks.shift()(this.PromiseResult);
        }
    }
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (value) => value;
        onRejected = typeof onRejected === "function" ? onRejected : (error) => { throw error };

        var thenPromise = new MyPromise((resolve, reject) => {
            const resolvePromise = (cb) => {
                queueMicrotask(() => {
                    try {
                        const x = cb(this.PromiseResult);
                        if (x === thenPromise) {
                            throw new Error('不能返回自身')
                        }
                        if (x instanceof MyPromise) {
                            x.then(resolve, reject);
                        } else {
                            resolve(x);
                        }
                    } catch (error) {
                        reject(error);
                        throw new Error(err);
                    }
                })
            }
            if (this.PromiseState === "fulfilled") {
                resolvePromise(onFulfilled);
            } else if (this.PromiseState === "rejected") {
                resolvePromise(onRejected);
            } else if (this.PromiseState === "pending") {
                this.onFulfilledCallbacks.push(resolvePromise.bind(this, onFulfilled));
                this.onRejectedCallbacks.push(resolvePromise.bind(this, onRejected));
            }
        })
        return thenPromise
    }
}


class mPromise {
    constructor(executor) {
        initValue();
        initBind();
        try {
            executor(this.resolve, this.reject);
        } catch (error) {
            this.reject(error);
        }
    }
    initBind() {
        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);
    }
    initValue() {
        this.PromiseResult = null;
        this.PromiseState = "pending";
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];
    }
    resolve(value) {
        if (this.PromiseState !== "pending") return;
        this.PromiseResult = value;
        this.PromiseState = "fulfilled";
        while (this.onFulfilledCallbacks.length) {
            this.onFulfilledCallbacks.shift()(this.PromiseResult);
        }
    }
    reject(reason) {
        if (this.PromiseState !== "pending") return;
        this.PromiseResult = reason;
        this.PromiseState = "rejected";
        while (this.onRejectedCallbacks.length) {
            this.onRejectedCallbacks.shift()(this.PromiseResult);
        }
    }
    then(onFulfilled, onRejected) {
        typeof onFulfilled === "function" ? onFulfilled : (value) => value;
        typeof onRejected === "function" ? onRejected : (err) => { throw err }
        const thenPromise = new Promise((res, rej) => {
            const resolvePromise = (cb) => {
                const x = cb(this.PromiseResult);
                if (x === thenPromise) {
                    throw error('不能返回自身')
                } else if (x instanceof Promise) {
                    x.then(res, rej);
                } else {
                    res(x);
                }
            }
            if (this.PromiseState === "fulfilled") {
                resolvePromise(onFulfilled);
            } else if (this.PromiseState === "rejected") {
                resolvePromise(onRejected);
            } else {
                this.onFulfilledCallbacks.push(resolvePromise.bind(this, onFulfilled));
                this.onRejectedCallbacks.push(resolvePromise.bind(this, onRejected));
            }
        })
        return thenPromise;
    }


}

const test4 = new mPromise((resolve, reject) => {
    resolve(1)
})

test4.then(res => console.log(res));
test4.then(res => console.log(res));

console.log(2)