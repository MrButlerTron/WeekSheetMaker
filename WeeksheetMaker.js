function cloneGoogleSheet() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  //Build a date object for two weeks ahead
  var nextWeek = new Date();
  var moarDays = 9;
  nextWeek.setDate(nextWeek.getDate() + moarDays);
  
  //Build a date object for last week
  var lastWeek = new Date();
  var lessDays = 6;
  lastWeek.setDate(lastWeek.getDate() - lessDays);
//hideTargetSheet(ss, ss.getSheetByName("Week of "+ ( lastWeek.getMonth() + 1 ) + "/" + lastWeek.getDate() + "/" + lastWeek.getFullYear().toString().substr(2,2) ));
  //Hide it
  var lastWeekSheet = ss.getSheetByName(sheetName(lastWeek));
  lastWeekSheet.hideSheet();
  
  //Build a date object for this week
  var thisWeek = new Date();
  thisWeek.setDate(thisWeek.getDate() + 1);
  //Make it active
  ss.getSheetByName( sheetName(thisWeek)).activate();
  
  //Copy the template
  var sheet = ss.getSheetByName('Week of MM/DD/YY').copyTo(ss);
  sheet.setName(sheetName(nextWeek));
  sheet.showSheet();
  
  SpreadsheetApp.flush(); // Utilities.sleep(2000);
 
}

//Format the date string in the way we need it for the sheet names
//Takes a date object
//Returns a string
function sheetName(dateObject){
  return "Week of "+ ( dateObject.getMonth() + 1 ) + "/" + dateObject.getDate() + "/" + dateObject.getFullYear().toString().substr(2,2) ;
}
//Purpose:           Will hide the active sheet passed to it
//activeSpreadSheet: The entire spreadsheet object
//sheet:             The active sheet that will get hidden
//function hideTargetSheet(activeSpreadSheet, sheet){
//  
//  //if the sheet is not null get the index of the sheet
//  sheetIndex = sheet.getIndex() - 1;
//  Logger.log(sheet.getIndex());
//  //else gtfo
//  //set the active sheet to the index of the target sheet
//  targetSheet = SpreadsheetApp.setActiveSheet(activeSpreadSheet.getSheets()[sheetIndex]);
//  targetSheet.hideSheet();
//}