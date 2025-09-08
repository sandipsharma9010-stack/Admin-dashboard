import React, { useState } from "react";
import CommonModal from "./CommonModal";

function ParentComponent() {
  const data = [
    { id: 1, name: "Item A", phone: 987654321, age:25, lastName:"sharma"  },
    { id: 2, name: "Item B", phone: 987654328, age:27,  lastName:"sharma" },
    { id: 3, name: "Item C", phone: 987654325, age:28,  lastName:"sharma" },
    { id: 4, name: "Item D", phone: 987654324, age:30,  lastName:"sharma" },
    { id: 5, name: "Item E", phone: 987654386, age:32,  lastName:"sharma" },
     { id: 6, name: "Item F", phone: 987654876, age:34, lastName:"sharma" },
  ];
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={toggleModal}
      >
        Open Modal
      </button>

      <CommonModal
        isOpen={showModal}
        onClose={toggleModal}
        data={data}
        title="Items List"
      />
    </>
  );
}

export default ParentComponent;
