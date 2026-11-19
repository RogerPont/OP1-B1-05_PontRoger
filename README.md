# Pràctica 05 — Gestor de Tasques (Express + MongoDB)

API REST feta amb **Node.js**, **Express** i **MongoDB (Mongoose)** per gestionar una llista de tasques amb persistència a base de dades. Permet crear, consultar, actualitzar i eliminar tasques, controlant també el cost, les hores previstes, les hores reals i la data de finalització automàtica (`finished_at`).

---

## Requisits

- **Node.js** (v18 o superior)
- **MongoDB** (en local al port `27017` o amb MongoDB Compass)
- **Postman** (per provar les peticions de l'API)

---

## Passos per instal·lar i arrencar el projecte

### 1. Obrir una terminal a la carpeta del projecte

```bash
cd Gestor_de_Tasques
```

### 2. Instal·lar les dependències

```bash
npm install
```

### 3. Crear el fitxer `.env`

Crea un fitxer anomenat `.env` a l'arrel del projecte (pots copiar el contingut de `.env.example`) amb aquestes variables:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/taskmanager
```

### 4. Arrencar el servidor

En mode desenvolupament (es reinicia sol quan fas canvis):

```bash
npm run dev
```

O en mode normal:

```bash
npm start
```

Quan arrenqui correctament, veuràs per consola:

```text
Connectat correctament a MongoDB
Servidor en funcionament a http://localhost:3000
Per parar el servidor fes Ctrl+C
```

---

## Estructura dels fitxers

```text
Gestor_de_Tasques/
|-- controllers/
|   `-- taskController.js       # Funcions CRUD (crear, obtenir, actualitzar, eliminar)
|-- models/
|   `-- Task.js                 # Esquema i model de Mongoose per a les tasques
|-- postman/
|   `-- gestor-tasques.postman_collection.json
|-- routes/
|   `-- taskRoutes.js           # Rutes de l'API (/api/tasks)
|-- .env.example                # Exemple de variables d'entorn
|-- .gitignore                  # Fitxers ignorats per Git (node_modules/ i .env)
|-- app.js                      # Configuració d'Express i rutes
|-- index.js                    # Connexió a MongoDB i inici del servidor
|-- package.json                # Dependències i scripts del projecte
`-- README.md                   # Guia d'ús del projecte
```

---

## Rutes de l'API (`/api/tasks`)

| Mètode   | Ruta              | Funcionalitat                                           |
|----------|-------------------|---------------------------------------------------------|
| `POST`   | `/api/tasks`      | Crea una tasca nova a MongoDB                           |
| `GET`    | `/api/tasks`      | Retorna totes les tasques guardades                     |
| `GET`    | `/api/tasks/:id`  | Busca i retorna una tasca concreta pel seu `_id`        |
| `PUT`    | `/api/tasks/:id`  | Modifica una tasca (si `completed: true`, desa la data) |
| `DELETE` | `/api/tasks/:id`  | Esborra una tasca de la base de dades pel seu `_id`     |

### Exemple de JSON per crear una tasca (`POST /api/tasks`)

```json
{
  "title": "Dissenyar una pàgina web",
  "description": "Crear una pàgina web responsiva amb HTML, CSS i JavaScript",
  "cost": 500,
  "hours_estimated": 20,
  "image": "https://example.com/images/task1.jpg"
}
```

### Exemple de JSON per completar una tasca (`PUT /api/tasks/:id`)

```json
{
  "completed": true,
  "hours_real": 15,
  "image": "https://example.com/images/updated_task.jpg"
}
```

---

## Proves amb Postman

Dins la carpeta `postman/` hi ha el fitxer `gestor-tasques.postman_collection.json` amb les 7 peticions de prova (incloent casos d'èxit `200`/`201` i casos d'error `400`/`404`) i les seves respostes guardades com a *Example*.
