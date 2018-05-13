
// Задача № 1
let str = 'I am in easycode';
newStr = '';

for (let i = 0; i < str.length; i++) {
    if (str[i - 1] === ' ') {
        newStr += str[i].toUpperCase();
    } else {
        newStr += str[i]
    }
};
console.log(newStr);

// Задача № 2
let reverseStr = 'tseb eht ma i',
    newStr2 = '';
for (let b = 1; b <= reverseStr.length; b++) {
    newStr2 += reverseStr[reverseStr.length - b];
}
console.log(newStr2);


// Задача № 3
let fac = 1;

for (let c = 1; c <= 10; c++) {
    fac *= c;
}
console.log(fac);

// Задача № 4
let str3 = 'Считаем до 10и:';

for (let d = 1; d <=10; d++) {
    d === 1 ? str3 += ' ' + d + ', ' :
        d < 10 ? str3 += d + ', ' :
            str3 += d;
}
console.log(str3);

// Задача № 5
let str4 = 'JavaScript is a pretty good language',
    noSpaceStr = '';

for (let i = 0; i < str4.length; i++) {
    if (str4[i - 1] === ' ') {
        noSpaceStr += str4[i].toUpperCase();
    } else {
        noSpaceStr += str4[i]
    }
}
noSpaceStr = noSpaceStr.replace(/\s+/g,'');
console.log(noSpaceStr);
// Задача № 6
for (let a = 1; a <= 15; a++) {
    if (a % 2 !== 0) {
        console.log(a)
    } else {
        continue
    }
}
