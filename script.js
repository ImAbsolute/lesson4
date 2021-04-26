const txt = "'Нравится наш город?' — спросили дети. aren't 'Нравится, особенно его украшают цветы',—сказал я. aren't ";
const reg1 = /'/g;

const txt2 = "'aren't'";
const reg2 = /^'|(\s)'|'(\s)|'$/g;

/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/

console.log(txt.replace(reg2, '"'));