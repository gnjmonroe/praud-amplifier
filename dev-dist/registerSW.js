/* eslint-disable @typescript-eslint/quotes */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/dev-sw.js?dev-sw", {
    scope: "/",
    type: "classic",
  });
}
