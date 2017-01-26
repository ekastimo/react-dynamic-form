# react-dynamic-form
A Simple But yet highly Dynamic Form with React and Bootstrap


![Example](http://i.imgur.com/vrhZ8KR.png)

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
import DynamicForm from "react-dynamic-form";

// or in ECMAScript 5
var DynamicForm = require('react-dynamic-form');
```

```js
<DynamicForm
    config={this.state.formConfig}
    controls={
        <button type="button" className="btn btn-default">
            <span className="glyphicon glyphicon-redo"/>&nbsp;Cancel
        </button>
    }
    ref={(form) => {
        this.boundForm = form;
    }}
    onSaveClicked={this.onSaveClicked.bind(this)}
/>
```


Reading the data; This returns an object or false in case the Form has errors
```js
 onSaveClicked() {
        console.log("SAve Clicked...");
        let data = this.boundForm.getData();
        if (data) {
            console.log("Data>>>", data);
        } else {
            console.log("Data Contains Errors...");
        }
    }
 ```

Setting Data is as Simple
```js
 let id = Math.floor((Math.random() * 1000) + 1);
        let data = {
            id: id,
            username: "newName",
            level: "staff",
            creator: "Foo barz",
            creationDate: "2017-01-26"
        };
        this.boundForm.setData(data);
```


Sample Form Config data
```js
var formConfig = {
             fields: [
                 {
                     name: "id",
                     title: "ID",
                     type: "text",
                     isRequired: true
                 },
                 {
                     name: "username",
                     title: "User Name",
                     type: "text",
                     isRequired: true,
                     showOnForm: false
                 },
                 {
                     name: "level",
                     title: "Level",
                     type: "select",
                     data: [{name: "super", title: "Super"}, {name: "admin", title: "Admin"}, {name: "staff", title: "Staff"}],
                     isRequired: true
                 },
                 {
                     name: "creator",
                     title: "Creator",
                     type: "text",
                     isRequired: true
                 },
                 {
                     name: "creationDate",
                     title: "Created Date",
                     type: "date",
                     isRequired: true
                 }
             ],
             primaryKey: "id"
         };
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

| Atribute   | M/O | Default   | Description                                                  |
|------------|-----|-----------|--------------------------------------------------------------|
| name       | M   | -         | This is the name of the item, similar to html name attribute |
| title      | M   |           | The lebel                                                    |
| type       | M   |           | Type of editor component, eg text,number,date,datetime       |
| isRequired | M   | false     | Self explanatory                                             |
| data       | O   | undefined | Array of name,title objects used in case type is select      |
| value      | O   | undefined | The initial Value                                            |
| pattern    | O   | true      | Regex pattern to be used for Validation                      |
| showOnForm | O   | true      | A value of false would hide this item from the view          |
