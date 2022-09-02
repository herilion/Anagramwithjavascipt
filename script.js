function fonctionAnagram(mot1, mot2) {
    //cas où les mots renferment pas le même nombre de lettre
    if (mot1.length !== mot2.length) {
        return false;
    }


    var s1 = mot1.split('').sort().join('');
    var s2 = mot2.split('').sort().join('');
    //ici ca va verrifier les deux chaînes triées(s1 et s2).
    return (s1 === s2);
}

console.log(fonctionAnagram('silent', 'listen'));
console.log(fonctionAnagram('heritier', 'hertier'));