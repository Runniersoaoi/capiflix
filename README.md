# Capybara Videos CRUD

Este proyecto es una aplicación web para administrar videos relacionados con capibaras. Permite realizar operaciones de Crear, Leer, Actualizar y Eliminar (CRUD) sobre los videos. La aplicación está construida con React y utiliza `pnpm` como gestor de paquetes.

## Características

- Crear, editar y eliminar videos de capibaras.
- Listar todos los videos disponibles.
- Navegación entre vistas utilizando `react-router`.
- Formularios interactivos y validados con `react-form`.

## Tecnologías utilizadas

- **React**: Biblioteca para construir la interfaz de usuario.
- **pnpm**: Gestor de paquetes para manejar las dependencias del proyecto.
- **react-router**: Para la navegación entre diferentes vistas de la aplicación.
- **react-form**: Para la gestión de formularios y validaciones.

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/capybara-videos-crud.git
   cd capybara-videos-crud
   ```

2. Instalar las dependencias con `pnpm`:

   ```bash
   pnpm install
   ```

3. Iniciar el servidor de desarrollo:

   ```bash
   pnpm start
   ```

4. Acceder a la aplicación en tu navegador en `http://localhost:3000`.

## Estructura del proyecto

```
capybara-videos-crud/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx             # Configuración de rutas
│   ├── index.jsx           # Punto de entrada
├── README.md
├── package.json
├── pnpm-lock.yaml
```

## Scripts disponibles

- `pnpm start`: Inicia el servidor de desarrollo.
- `pnpm build`: Construye la aplicación para producción.
- `pnpm test`: Ejecuta las pruebas.
- `pnpm lint`: Ejecuta el linter en el código fuente.

## Navegación

La aplicación utiliza `react-router` para definir las siguientes rutas:

- `/`: Página principal con la lista de videos.
- `/create`: Página para agregar un nuevo video.
- `/edit/:id`: Página para editar un video existente.

## Gestión de formularios

Los formularios de creación y edición de videos están implementados con `react-form`, lo que asegura una experiencia de usuario fluida y validaciones robustas.

### Campos del formulario

- **Título del video**: Texto obligatorio.
- **Categoría**: Selección de categorías predefinidas (ej., Naturaleza, Agua, etc.).
- **Enlace de la imagen**: URL válida para la miniatura del video.
- **Enlace del video**: URL válida para el video.
- **Descripción**: Texto opcional para describir el video.

---

¡Disfruta administrando tus videos de capibaras!
