function loadURLvariables() {
  var url = window.location.href.split('?'),
      params, item;
  if(url.length > 1) {
    params = url[1].split('&');
    console.log(params);
    for(var i in params) {
      item = params[i].split('=');
      window[item[0]] = Number(item[1]);
      if(item[1] === "true") {
        window[item[0]] = true;
      } else if(item[1] === "false") {
        window[item[0]] = false;
      }
    }
  }
}