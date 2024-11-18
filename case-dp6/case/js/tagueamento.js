// Preencha este arquivo com qualquer código que você necessite para realizar a coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag Manager. No último caso, não é necessário implementar a tag <noscript>.

// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la para fazer a sua coleta.

// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.




// Evento page view : 

gtag("event", "page_view", {
  page_title: document.title,
  page_location: window.location.href,
});




// Eventos Botões "Menu" > "Entre em contato" e "Download PDF"



document.querySelector(".menu-lista-contato").addEventListener("click", function (){
 
gtag("event", "click", {
  page_location: window.location.href,
  element_name: "entre_em_contato",
  element_group: "menu",
});


  });

document.querySelector(".menu-lista-download").addEventListener("click", function (){

gtag("event", "file_download", {
  page_location: window.location.href,
  element_name: "download_pdf",
  element_group: "menu",
});
  
});


//Evento Página Analise



document.querySelectorAll(".card-montadoras").forEach(function(el){
  el.addEventListener("click", function(){
    gtag("event", "click", {
      page_location: window.location.href,
      element_name: el.querySelector(".card-title").textContent.toLowerCase(),
      element_group: "ver_mais",

});
});
});




// Eventos Formulário



//form start

// Os Atribuitos pedidos como form id, form_name e form_destinatio não possível de enviar pois eles não existem na estrutura HTML


const formElement = document.querySelector('form');

// Define a função de callback
function formStart() {
  gtag("event", "form_start", {
    page_location: window.location.href,
    form_id: "",
    form_name: "",
    form_destination: ""
  });

  // Remove o EventListener
  formElement.removeEventListener("input", formStart);
}

// Adiciona o EventListener
formElement.addEventListener("input", formStart);



// form_submit


formElement.addEventListener("submit", function (){
  gtag("event", "form_submit", {
    page_location: window.location.href,
    form_id: "",
    form_name: "",
    form_destination: "",
    form_submit_text: document.querySelector("form button").textContent
  });
});




var googleFormMessage = "Obrigado pelo seu contato!";

(  
  function googleFormValidation() {
    if (document.body && document.body.innerText.includes(googleFormMessage)) {
      gtag("event", "view_form_success", {
        page_location: window.location.href,
        form_id: "",
        form_name: ""
      });
      
    } else setTimeout(googleFormValidation, 500);
  }
)()

