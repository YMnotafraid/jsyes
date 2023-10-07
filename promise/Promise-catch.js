Promise.prototype.mycatch = function(callback) {
    return this.then(null, callback);
}
Promise.reject(1).mycatch(err => {
    console.log(err);
    return 112;
}).then(res => console.log(res))