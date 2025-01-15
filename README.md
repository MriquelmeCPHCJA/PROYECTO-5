<div align="center">
    <h1>Proyecto 5: Aplicación Web con React<h1>
</div>
<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=vscode,react,vite,mui,github" />
  </a>
</p>

<div align="center">
    <img alt="Static Badge" src="https://img.shields.io/badge/UDD-DWFS-orange">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/MriquelmeCPHCJA/UDD-PROYECTOS?color=green">
    <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/t/MriquelmeCPHCJA/UDD-PROYECTOS">
</div>


##  🏨 Introducción

En este proyecto, tuve la oportunidad de trabajar con APIs públicas y mostrar la información en una interfaz de usuario.

Este proyecto consta de: React + Vite, Material UI y country-flag-icons para construir interfaces de usuario. 

## Tabla de Contenidos
1. [Requisitos](#requisitos)  
2. [Instalación](#instalación)  
3. [Estructura del Proyecto](#estructura-del-proyecto)  
4. [Implementación de Archivos y Componentes](#implementación-de-archivos-y-componentes)  
5. [Funcionamiento](#funcionamiento)  



##  ✅ Requisitos
- React
- Vite
- Material UI
- Country-flag-icons
- React Router DOM


##  ⚙️ Instalación
1. **Clonar el repositorio:**
   ```
   git clone https://github.com/MriquelmeCPHCJA/PROYECTO-5.git
   ```
2. **Acceder al directorio del proyecto:**
   ```
   cd PROYECTO-5
   ```
3. **Instalar las dependencias:**
   ```
   npm install
   ```
4. **Configurar el archivo `.env`:**
   Crear un archivo `.env` con los siguientes contenidos:
   ```
   VITE_API_KEY=f76d94834aca1cb630bca53ecf4e4c56

   VITE_API_IMG_POSTER=https://image.tmdb.org/t/p/original
   ```
5. **Ejecutar la aplicación:**
   ```
   npm run dev
   ```
---
---

## 📂 Estructura del Proyecto

```plaintext
📦 PROYECTO-5
├── 📂 src
│     ├── 📂 assets
│     │       └── 📂 images
│     │                 ├── 404.webp
│     │                 ├── Error.webp
│     │                 └── fondo.webp
│     ├── 📂 components
│     │        ├── CardMovie.jsx
│     │        ├── ErrorBoundary.jsx
│     │        ├── Footer.jsx
│     │        ├── Layout.jsx
│     │        ├── ModalContact.jsx
│     │        ├── MovieInfo.jsx
│     │        ├── NavBar.css
│     │        └── NavBar.jsx
│     │
│     ├── 📂 pages
│     │       ├── Contact.jsx
│     │       ├── Home.jsx
│     │       ├── MovieDetails.jsx
│     │       ├── MovieList.jsx
│     │       └── NotFound.jsx
│     │
│     ├── main.jsx
│     └── Router.jsx
│
├── 📜 .env
└── 📜 index.html
```

---

## ⚙️ Implementación de Archivos y Componentes

#### 1.1. `CardMovie.jsx`
Diseño de la Card en donde se mostrará informaciób básica de la pélicula como la carátula y el título en el idioma seleccionado

#### 1.2. `ErrorBoundary.jsx`
Este componente es una clase que envuelve otros componentes para capturar errores y mostrar un mensaje amigable al usuario.

#### 1.3. `Footer`

Componente pié de página

#### 1.4. `Layout`

Componente en donde se une la estructura del sitio.

#### 1.5. `ModalContact`

Componente Modal para la sección de contacto.

#### 1.6.`MovieInfo`

Componente que contiene el diseño de despliegue de información más detallada de la película seleccionada.

#### 1.7. `NavBar`

#### NavBar.css ->
- Estilo de color de NavBar
#### NavBar.jsx -> 
- Componente de Navbar y NavBar hamburguesa


### 3. **Pages**
#### 3.1.  `Contact.jsx`
Página de Contácto.
#### 3.2. `Home.jsx`
Página de Bienvenida del Proyecto.
#### 3.3. `MovieDetails.jsx`
Página de detalle de película seleccionada.
#### 3.4. `MovieList.jsx`
Página donde se listan las películas.
#### 3.5. `NotFound.jsx`
Página de Error para rutas no encontradas / no existentes.

### 4. **Router**
Define las rutas principales de la aplicación, incluyendo:
- `/` Página de Bienvenida.
- `/movies` Catálogo de Películas.
- `/movie/:id` Detalle de un película.
- `/contact` Formulario de contacto.
- `/*` Cualquier otra ruta (Lanza a NotFound.jsx)


## ✅ Funcionamiento

1. **Inicio**: La aplicación comienza con una página de bienvenida que incluye un botón de ingreso.
2. **MoviseList**: El usuario puede navegar en el catálogo de peliculas que incluye paginación para más visualizaciones y en idioma español por defecto, puede cambiar el idioma en el selctor superior derecho y vaer la lista de películas en el idioma seleccionado.
3. **MovieDetails**: Al seleccionar una película, se muestra información detallada sobre ésta en el idioma seleccionado anteriormente, en caso de que la pelicula no tenga información en el idioma seleccionado, ésta se mostrara por defecto en Inglés.
4. **Contacto**: Permite enviar un mensaje de contacto, en donde se abrira un modal con un mensaje personalizado con los datos del usuario.

## 🌎 Despliegue
La aplicación está desplegada en **Render.com**. Puedes acceder a ella en la siguiente dirección: [LINK](https://proyecto-5-tau.vercel.app/)

## 📧 Contácto
**Marcelo Riquelme**

**Email**: luriquelme.dwfs1@bootcampudd.cl