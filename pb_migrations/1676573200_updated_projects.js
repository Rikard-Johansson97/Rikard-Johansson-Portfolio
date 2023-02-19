migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("31dklwqbl5dw9aq")

  // remove
  collection.schema.removeField("4s1mi6bm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "twiypvba",
    "name": "images",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "twiypvba",
    "name": "field",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
