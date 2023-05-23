const firebase = require("./firebase")

const add = async function (data) {
    const res = await firebase.db.collection('agendamentos').doc(data.nome).set(data).then(
        console.log("adicionado")
    );
}

const update = async function (collection, doc, data) {
    const ref = firebase.db.collection(collection).doc(doc)
    const res = await ref.update(data).then(console.log("atualizado"))
}


const deletar = async function (collection, doc) {
    const res = await firebase.db.collection(collection).doc(doc).delete().then(
        console.log("deletado")
    );
}

const read = async function (collection, doc) {
    firebase.db.collection(collection).get()
                  .then((querySnapshot) => {
                  querySnapshot.forEach((doc) => {
                  const dados = doc.data();
                  console.log(dados);
                  });
}).catch((error) => {
                  console.error('Erro ao ler dados da coleção:', error);
});

}