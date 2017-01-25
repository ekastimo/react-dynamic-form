class DataCache {
    constructor() {
        this.tableConfig = {
            columns: [
                {name: "id", title: "Index", type: "text",},
                {name: "name", title: "Name", type: "text"},
                {name: "label", title: "Attribute", type: "text"},
                {name: "valueField", title: "Random Word", type: "text"}
            ],
            primaryKey: "id",
        };
        this.tableData = [
            {id: 0, name: "Kasasa", label: "blessed", valueField: "Foo bar0"},
            {id: 1, name: "Timothy", label: "favored", valueField: "Foo bar1"},
            {id: 2, name: "Emmanuel", label: "loved", valueField: "Foo bar2"},
            {id: 3, name: "Beloved", label: "desired", valueField: "Foo bar3"},
            {id: 4, name: "Alex", label: "all", valueField: "Foo bar0"},
            {id: 5, name: "Wamono", label: "things", valueField: "Foo bar1"},
            {id: 6, name: "Kent", label: "are", valueField: "Foo bar2"},
            {id: 7, name: "Mirembe", label: "working", valueField: "Foo bar3"},
            {id: 8, name: "Grace", label: "good", valueField: "Foo bar0"},
            {id: 9, name: "Ayiko", label: "in Him", valueField: "Foo bar1"},
            {id: 10, name: "Benedict", label: "was", valueField: "Foo bar2"},
            {id: 11, name: "Egima", label: "Life", valueField: "Foo bar3"},
            {id: 12, name: "Kent", label: "light", valueField: "Foo bar0"},
            {id: 13, name: "Kisakye", label: "of men", valueField: "Foo bar1"},
            {id: 14, name: "Christine", label: "Children", valueField: "Foo bar2"},
            {id: 15, name: "Gabbriella", label: "desired", valueField: "Foo bar3"}
        ];
    }
}
const DATA = new DataCache();
export default DATA;