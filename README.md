I built a TV show finder App. It helps you find what series is popular right now and give you a summary to help you decide if you are going to watch them.

I used the Create React App toolchain for the base of my App. For state management, I used Redux and React Hooks and React Router for Navigation. For styling, I chose "Styled Components" with a style resetter.

My main focus was on performance. For that matter, I used SVGs for the needed graphics and relied on CSS animations to enrich the user's experience. The Movie DB API  provides the data for the App to work. Google's Lighthouse rate is 98/100.

The App consists of 3 screens. The 'Home' screen is just a landing page to lead you to the 'Discovery' screen. The 'Discovery' is where you can sort the top TV shows based on popularity, votes average, or air date. I also added a communication form. You can navigate between screens through a burger menu.

The Home screen consists of a descriptor and an animated link. As the link is an image I used animation to prompt users to click it. The link is a "dancing"  TV set made out of an SVG combined with an HTML Canvas* element to create the Static Noise on the screen. The link leads the user to the Discovery screen.

The Discovery screen calls the API to fetch the most popular shows for the user. It also provides a controlled form with radio buttons which allow fetching popular TV shows based on other criteria. The forms state is controlled with Redux. I created a specific reducer with actions for the form and combined it in the App's Redux Store.

A <TVShowList> component reads the state to fetch the correct data from the API. I used the 'useState' hook to save the data and pass them through props to dynamically created components to show them on screen. The created components are clickable images of the TV show poster. When clicked some details about the show appear, overlaying the poster.

The 'Contact Us' page is a controlled communication form with its own Redux reducer, combined at the App's Redux store.

The burger menu has the navigation menu and also a language selector. The app is by default in English and can be translated into Greek. The Redux Store holds the language's state. I also created a helper function to render the correct texts accordingly. The language is used also to make the API call to the correct language. 

 I created different folders to save my files and I used index files to save some lines when importing.

*, unfortunately, I found an iOS device for testing at the last minute, and I found out a small Canvas bug. That's why I did not render it on iOS devices until fixed.