use logistica_db

db.envios.insertMany([
    {
        numero_seguimiento: "ENV001",
        estado: "enviado",
        ciudad_destino: "Buenos Aires",
        peso: 2.5
    },
    {
        numero_seguimiento: "ENV002",
        estado: "pendiente",
        ciudad_destino: "Cordoba",
        peso: 1.2
    },
    {
        numero_seguimiento: "ENV003",
        estado: "entregado",
        ciudad_destino: "Rosario",
        peso: 4.8
    },
    {
        numero_seguimiento: "ENV004",
        estado: "enviado",
        ciudad_destino: "Cordoba",
        peso: 3.1
    },
    {
        numero_seguimiento: "ENV005",
        estado: "pendiente",
        ciudad_destino: "Buenos Aires",
        peso: 0.8
    },
    {
        numero_seguimiento: "ENV006",
        estado: "entregado",
        ciudad_destino: "Mendoza",
        peso: 5.4
    },
    {
        numero_seguimiento: "ENV007",
        estado: "enviado",
        ciudad_destino: "Rosario",
        peso: 2.1
    },
    {
        numero_seguimiento: "ENV008",
        estado: "pendiente",
        ciudad_destino: "Mendoza",
        peso: 1.7
    },
    {
        numero_seguimiento: "ENV009",
        estado: "entregado",
        ciudad_destino: "Cordoba",
        peso: 3.6
    },
    {
        numero_seguimiento: "ENV010",
        estado: "enviado",
        ciudad_destino: "Buenos Aires",
        peso: 6.2
    }
])

// creacion de indice simple
db.envios.createIndex({ numero_seguimiento: 1 })


// creacion de indice compuesto
db.envios.createIndex({ estado: 1, ciudad_destino: 1 })