I built a TV show finder App. It helps you find what series is popular right now and give you a summary to help you decide if you are going to watch them.

I used the Create React App as my base. For state management, I used Redux and React Hooks and React Router for Navigation. For styling, I chose "Styled Components" with a style resetter.

My main focus was on performance. For that matter, I used SVGs for the needed graphics and relied on CSS animations to enrich the user's experience. The Movie DB API  provides the data. Google's Lighthouse rate is 98/100.

"TV Finder" consists of 3 screens. The 'Home' screen is just a landing page to lead you to the 'Discovery' screen. The 'Discovery' is where you can sort the top TV shows based on popularity, votes average, or air date. I also added a communication form. You can navigate between screens through a burger menu.

The Home screen consists of a descriptor and an animated link. As the link is not a classic button, I used animation to prompt users to click it. The link is a "dancing"  TV set made out of an SVG combined with an HTML Canvas* element to create the Static Noise on the screen. The link leads the user to the Discovery screen.

The Discovery screen calls the API to fetch the most popular shows for the user. It also provides radio buttons to change the criteria of the fetched data. I used Redux to control the forms state. I created a specific reducer with actions and combined it in the App's Redux Store.

A TVShowList component reads the state to fetch the correct data from the API. I used the 'useState' hook to save the data and pass them through props to dynamically created components to show them on screen. 

The created components are clickable images of the TV show poster. Users can access more details by clicking them.

The 'Contact Us' page is a controlled communication form with its own Redux reducer, combined at the App's Redux store.

The burger menu has the navigation menu and also a language selector. The Redux store holds the language state, which can be English or Greek. I created a helper function to render the correct texts. The language also affects the API call. 

 My folder system separates Pages, Components, Assets, Redux reducers, and helpers. I use index files to save some lines during imports.

*, unfortunately, I found an iOS device for testing at the last minute, and I found out a small Canvas bug. That's why I did not render it on iOS devices until fixed.