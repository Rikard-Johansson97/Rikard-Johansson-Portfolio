migrate((db) => {
  const collection = new Collection({
    "id": "31dklwqbl5dw9aq",
    "created": "2023-02-14 15:34:14.232Z",
    "updated": "2023-02-14 15:34:14.232Z",
    "name": "projects",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "twiypvba",
        "name": "field",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "h1khkz19",
        "name": "field1",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": []
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("31dklwqbl5dw9aq");

  return dao.deleteCollection(collection);
})
