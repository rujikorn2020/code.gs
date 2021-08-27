function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate()
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getData() {
  var spreadSheetId = "xxx"; //แก้ 1
  var dataRange = "Data!A2:F"; //แก้ 2
  var range = Sheets.Spreadsheets.Values.get(spreadSheetId, dataRange);
  var values = range.values;
  return values;
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
}
