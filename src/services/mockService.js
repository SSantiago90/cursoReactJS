import productos from "../data/productos";

function getItems() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 500);
  });
}

export function getItemsByCategory(categoria) {
  return new Promise((resolve, reject) => {
    let itemsFound = productos.filter((item) => {
      return item.categoria === categoria;
    });

    if (itemsFound.length > 0 )
      resolve(itemsFound);
    else 
    reject("No hay productos para esta categoría.")
  });
}

export function getItemByID(itemID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let itemFound = productos.find(
        (item) => item.IDproducto === parseInt(itemID)
      );
      if (itemFound) resolve(itemFound);
      else reject("Item no encontrado");
    }, 500);
  });
}

export default getItems;