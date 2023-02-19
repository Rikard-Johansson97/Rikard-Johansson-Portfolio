migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("31dklwqbl5dw9aq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4s1mi6bm",
    "name": "images",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("31dklwqbl5dw9aq")

  // remove
  collection.schema.removeField("4s1mi6bm")

  return dao.saveCollection(collection)
})
