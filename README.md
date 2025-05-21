# Suma de Matrices con Flask y JavaScript

Este proyecto permite al usuario ingresar dos matrices de dimensiones personalizadas, realizar su suma en un servidor Flask y mostrar el resultado en una página web.

## 📂 Estructura del Proyecto
```
/sumar_matrices_project
│── app.py                  # Servidor Flask
│── matriz_operacion.py     # Módulo para sumar matrices
│── /templates
│   └── index.html           # Interfaz web
│── /static
│   └── script.js            # Lógica en JavaScript
```

## 🚀 Instalación y Ejecución
### 1️⃣ Requisitos
- Python 3
- Flask y Flask-CORS (si no están instalados, usa: `pip install flask flask-cors`)

### 2️⃣ Ejecutar el servidor
Ejecuta el siguiente comando en la terminal:
```sh
python app.py
```

### 3️⃣ Acceder a la Aplicación
- Desde el mismo dispositivo: `http://localhost:5000/`
- Desde otro dispositivo en la misma red: `http://<IP_DEL_SERVIDOR>:5000/`

## 📝 Descripción de Archivos
### `app.py`
Maneja el servidor Flask y la API para recibir las matrices, realizar la suma y devolver el resultado.

### `matriz_operacion.py`
Contiene la función `sum_matrices()`, que suma dos matrices verificando que tengan las mismas dimensiones.

### `templates/index.html`
Interfaz web donde el usuario ingresa las dimensiones de las matrices y ve el resultado.

### `static/script.js`
Lógica en JavaScript para:
- Generar dinámicamente los inputs de las matrices.
- Enviar los datos al servidor mediante `fetch()`.
- Mostrar la matriz resultante en la página.

## 🖥️ Funcionamiento Básico
1. El usuario ingresa el número de filas y columnas.
2. Se generan dos matrices con inputs para ingresar valores.
3. Al hacer clic en "Sumar Matrices", los datos se envían al servidor.
4. Flask realiza la suma y devuelve el resultado.
5. La página muestra la matriz resultante.




