import {JetView} from "webix-jet";

export default class MyView extends JetView {
    config() {

        return webix.require({
            "//cdn.webix.com/pro/edge/filemanager/filemanager.js": true,
            "//cdn.webix.com/pro/edge/filemanager/filemanager.css": true
        }).then(() => {


            return {
                view: "filemanager",
                id: "fm",
                // url: "https://docs.webix.com/filemanager-backend/"
                url: "http://localhost:8081/",
                // override: new Map([[fileManager.services.Backend, CustomBackend]]),
            };

        });
    }

    init(view) {
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
    }
}
