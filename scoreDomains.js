const counts = [
    "900,google.com",
    "60,mail.yahoo.com",
    "10,mobile.sports.yahoo.com",
    "40,sports.yahoo.com",
    "300,yahoo.com",
    "10,stackoverflow.com",
    "2,en.wikipedia.org",
    "1,es.wikipedia.org",
    "1,mobile.sports"
];

format(counts);

function format(counts){
    let map = {};
    for(let item of counts){
        let [count, domain]= item.split(',');
        domain = "."+domain;
        for(let i=domain.length-1; i>=0; i--){
            if(domain[i]==='.'){
                let subdomain = domain.slice(i+1,domain.length);
                if(map[subdomain]){
                    map[subdomain] += Number(count);
                } else {
                    map[subdomain] = Number(count);
                }
            }
        }
    }
    console.log(map)
}


// 1320 - com
// 900 - google.com
// 410 - yahoo.com
// 60 - mail.yahoo.com
// 10 - mobile.sports.yahoo.com
// 50 - sports.yahoo.com
// 10 - stackoverflow
// 3 - org
// 3 - wikipedia.org
// 2 - en.wikipedia
// 1 - es.wikipedia.org
// 1 - mobile.sports
// 1 - sports


