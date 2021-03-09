'=================================================================================================================================================================================
'	Note that the demo application has the text "Available" on both the left frame, list of products, and in the middle, advertisement frame.
'		The Smart Identification on the First and Second Available objects needs to be turned off to have it actually use the text rather than the table location
'=================================================================================================================================================================================

Dim Category,BrowserExecutable, oShell 													'Initialize the variables to be used to enable data driving

While Browser("CreationTime:=0").Exist(0)   													'Loop to close all open browsers
	Browser("CreationTime:=0").Close 
Wend
BrowserExecutable = DataTable.Value("BrowserName") & ".exe"
SystemUtil.Run BrowserExecutable,"","","",3												'launch the browser specified in the data table
Set AppContext=Browser("CreationTime:=0")												'Set the variable for what application (in this case the browser) we are acting upon

AppContext.ClearCache																		'Clear the browser cache to ensure you're getting the latest forms from the application
AppContext.Navigate DataTable.Value("URL")												'Navigate to the application URL
AppContext.Maximize																		'Maximize the application to give the best chance that the fields will be visible on the screen
AppContext.Sync																			'Wait for the browser to stop spinning

Category = DataTable.GlobalSheet.GetParameter("Categories")									'Set the value for the Category that will be clicked on

Set PageContext = Browser("Browser").Page("Shopping Cart")									'Make the script more readable

PageContext.Sync             																'Wait for the browser DOM to state it is done processing
PageContext.WebElement(Category).Click														'Click on the Laptops on the screen in the left frame
PageContext.Sync             																'Wait for the browser DOM to state it is done processing
'=================================================================================================================================================================================
'	Example of a sync point
'=================================================================================================================================================================================
PageContext.WebElement("First Item in List").WaitProperty "visible",True, 3000				'Wait for the first text item in the list of products in the right frame to load before moving on, custom synchronization
PageContext.WebElement("First Available Product").Click										'Click on the first "Available" text in the list of products
PageContext.Sync             																'Wait for the browser DOM to state it is done processing
PageContext.WebElement("Second Available Product").Click									'Click on the second "Available" text in the list of products
PageContext.Sync             																'Wait for the browser DOM to state it is done processing
PageContext.SAPUIButton("Add to Cart").Click												'Click the Add to Cart button @@ script infofile_;_ZIP::ssf4.xml_;_
PageContext.Sync             																'Wait for the browser DOM to state it is done processing
PageContext.SAPUIToggleButton("Show Shopping Cart").Set "ON"								'Click the shopping cart icon @@ script infofile_;_ZIP::ssf5.xml_;_
PageContext.Sync             																'Wait for the browser DOM to state it is done processing
PageContext.SAPUIButton("Edit your cart").Click												'Clck the Edit button for the cart @@ script infofile_;_ZIP::ssf6.xml_;_
PageContext.Sync             																'Wait for the browser DOM to state it is done processing
PageContext.WebElement("DeleteButton").Click												'Click the delete button for the first line in the cart
PageContext.Sync             																'Wait for the browser DOM to state it is done processing
PageContext.SAPUIButton("Delete").Click														'Clck the Delete button in the pop-up frame @@ script infofile_;_ZIP::ssf8.xml_;_
PageContext.Sync             																'Wait for the browser DOM to state it is done processing
PageContext.SAPUIButton("Back").Click														'Click the left arrow in the upper right of the screen to go back to the main page (not the browser back button) @@ script infofile_;_ZIP::ssf9.xml_;_
PageContext.Sync             																'Wait for the browser DOM to state it is done processing
PageContext.SAPUIButton("Save Changes").Click												'Click the Save Changes text in the shopping cart slide out frame @@ script infofile_;_ZIP::ssf10.xml_;_
PageContext.Sync             																'Wait for the browser DOM to state it is done processing
PageContext.SAPUIToggleButton("Show Shopping Cart_2").Set "OFF"								'Click the cart button to collapse the cart slide out frame @@ script infofile_;_ZIP::ssf11.xml_;_
PageContext.Sync             																'Wait for the browser DOM to state it is done processing
Browser("Browser").Close																	'Close the browser at the end of the iteration

