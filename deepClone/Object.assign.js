// 木易杨
if (typeof Object.assign2 != "function") {
    // Attention 1
    Object.defineProperty(Object, "assign2", {
        value: function(target) {
            "use strict";
            if (target == null) {
                // Attention 2
                throw new TypeError(
                    "Cannot convert undefined or null to object"
                );
            }

            // Attention 3
            var to = Object(target);

            for (var index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index];

                if (nextSource != null) {
                    // Attention 2
                    // Attention 4
                    for (var nextKey in nextSource) {
                        if (
                            Object.prototype.hasOwnProperty.call(
                                nextSource,
                                nextKey
                            )
                        ) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
            return to;
        },
        writable: true,
        configurable: true
    });
}

function assign(target) {
    if (target == null) {
        throw new TypeError("Cannot convert undefined or null to object");
    }
    let to = Object(target);
    for (let i = 1; i < arguments.length; i++) {
        let nextSource = arguments[i];
                    if (nextSource != null) {  // 使用for in遍历null会报错："Cannot convert undefined or null to object"
            for (let nextKey in nextSource) {
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                    to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }
    return to;
}


let a = {
    age: 20,
    family: {
        dad: 'jack',
        mom: 'alice'
    }
}

let b = {
    name: 'Tom',
    age: 30,
    family: {
        dad: undefined
    }
}
let c = null;

a = assign(a, c);
console.log(a);
Object.assign2()