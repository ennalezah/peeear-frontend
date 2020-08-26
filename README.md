# PEEEAR (Backend)

Demo: <a href="https://youtu.be/issaJ04pfGU" target="_blank">https://youtu.be/issaJ04pfGU</a>

PEEEAR is an app to help anyone improve their coding skills by pair programmming on projects that they're interested in.

To use PEEEAR, you'll need to clone the following repositories:

* Backend: <a href="https://github.com/ennalezah/peeear-backend" target="_blank">https://github.com/ennalezah/peeear-backend</a>

* Frontend: <a href="https://github.com/ennalezah/peeear-frontend" target="_blank">https://github.com/ennalezah/peeear-frontend</a>

## Overview

PEEEAR is a single-page app built with a Ruby on Rails API backend and a React/Redux for frontend. It allows users to browse projects posted by all users and contact the project's poster by email to let the poster know that they're interestted in pairing for the project. Users are also able to post projects.

Some features to be added in the future:

* User authentication

* Users can comment on project postings

* Projects can be filtered by difficulty and/or category

## Installation

Clone this repository and the frontend repository. Open your editor of choice, and open both folders. You'll need to have two separate terminals open.

#### Terminal 1 (backend):

1. To get to the backend directory, enter ```cd peeear-backend```
2. Enter ```bundle install```
3. Run ```rails s``` to start the server ```http://localhost:3000/```
4. When you're done using the app, hold down CTRL + C to exit server.

#### Terminal 2 (frontend):

1. To get to the frontend directory enter ```cd peeear-frontend```
2. Run ```npm start``` and ```http://localhost:3001/``` should open up in your browser. 
4. When you're done using the app, hold down CTRL + C to exit server.

## Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/ennalezah/peeear-backend. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## License
The project is available as open source under the terms of the <a href="https://github.com/ennalezah/peeear-backend/blob/master/LICENCE" target="_blank">MIT License</a>.

## Code of Conduct
Everyone interacting in the PEEEAR project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the <a href="https://github.com/ennalezah/peeear-backend/blob/master/CODE_OF_CONDUCT.md" target="_blank">code of conduct</a>.