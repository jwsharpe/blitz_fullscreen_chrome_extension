document.addEventListener("DOMContentLoaded", () => {
  const launcher = document.getElementById("launcher");
  launcher.focus();
  launcher.select();
});

document.addEventListener("keydown", e => {
  const key = e.keyCode;

  if (key === 13) {
    const url = createURL();
    if (e.shiftKey) {
      chrome.tabs.create({ url: url });
    } else {
      chrome.tabs.update({ url: url });
    }
  }
});

function createURL() {
  const url = document.getElementById("launcher").value;
  const ddg = "http://www.duckduckgo.com/?q=";
  const http = "http://";

  if (url.includes(".")) {
    return http + url;
  } else {
    return ddg + url;
  }
}
