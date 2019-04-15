//Подсказка: сюда можно складывать записи адресной книги.
var phoneBook = [];
var k = 0;

//Здесь можно объявить переменные и функции, которые понядобятся вам для работы ваших функций

module.exports = {
    getWords: function (sentence) {
        var string = sentence.split(' ');
        var temp = [];
        for (var i = 0; i < string.length; i++) {
            var first = string[i].substr(0, 1);
            if (first === '#') {
                temp.push(string[i].substr(1, string[i].length));
            }
        }
        return temp;
    },
    normalizeWords: function (words) {
        str = [];
        var string;
        for (var i = 0; i < words.length; i++) {
            var k = 0;
            words[i] = words[i].toLowerCase();
            for (var j = 0; j < str.length; j++) {
                if (str[j] === words[i]) {
                    k = 1;
                }
            }
            if (k === 0 && (i !== 0)) {
                str.push(words[i]);
                string = string + ', ' + words[i];
            } else if (i === 0) {
                str.push(words[0]);
                string = words[0];
            }
        }
        return string;
    },
    addressBook: function (command) {
        var string = command.split(' ');
        var name = [];
        var flag = true;
        var str;
        var chek = [];
        var temp;
        var temp2 = [];
        var z = 0;
        if(string[0] === 'ADD') {
            for(var j = 0; j < k; j++){
                str = phoneBook[j].split(':');
                chek[j] = str[0];
                if(chek[j] === string[1]){
                    flag = false;

                    str = phoneBook[j];
                    for(var p = 0; p < string.length - 2; p++){
                        str +=',' + string[p + 2];
                    }
                    phoneBook[j] = str;
                }
            }
            if(flag){
                name.push(string[1]);
                str = string[1] + ':';
                for(var i = 0; i < string.length - 2; i++){
                    str +=' ' + string[i + 2]
                }
                phoneBook[k] = str;
                k++;}
        }
        else if(string[0] === 'REMOVE_PHONE') {

            for(var j = 0; j < k; j++){
                str = phoneBook[j].split(': ');
                temp = str[1].split(',');
                str = str[0] + ': ';
                for(var i = 0; i < temp.length; i++){
                    if(temp[i] === string[1]){
                    }
                    else{
                        if(i > 0){
                            str += ',';
                        }
                        str +=temp[i];
                    }
                    phoneBook[j] = str;
                }
            }
        }
        else if(string[0] === 'SHOW'){
            if(phoneBook.length === 0){}
            else{

                for(var i = 0; i < phoneBook.length;i++){
                    str = phoneBook[i].split(':');
                    if(str[1]===' '){
                        delete phoneBook[i];
                    }
                }
                phoneBook.sort();
                console.log(phoneBook);
            }

        }
        else{
            return undefined;
        }
        return phoneBook;
    }
}
