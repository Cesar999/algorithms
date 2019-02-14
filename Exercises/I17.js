// A B C D E F G H I J K L M N O P Q R S T U V W X Y Z - normal
//
// E T A O I N S R H D L U C M F Y W G P B V K X Q J Z - common
// T O A W B C D S F M R H I Y E G L N P U J K - initial
// E S T D N R Y F L O G H A K M P U W - FINAL
	
let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase().split('');
let frec = 'ETAOINSRHDLUCMFYWGPBVKXQJZ'.toLowerCase().split('');

const obj = {};
const input = 
`qgeixed ylv bszly teszxdvixp ylvev xaxu dspaxmvdugy ylgr ylv 
pgbdsve nuvipgavguv lxd tbrudvevd ylvsepugy ygaxnv evhbmylvsep 
ugy ygevxpgu ilm ylvsep tryyg dg xud dsvsuyg ylv cxbbvmgq dvxyl 
egdvylv psflrudevdwxuugu ygeszly gq ylva wxuuguyg bvqygq 
ylvawxuugu suqeguy gqylva cgbbvmvd xud ylrudvevdpygeavd xy isyl 
plgyxud plvbbtgbdbm ylvm egdv xudivbbsuygylv oxip gqdvxylsuyg 
ylv agryl gq lvbbegdv ylvpsf lrudevd qbxplvdxbb ylvse pxtevp 
txevqbxplvd xp ylvm yreuvd su xsepxtesuz ylv zruuvep ylvevwlxezsuz 
xuxeam ilsbvxbb ylvigebd igudvevdhbruzvdsu ylv txyyvem pagnveszlyylegr 
ylv bsuv ylvm tegnvwgppxwn xuderppsxuevvbvd qegaylv pxtev 
pyegnvplxyyvevd xudprudvevdylvu ylvmegdv txwn tryugyugy ylvpsf lrudevd `;

// const input = 
// `bpr xjvni mkd ymibrut jx irhx wi bpr riirkvr jx
// ymbinlmtmipw utn qmumbr dj w ipmhh but bj rhnvwdmbr bpr
// yjeryrkbi jx bpr qmbm mvvjudwko bj yt wkbrusurbmbwjk
// lmird jk xjubt trmui jx ibndt 
// wb wi kjb mk rmit bmiq bj rashmwk rmvp yjeryrkb mkd wbi
// iwokwxwvmkvr mkd ijyr ynib urymwk nkrashmwkrd bj ower m
// vjyshrbr rashmkmbwjk jkr cjnhd pmer bj lr fnmhwxwrd mkd
// wkiswurd bj invp mk rabrkb bpmb pr vjnhd urmvp bpr ibmbr
// jx rkhwopbrkrd ywkd vmsmlhr jx urvjokwgwko ijnkdhrii
// ijnkd mkd ipmsrhrii ipmsr w dj kjb drry ytirhx bpr xwkmh
// mnbpjuwbt lnb yt rasruwrkvr cwbp qmbm pmi hrxb kj djnlb
// bpmb bpr xjhhjcwko wi bpr sujsru msshwvmbwjk mkd
// wkbrusurbmbwjk w jxxru yt bprjuwri wk bpr pjsr bpmb bpr
// riirkvr jx jqwkmcmk qmumbr cwhh urymwk wkbmvb`;

// map['r']='e'; map['b']='t'; map['m']='a'; 
// map['k']='n'; map['j']='o'; map['w']='i';
// map['i']='s'; map['p']='h'; map['v']='c';
// map['n']='u'; map['d']='d'; map['h']='l';  
// map['o']='g'; map['x']='f'; map['u']='r'; 
// map['y']='m'; map['t']='y'; map['q']='k';
// map['f']='q'; map['s']='p'; map['l']='b';
// map['a']='x'; map['e']='v'; map['c']='w';
// map['g']='z'; map['z']='j';

let max = 0;
let common = [];

for(let c of input){
    if(c!==' '&&obj[c]===undefined&&c!=='\n'){
        obj[c] = 1;
    } else if(c!==' '&&c!=='\n'){
        obj[c]+=1;
    }

    if(obj[c]>max){
        max = obj[c];
        common= [c];
    } else if(obj[c]===max){
        common.push(c);
    }
}

console.log(obj);

const arr = []
for(let p in obj){
    arr.push([p,obj[p]]);
}

arr.sort(function(a, b) {
    var nameA = a[1];
    var nameB = b[1]; 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

const map = {
    a:'.',   b:'.',   c:'.',   d:'.',   e:'.',   f:'.',   g:'.', 
    h:'.',   i:'.',   j:'.',   k:'.',   l:'.',   m:'.',   n:'.',
    o:'.',   p:'.',   q:'.',   r:'.',   s:'.',   t:'.',   u:'.', 
    v:'.',   w:'.',    x:'.',  y:'.',   z:'.'
}


map['v']='e'; map['y']='t'; map['l']='h'; 
map['u']='n'; map['g']='o'; map['e']='r';
map['d']='d'; map['x']='a'; map['p']='s';

map['b']='l'; map['s']='i'; map['z']='g';
map['r']='u';map['t']='b';  map['a']='m';
map['c']='v'; map['q']='f'; map['m']='y';

map['i']='w'; map['n']='k'; map['w']='c';
map['o']='j'; map['f']='x'; map['h']='p';

//ABCDEFGHIJKLMNOPQRSTUVWXYZ -> alpha
//ETAOINSRHDLUCMFYWGPBVKXQJZ -> english frec order
//.................G.....Q.Z

//th er on an re he in ed nd ha at en es of or
//YL,LV,EV,VD,UD,XU,DV,VE,YG,SU,EG,UG,RU

//th, he, re, ed  nd  an  de  er  to  in  ro  no  un
//YL, LV, EV, VD, UD, XU, DV, VE, YG, SU, EG, UG, RU

//jx xp gq
// double -> ss ee tt ff ll mm oo

//of, to, in, it, is, be, as, at, so, we, he, by, or, on, do, if, me, my, up, an, go, no, us, am
 
//the, and, for, are, but, not, you, all, any, can, had, her, was, one, our, out, day, get, has, him, his, how, man, new, now, old, see, two, way, who, boy, did, its, let, put, say, she, too, use

//that, with, have, this, will, your, from, they, know, want, been, good, much, some, time'

let output = '';
for(let c of input){
    if(c!==' '&&c!=='\n'){
        output += map[c];
    } else if(c===' '){
        output += ' ';
    }else if(c==='\n'){
        output += '\n';
    }
}
console.log(arr);
console.log(output);

