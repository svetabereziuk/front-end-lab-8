function reverseNumber(a) {
        let rev = a.toString().split("").reverse().join("");
         rev = parseInt(rev)*Math.sign(a);
        return rev;
}
