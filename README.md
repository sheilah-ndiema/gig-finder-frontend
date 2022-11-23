# Project Philosophy:

Gig-Finder is a Job Board application for quick jobs.It's a platform that will provide users an easy way to find jobs online.

# Features:

The home page displays a description of the application, and a instructs the user to click on the Register link in the navigation in order to view all of the categories available.

Upon clicking on "category" in the navigation there is a dropdown menu at the top of the page to allow you to sort the listings by category.

Below the dropdown menu is a form where users can create new categories.

Below the form is all of the listings which are displayed with a title, body, and category and have the ability to be edited as well as deleted.

If you would like to create a new listing click "New Listing" in the navigation which will take you to a form to fill out.Once you are done filling out the form click "Create Listing" which will automatically take you to the "listings" page where you can see your new listing that you created.

# Description of app:

This is a single page full-stack CRUD application that has a back-end that was creating using Ruby and a sinatra API which stores data which is then fetched from : http://localhost:9292/categories, http://localhost:9292/job-listings and http://localhost:9292/users. The front-end was created using React and Javascript

On the front end the application uses a total of 9 components: App.js, Home.js, NavBar.js, NewListing.js, Category.js, Filter.js and JobCard.js, Filter.js and Register.js

The application has 5 different client-side routes using React-RouterDOM: Home, About, Category and New-Listing and Register.

Styling was done using CSS

# Technologies used:

React
Javascript
HTML
CSS
Ruby
Sinatra
Active Record

# Installation

Fork and clone both the front-end and back-end repositories

## Back-end

cd into the project directory
run 'bundle install'
run 'rake db:migrate'
run start-server to start the server

## Front-end

cd into the project directory
run 'npm install'
run 'npm start' and the application will open into browser

<a href="https://gig-finder-app.vercel.app/">front-end link</a>

<a href="https://github.com/ChristabelMasakhwe/phase-3-sinatra-react-project">Github backend repo link</a>
