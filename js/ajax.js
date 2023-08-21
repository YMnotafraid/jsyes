function myajax(options) {
  const url = options.url;
  const type = (options.type || "GET").toUpperCase();
  const data = options.data;
  const xhr = new XMLHttpRequest();

  xhr.open(type, url, true);

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

//promise封装
function mypajax(options) {
  return new Promise((resolve, reject) => {
    const url = options.url;
    const type = (options.type || "GET").toUpperCase();
    const data = options.data;
    const xhr = new XMLHttpRequest();

    xhr.open(type, url, true);

    if (type === "GET") {
      xhr.send();
    } else {
      xhr.send(data);
    }

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.responseText, xhr.responseType);
        } else {
          reject(xhr.responseType);
        }
      }
    };
  });
}
