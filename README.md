# eventopia
Eventopia is a full stack web application built using c# .NET framework for backend and React library for frontend.

Functionalities

- Upon logging in, users are directed to an activity dashboard where they can view and sign up for various activities. The dashboard employs infinite scrolling, dynamically loading new activities as the user scrolls down.

- When exploring a specific activity, users can access detailed information about the activity, view the participants, and check if they are following any particular user.

- Additionally, a chat system is integrated using SignalR. This enables real-time communication across the application, allowing users from different locations to see comments as they are posted.

- The creator of an activity has the ability to manage and update the activity, including submitting updates.

- Moreover, users attending an activity can view its details and cancel their attendance, subsequently removing their name from the attendee list.

- Returning to the activities section, users can also follow other users, as it is an essential feature of a social app.

- Furthermore, there is a profile editor available for users to modify their profile information as desired. Additionally, a photo widget is implemented, enabling users to upload photos.

- The application also provides filters that allow users to see the list of users they are following or who their followers are.

- Lastly, on the activities page, users can apply filters to personalize the activities displayed, including selecting a future date.


In this project, I have done:
- Establishing the developer environment
- Developing a multi-project solution by utilizing the DotNet CLI and create-react-app utility to create an ASP.NET Core WebAPI and React application
- Understanding Clean Architecture and implementing the CQRS + Mediator pattern
- Configuring and setting up ASP.NET Core identity for authentication
- Integrating React with Typescript
- Implementing client-side login and registration functionality in our React application
- Utilizing React Router for routing
- Using AutoMapper in ASP.NET Core
- Creating visually appealing user interfaces usingTailwind
- Adding a photo upload widget and creating user profile pages
- Constructing reusable form inputs with validation using React Final Form
- Implementing paging, sorting, and filtering functionalities
- Enabling real-time web communication through SignalR for a chat feature in our application
- AutoMapper usage and MediatR packages in the .Net projects
- Building a multi-project solution with .Net Core
- Using Entity Framework Core as the Object Relational Mapper
- Adding Identity and Authentication using .Net Core Identity

Installation:
- Clone the Repository
- Install .NET Dependencies (dotnet restore)
- Install Node.js Dependencies (npm install)
- Build and Run the Project (dotnet build && dotnet run)
- Start the React Development Server (npm start)
