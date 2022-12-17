

soal =''
let i = 0;

do {

    let obj = 'jawabanPeserta['+i+'].jawaban || ' 

    soal=soal + obj
    i++
}
while (i < 100)

console.log(soal)