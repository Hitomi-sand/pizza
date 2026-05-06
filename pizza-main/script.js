src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
crossorigin="anonymous" 

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");


toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
});

        //cria um evento a partir do clique no botao, que tem o type submit
        document.getElementById('whatsappForm').addEventListener('submit', function(e){
            e.preventDefault();


            const telefone = '';


            const nome = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('message').value;


            const text = `Olá \nMeu nome é ${nome}, meu email é: ${email}.\n
            Menssagem:${mensagem}`;


            const encodedText = encodeURIComponent(text);
            const whatsappURL = `https://wa.me/${telefone}?text=${encodedText}`;


            window.open(whatsappURL, "_blank");
        })