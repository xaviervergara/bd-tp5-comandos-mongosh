// buscar un paquete por su numero_seguimiento con explain
db.envios.find({ numero_seguimiento: "ENV005" }).explain("executionStats");

// reportar el tamaño total de los índices(totalIndexSize).
db.envios.stats();
