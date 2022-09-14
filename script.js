let button = document.getElementById('button')


function FrequentWords() {
    let sequence = document.getElementById('seq').value
    let length = parseInt(document.getElementById('length').value)
    console.log("Test")
    var words = [];
    freq = FrequencyMap( sequence, length)
    let m = Math.max(...freq.values())
    let answer= [...freq.entries()].reduce((a, e ) => e[1] > a[1] ? e : a )
    
    document.getElementById('answer').innerText= ` Result = ${answer[0]}  with frequency ${answer[1]}`
}
function FrequencyMap(seq, k) {
    var freq = new Map
    let n = seq.length
    for (let i =0 ; i <= n-k+1; i++){
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