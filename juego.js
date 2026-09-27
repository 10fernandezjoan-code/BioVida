let sistemaActual = "respiratorio";
let seleccionado = null;
let puntos = 0;

const sistemas = {

    respiratorio: {
        titulo: "🫁 Sistema respiratorio",

        organos: [
            ["nariz", "👃 Nariz", "zone-cabeza", "Parte por donde entra y sale el aire."],
            ["faringe", "🔵 Faringe", "zone-faringe", "Conducto que comunica la nariz y la boca con la laringe."],
            ["laringe", "🔵 Laringe", "zone-laringe", "Estructura que conduce el aire hacia la tráquea."],
            ["traquea", "🫁 Tráquea", "zone-traquea", "Conducto por donde pasa el aire hacia los bronquios."],
            ["bronquios", "🌿 Bronquios", "zone-bronquios", "Conductos que llevan el aire hacia los pulmones."],
            ["pulmon_izquierdo", "🫁 Pulmón izquierdo", "zone-pecho-izq", "Órgano que participa en el intercambio de gases."],
            ["pulmon_derecho", "🫁 Pulmón derecho", "zone-pecho-der", "Órgano que participa en el intercambio de gases."],
            ["alveolos", "🔴 Alvéolos", "zone-alveolos", "Pequeñas estructuras donde ocurre el intercambio gaseoso."],
            ["diafragma", "〰️ Diafragma", "zone-diafragma", "Músculo que ayuda a realizar la respiración."]
        ]
    },

    circulatorio: {
        titulo: "❤️ Sistema circulatorio",

        organos: [
            ["corazon", "❤️ Corazón", "zone-corazon", "Órgano muscular que bombea la sangre."],
            ["arteria_aorta", "🔴 Aorta", "zone-aorta", "Principal arteria que sale del corazón."],
            ["arterias", "🔴 Arterias", "zone-arterias", "Llevan la sangre desde el corazón hacia el cuerpo."],
            ["venas", "🔵 Venas", "zone-venas", "Llevan la sangre de regreso hacia el corazón."],
            ["vena_cava", "🔵 Vena cava", "zone-vena-cava", "Gran vena que lleva sangre hacia el corazón."],
            ["capilares", "🩸 Capilares", "zone-capilares", "Pequeños vasos donde ocurre el intercambio de sustancias."],
            ["sangre", "🩸 Sangre", "zone-sangre", "Fluido que transporta oxígeno, nutrientes y desechos."],
            ["globulos_rojos", "🔴 Glóbulos rojos", "zone-globulos-rojos", "Células que transportan principalmente oxígeno."],
            ["globulos_blancos", "⚪ Glóbulos blancos", "zone-globulos-blancos", "Células que ayudan a defender el organismo."],
            ["plaquetas", "🟡 Plaquetas", "zone-plaquetas", "Participan en la coagulación de la sangre."]
        ]
    },

    digestivo: {
        titulo: "🍽️ Sistema digestivo",

        organos: [
            ["boca", "👄 Boca", "zone-cabeza", "Lugar donde comienza la digestión."],
            ["faringe", "🔵 Faringe", "zone-faringe", "Conducto por donde pasa el alimento hacia el esófago."],
            ["esofago", "🔵 Esófago", "zone-esofago", "Conducto que lleva el alimento hasta el estómago."],
            ["estomago", "🥣 Estómago", "zone-estomago", "Órgano que mezcla los alimentos con los jugos gástricos."],
            ["higado", "🟤 Hígado", "zone-higado", "Órgano que produce la bilis."],
            ["vesicula", "🟢 Vesícula biliar", "zone-vesicula", "Órgano que almacena la bilis."],
            ["pancreas", "🟡 Páncreas", "zone-pancreas", "Órgano que produce sustancias que ayudan a la digestión."],
            ["intestino_delgado", "🟢 Intestino delgado", "zone-intestino-delgado", "Lugar donde se absorbe la mayor parte de los nutrientes."],
            ["intestino_grueso", "🟠 Intestino grueso", "zone-intestino-grueso", "Absorbe principalmente agua y forma las heces."],
            ["recto", "🔴 Recto", "zone-recto", "Almacena temporalmente las heces."],
            ["ano", "🔴 Ano", "zone-ano", "Abertura por donde se eliminan las heces."]
        ]
    },

    urinario: {
        titulo: "🫘 Sistema urinario",

        organos: [
            ["riñon_izquierdo", "🫘 Riñón izquierdo", "zone-riñon-izq", "Filtra la sangre y participa en la formación de la orina."],
            ["riñon_derecho", "🫘 Riñón derecho", "zone-riñon-der", "Filtra la sangre y participa en la formación de la orina."],
            ["ureter_izquierdo", "〰️ Uréter izquierdo", "zone-ureter-izq", "Transporta la orina desde el riñón hasta la vejiga."],
            ["ureter_derecho", "〰️ Uréter derecho", "zone-ureter-der", "Transporta la orina desde el riñón hasta la vejiga."],
            ["vejiga", "🫧 Vejiga urinaria", "zone-vejiga", "Almacena temporalmente la orina."],
            ["uretra", "🔽 Uretra", "zone-uretra", "Conducto por donde la orina sale del organismo."]
        ]
    }

};


