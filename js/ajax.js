function myajax(options) {
  const xhr = new XMLHttpRequest();
  const type = (options.type || "GET").toUpperCase();
  const data = options.data;
  const url = options.url;

  xhr.open(url, type, true);

  if (type === "GET") {
    xhr.send();
  } else {
    xhr.send(data);
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        options.success && options.success(xhr.responseText, xhr.responseXML);
      } else {
        options.error && options.error(xhr.responseText);
      }
    }
  };
}
