class Enumerable {
    constructor(iterable) {
        this.iterable = iterable;
    }
 
    _map(selector, thisArg) {
        let i = 0;
        for (let x of this.iterable) {
            yield selector.call(thisArg, x, i++, this);
        }
    }
 
    map(selector, thisArg) {
        return new Enumerable(this._map(selector, thisArg));
    }

    _filter(predicate, thisArg) {
        let i = 0;
        for (let x of this.iterable) {
            if (predicate.call(thisArg, x, i++, this)) {
                yield x;
            }
        }
    }

    filter(predicate, thisArg) {
        return new Enumerable(this._filter(predicate, thisArg));
    }
}

exports = Enumerable;