function cambiarSistema(sistema) {

    sistemaActual = sistema;
    puntos = 0;
    seleccionado = null;

    document.getElementById("tituloSistema").textContent =
        sistemas[sistema].titulo;

    document.getElementById("score").textContent = "0";

    document.getElementById("message").textContent =
        "Arrastra cada órgano hasta su lugar.";

    crearJuego();
}


function crearJuego() {

    const palabras = document.getElementById("palabras");
    const zonas = document.getElementById("zonas");
    const pistas = document.getElementById("pistas");

    const organosVisuales =
        document.getElementById("organosVisuales");

    palabras.innerHTML = "";
    zonas.innerHTML = "";

    if (pistas) {
        pistas.innerHTML = "<h3>💡 Pistas</h3>";
    }

    if (organosVisuales) {
        organosVisuales.innerHTML = "";
    }


    // =========================
    // PALABRAS
    // =========================

    sistemas[sistemaActual].organos.forEach(function(organo) {

        const palabra = document.createElement("div");

        palabra.className = "word";
        palabra.textContent = organo[1];
        palabra.draggable = true;

        palabra.dataset.organ = organo[0];


        palabra.addEventListener("dragstart", function() {
            seleccionado = palabra;
        });


        palabra.addEventListener("click", function() {

            document.querySelectorAll(".word").forEach(function(item) {
                item.classList.remove("selected");
            });

            palabra.classList.add("selected");

            seleccionado = palabra;
        });


        palabras.appendChild(palabra);
    });


    // =========================
    // RECUADROS + PISTAS
    // =========================

    sistemas[sistemaActual].organos.forEach(function(organo, index) {

        const zona = document.createElement("div");

        zona.className = "drop-zone " + organo[2];

        zona.dataset.organ = organo[0];


        const numero = document.createElement("span");

        numero.className = "zone-number";

        numero.textContent = index + 1;

        zona.appendChild(numero);


        zona.addEventListener("dragover", function(evento) {

            evento.preventDefault();

            zona.classList.add("drag-over");

        });


        zona.addEventListener("dragleave", function() {

            zona.classList.remove("drag-over");

        });


        zona.addEventListener("drop", function(evento) {

            evento.preventDefault();

            zona.classList.remove("drag-over");

            colocar(zona);

        });


        zona.addEventListener("click", function() {

            if (seleccionado) {
                colocar(zona);
            }

        });


        zonas.appendChild(zona);


        // =========================
        // PISTA
        // =========================

        if (pistas) {

            const pista = document.createElement("div");

            pista.className = "pista";

            pista.innerHTML = `
                <strong>${index + 1}:</strong>
                ${organo[3]}
            `;

            pistas.appendChild(pista);
        }

    });


    mostrarOrganos();
}


function colocar(zona) {

    if (!seleccionado) {
        return;
    }


    const organoCorrecto = zona.dataset.organ;
    const organoElegido = seleccionado.dataset.organ;


    if (organoCorrecto === organoElegido) {

        zona.style.background = "#b9efd0";
        zona.style.border = "3px solid #16834b";


        seleccionado.style.display = "none";


        puntos++;


        document.getElementById("score").textContent =
            puntos;


        document.getElementById("message").textContent =
            "✅ ¡Correcto!";


        seleccionado = null;


        if (
            puntos ===
            sistemas[sistemaActual].organos.length
        ) {

            document.getElementById("message").textContent =
                "🎉 ¡Excelente! Completaste el sistema.";

        }

    } else {

        document.getElementById("message").textContent =
            "❌ Ese no es el lugar correcto.";

    }

}


function mostrarOrganos() {

    const contenedor =
        document.getElementById("organosVisuales");


    if (!contenedor) {
        return;
    }


    contenedor.innerHTML = "";


    if (sistemaActual === "respiratorio") {

        contenedor.innerHTML = `
            <div class="pulmon pulmon-izq">🫁</div>
            <div class="pulmon pulmon-der">🫁</div>
        `;

    }


    else if (sistemaActual === "circulatorio") {

        contenedor.innerHTML = `
            <div class="corazon">❤️</div>
        `;

    }


    else if (sistemaActual === "digestivo") {

        contenedor.innerHTML = `
            <div class="estomago">🥣</div>
            <div class="intestinos">〰️〰️</div>
        `;

    }


    else if (sistemaActual === "urinario") {

        contenedor.innerHTML = `
            <div style="
                position:absolute;
                top:205px;
                left:75px;
                font-size:35px;
            ">🫘</div>

            <div style="
                position:absolute;
                top:205px;
                left:170px;
                font-size:35px;
            ">🫘</div>

            <div style="
                position:absolute;
                top:320px;
                left:120px;
                font-size:38px;
            ">🫧</div>
        `;

    }

}


function reiniciarJuego() {

    puntos = 0;
    seleccionado = null;

    document.getElementById("score").textContent =
        "0";

    document.getElementById("message").textContent =
        "Arrastra cada órgano hasta su lugar.";

    crearJuego();

}


crearJuego();