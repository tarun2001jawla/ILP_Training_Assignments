let s1 = new Set([1, 2, 3]);
let s2 = new Set([3, 4, 5]);

for (let item of s2) {
    s1.add(item);
}
console.log(s1);