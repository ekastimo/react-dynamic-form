class DataCache {
    constructor() {
        this.formConfig = {
            fields: [
                {
                    name: "id",
                    title: "ID",
                    type: "text",
                    isRequired: true,
                    showOnForm: false
                },
                {
                    name: "username",
                    title: "User Name",
                    type: "text",
                    isRequired: true,
                    showOnForm: true
                },
                {
                    name: "level",
                    title: "Level",
                    type: "select",
                    data: [{name: "super", title: "Super"}, {name: "admin", title: "Admin"}, {name: "staff", title: "Staff"}],
                    isRequired: true,
                    showOnForm: true
                },
                {
                    name: "creator",
                    title: "Creator",
                    type: "text",
                    isRequired: true,
                    showOnForm: true
                },
                {
                    name: "creationDate",
                    title: "Created Date",
                    type: "date",
                    isRequired: true,
                    showOnForm: true
                }
            ],
            primaryKey: "id",
            data: {}
        };
    }
}
const DATA = new DataCache();
export default DATA;