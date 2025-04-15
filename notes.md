link to the backend guiide
https://notjust.notion.site/Full-stack-Ecomm-Backend-123b0ec93c5a8049a554d40985a946f7

[
{"id":1,"name":"Bluetooth Earbuds","description":"Wireless earbuds with 20h battery","image":"earbuds1.jpg","price":49.99},
{"id":2,"name":"Water Bottle","description":"24oz insulated bottle","image":"bottle1.jpg","price":19.99},
{"id":3,"name":"Cotton T-Shirt","description":"Soft basic tee","image":"shirt1.jpg","price":14.99},
{"id":4,"name":"Desk Lamp","description":"Adjustable LED lamp","image":"lamp1.jpg","price":29.99},
{"id":5,"name":"Wireless Charger","description":"10W Qi charger","image":"charger1.jpg","price":15.99},
{"id":6,"name":"Yoga Mat","description":"Non-slip mat","image":"yoga1.jpg","price":24.99},
{"id":7,"name":"Bluetooth Speaker","description":"Portable speaker","image":"speaker1.jpg","price":59.99},
{"id":8,"name":"Notebook","description":"Leather journal","image":"notebook1.jpg","price":12.99},
{"id":9,"name":"Kitchen Scale","description":"Digital scale","image":"scale1.jpg","price":18.99},
{"id":10,"name":"Laptop Stand","description":"Adjustable stand","image":"stand1.jpg","price":22.99},
{"id":11,"name":"Phone Case","description":"Protective case","image":"case1.jpg","price":9.99},
{"id":12,"name":"Backpack","description":"15\" laptop backpack","image":"pack1.jpg","price":34.99},
{"id":13,"name":"Coffee Mug","description":"Ceramic mug","image":"mug1.jpg","price":8.99},
{"id":14,"name":"Sunglasses","description":"UV protection","image":"glasses1.jpg","price":19.99},
{"id":15,"name":"Power Bank","description":"10000mAh battery","image":"power1.jpg","price":24.99},
{"id":16,"name":"Keyboard","description":"Wireless keyboard","image":"keyboard1.jpg","price":29.99},
{"id":17,"name":"Mouse","description":"Optical mouse","image":"mouse1.jpg","price":12.99},
{"id":18,"name":"HDMI Cable","description":"6ft cable","image":"cable1.jpg","price":7.99},
{"id":19,"name":"Desk Organizer","description":"Storage tray","image":"organizer1.jpg","price":14.99},
{"id":20,"name":"Air Fryer","description":"3.5qt capacity","image":"fryer1.jpg","price":59.99},
{"id":21,"name":"Smart Watch","description":"Fitness tracker","image":"watch1.jpg","price":79.99},
{"id":22,"name":"Pillow","description":"Memory foam","image":"pillow1.jpg","price":24.99},
{"id":23,"name":"Blanket","description":"Soft fleece","image":"blanket1.jpg","price":19.99},
{"id":24,"name":"Umbrella","description":"Compact folding","image":"umbrella1.jpg","price":12.99},
{"id":25,"name":"Wallet","description":"RFID blocking","image":"wallet1.jpg","price":14.99},
{"id":26,"name":"Sneakers","description":"Running shoes","image":"shoes1.jpg","price":49.99},
{"id":27,"name":"Headphones","description":"Over-ear","image":"headphones1.jpg","price":39.99},
{"id":28,"name":"Webcam","description":"1080p HD","image":"webcam1.jpg","price":34.99},
{"id":29,"name":"Plant","description":"Succulent","image":"plant1.jpg","price":9.99},
{"id":30,"name":"Cookware Set","description":"3-piece set","image":"cookware1.jpg","price":44.99}
]

Here are the typical HTTP status codes for CRUD operations (Create, Read, Update, Delete) in a RESTful API:

### **Create (POST)**

| Status Code                | Meaning                                                                                      |
| -------------------------- | -------------------------------------------------------------------------------------------- |
| `201 Created`              | Success - Resource created successfully (include `Location` header with URI to new resource) |
| `400 Bad Request`          | Invalid request data (malformed JSON, validation errors)                                     |
| `401 Unauthorized`         | Authentication required                                                                      |
| `403 Forbidden`            | Authenticated but not authorized to create                                                   |
| `409 Conflict`             | Resource already exists (e.g., duplicate unique field)                                       |
| `422 Unprocessable Entity` | Semantic errors (e.g., missing required fields)                                              |

---

### **Read (GET)**

| Status Code        | Meaning                                                         |
| ------------------ | --------------------------------------------------------------- |
| `200 OK`           | Success - Returns requested resource(s)                         |
| `204 No Content`   | Success but no body (e.g., empty list)                          |
| `400 Bad Request`  | Invalid query parameters                                        |
| `401 Unauthorized` | Authentication required                                         |
| `403 Forbidden`    | No permission to access resource                                |
| `404 Not Found`    | Resource doesn’t exist                                          |
| `304 Not Modified` | Cached version is still valid (If-None-Match/If-Modified-Since) |

---

### **Update (PUT/PATCH)**

| Status Code               | Meaning                                       |
| ------------------------- | --------------------------------------------- |
| `200 OK`                  | Success - Returns updated resource            |
| `204 No Content`          | Success but no response body                  |
| `400 Bad Request`         | Invalid update data                           |
| `401 Unauthorized`        | Authentication required                       |
| `403 Forbidden`           | Not authorized to update                      |
| `404 Not Found`           | Resource doesn’t exist                        |
| `409 Conflict`            | State conflict (e.g., version mismatch)       |
| `412 Precondition Failed` | Fails `If-Match`/`If-Unmodified-Since` checks |

---

### **Delete (DELETE)**

| Status Code              | Meaning                                       |
| ------------------------ | --------------------------------------------- |
| `200 OK`                 | Success - Returns deleted resource (optional) |
| `204 No Content`         | Success - No response body                    |
| `401 Unauthorized`       | Authentication required                       |
| `403 Forbidden`          | Not authorized to delete                      |
| `404 Not Found`          | Resource doesn’t exist                        |
| `405 Method Not Allowed` | Delete not supported for resource             |

---

### **Special Cases**

| Status Code                 | Meaning                  |
| --------------------------- | ------------------------ |
| `429 Too Many Requests`     | Rate limiting            |
| `500 Internal Server Error` | Unexpected server error  |
| `503 Service Unavailable`   | API down for maintenance |

---

### **Best Practices**

- **POST** → Use `201 Created` for new resources (include `Location` header).
- **GET** → `200 OK` (with data) or `404 Not Found`.
- **PUT/PATCH** → `200 OK` (with updated data) or `204 No Content`.
- **DELETE** → `204 No Content` (preferred) or `200 OK`.
- Always include **error details** in the response body for `4xx`/`5xx` errors.

Would you like examples of response bodies for these statuses?
