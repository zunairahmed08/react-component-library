Project Overview:
This is a reusable React Components Library containing:
- Button
- Card
- Modal

Components are modular, styled, and can be reused across projects.
Demo usage is in this App.js file.

Folder Structure:
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

Components Description:
1. Button:
   - Props: text, onClick, type (primary/secondary/danger)
2. Card:
   - Props: title, content
3. Modal:
   - Props: show, onClose, children

Usage:
<Button text="Click Me" onClick={handleClick} type="primary" />
<Card title="Card Title" content="Description here" />
<Modal show={showModal} onClose={() => setShowModal(false)}>Modal Content</Modal>

Key Learnings:
- Reusable React components
- Props and state management
- Component folder structure
- CSS styling and encapsulation

How to Run:
1. npm install
2. npm start
3. Open http://localhost:3000