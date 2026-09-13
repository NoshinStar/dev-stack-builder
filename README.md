# Dev Stack Builder

## What is this project?

Dev Stack Builder is a website where you can look at different programming
technologies (like React, Node.js, MongoDB) and pick the ones you want to
use for your next project. It's like a shopping cart, but instead of
products, you are choosing tech tools for your "stack."

## Technology Used

- React (with TypeScript)
- Tailwind CSS
- React-Toastify (for popup messages)
- Vite (to run and build the project)
- JSON (to store the technology data)

## 3 Main Features

1. **Browse Technologies** — See a list of 15 different technologies.
   Each one shows its name, picture, category, rating, and difficulty
   level.

2. **Build Your Stack** — Click "Add to Stack" on any technology card to
   add it to your personal list on the side. You can also remove one
   item, or clear everything with one click.

3. **Instant Feedback** — Every action (adding, removing, clearing) shows
   a small popup message on the screen, so you always know what just
   happened.

## How the App Works 

- All technology data (name, icon, description, etc.) is stored in one
  file called `technologies.json`. The app reads this file when it
  loads and shows the data on cards.

- When you click "Add to Stack," the app remembers which technologies
  you picked using something called "state".

- If you try to add the same technology twice, the app notices and shows
  a warning message instead of adding it again.

- The website is built with reusable pieces called "components" — for
  example, the Navbar, the Hero section, each Technology Card, and the
  Footer are all separate, smaller pieces of code put together to make
  the full page.

---

## React Questions & Answers

**1. What is JSX, and why is it used in React?**
JSX lets us write HTML-like code directly inside our JavaScript files.
Instead of writing plain JavaScript to build the layout, we can write
something that looks like HTML, and React turns it into real webpage
elements. It's used because it makes the code easier to read and write.

**2. What is the difference between props and state?**
Props are pieces of information passed from a parent component into a
child component — the child cannot change them, only use them. State is
information a component keeps and manages by itself, and it can change
over time (for example, when a user clicks something).

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a component remember a value and update it when needed.
In this project, I used `useState` to keep track of the list of all
technologies, the list of technologies the user picked (the "stack"),
and whether the data is still loading.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` lets us run some code automatically when the component first
appears on the screen (or when certain values change). I used it to
load the technology data once, right when the app starts, and to turn
off the "loading" message once the data is ready.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
The `key` prop helps React tell each list item apart from the others.
Without unique keys, React can get confused about which item changed,
which one was added, or which one was removed, and the list might not
update correctly.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different content depending on a
condition (like an if/else, but inside the JSX). For example, in the
"Your Stack" panel, if the stack is empty, I show the message "Your
stack is empty." If it has items, I show the list of added technologies
instead.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data to a child using props — basically like handing
over a value as an attribute, for example `<TechnologyCard tech={tech} />`.
For a child to send something back to the parent, the parent passes down
a function as a prop (for example `onAdd`), and the child calls that
function when something happens, like a button click. This is how
clicking "Add to Stack" inside a card tells the parent (`App.tsx`) to
update the stack.