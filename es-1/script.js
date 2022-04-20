let tabella = document.getElementById('risultati');



fetch('https://sofin.wp-admin.it/public/api/v1/user').then(function (risposta) {

    return risposta.json();

}).then(function (dati) {

    const users = dati;

    let campiVisualizzati = ['id', 'name', 'lastname', 'email', 'created_at', 'updated_at', 'role'];

    /* for (let campi of campiVisualizzati) {
        let titolo = document.createElement('th');
        
    } */
    for (let user of users) {

        let riga = document.createElement('tr');
        tabella.appendChild(riga);

        for (let info in user) {

            if (campiVisualizzati.includes(info)) {
                let content;

                /* if(info == 'created_at'){
                    let data = new Date();
                    data = info.created_at;
                    let dataCreazione = user.info;
                    console.log(dataCreazione)
                } */
                if (info == 'role') {
                    content = user[info].nicename;
                } else {
                    content = user[info];
                }
                let cella = document.createElement('td');

                cella.innerHTML = content;
                riga.appendChild(cella);
            }
        }

    }

    let arrayRows = document.querySelectorAll('tbody tr');


    for (let row of arrayRows) {

        let eliminaBtn = document.createElement('td');
        eliminaBtn.innerHTML = '<button class="btn btn-danger">Elimina</button>';


        let modificaBtn = document.createElement('td');
        modificaBtn.innerHTML = '<button class="btn btn-warning">Modifica</button>';

        let visualizzaBtn = document.createElement('td');
        visualizzaBtn.innerHTML = '<button class="btn btn-primary">Visualizza</button>';

        row.append(eliminaBtn, modificaBtn, visualizzaBtn);
    }
})
