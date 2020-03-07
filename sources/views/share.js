import {JetView} from "webix-jet";
import CustomBackend from "./CustomBackend";

export default class MyView extends JetView {
    config() {

        return webix.require({
            "//cdn.webix.com/pro/edge/filemanager/filemanager.js": true,
            "//cdn.webix.com/pro/edge/filemanager/filemanager.css": true
        }).then(() => {

            class CustomBackend extends fileManager.services.Backend {
                // you can use calls to real backend server
                files(id) {
                    return webix.ajax("//docs.webix.com/filemanager-backend/files", { id });
                }
                // or just return a data promise
                getInfo() {
                    return Promise.resolve({
                        stats:{
                            free: 52 * 1000 * 1000,
                            total: 250 * 1000 * 1000,
                            used: 198.4 * 1000 * 1000,
                        }
                    });
                }
                // some methods may require remote url, instead of data
                icon(type, size) {
                    //serve image/jpg for all icons
                    return `//docs.webix.com/filemanager-backend/icons/${size || "small"}/image/jpg.svg`;
                }
            }
            return {
                view: "filemanager",
                // url: "https://docs.webix.com/filemanager-backend/"
                url: "http://localhost:8081/",
                override: new Map([[fileManager.services.Backend, CustomBackend]]),
            };
        });
    }

    init(view) {

    }
}
