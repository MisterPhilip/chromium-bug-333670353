# chromium-bug-333670353
Repository for replicating the Manifest v3 + Service Worker + DevTools Panel bug

https://issues.chromium.org/issues/333670353


# Replication instructions

## Load unpacked extensions
Load unpacked extensions from both `/sample-not-working` and `/sample-working`. 
![Loaded extensions](https://github.com/MisterPhilip/chromium-bug-333670353/blob/main/extension-list.png?raw=true)

## Open a new page and navigate to a working web page
You must not be on a URL that starts with `chrome://`, e.g., go to the [bug report page](https://issues.chromium.org/issues/333670353).

## Open the devtools window
Once the devtools is loaded, you _should_ see two new tabs at the top starting with `Bug 333670353 - `. 
If you see both `Bug 333670353 - Without Service Worker` annd `Bug 333670353 - With Service Worker`, then you are not impacted by the issue.


If you have successfull replicated the issue, you will only see one tab at the top `Bug 333670353 - Without Service Worker`.
![Loaded extensions](https://github.com/MisterPhilip/chromium-bug-333670353/blob/main/devtools.png?raw=true)
