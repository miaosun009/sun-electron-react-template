import { app, BrowserWindow } from "electron";
import * as path from "path";
import { format as formatUrl } from "url";
const isDevelopment = process.env.NODE_ENV !== "production";
let win: BrowserWindow;
app.on("ready", () => {
    win = new BrowserWindow({ width: 800, height: 600 });
    (win as any).openDevTools({ mode: "bottom" });
    if (isDevelopment) {
        win.loadURL(`http://localhost:8080`);
    } else {
        win.loadURL(formatUrl({
            pathname: path.join(__dirname, "index.html"),
            protocol: "file",
            slashes: true,
        }));
    }
});
app.on("window-all-closed", () => {
    app.quit();
});
