function f1(a, b) {
    console.log(a, b);
}
let f2 = f1.bind(null, 'foo');
f2('bar', 'baz');