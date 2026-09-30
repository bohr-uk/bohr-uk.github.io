function createProxy(path = []) {
    const fn = function (...args) {
        const last = path[path.length - 1];
        if (last === "number" || last === "int") {
            const opts = args[0];
            if (typeof opts === "number") return Math.floor(Math.random() * opts);
            if (opts && typeof opts.min === "number") return opts.min;
            return 1;
        }
        if (last === "arrayElement") {
            const arr = args[0];
            return Array.isArray(arr) && arr.length > 0 ? arr[0] : "";
        }
        if (last === "boolean") {
            return false;
        }
        return path.slice(1).join("_") || "fake";
    };

    return new Proxy(fn, {
        get(target, prop) {
            if (prop === "faker") return createProxy(path);
            if (prop === Symbol.toPrimitive || prop === "toString") {
                return () => path.slice(1).join("_") || "fake";
            }
            if (typeof prop === "symbol" || prop === "inspect") {
                return undefined;
            }
            return createProxy([...path, prop]);
        },
    });
}

const faker = createProxy(["faker"]);
module.exports = faker;
module.exports.faker = faker;
module.exports.default = faker;
