import {JetView, plugins} from "webix-jet";

export default class TopView extends JetView {
    config() {

        const photo = {
            template: "<image class=\"mainphoto\" style=\"height:100%\" src=\"https://ladon.org/img/LADON_FINAL_WEB.png\"/>",
            height: 90,
            width: 200,
            borderless: true
        };

        const header = {
            view: "toolbar",
            padding: 0,
            elements: [
                photo,
                // {view: "label", label: this.app.config.name}
            ]
        };

        const menu = {
            view: "sidebar", id: "top:menu",
            width: 180, layout: "y", select: true,
            template: "<span class='webix_icon #icon#'></span> #value# ",
            data: [
                {value: "Neue Freigabe", id: "share", icon: "wxi-folder-open"},
                {value: "Freigegeben", id: "manageshared", icon: "wxi-pencil"},
                /*wjet::Menu*/
            ]
        };

        const ui = {
            rows: [{
                cols: [{
                    type: "space", rows: [header, menu]
                },
                {$subview: true}
                ]
            }
            ]
        }
        ;

        return ui;
    }

    init() {
        this.use(plugins.Menu, "top:menu");
    }
}
