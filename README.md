Project Overview

This project is a React Components Library containing reusable UI components including Button, Card, and Modal.
It demonstrates component reusability, state management, and modular design, making it suitable for integration into multiple React projects.

Folder Structure
src/
 ├─ components/
 │   ├─ Button/
 │   │   ├─ Button.js
 │   │   ├─ Button.css
 │   │   └─ index.js
 │   ├─ Card/
 │   │   ├─ Card.js
 │   │   ├─ Card.css
 │   │   └─ index.js
 │   ├─ Modal/
 │   │   ├─ Modal.js
 │   │   ├─ Modal.css
 │   │   └─ index.js
 ├─ App.js
 ├─ index.js


Each component has its own folder with JS, CSS, and index.js for easy imports.

Components Description
1. Button

Reusable button component.

Props:

text → Button label

onClick → Click handler function

type → Style type (primary, secondary, danger)

Example:

<Button text="Click Me" onClick={handleClick} type="primary" />

2. Card

Reusable card component for structured content.

Props:

title → Card heading

content → Card description

Example:

<Card 
  title="Button Component" 
  content="Reusable button component with customizable text, style, and click actions." 
/>

3. Modal

Popup/modal component for interactive content.

Props:

show → Boolean to show/hide modal

onClose → Function to close modal

children → Modal content

Example:

<Modal show={showModal} onClose={() => setShowModal(false)}>
  <h2>Modal Title</h2>
  <p>This is the content inside the modal.</p>
</Modal>

Demo

The demo in App.js shows all components working together:

Click Button to open Modal

Cards display component details

Key Learnings

Building reusable React components

Effective props and state management

Organizing project with component folder structure

Styling components with CSS

How to Run

Clone the repository:

git clone <your-repo-url>


Install dependencies:

npm install


Start the project:

npm start


The demo will run at http://localhost:3000
