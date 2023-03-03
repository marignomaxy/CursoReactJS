

export async function getAll(buscar,limite,offset){
    return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${buscar}&limit=${limite}&offset=${offset}`).then((res)=>res.json())
}

export async function getByIdProductos(id){
    return fetch(`https://api.mercadolibre.com/items/${id}`).then((res)=>res.json())
}

export function getDescription(id){
    return fetch(`https://api.mercadolibre.com/items/${id}/description`).then((res)=>res.json())
}

