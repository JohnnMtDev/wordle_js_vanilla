
let url = 'https://random-words-api.kushcreates.com/api?language=en&length=8&words=10'

fetch(url)
    .then(response => response.json())
    .then(data => {
     
            // random key for word in array
            const rand = Math.floor(Math.random() * 10)
           // console.log(rand)
            //word of object in api
            word = data[rand].word

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
                
                
                for ( j = 0 ; j<w.length ; j++){
                    let letter = w[j]
                    
                }

            // validate input word    
            function validateWord(text){
                (text === random) ? tue : false
            }
                

            }





     
       
    })

    .catch(error => console.log(error))