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

const propiedadesAlquiler = [
  {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion:
      'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    baños: 2,
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion:
      'Este hermoso apartamento ofrece una vista impresionante al mar',
    ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
    habitaciones: 3,
    baños: 3,
    costo: 2500,
    smoke: true,
    pets: true,
  },
  {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion:
      'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    baños: 2,
    costo: 2200,
    smoke: false,
    pets: false,
  },
  {
    nombre: 'Casa Patagonica',
    src: 'https://www.aimicasa.cl/wp-content/uploads/2023/05/IMG-20230518-WA0044.jpg',
    descripcion:
      'Esta bella casa se ubica en el casco histórico de la ciudad de Punta Arenas',
    ubicacion: '1101 Jose Menendez, Punta Arenas, Region de Magallanes',
    habitaciones: 5,
    baños: 5,
    costo: 5500,
    smoke: true,
    pets: true,
  },
]

const seccionVentas = document.getElementById('venta')
const seccionAlquiler = document.getElementById('alquiler')
let venta = `<h2>Propiedades en venta</h2> <div class="row">`
let alquiler = `<h2>Propiedades en alquiler</h2> <div class="row">`
let contador = 0

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
  contador += 1
  if (contador == 3) {
    break
  }
}

venta += `<a href="propiedades_venta.html" class="btn btn-dark">Ver todas las propiedades en venta</a>`

seccionVentas.innerHTML = venta

contador = 0
for (let propiedad of propiedadesAlquiler) {
  alquiler += `<div class="col-md-4 mb-4">
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
    alquiler += `<p class="text-success">
        <i class="fas fa-smoking"></i> Permitido fumar
      </p>`
  } else {
    alquiler += `<p class="text-danger">
        <i class="fas fa-smoking-ban"></i> No se permite fumar
      </p>`
  }

  if (propiedad.pets) {
    alquiler += `<p class="text-success">
        <i class="fas fa-paw"></i> Mascotas permitidas
      </p>`
  } else {
    alquiler += `<p class="text-danger">
        <i class="fa-solid fa-ban"></i> No se permiten mascotas
      </p>`
  }
  alquiler += `</div>
       </div>
       </div>
       `

  contador += 1
  if (contador == 3) {
    break
  }
}

alquiler += `<a href="propiedades_alquiler.html" class="btn btn-dark">Ver todas las propiedades en alquiler</a>`

seccionAlquiler.innerHTML = alquiler
