emailjs.init("8GjlFoD69FtXTCwZL");

serviceID = "service_gb6up9n"
templateID = "template_8mx8jps"
publicKey = "8GjlFoD69FtXTCwZL"

let infoQuery = document.getElementById('info-query');

infoQuery.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let message = document.getElementById('message').value

    if (name == "" || message == "" || email == "") {
        alert("Proverite da li ste uneli sve potrebne informacije!");
    } else {
        
        templateParams = {
            name: 'ChatBot',
            message: `Ime: ${name}
            Pitanje: ${message}
            
            Gost: ${email}` 
        }

        
        emailjs.send(serviceID, templateID, templateParams, publicKey);

        
        alert("Uspesno ste postavili pitanje. Javicemo Vam se uskoro.");

        name.value = "";
        message.value = "";
        email.value = "";
    }
});