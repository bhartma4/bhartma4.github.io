(function(window, undefined) {
  var dictionary = {
    "890e496c-34d0-4ae5-9c9d-9a0138702ffb": "Events-Mobile",
    "f9d62a94-381a-406c-b1dc-85de38e37cce": "FAQ-Mobile",
    "12577f98-54c0-478e-89c2-bc751b9de1ce": "Amenities-Mobile",
    "ccd644bd-dbf2-413e-a337-e18417378152": "Explore-Mobile",
    "36f18027-6da7-44fc-9256-771af708afa5": "Home-Mobile",
    "5234a8a3-5b5c-497a-8d40-fc947c2788d3": "Template 1",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);