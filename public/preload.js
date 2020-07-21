const {
    contextBridge,
    ipcRenderer
} = require("electron");

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
    "api", {
        //send: (channel, data) => {
        request: (channel, data) => {
            // whitelist channels
            let validChannels = ["login", "logout"];
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, data);
            }
        },
        //receive: (channel, func) => {
        // response: (channel, func) => {
        //     let validChannels = ["fromMain"];
        //     if (validChannels.includes(channel)) {
        //         // Deliberately strip event as it includes `sender` 
        //         ipcRenderer.on(channel, (event, ...args) => fn(...args));
        //     }
        // }
    }
);