let button = document.getElementById('button')


function FrequentWords() {
    let sequence = document.getElementById('seq').value
    let length = parseInt(document.getElementById('length').value)
    console.log("Test")
    var words = [];
    freq = FrequencyMap( sequence, length)
    let m = Math.max(...freq.values())
    freq.forEach((a,b,c) => {
        console.log(a, "string name",b)
    } )
}
function FrequencyMap(seq, k) {
    var freq = new Map
    let n = seq.length
    for (let i =0 ; i <= n-k+1; i++){
        console.log( i , i+k)
        let pattern = seq.slice(i,i+k)
        freq.set(pattern, 0)
        for(let j =0 ; j <= n-k+1 ;j++ ){
            if (seq.slice(j,j+k) === pattern){
                let oldfreqcount =freq.get(pattern)
                freq.set(pattern, ++oldfreqcount)
            }
        }
    }
    return freq
}



button.addEventListener('click',FrequentWords)