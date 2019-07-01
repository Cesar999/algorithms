// "Translate from one unknown language to another (Centauri/Arcturon)

// farok crrrok hihok yorok clok kantok ok-yurp

// farok    - jjat
// crrrok   - 
// hihok    - arrat
// yorok    - mat
// clok     - bat
// kantok   - oloat
// ok-yurp  - at-yurp

// lalok    - wat

const map = new Map();

map.set('ok-voon','at-voon');
map.set('ororok','bichat');
map.set('sprok','dat');
map.set('ok-drubel','at-drubel');
map.set('anok','pippat');
map.set('plok','rrat');
map.set('erok','totat');
map.set('ghirok','hilat');
map.set('jok','sat');
map.set('wiwok','totat');
map.set('farok','jjat');
map.set('stok','cat');
map.set('enemok','eneat');
map.set('brok','lat'); 
map.set('kantok','oloat');
map.set('ok-yurp','at-yurp');
map.set('yorok','mat');
map.set('clok','bat');
map.set('crrrok','');
map.set('hihok','arrat');
map.set('zanzanok','zanzanat');
map.set('rarok','forat') ;
map.set('nok','nnat'); 
map.set('mok','gat');
map.set('izok','quat');
map.set('lalok','wat');
map.set('drok','krat');

map.set('izok-#','vat');//izok if 'h|e'

//if anok + drok ->  krat + pippat (swap) 
//if brok + jok -> sat + lat (swap)       
//if mok + nok -> nnat + gat (swap)    
//if ghirok + clok -> bat + hilat (swap)
//if rarok + nok -> nnat + forat (swap)
//if izok + hihok ->  arrat + vat (swap)
//if anok + plok -> pippat + rrat (swap)

//if izok + jok -> krat + quat
//if lalok + brok -> lalok + iat

let inputs = [`ok-voon ororok sprok`,
              `ok-drubel ok-voon anok plok sprok`,
              `erok sprok izok hihok ghirok`,
              `ok-voon anok drok brok jok`,
              `wiwok farok izok stok`,
              `lalok sprok izok jok stok`,
              `lalok farok ororok lalok sprok izok enemok`,
              `lalok brok anok plok nok`,
              `wiwok nok izok kantok ok-yurp`,
              `lalok mok nok yorok ghirok clok`,
              `lalok nok crrrok hihok yorok zanzanok`,
              `lalok rarok nok izok hihok mok`];

let count = 1;
for(let input of inputs){
    transalate(input);
}

function transalate(str){
    let output = "";
    let arr = str.split(' ');
    let temp = '';
    for(let w=0; w<arr.length; w++){

        if(arr[w]==='izok'&&arr[w+1]==='jok'){
            temp = 'krat quat';
            w++;
        } else if(arr[w]==='izok'&&arr[w+1]==='hihok'){
            temp = 'arrat vat';
            w++;
        } else if(arr[w]==='izok'&&
                 (arr[w+1].split()[0]==='h'||arr[w+1].split()[0]==='e'))
        {
            temp = 'iat lat';
            w++;
        } else if(arr[w]==='lalok'&&arr[w+1]==='brok'){
            temp = 'iat lat';
            w++;
        } else if(
            (arr[w]==='azok'&&arr[w+1]==='drok')
          ||(arr[w]==='brok'&&arr[w+1]==='jok')
          ||(arr[w]==='mok'&&arr[w+1]==='nok')
          ||(arr[w]==='ghirok'&&arr[w+1]==='clok')
          ||(arr[w]==='rarok'&&arr[w+1]==='nok')
          ||(arr[w]==='izok'&&arr[w+1]==='hihok')
          ||(arr[w]==='izok'&&arr[w+1]==='jok')
          //||(arr[w]==='anok'&&arr[w+1]==='plok')
          ||(arr[w]==='anok'&&arr[w+1]==='drok'))
         {
             [arr[w], arr[w+1]] = [arr[w+1], arr[w]];
             temp = map.get(arr[w]);
         } else {
            temp = map.get(arr[w]);
         }

        output += temp + ' ';
    }
    console.log(`${count}a. ${str}`);
    console.log(`${count++}b. ${output}`);
}


// 1a. ok-voon ororok sprok .
// 1b. at-voon bichat dat .

// 2a. ok-drubel ok-voon anok plok sprok .
// 2b. at-drubel at-voon pippat rrat dat .

// 3a. erok sprok izok hihok ghirok .
// 3b. totat dat arrat vat hilat .

// 4a. ok-voon anok drok brok jok .
// 4b. at-voon krat pippat sat lat .

// 5a. wiwok farok izok stok .
// 5b. totat jjat quat cat .

// 6a. lalok sprok izok jok stok .
// 6b. wat dat krat quat cat .

// 7a. lalok farok ororok lalok sprok izok enemok .
// 7b. wat jjat bichat wat dat vat eneat .

// 8a. lalok brok anok plok nok .
// 8b. iat lat pippat rrat nnat .

// 9a. wiwok nok izok kantok ok-yurp .
// 9b. totat nnat quat oloat at-yurp .

// 10a. lalok mok nok yorok ghirok clok .
// 10b. wat nnat gat mat bat hilat .

// 11a. lalok nok crrrok hihok yorok zanzanok .
// 11b. wat nnat arrat mat zanzanat .

// 12a. lalok rarok nok izok hihok mok .
// 12b. wat nnat forat arrat vat gat ."