var fs = require('fs');

//definisco i parametri classici del middleware tramite una return visto che voglio passare il parametro prodotti oltre a req,res,next
const middleware = (prodotti) => {
    return (req, res, next) => {
        //prendo gli oggetti method e url dalla richiesta
        const { method, url } = req;

        /* Creo file per loggare gli orari delle richieste */
        const time = new Date();
        const logTime = 'Data: ' + time.toLocaleDateString() + ', Ora: ' + time.toLocaleTimeString();

        fs.writeFile('log.txt', `Metodo: ${method} \t\t Url: ${url} \t\t ${logTime}\n`,
            {
                encoding: "utf-8",
                flag: "a",
                mode: 0o666
            },
            (err) => {
                if (err !== null) {
                    fs.writeFile('log.txt', `Error: ${err}`, { flag: 'a' },(err)=>{});
                }
            }
        );

        //vado all'evento finale della risposta per sapere lo status code ricevuto
        res.on('finish', () => {

            /* Creo una verifica sulla risposta per i vari metodi */
            if (res.statusCode === 404) {

                if (method === "GET" && url === "/Ferramenta/Catalogo") {

                    fs.writeFile('log.txt', `\t => Errore ${res.statusCode}: Catalogo richiesto non trovato\n`, { flag: 'a' }, (err)=>{});

                } else if (method === "GET" || method === "PUT" || method === "DELETE") {

                    fs.writeFile('log.txt', `\t => Errore ${res.statusCode}: Prodotto richiesto non esistente\n`, { flag: 'a' }, (err)=>{});

                } else if (method === "POST") {

                    fs.writeFile('log.txt', `\t => Errore ${res.statusCode}: Il prodotto esiste già nel database\n`, { flag: 'a' }, (err)=>{});
                }
            }

            if (res.statusCode === 500) {

                fs.writeFile('log.txt', `\t => Errore ${res.statusCode}: Errore del server\n`, { flag: 'a' }, (err)=>{});
            }
        });

        next();
    };
}


module.exports = middleware;