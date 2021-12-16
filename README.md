# Sudoku

## Project Links

- [Github Repo]()
- [Deployed Site]()

## Project Description

Explore the Rick and Morty universe as Mr. Meeseeks guide you through the different location. Each location will contain different residing characters to meet, and the individual info is presented as well.

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Landing Page](https://imgur.com/a/petBG3E)
- [Game Page](https://imgur.com/a/Sq8scf4)
- [About Page](https://imgur.com/a/3ZrSwzc)
- [Leaderboard Page (PostMVP)](https://imgur.com/a/J4fWKay)

## Reach Architecture Tree

- App
  - Header
  - Body
    - Menu/Landing Page
    - Game Page
      - Score
      - Timer
      - Grid
    - Leaderboard Page
      - User
    - About Page
  - Footer

### MVP/PostMVP

#### MVP

- Set up a menu/landing page with difficulty choices
- Set up grid with data
- Hide tiles based on difficulty
- Set up timer after user chose difficulty
- Set up local storage to keep track of current data

#### PostMVP

- Add leaderboard based on different difficulty categories

## Components

##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component                 |                                  Description                                  |
| ------------------------- | :---------------------------------------------------------------------------: |
| App                       |                       Contains Header, Body, and Footer                       |
| Header                    |         Include nav bar linking to Menu, Game, Leaderboard and About          |
| Body                      |              In depth view of Menu, Game, Leaderboard and About               |
| Footer                    |                                Copyright text                                 |
| Menu/Landing Page         |                  View for user to choose difficulty setting                   |
| Game Page                 |  View for user to play the game itself, and contains grid, score, and timer   |
| Grid                      |         Include 91 tiles, and some empty based to selected difficulty         |
| Score                     |              User score calculated based on time and difficulty               |
| About                     | Description of the game, inspiration, and link to other game and github repos |
| Leaderboard Page(PostMVP) |      Leaderboard of user scores, sorted by different difficulty settings      |
| User                      |                              User name and score                              |

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evaluate game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component           | Priority | Estimated Time | Actual Time |
| ------------------- | :------: | :------------: | :---------: |
| Setting up App      |    H     |      1hrs      |             |
| Setting up Routes   |    H     |      2hrs      |             |
| Setting up game     |    H     |     40hrs      |             |
| Game functionality  |    H     |      5hrs      |             |
| Difficulty settings |    H     |      2hrs      |             |
| Timer               |    M     |      2hrs      |             |
| Score               |    M     |      1hrs      |             |
| Local storage       |    M     |      2hrs      |             |
| Leaderboard         |    L     |     10hrs      |             |
| Total               |          |     65hrs      |             |

## Additional Libraries

Use this section to list all supporting libraries and their role in the project such as Axios, ReactStrap, D3, etc.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
