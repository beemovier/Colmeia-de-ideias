//interatividade
//Separação de interesses
'use strict'
alert('HELLO WORLD');
alert('QUER CAFÉ?');
alert('TA COM FOME?');
alert('QUEM NÃO TÁ?');

//isso vai impedir que o script rode antes de carregar o botão
document.addEventListener('DOMContentLoaded', function () {

    //parte botão
    const switcher = document.querySelector('.btn');
    switcher.addEventListener('click', function () {

        //Adciona a lasse 'light-theme' ao body inicialmente
        document.body.classList.add('light-theme');

        //alterna entre os temas
        document.body.classList.toggle('dark-theme');
        // document.body.classList.toggle('light-theme');

        var className = document.body.className;
        if (className == "light-theme") {
            this.textContent = "Dark";
        }
        else { this.textContent = "Light"; }
        console.log('current class name: ' + className);
    });
    //javascript costumamos usar letras concatenadas para nomes de variáveis com mais de uma palavra className
});
//trocar repo: git remot set-url origin https...
//novo repo: git remote add origin https...
