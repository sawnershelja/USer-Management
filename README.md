Request Method:GET

Request URL: http://localhost:8080/fetchdata

RequestHeader:
content-type:application/json

Request Body:
{"userName":"sheljasawner"}

Request limit:
{"limit"=10}

Response(Success):
{"success":true}

Response HTTP Status Code:
200

Faliure Response:
{"success":false,"reason":"limit exceed"}

Response HTTP Status Code:
400

Failure Response:
{"success":false,"reason":"Not Fetch"}

Response HTTP Status Code:
400

Failure Response:
{"success":false,"reason":"Internal Server Error"}

Response HTTP Status Code:
500
