migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("31dklwqbl5dw9aq")

  // remove
  collection.schema.removeField("5awybor2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zfulowvt",
    "name": "description",
    "type": "editor",
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
    "id": "5awybor2",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zfulowvt",
    "name": "info",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
