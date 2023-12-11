const propiedadesVenta = [
  {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion:
      'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    baños: 4,
    costo: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion:
      'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    baños: 1,
    costo: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion:
      'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    baños: 3,
    costo: 4500,
    smoke: false,
    pets: true,
  },
  {
    nombre: 'Castillo en la ciudad',
    src: 'https://turismoysabores.cl/wp-content/uploads/2021/05/Castillo-Brunet.jpg',
    descripcion:
      'Este castillo ubicado en el centro de la ciudad, ofrece una experiencia nunca antes conocida para sus propietarios',
    ubicacion: 'Iberia 104, 2571409 Viña del Mar, Valparaíso',
    habitaciones: 35,
    baños: 30,
    costo: 1000000,
    smoke: true,
    pets: true,
  },
]

const seccionVentas = document.getElementById('venta')
let venta = `<h2>Propiedades en venta</h2> <div class="row">`

for (let propiedad of propiedadesVenta) {
  venta += `<div class="col-md-4 mb-4">
      <div class="card">
        <img
          src=${propiedad.src}
          class="card-img-top"
          alt="Imagen del departamento"
        />
        <div class="card-body">
          <h5 class="card-title">
            ${propiedad.nombre}
          </h5>
          <p class="card-text">
            ${propiedad.descripcion}
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
          </p>
          <p>
            <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
            <i class="fas fa-bath"></i> ${propiedad.baños} Baños
          </p>
          <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
          <p class="text-danger">`

  if (propiedad.smoke) {
    venta += `<p class="text-success">
          <i class="fas fa-smoking"></i> Permitido fumar
        </p>`
  } else {
    venta += `<p class="text-danger">
          <i class="fas fa-smoking-ban"></i> No se permite fumar
        </p>`
  }

  if (propiedad.pets) {
    venta += `<p class="text-success">
          <i class="fas fa-paw"></i> Mascotas permitidas
        </p>`
  } else {
    venta += `<p class="text-danger">
          <i class="fa-solid fa-ban"></i> No se permiten mascotas
        </p>`
  }
  venta += `</div>
         </div>
         </div>
         `
}

seccionVentas.innerHTML = venta
