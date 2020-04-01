import {JetView} from "webix-jet";
import {freigaben} from "../models/freigaben";
import {buckets} from "../models/buckets";

export default class StartView extends JetView {
    config() {
        return {
            "rows": [
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
                                    "id": 1582064501677,
                                    "width": 0
                                },
                                {
                                    "label": "Hauptverzeichnis",
                                    "value": "1",
                                    "data": buckets,
                                    "view": "combo",
                                    "height": 0,
                                    "editable": true,
                                    "id": 1582064501683,
                                    "width": 275,
                                    "labelWidth": 125
                                }
                            ]
                        }
                    ],
                    "id": 1582064501675,
                    "height": 60
                },
                {
                    cols: [
                        {
                            rows: [
                                {
                                    "view": "datatable",
                                    "id": "shareform",
                                    "minHeight": 380,
                                    select: "row", columns: [

                                        {
                                            "id": "name",
                                            "header": "Freigabename",
                                            "fillspace": true,
                                            "sort": "string",
                                            "hidden": false
                                        },
                                        {
                                            "id": "aktivBis",
                                            "header": "Aktiv bis",
                                            "sort": "date",
                                            "fillspace": false,
                                            "hidden": false,
                                            "adjust": "data"
                                        },
                                        {
                                            "id": "erstelltAm",
                                            "header": "Erstellt am",
                                            "sort": "date",
                                            "fillspace": false,
                                            "hidden": false,
                                            "adjust": "data"
                                        }

                                    ], on: {
                                        onAfterSelect: function (id) {

                                            var view = $$("details");
                                            view.setValues(this.getItem(id));
                                            view.config.masterView = this;
                                            view.config.masterId = id;
                                        }
                                    },
                                    //   pager: "pagerU",
                                    data: freigaben,
                                    autoheight: false, scroll: false
                                },
                                // {view: "pager", id: "pagerU", size: 5},
                                {
                                    id: "details",
                                    height: 350,
                                    view: "form", elements: [{
                                        view: "abslayout", cells: [
                                            {
                                                name: "name",
                                                view: "text",
                                                left: 20,
                                                top: 40,
                                                width: 530,
                                                label: "Name"
                                            },
                                            {
                                                name: "aktiv",
                                                view: "switch",
                                                left: 20,
                                                top: 90,
                                                width: 200,
                                                value: 1,
                                                label: "Aktiv"
                                            },
                                            {
                                                name: "aktivBis",
                                                view: "datepicker",
                                                left: 200,
                                                top: 90,
                                                width: 350,
                                                label: "bis",
                                                stringResult: true,
                                                format: "%d %M %Y"
                                            },
                                            {
                                                name: "passwort",
                                                label: "Passwort",
                                                disabled: true,
                                                view: "text",
                                                left: 20,
                                                top: 140,
                                                width: 460
                                            },
                                            {
                                                view: "button",
                                                type: "icon",
                                                icon: "mdi mdi-content-copy",
                                                left: 490,
                                                top: 140,
                                                width: 60
                                            },
                                            {
                                                label: "Link",
                                                view: "text",
                                                disabled: true,
                                                left: 20,
                                                top: 190,
                                                width: 460,
                                                name: "link"
                                            },
                                            {
                                                view: "button",
                                                type: "icon",
                                                icon: "mdi mdi-content-copy",
                                                left: 490,
                                                top: 190,
                                                width: 60
                                            },
                                            {
                                                "borderless": 1,
                                                top: 240,
                                                "height": 50,
                                                "cols": [
                                                    {
                                                        "view": "button",
                                                        "type": "icon",
                                                        "icon": "mdi mdi-folder-remove",
                                                        "left": 20,
                                                        "width": 140,
                                                        "label": "Löschen"
                                                    },
                                                    {
                                                        "view": "template",
                                                        "role": "placeholder",
                                                        "borderless": 1,
                                                        "width": 272
                                                    },
                                                    {
                                                        "view": "button",
                                                        "type": "icon",
                                                        "icon": "mdi mdi-content-save",
                                                        "width": 140,
                                                        "label": "Speichern"
                                                    }]
                                            }]
                                    }]
                                }]
                        },
                        {
                            "view": "datatable",
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
                        }]
                }],
            "id": 1582064501674
        };
    }

//    init(_$view, _$) {
    //   const sharedc = new webix.DataCollection({data: freigaben});
    // this.$$("sharetable").sync(sharedc);
    //  this.$$("shareform").bind(sharedc);
//    }
}
