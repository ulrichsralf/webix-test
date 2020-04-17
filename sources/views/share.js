import {JetView} from "webix-jet";

export default class MyView extends JetView {
    config() {

        return webix.require({
            "//cdn.webix.com/pro/edge/filemanager/filemanager.js": true,
            "//cdn.webix.com/pro/edge/filemanager/filemanager.css": true
        }).then(() => {

            return {
                rows: [
                    {
                        "view": "toolbar", "css": "webix_dark", "padding": {"right": 10, "left": 10},
                        "elements": [
                            {
                                "height": 0,
                                "cols": [
                                    {
                                        "view": "label",
                                        "label": "L A D O N | Freigabebereich",
                                        "height": 0,
                                        "width": 0
                                    },
                                    {
                                        "view": "template",
                                        "role": "placeholder",
                                        "borderless": 1,
                                        "width": 40
                                    },
                                    {
                                        "label": "Hauptverzeichnis",
                                        "value": "34569754",
                                        "options": ["34569754", "12345678", "54633546"],
                                        "view": "combo",
                                        "editable": true,
                                        "width": 275,
                                        "labelWidth": 125
                                    }
                                ]
                            }
                        ],
                        "height": 60
                    },
                    {
                        cols: [
                            {
                                view: "filemanager",
                                id: "fm",
                                url: "http://dev.mind-consulting.de:3200/"
                                // url: "http://localhost:8081/",
                                // override: new Map([[fileManager.services.Backend, CustomBackend]]),
                            },
                            {
                                rows: [
                                    {
                                        "view": "template",
                                        /* "template": "Hier kannst Du per Drag-and-Drop die Auswahl der Dateien zusammenstellen, die Du freigeben möchtest.", */
                                        "role": "placeholder",
                                        "height": 57
                                    },
                                    {
                                        "view": "toolbar",
                                        "height": 57,
                                        "cols": [
                                            {
                                                "view": "button",
                                                "type": "icon",
                                                "icon": "mdi mdi-backspace",
                                                "height": 0,
                                                "width": 175,
                                                "label": "Zurücksetzen"
                                            },
                                            {
                                                "view": "template",
                                                "role": "placeholder",
                                                "borderless": 1,
                                                "width": 0
                                            },
                                            {
                                                "label": "Freigeben",
                                                "view": "button",
                                                "type": "icon",
                                                "icon": "mdi mdi-share",
                                                "height": 0,
                                                "width": 175,
                                                "click": function () {
                                                    this.$scope.show("manageshared");
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "view": "datatable",
                                        "id": "shareform",
                                        drag: true,
                                        minHeight: 380,
                                        select: "row", columns: [
                                            {
                                                id: "name",
                                                template: "#id#",
                                                header: "Dateiname",
                                                fillspace: true,
                                                sort: "string"
                                            },
                                            {
                                                header: "Erstellt am",
                                                template: "#date#",
                                                sort: "date",
                                                "width": 180,
                                                fillspace: false,
                                                adjust: "data"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]

            };

        });
    }

// init(view) {
    // const file = {
    //     value: "pixeljuice.pdf",
    //     date: new Date(),
    //     size: 7231,
    //     id: "/pixeljuice.pdf",
    //     type: "document"
    // };
    // var fm = this.$$("fm");
    // fm.attachEvent("onChange", function () {
    //     console.log("state " + JSON.stringify(fm.getState()));
    // });
    // fm.getService("operations").open(file);
    // this.$$("$template7").hide();
// }
}
