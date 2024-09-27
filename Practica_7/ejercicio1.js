const headers = document.querySelectorAll('h1,h2,h3,h4,h5,h6');

for (let i = 0; i<headers.length; i++){
    headers[i].innerText = `Nuevo emcabezado nivel ${i + 1}`
}