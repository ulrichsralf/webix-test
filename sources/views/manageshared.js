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
                                    "label": "Verzeichnis",
                                    "value": "1",
                                    "data": buckets,
                                    "view": "combo",
                                    "height": 0,
                                    "editable": true,
                                    "id": 1582064501683,
                                    "width": 285,
                                    "labelWidth": 75
                                }
                            ]
                        }
                    ],
                    "id": 1582064501675,
                    "height": 60
                },
                {
                    "view": "datatable",
                    "id": "shareform",
                    "minHeight": 380,
                    select: "row", columns: [

                        {"id": "name", "header": "Freigabename", "fillspace": true, "sort": "string", "hidden": false},
                        {
                            "id": "gueltigBis",
                            "header": "Gültig bis",
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
                                name: "gueltigBis",
                                view: "datepicker",
                                left: 200,
                                top: 90,
                                width: 350,
                                label: "bis"
                            },
                            {
                                label: "Link",
                                view: "text",
                                disabled: true,
                                left: 20,
                                top: 190,
                                width: 420,
                                name: "link"
                            },
                            {
                                name: "passwort",
                                label: "Password",
                                disabled: true,
                                view: "text",
                                left: 20,
                                top: 140,
                                width: 420
                            },
                            {
                                label: "Copy",
                                type: "form",
                                view: "button",
                                left: 450,
                                top: 140,
                                width: 100
                            },
                            {
                                label: "Copy",
                                type: "form",
                                view: "button",
                                left: 450,
                                top: 190,
                                width: 100
                            },
                            {
                                view: "button",
                                type: "form",
                                left: 20,
                                top: 240,
                                width: 100,
                                label: "Löschen",

                            }
                        ]
                    }]
                },

            ],
            "id": 1582064501674
        };
    }

    init(_$view, _$) {
        //   const sharedc = new webix.DataCollection({data: freigaben});
        // this.$$("sharetable").sync(sharedc);
        //  this.$$("shareform").bind(sharedc);
    }
}
