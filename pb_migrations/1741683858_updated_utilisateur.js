/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3991748807")

  // update collection data
  unmarshal({
    "name": "utilisateurs"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3991748807")

  // update collection data
  unmarshal({
    "name": "utilisateur"
  }, collection)

  return app.save(collection)
})
