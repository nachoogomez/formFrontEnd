function enviarFormulario () {
    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('text').value;
    const select = document.getElementById('select').value;

    const data = {
        nombre: nombre,
        email: email,
        mensaje: mensaje,
        select: select
    };

    console.log(data);
}