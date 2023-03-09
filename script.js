fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    const usuario = data.results[0];
    const foto = usuario.picture.large;
    const nombre = `${usuario.name.first} ${usuario.name.last}`;
    const edad = usuario.registered.age;
    const email = usuario.email;
    const nacion = usuario.location.country;
    const domicilio = `${usuario.location.street.name} ${usuario.location.street.number}`;
    const codigopostal = usuario.location.postcode;
    const telefono = usuario.phone;
    document.getElementById('foto').src = foto;
    document.getElementById('nombre').innerHTML += ' ' + nombre;
    document.getElementById('edad').innerHTML += ' ' + edad;
    document.getElementById('email').innerHTML += ' ' + email;
    document.getElementById('nacion').innerHTML += ' ' + nacion;
    document.getElementById('domicilio').innerHTML += ' ' + domicilio;
    document.getElementById('codigopostal').innerHTML += ' ' + codigopostal;
    document.getElementById('telefono').innerHTML += ' ' + telefono;
  });