from flask import Flask, render_template, send_from_directory

app = Flask(__name__)


# INICIO
@app.route("/")
def inicio():
    return render_template("index.html")


# SISTEMA RESPIRATORIO
@app.route("/respiratorio")
def respiratorio():
    return render_template("respiratorio.html")


# SISTEMA CIRCULATORIO
@app.route("/circulatorio")
def circulatorio():
    return render_template("circulatorio.html")


# SISTEMA DIGESTIVO
@app.route("/digestivo")
def digestivo():
    return render_template("digestivo.html")


# QUIZ
@app.route("/quiz")
def quiz():
    preguntas = [
        {
            "pregunta": "¿Cuál es la función principal del sistema respiratorio?",
            "opciones": [
                "Transportar nutrientes",
                "Realizar el intercambio de gases",
                "Digestionar alimentos",
                "Bombear sangre"
            ],
            "respuesta": 1
        },
        {
            "pregunta": "¿Qué órgano bombea la sangre?",
            "opciones": [
                "Pulmón",
                "Estómago",
                "Corazón",
                "Hígado"
            ],
            "respuesta": 2
        },
        {
            "pregunta": "¿Dónde ocurre principalmente la absorción de nutrientes?",
            "opciones": [
                "Estómago",
                "Intestino delgado",
                "Intestino grueso",
                "Esófago"
            ],
            "respuesta": 1
        },
        {
            "pregunta": "¿Dónde ocurre el intercambio gaseoso?",
            "opciones": [
                "Tráquea",
                "Bronquios",
                "Alvéolos",
                "Faringe"
            ],
            "respuesta": 2
        },
        {
            "pregunta": "¿Qué vasos llevan sangre desde el corazón?",
            "opciones": [
                "Venas",
                "Arterias",
                "Capilares",
                "Alvéolos"
            ],
            "respuesta": 1
        },
        {
            "pregunta": "¿Cuál es la función principal del estómago?",
            "opciones": [
                "Bombear sangre",
                "Intercambiar gases",
                "Participar en la digestión",
                "Producir oxígeno"
            ],
            "respuesta": 2
        },
        {
            "pregunta": "¿Qué gas necesita principalmente el cuerpo para la respiración celular?",
            "opciones": [
                "Oxígeno",
                "Dióxido de carbono",
                "Nitrógeno",
                "Helio"
            ],
            "respuesta": 0
        },
        {
            "pregunta": "¿Qué componente de la sangre transporta principalmente oxígeno?",
            "opciones": [
                "Plaquetas",
                "Glóbulos rojos",
                "Glóbulos blancos",
                "Plasma"
            ],
            "respuesta": 1
        },
        {
            "pregunta": "¿Qué órgano produce la bilis?",
            "opciones": [
                "Hígado",
                "Estómago",
                "Páncreas",
                "Riñón"
            ],
            "respuesta": 0
        },
        {
            "pregunta": "¿Cuál es el recorrido correcto del aire?",
            "opciones": [
                "Nariz → tráquea → faringe → pulmones",
                "Nariz → faringe → laringe → tráquea",
                "Pulmones → nariz → tráquea → faringe",
                "Faringe → nariz → pulmones → tráquea"
            ],
            "respuesta": 1
        }
    ]

    return render_template(
        "quiz.html",
        preguntas=preguntas
    )


@app.route("/juego")
def juego():
    return render_template("juego.html")


@app.route("/juego.js")
def archivo_juego():
    return send_from_directory("static", "juego.js")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
