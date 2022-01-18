# Car Project - Helper... Thing

The whole idea of it is to help you with your car project by telling you what you need to swap in order to get to that power (right now, due to time restrain, only monitoring HP).

## Quick List of what's happening and where.

First npm i on server and client might be good idea, since there are few dependencies.

### Client

Uses React and nextJS + there some material-UI sprinkled in.

- index is just a index page
- list will do requests for make, model, gen and engine and will display clickable options. Once they're selected user is rerouted to /build/info
- info page will show all of the information about car components and parts to swap them with, once the selected hp is bigger than what part can handle it will start animation to show it should be swapped

### Server

Uses Express with mySQL as database(not the smallest may I add.) and Sequelize as ORM

- standart structure, index === index, router === router, models(sequelize) === models, all requests are handled in controller

### Database

- For now it's dummed down to just few tables: makes, models, generations, engines and parts
- Everything has a one to many relationship apart from gen and engines (quite a few engines can be used in diff. cars, that's why many to many)
