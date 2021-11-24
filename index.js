

class Usuario {
    constructor(nombre,apellido,libros,mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

      getFullName(){
          console.log(`Mi nombre y apellido es ${this.nombre} ${this.apellido}`);
      }

       addMascota(nombre){
        console.log(`Mascota : ${this.mascotas.push(nombre)}`);
        
      }
      countMascotas(){
        console.log(`Total de Mascotas: ${this.mascotas.length}`)

      }

     addBook(nombre,autor){
         console.log(`Libro :${this.libros.push({nombre ,autor})}`)

     }

     getBookNames(){
         return this.libros.map(libro => libro.nombre)
        
     }

    }



let usuario2 = new Usuario('Belén','Euvrard',[], [])

usuario2.getFullName();
usuario2.addMascota('gato');
usuario2.addMascota('Loro');
usuario2.countMascotas();
usuario2.addBook('El día que dejo de nevar en Alaska', 'Alice Keller');
usuario2.addBook('Orgullo y Prejuicio','Jane Austen');
console.log("Los titulos de mis Libros son:", usuario2.getBookNames());
console.log(usuario2);

