class Contenedor {
    constructor (archivo) {
        this.archivo = archivo;
    }

    save(producto) {
        let productos = []; 
        const fs = require('fs');       
        productos = fs.readFile(this.archivo, 'utf-8', (error, contenido)  => {
            if (error) {
                console.log('No existen Productos.')
                producto.id = 1;
                productos = [];
                productos.push(producto);
                this.guardarProductos(productos);
            } else {
                try {
                    productos = JSON.parse(contenido);
                    producto.id = this.leerMaxId(productos) + 1;
                    productos.push(producto);
                    this.guardarProductos(productos); 
                } catch {
                    fs.unlink(this.archivo, error => {
                        if (error === false) {
                            console.log('Archivo Eliminado.');
                        }
                    })
                }
                           
            }
        });
    }
    leerMaxId(productos) {
        let id = 1;
        productos.map(prod => {
            if (prod.id>id) {
                id = prod.id;
            }
        })
        return id;
    }
    guardarProductos(productos) {
        const fs = require('fs');       
        fs.writeFile(this.archivo, JSON.stringify(productos), error =>{
            if (error) {
                console.log('Error al Guardar el Archivo.');
            } else {
                console.log('Productos Guardados.');
            }
        })
    }
    getById(Number, producto) {
        let productos = []; 
        const fs = require('fs');       
        productos = fs.readFile(this.archivo, 'utf-8', (error, contenido)  => {
            if (error) {
                console.log('No existen Productos.')
                producto(null);
            } else {
                productos = JSON.parse(contenido);
                const prod = productos.find( prod => prod.id==Number);
                producto(prod);
            }
        });
    }
    getAll(all) {
        let productos = []; 
        const fs = require('fs');       
        productos = fs.readFile(this.archivo, 'utf-8', (error, contenido)  => {
            if (error) {
                console.log('No existen Productos.')
                all(null);
            } else {
                productos = JSON.parse(contenido);
                all(productos);
            }
        });
    }

    deleteById(Number) {
        let productos = []; 
        const fs = require('fs');       
        productos = fs.readFile(this.archivo, 'utf-8', (error, contenido)  => {
            if (error) {
                console.log('No existen Productos. Nada para Borrar')
            } else {
                productos = JSON.parse(contenido);
                const prod = productos.find( prod => prod.id==Number);
                try {
                    if (prod.length==0) {
                        console.log(`No se Encontr?? el Producto con ID ${Number}`);
                    } else {
                        const i = productos.indexOf(prod);
                        console.log(`Indice ${i}`)
                        productos.splice(i, 1);
                        this.guardarProductos(productos)
                        console.log(`Producto con ID ${Number} Eliminado ????????`);
                    }
                } catch {
                    console.log(`No se Encontr?? el Producto con ID ${Number}`);
                }                
            }
        });
    }

    deleteAll() {
        const fs = require('fs');       
        fs.unlink(this.archivo, error => {
            if (error) {
                console.log('No se Pudieron Eliminar los Productos.');
            } else {
                console.log('Productos Eliminados.');
            }
        })  
    }
}

const nuevoProd = {
    title: 'SAMSUNG GALAXY A12 - SM -A127M AZUL',                                                                                                                                 
    price: 32900,                                                                                                                                     
    thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a125mzbearo/gallery/ar-galaxy-a12-a125-sm-a125mzbearo-376321079?$684_547_PNG$',             
}
const phone = new Contenedor('productos.json')
phone.save(nuevoProd);

phone.getById(2, (prod) => {
    console.log('Producto Econtrado: '+JSON.stringify(prod));
})

phone.getAll((prods) => {
    console.log('Conjunto de Productos: '+JSON.stringify(prods));
})

phone.deleteById(2);
phone.deleteAll();
