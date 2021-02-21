const span = document.querySelector('.center span')
let i = 0

function effect (text) {

    const splitText = text.split('');

    setInterval(() => {
        if(span.textContent.length < splitText.length) {
            span.textContent += splitText[0+i];
            i++;
        } else {
            span.textContent = '';
            i = 0;
        }
    }, 150)

}

effect('Efeito Máquina de Escrever em Javascript')



