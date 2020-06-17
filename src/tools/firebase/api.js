import { db, storage } from './setup'

//Archivos API
export async function createArchivo(data) {
    return await db 
        .collection('archivos')
        .doc()
        .set(data)
}

export async function deleteArchivo(id) {
    return await db 
        .collection('archivos')
        .doc(id)
        .delete()
}

export async function updateArchivo(id, data) {
    return await db 
        .collection('archivos')
        .doc(id)
        .update(data)
}


//Genetica API
export async function createGenetica(data) {
    return await db 
        .collection('genetica')
        .doc()
        .set(data)
}

export async function deleteGenetica(id) {
    return await db 
        .collection('genetica')
        .doc(id)
        .delete()
}

export async function updateGenetica(id, data) {
    return await db 
        .collection('genetica')
        .doc(id)
        .update(data)
}


//Storage API
export async function createFile(file) {
    const storageRef = storage.ref('files/')
    return await storageRef.put(file)
}