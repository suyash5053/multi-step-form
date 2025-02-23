# Simple Multi Step Form

## Technologies Used

- React,
- Tailwind,
- Next,
- Shadcn,
- Zustand

## Approach

Though I should have used the mobile first approach of coding things, here instead I used Desktop first approach (personal preference) as I find it easier to code the desktop view and then the mobile view afterwards.

## Why there are so many elements

The approach I have used here is the approach used in now days organizations, dividing and writing code into atomic level keep us ahead of redundancy problems, and code repetition along with making the code reusability and optimizations high.

## Hard Coded Pixels

For the base layout I wasn't thinking to hard code the screen sizes but since it was messing up the design I used `window.innerHeight` and `window.innerWidth` parameters then multiplying it with the respective fraction of the screen. And this was also necessary to get the layout as exact as possible

## Why Zustand Store Management

Instead of Managing multiple states with parent or child and using lots of useState hooks, I have used a global store from Zustand, why not Redux?, cause it is smaller and faster than Redux.

## PS
If you get some minor errors, please let me know.
