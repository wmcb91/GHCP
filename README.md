[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)


## Will McBride

# A Golf Round Tracker App (Will be handicap calculator in the future)

This game has been created for General Assembly's Web Development Immersive.
HTML, SCSS, JavaScript, jQuery, Ruby on Rails, and Bootstrap were used to
complete this project.

Client URL: https://wmcb91.github.io/ghcp/
Client-Repo URL: https://github.com/wmcb91/GHCP
API-Repo URL: https://github.com/wmcb91/GHCP-API

Wireframe: [![wireframe](http://imgur.com/a/PxxlR])]
ERD: [![wireframe](http://imgur.com/a/3ZtzM)]


# User Stories:

- As a user, I want to be able to create an account
- As a user, I want to be able to change my password and sign out of the application
- As a user, I want to see a relevant dashboard when I sign in to my account
- As a user, I want to be able to easily add, edit and delete my rounds of golf
- As a user, I want to see my handicap and the rounds I played that are being used to calculate it
- As a user, I want to be able to see all of my rounds of golf on the click of a button
- As a user, I want to use this app on my mobile device easily so I can add rounds from the course
- As a user, I want to be able to track my handicap over time
- As a user, I want to be enter the course name and tee’s I played and have app know the slope and rating
- As a user, I want to be able to use the app live on the golf course to track more information about my round

# Planning

I started my planning by writing user stories and whiteboarding a wireframe.
After I had an idea of the basic features and functions of the app I was able
to start my ERD. I wanted a user to have the ability to track multiple family
members or friends if they desired on one account so I decided to make a one to
many relationship for users to profiles. Profiles would have many rounds of golf
, but each particular round would belong to just one profile. I knew this API
setup would be able to handle the basic function of the app so it was my starting
point. My goal was to build my API first with the three tables and then grow the
API later if necessary. After passing all tests, I would start my client and
borrow get the user CRUD actions functioning. Then the profile CRUD actions, and
lastly, the rounds.

# Development Story

On day 1, I spent most of the day planning because I knew I went in to last
project with less of a plan and it hindered my progress.

On day 2, was when I really started diving in to my API. I wrote tests for the
profiles and rounds tables I created and got them to pass. I wrote the outlining
HTML and applied the theme of my tic-tac-toe game as my basic SCSS after gutting
out all unrelated code.

Over the weekend I was making progress in my client, but again, got caught up in
things I should not have been worrying about at the time. Next project I am
going to use sticky notes to prevent this from happening. I also had the psuedo
code for the handicap calculation written out and ready for when I started that
feature. By Monday night I was able to click into profiles after login and create
profiles. It was a battle to get the profiles profiles to print at the correct
times but I will use the method I used going forward so it was well worth it.

On Tuesday, I should have been writing much more psuedo code and using the go
slow to move fast philosophy because I created an enormous amount of bugs during
development. I should have moved on to the next feature more quickly instead of
spending time getting a certain feature just right. By Tuesday night I was able
to finish the most basic features, but I had not even started with my handicap
calculating, so the name of the app is currently not accurate. It is curre



# Future Changes
- Create handicap calculation

- Add more UI logic including error warnings for sign-up, profile creation and
messages to new users.

- Create new table for courses and turn rounds into a join table for the many to
many relationship.

- Create show all rounds feature, edit round feature and delete round feature.

- Create mobile format so you can use on golf course.



# Bugs:
 - No known bugs.
