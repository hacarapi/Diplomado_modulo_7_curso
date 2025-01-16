# Practica 1

- Huber Acarapi Mamani
  
DIPLOMADO EN FULLSTACK DEVELOPER BACK END Y FRONT END SEXTA VERSIÓN
Mod7: Desarrollo Front End con React

[https://github.com/hacarapi/Diplomado_modulo_7_curso](https://github.com/hacarapi/Diplomado_modulo_7_curso) 

# Intalacion
Creamos el proyecto curso-de-react

```cmd
npm create vite@latest curso-de-react -- --template react
```
Instalamos las dependencias
```cmd
npm install
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Requerimiento:
Revisar la forma de trabajo que usa React: https://react.dev/learn/thinking-in-react

El objetivo es llevar toda esa lógica a nuestro proyecto. En base al uso de componentes, props,
variables de estado , etc.
● No es necesario crear un nuevo proyecto
● Trabajar sobre el proyecto que ya tenemos
● El proyecto ya tiene código, se puede usar el mismo código o modicarlo.
● Después de llevar todo el código, validar que sea funcional.

```json
dataProduct: [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
    { category: 'Electronics', price: '$199', stocked: true, name: 'iPhone' },
    { category: 'Electronics', price: '$99', stocked: true, name: 'Headphones' },
    { category: 'Electronics', price: '$254', stocked: true, name: 'radio' },
    { category: 'Electronics', price: '$1024', stocked: true, name: 'Computer' },
    { category: 'Furniture', price: '$399', stocked: false, name: 'Chair' },
    { category: 'Furniture', price: '$715', stocked: true, name: 'desk' },
    { category: 'Furniture', price: '$531', stocked: true, name: 'easy chair' },
    { category: 'Clothing', price: '$29', stocked: true, name: 'T-Shirt' },
    { category: 'Clothing', price: '$77', stocked: false, name: 'Pants' },
    { category: 'Clothing', price: '$43', stocked: true, name: 'shirt' },
  ],
```