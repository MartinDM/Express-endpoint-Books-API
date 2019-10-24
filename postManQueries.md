{
	"info": {
		"_postman_id": "9f0abc19-01ae-4d4c-8798-1095f1fddf1e",
		"name": "New Books",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "POST a book",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "1060a77c-7e72-4d20-99a7-600fb04bcba3",
						"exec": [
							"pm.test(\"Successful POST request\", function () {",
							"    pm.expect(pm.response.code).to.be.oneOf([201,202]);",
							"});",
							"pm.globals.unset(\"variable_key\");"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "    {\n        \"title\": \"Power of Habit\",\n        \"genre\": \"Science\",\n        \"author\": \"Charles Duhigg\"\n    }"
				},
				"url": {
					"raw": "http://localhost:4000/api/books/",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4000",
					"path": [
						"api",
						"books",
						""
					]
				}
			},
			"response": []
		},
		{
			"name": "GET all books",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "1060a77c-7e72-4d20-99a7-600fb04bcba3",
						"exec": [
							"pm.test(\"Successful POST request\", function () {",
							"    pm.expect(pm.response.code).to.be.oneOf([201,202]);",
							"});",
							"pm.globals.unset(\"variable_key\");"
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": ""
				},
				"url": {
					"raw": "http://localhost:4000/api/books/",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4000",
					"path": [
						"api",
						"books",
						""
					]
				}
			},
			"response": []
		},
		{
			"name": "GET a book by ID",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "1060a77c-7e72-4d20-99a7-600fb04bcba3",
						"exec": [
							"pm.test(\"Successful POST request\", function () {",
							"    pm.expect(pm.response.code).to.be.oneOf([201,202]);",
							"});",
							"pm.globals.unset(\"variable_key\");"
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"type": "text",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"title\": \"Power of Habit 3\",\n    \"genre\": \"Science\",\n    \"author\": \"Charles Duhigg\",\n    \"__v\": 0\n}"
				},
				"url": {
					"raw": "http://localhost:4000/api/books/5da5ab54cc29d3903e0cab1a",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4000",
					"path": [
						"api",
						"books",
						"5da5ab54cc29d3903e0cab1a"
					]
				}
			},
			"response": []
		},
		{
			"name": "DELETE a book by ID",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "1060a77c-7e72-4d20-99a7-600fb04bcba3",
						"exec": [
							"pm.test(\"Successful POST request\", function () {",
							"    pm.expect(pm.response.code).to.be.oneOf([201,202]);",
							"});",
							"pm.globals.unset(\"variable_key\");"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"type": "text",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"title\": \"Power of Habit 3\",\n    \"genre\": \"Science\",\n    \"author\": \"Charles Duhigg\",\n    \"__v\": 0\n}"
				},
				"url": {
					"raw": "http://localhost:4000/api/books/5da494f9dfabae22dd971b86",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4000",
					"path": [
						"api",
						"books",
						"5da494f9dfabae22dd971b86"
					]
				}
			},
			"response": []
		},
		{
			"name": "PUT a new book",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "1060a77c-7e72-4d20-99a7-600fb04bcba3",
						"exec": [
							"pm.test(\"Successful POST request\", function () {",
							"    pm.expect(pm.response.code).to.be.oneOf([201,202]);",
							"});",
							"pm.globals.unset(\"variable_key\");"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"title\": \"War & Peace - The Sequel\",\n    \"genre\": \"Science\",\n    \"author\": \"Martin DM\"\n}"
				},
				"url": {
					"raw": "http://localhost:4000/api/books/",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4000",
					"path": [
						"api",
						"books",
						""
					]
				}
			},
			"response": []
		},
		{
			"name": "PATCH a book",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "1060a77c-7e72-4d20-99a7-600fb04bcba3",
						"exec": [
							"pm.test(\"Successful POST request\", function () {",
							"    pm.expect(pm.response.code).to.be.oneOf([201,202]);",
							"});",
							"pm.globals.unset(\"variable_key\");"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PATCH",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"type": "text",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"read\":false,\n    \"_id\": \"5da494f9dfabae22dd971b8b\"\n}"
				},
				"url": {
					"raw": "http://localhost:4000/api/books/5da494f9dfabae22dd971b8b",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4000",
					"path": [
						"api",
						"books",
						"5da494f9dfabae22dd971b8b"
					]
				}
			},
			"response": []
		}
	]
}