const fs = require('fs');
const file = fs.createWriteStream('./big');

for(i=0; i<=1e6; i++){
    file.write('Well I found a woman, stronger than anyone I know She shares my dreams, I hope that someday Ill share her home I found a love, to carry more than just my secrets To carry love, to carry children of our own We are still kids, but were so in love Fighting against all odds I know well be alright this time');
}

file.end()