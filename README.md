# react-dynamic-form
It's a very simple minimal feature react.js form using bootstrap,
It's a configurable, functional table component that allows you build a Bootstrap Table more efficiency and easy in your React application.
react-dynamic-form supports these features:
- Simple CRUD API


![Example](http://i.imgur.com/Md4mnFp.png)

## Usage
### a.Install
```bash
npm install react-dynamic-form --save
```


### b.Import Module
To use react-bootstrap-table in your react app, you should import it first.
With a module bundler like [webpack](https://webpack.github.io/) that supports either CommonJS or ES2015 modules, use as you would anything else.
You can include source maps on your build system to debug on development. Don't forget to Uglify on production.

```js
// in ECMAScript 6
import ListGrid from "react-dynamic-form";

// or in ECMAScript 5
var ListGrid = require('react-dynamic-form');
```


### Quick Demo
```js
// Define the Table Columns
var tableConfig = {
    columns: [
        {name: "id", title: "Index", type: "text",},
        {name: "name", title: "Name", type: "text"},
        {name: "label", title: "Attribute", type: "text"},
        {name: "valueField", title: "Random Word", type: "text"}
    ],
    primaryKey: "id",
};
// Define the Table Data
var tableData = [
    {id: 0, name: "Kasasa", label: "blessed", valueField: "Foo bar0"},
    {id: 1, name: "Timothy", label: "favored", valueField: "Foo bar1"},
    {id: 2, name: "Emmanuel", label: "loved", valueField: "Foo bar2"},
    {id: 3, name: "Beloved", label: "desired", valueField: "Foo bar3"},
    {id: 4, name: "Alex", label: "all", valueField: "Foo bar0"},
    {id: 5, name: "Wamono", label: "things", valueField: "Foo bar1"},
    {id: 6, name: "Kent", label: "are", valueField: "Foo bar2"}
];

//Render as react Component
React.render(
        <ListGrid config={tableConfig} data={tableData} isPaged={true}/>, document.getElementById("app")
);
```


## Development
```react-dynamic-form``` dependencies on react 0.14.x and Bootstrap 3 written by ES6 and uses webpack for building and bundling.

You can use the following commands to prepare development
```bash
$ git clone https://github.com/ekastimo/react-dynamic-form.git
$ cd react-dynamic-form
$ npm install
```
Use npm to build the react-dynamic-form
```bash
$ npm run dev  #for development
$ npm run dev  #to bulid the library
$ npm run demo  #to bulid the demo, go to localhost:8000
```