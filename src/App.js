import React, { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Modal from "./components/modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Component Library Demo</h1>

      {/* Button Component */}
      <Button text="Open Modal" onClick={() => setShowModal(true)} type="primary" />

      {/* Card Component */}
      <Card title="Card Title" content="Reusable button component with customizable text, style, and click actions. Supports primary, secondary, and danger types. " />

      {/* Modal Component */}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h2>Modal Content</h2>
        <p>hey Users.</p>
      </Modal>
    </div>
  );
}

export default App;
