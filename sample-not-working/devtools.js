chrome.devtools.panels.create(
    "Bug 333670353 - With Service Worker",
    "./assets/48.png",
    "./panel.html",
    (panel) => {
        console.log("devtools.panel.create", panel);
});
