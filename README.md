# Task Master CLI
## Descripción

Task Master CLI es una aplicación de línea de comandos (CLI) desarrollada en Node.js que te permite gestionar tareas de manera fácil y rápida.

## Instrucciones de Uso
### Instalación
	npm install

## Construcción y Ejecución
### Para construir el proyecto, utiliza el siguiente comando:
	npm run build

### Luego para ejecutar el proyecto
	npm start 

### Modo Desarrollo
	npm run dev

### Nota sobre Inquirer
La clase Inquirer se encuentra en las dependencias, pero actualmente no se utiliza debido a conflictos con otras dependencias. Se recomienda revisar la documentación y la configuración del proyecto si deseas habilitar el uso de Inquirer en el futuro.

### Archivo nodemon.json
Se ha incluido un archivo nodemon.json en el proyecto para abordar conflictos durante la ejecución. Asegúrate de revisar y ajustar la configuración según sea necesario.

### Dependencias Principales

	colors: ^1.4.0
	Proporciona estilos y colores para mejorar la presentación en la consola.
	
	inquirer: ^9.2.12
	Biblioteca para la creación de interfaces de línea de comandos interactivas.
	
	nodemon: ^3.0.1
	Herramienta que observa cambios en los archivos y reinicia automáticamente la aplicación.
	
	uuid: ^9.0.1
	Generador de identificadores únicos (UUID).

### Dependencias de Desarrollo
	@types/inquirer: ^9.0.7
	@types/node: ^20.9.0
	@types/uuid: ^9.0.7
	ts-node: ^10.9.1
	ts-node-dev: ^2.0.0
	typescript: ^5.2.2

## Licencia
Este proyecto está bajo la Licencia ISC.
