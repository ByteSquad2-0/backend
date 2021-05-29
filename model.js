let DB = require('./DB.js').default;

class Model {
    constructor() {
        this.db = DB;
    }

    findByData(query, d) {
        return this.db.filter((data) => data[query] == d);
    }

    addData(data) {
        const d = {
            id: this.db.length == 0?1:(this.db[this.db.length - 1].id + 1),
            catagory: data.catagory,
            name: data.name,
            items: data.items,
            pincode: data.pincode,
        }

        this.db.push(d);
    }

    editData(data) {
        this.db = this.db.map((d) => 
            d.id === id ? Object.assign({}, d, data) : d
        )
    }

    deleteData(query, data) {
        this.db = this.db.filter((d) => d[query] != data);
    }
}

exports.default = new Model();
