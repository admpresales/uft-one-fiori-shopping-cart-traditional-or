'=================================================================================================================================================================================
'	Note that the demo application has the text "Available" on both the left frame, list of products, and in the middle, advertisement frame.
'		The Smart Identification on the First and Second Available objects needs to be turned off to have it actually use the text rather than the table location
'=================================================================================================================================================================================

Dim Category																				'Initialize the variables to be used to enable data driving

Category = DataTable.GlobalSheet.GetParameter("Categories")									'Set the value for the Category that will be clicked on

Set PageContext = Browser("Browser").Page("Shopping Cart")									'Make the script more readable

Browser("Browser").ClearCache																'The app sometimes has changes that require cache to be cleared
Browser("Browser").Navigate ("https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/cart/webapp/index.html#")	'Navigate to the application
Browser("Browser").Maximize																	'Maximize the screen to ensure object recognition is better with AI
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

