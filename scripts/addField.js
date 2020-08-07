    // Procurar o botao
document.querySelector("#add-time")
    //Quando clicar no botao
.addEventListener('click', cloneField)

    //Executar uma açao
    function cloneField() {
        //Duplicar os campos
       const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //bollean: true or false

       //Pegar os campos
       const fields = newFieldContainer.querySelectorAll('input')

      //limpar cada campo sepadaramente
      fields.forEach(function(field){
          //pick a field 
          field.value = ""
      })


        //Colocar na página
        document.querySelector('#schedule-items').appendChild(newFieldContainer)
    }
   

        