const cargarDatos = async () => {
  try {
    const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users`);

    //console.log(respuesta.status);
    // const datos = await respuesta.json();
    // console.log(datos[0]);

    // Si la respuesta es correcta
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      console.log(datos[0]);

      let personas = "";

      datos.forEach((persona) => {
        personas += `<ul class="list-group">
        <li class="list-group-item active" aria-current="true"> <strong>Nombre: </strong>${persona.name} - <strong>Empresa: </strong>${persona.company.name}</li>
        <li class="list-group-item"><strong>Username: </strong> ${persona.username}</li>
        <li class="list-group-item"><strong>Email: </strong> ${persona.email}</li>
        <li class="list-group-item"><strong>Tel: </strong> ${persona.phone}</li>
        <li class="list-group-item"><strong>Ciudad: </strong> ${persona.address.city} </li>
        <li class="list-group-item"><strong>Geo: </strong> Lat: ${persona.address.geo.lat} - Lng:  ${persona.address.geo.lng} </li>
      </ul> <br><br>`;
      });

      document.getElementById("contenedor").innerHTML = personas;
    } else if (respuesta.status === 401) {
      console.log("Pusiste la llave mal");
    } else if (respuesta.status === 404) {
      console.log("La persona que buscas no existe");
    } else {
      console.log("Hubo un error y no sabemos que paso");
    }
  } catch (error) {
    console.log(error);
  }
};

cargarDatos();
