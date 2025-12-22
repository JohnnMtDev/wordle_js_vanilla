
let url = 'https://random-words-api.kushcreates.com/api?language=en&length=8&words=10'

fetch(url)
    .then(response => response.json())
    .then(data => {
     
            // random key for word in array
            const rand = Math.floor(Math.random() * 10)
           // console.log(rand)
            //word of object in api
            let word = data[rand].word

            shuffleString(word)
            }


    )

    .catch(error => console.log(error))


     game =  {
        unordered_word: data.word ,
        word:data.word,
        gameState: true 
    }


     let divCard = document.querySelector('#card')
            let randomword = document.querySelector('#leters')
           
          
            //funcion for unorderer letters of word
            function shuffleString(str) {
                const arr = str.split('');

                for (let i = arr.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }

                return arr.join('');
                }


            // letters
            function separateWord (w){
                
                
                for (let j = 0 ; j<w.length ; j++){
                    let letter = w[j]
                    
                }}