# Cinetrack Project

## Table of Contents
- [Description](#description)
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Planning](#planning)
- [Project Timeline](#project-timeline)
- [Development Process](#development-process)
- [Challenges and Learnings](#challenges-and-learnings)
- [Wins](#wins)
- [Future Improvements](#future-improvements)
- [Reflections](#reflections)
- [Acknowledgements](#acknowledgements)

## Description
The CineTrack project was an exciting collaborative effort with my partner Vivian, completed as part of a 2-day sprint challenge. Our task was to create a React-based website that consumes an API and utilises the Bootstrap framework. We chose to build a dynamic movie gallery where users can explore films, express their preferences, and curate their own watch lists.

This project marked our first foray into React development, adding an extra layer of challenge and learning to the experience. Despite the time constraints, we managed to deliver a functional and interactive web application that showcases our newly acquired skills in modern web development.

## Demo
- **Live Site:** [Movie Gallery](https://main--ornate-dodol-ceff50.netlify.app/)
- **Repository:** [GitHub Repo](https://github.com/Filom3na/Project-2-react)

## Features
- Browse an extensive catalogue of movies
- Like movies to keep track of favourites
- Add movies to a personal watch list
- Search functionality to find specific movies
- Filter movies by category
- Responsive design for seamless use across devices
- Persistent user preferences using localStorage

## Technologies Used
- React for building the user interface
- Axios for making API requests
- React Router for handling navigation
- Bootstrap for responsive styling
- localStorage for client-side data persistence
- Replit as our collaborative coding environment
- Netlify for deploying the live site
- GitHub for version control
- Insomnia for testing API endpoints
- Visual Studio Code as our primary code editor
- Chrome DevTools for debugging

## Getting Started
To run this project locally:

1. Clone the repository:
   ```
   git clone https://github.com/Filom3na/Project-2-react.git
   cd Project-2-React-Movie-API
   ```
2. Install dependencies:
   ```
   npm install
   npm i axios react-router-dom react-bootstrap bootstrap
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:3000` (or the port specified in your console)

## Planning
Our planning phase was crucial to the project's success, especially given our tight two-day timeframe. Here's an overview of our planning process:

1. **Project Scope Definition:** 
   - We began by clearly defining what we wanted to achieve: a React-based movie gallery that allows users to browse, like, and create watch lists.
   - We prioritised features, deciding that the core functionality (displaying movies, liking, and watch lists) was essential, while search and filtering would be stretch goals.

2. **Wireframing:**
   - We sketched out rough wireframes for the main pages: the movie gallery, individual movie view, and user's watch list.
   - This helped us visualise the user interface and identify the components we'd need to build.

3. **Component Structure:**
   - Based on our wireframes, we mapped out the component structure for our React application.
   - We identified reusable components like MovieCard, which we could use in both the gallery and watch list views.

4. **Data Model:**
   - We examined the API documentation to understand the structure of the movie data we'd be working with.
   - We defined how we'd store user preferences (likes and watch list) using localStorage.

5. **Task Breakdown:**
   - We broke down the project into smaller, manageable tasks.
   - We used a simple Kanban board on a shared document to track our progress.

6. **Technology Choices:**
   - We decided to use Vite for setting up our React project due to its speed and simplicity.
   - We chose to use React Bootstrap for styling to ensure a responsive design without spending too much time on CSS.

7. **Timeline:**
   - We created a rough timeline for the two days, allocating more time to core feature development and leaving some buffer for troubleshooting and deployment.

8. **Collaboration Strategy:**
   - We agreed to use Replit for real-time collaboration, allowing us to pair program effectively.
   - We established communication channels and planned regular check-ins to ensure we were aligned throughout the development process.

This planning phase, although brief due to our time constraints, was invaluable. It gave us a clear direction, helped us anticipate challenges, and allowed us to make the most of our limited time.

## Project Timeline
Our 2-day sprint was intense and rewarding:

- **Day 1:**
  - Project kickoff and initial planning
  - Set up React environment with Vite
  - Connected to the movie API and tested endpoints
  - Defined the movie model and data structure
  - Created basic components and layout
  - Implemented data fetching logic

- **Day 2:**
  - Developed core features (liking, watch list)
  - Implemented search and filter functionality
  - Styled components with Bootstrap
  - Added responsive design elements
  - Conducted testing and bug fixes
  - Deployed the application to Netlify

## Development Process
We adopted a collaborative approach throughout the development process:

1. **Planning:** We started by sketching out our desired layout and defining the core features we wanted to implement.

2. **Setup:** We set up our development environment on Replit, which allowed us to code together in real-time.

3. **API Integration:** We used Insomnia to test the movie API endpoints and ensure we could fetch the required data.

4. **Component Development:** We broke down our application into smaller components and worked on them iteratively.

5. **Feature Implementation:** We prioritised core features and implemented them one by one, starting with movie display and moving on to interactive elements like liking and watch lists.

6. **Styling:** We used Bootstrap to ensure a responsive and visually appealing design across different devices.

7. **Testing and Refinement:** We continuously tested our application, fixing bugs and refining the user experience.

## Challenges and Learnings
- **React Learning Curve:** As our first React project, we had to quickly grasp concepts like component lifecycle, state management, and props.

- **Time Management:** The 2-day timeframe pushed us to prioritise features and make quick decisions.

- **Collaborative Coding:** Using Replit for pair programming was new to us. It was great for solving problems together but sometimes challenging when we wanted to work on different parts simultaneously.

- **State Management:** Implementing features like likes and watch lists taught us a lot about managing state in React and persisting data with localStorage.

- **API Integration:** Working with Axios and handling asynchronous operations improved our understanding of how to fetch and manage data in a React application.

## Wins
- Successfully delivered a functional and visually appealing application within the tight deadline.
- Implemented all core features we had planned, including the search and filter functionality.
- Gained practical experience with React, API integration, and responsive design.
- Developed strong pair programming skills and learned to leverage each other's strengths.

## Future Improvements
- Enhance the visual design for a more unique and polished user interface.
- Implement user authentication to allow for personalised experiences and server-side data persistence.
- Expand search and filter capabilities, possibly including genre-based filtering and sorting options.
- Add a rating system for movies and user reviews.
- Optimise performance, especially when loading and filtering large numbers of movies.

## Reflections
This project was a significant learning experience for both of us. It pushed us out of our comfort zones and into the world of modern web development with React. The time constraint, while challenging, helped us focus on delivering core functionality and taught us valuable lessons in prioritisation and efficient coding.

Working closely with a partner on this project was incredibly rewarding. It allowed us to bounce ideas off each other, solve problems collaboratively, and learn from each other's unique perspectives and skills.

## Acknowledgements
I want to express my heartfelt thanks to my project partner, Vivian. His creativity, problem-solving skills, and positive attitude were instrumental in the success of this project. This collaboration has not only resulted in a product we're proud of but has also helped us grow as developers and team players.
