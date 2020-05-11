Browser("Shopping Cart").Page("Shopping Cart").Sync             							'Wait for the browser DOM to state it is done processing
Browser("Shopping Cart").Page("Shopping Cart").WebElement("Laptops").Click					'Click on the Laptops on the screen in the left frame
Browser("Shopping Cart").Page("Shopping Cart").Sync             							'Wait for the browser DOM to state it is done processing
Browser("Shopping Cart").Page("Shopping Cart").WebElement("First Item in List").WaitProperty "visible",True, 3000	'Wait for the first text item in the list of products in the right frame to load before moving on, custom synchronization
Browser("Shopping Cart").Page("Shopping Cart").WebElement("First Available Product").Click	'Click on the first "Available" text in the list of products
Browser("Shopping Cart").Page("Shopping Cart").Sync             							'Wait for the browser DOM to state it is done processing
Browser("Shopping Cart").Page("Shopping Cart").WebElement("Second Available Product").Click	'Click on the second "Available" text in the list of products
Browser("Shopping Cart").Page("Shopping Cart").Sync             							'Wait for the browser DOM to state it is done processing
Browser("Shopping Cart").Page("Shopping Cart").SAPUIButton("Add to Cart").Click				'Click the Add to Cart button @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Shopping Cart").Page("Shopping Cart").Sync             							'Wait for the browser DOM to state it is done processing
Browser("Shopping Cart").Page("Shopping Cart").SAPUIToggleButton("Show Shopping Cart").Set "ON"	'Click the shopping cart icon @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Shopping Cart").Page("Shopping Cart").Sync             							'Wait for the browser DOM to state it is done processing
Browser("Shopping Cart").Page("Shopping Cart").SAPUIButton("Edit your cart").Click			'Clck the Edit button for the cart @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Shopping Cart").Page("Shopping Cart").Sync             							'Wait for the browser DOM to state it is done processing
Browser("Shopping Cart").Page("Shopping Cart").WebElement("DeleteButton").Click				'Click the delete button for the first line in the cart
Browser("Shopping Cart").Page("Shopping Cart").Sync             							'Wait for the browser DOM to state it is done processing
Browser("Shopping Cart").Page("Shopping Cart").SAPUIButton("Delete").Click					'Clck the Delete button in the pop-up frame @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Shopping Cart").Page("Shopping Cart").Sync             							'Wait for the browser DOM to state it is done processing
Browser("Shopping Cart").Page("Shopping Cart").SAPUIButton("Back").Click					'Click the left arrow in the upper right of the screen to go back to the main page (not the browser back button) @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Shopping Cart").Page("Shopping Cart").Sync             							'Wait for the browser DOM to state it is done processing
Browser("Shopping Cart").Page("Shopping Cart").SAPUIButton("Save Changes").Click			'Click the Save Changes text in the shopping cart slide out frame @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Shopping Cart").Page("Shopping Cart").Sync             							'Wait for the browser DOM to state it is done processing
Browser("Shopping Cart").Page("Shopping Cart").SAPUIToggleButton("Show Shopping Cart_2").Set "OFF"	'Click the cart button to collapse the cart slide out frame @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Shopping Cart").Page("Shopping Cart").Sync             							'Wait for the browser DOM to state it is done processing

