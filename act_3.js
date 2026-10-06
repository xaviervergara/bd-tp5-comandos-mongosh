// 1) Filtrar los envios con estado "entregado" y agruparlos por ciudad_destino para contar cuantos se entregaron en cada ciudad.

db.envios.aggregate([
  {
    $match: {
      estado: "entregado",
    },
  },
  {
    $group: {
      _id: "$ciudad_destino",
      cantidad_entregados: { $sum: 1 },
    },
  },
]);

// 2) Calcular el peso total de todos los envios de la coleccion.

db.envios.aggregate([
  {
    $group: {
      _id: null,
      peso_total: { $sum: "$peso" },
    },
  },
]);

// 3) Mostrar el numero_seguimiento en mayusculas y el estado.

db.envios.aggregate([
  {
    $project: {
      _id: 0,
      numero_seguimiento: { $toUpper: "$numero_seguimiento" },
      estado: 1,
    },
  },
]);

// 4) Crear el campo tipo_carga utilizando $cond segun el peso del envio.

db.envios.aggregate([
  {
    $addFields: {
      tipo_carga: {
        $cond: {
          if: { $gt: ["$peso", 20] },
          then: "Pesada",
          else: "Ligera",
        },
      },
    },
  },
]);
