import { auth, db } from './setup'

export function watchUserChanges(callback){
    const unsub = auth.onAuthStateChanged((user) =>{
        if(user && !user.isAnonymous){
            callback({
                id: user.uid,
                email: user.email,
                displayName: user.displayName,
            })
        }else{
            callback(null);
        }
    })

    return unsub
}


export function watchArchivos(callback){
    const unsub = db.collection('archivos').onSnapshot((snapshot) => {
        const docs = []
        snapshot.forEach((doc) => {
            const data = doc.data()
            docs.push({
                ...data,
                id: doc.id,
            }) 
        })
        callback(docs)
    })


    return unsub
}


export function watchGenetica(callback){
    const unsub = db.collection('genetica').onSnapshot((snapshot) => {
        const genes = []

        snapshot.forEach((gen) => {
            const data = gen.data()
            genes.push({
                ...data,
                id: gen.id,
            }) 
        })
        callback(genes)
    })
    return unsub
}