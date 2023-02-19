migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("31dklwqbl5dw9aq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "md2lgx0p",
    "name": "poster",
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
  collection.schema.removeField("md2lgx0p")

  return dao.saveCollection(collection)
})
