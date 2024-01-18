emailjs.init("8GjlFoD69FtXTCwZL");

serviceID = "service_gb6up9n"
templateID = "template_maos05j"
publicKey = "8GjlFoD69FtXTCwZL"

let emailQuery = document.getElementById('email-query');

emailQuery.addEventListener("submit", (e) => {
    e.preventDefault();

    let dateIn = document.getElementById('date-in').value
    let dateOut = document.getElementById('date-out').value
    let guest = document.getElementById('guest').value
    let email = document.getElementById('email').value
    let type = document.getElementById('apartman-type').innerText

    if (dateIn == "" || dateOut == "" || email == "") {
        alert("Proverite da li ste uneli sve potrebne informacije!");
    } else {
        
        templateParams = {
            name: 'ChatBot',
            message: `${type}
            Od ${dateIn} 
            Do ${dateOut}
            Za ${guest} osobe
            
            Gost: ${email}` 
        }

        
        emailjs.send(serviceID, templateID, templateParams, publicKey);

        
        alert("Uspesno ste napravili upit za dostupnost. Javicemo Vam se uskoro.");

        dateIn.value = "";
        dateOut.value = "";
        email.value = ""
        guest.value = ""
    }
});