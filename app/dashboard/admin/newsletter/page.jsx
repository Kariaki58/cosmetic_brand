"use client";

import React, { useState } from "react";

// Reusable Confirmation Modal Component
const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
        <p className="mb-4 text-gray-800">{message}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  const [newsletters, setNewsletters] = useState([
    { id: 1, title: "October Newsletter", content: "Content for October...", status: "Draft", scheduleDate: null },
    { id: 2, title: "September Newsletter", content: "Content for September...", status: "Published", scheduleDate: null },
  ]);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [modalState, setModalState] = useState({ isOpen: false, id: null, action: null });
  const [selectedStatus, setSelectedStatus] = useState("Draft"); // State for dropdown selection

  // Function to open confirmation modal
  const openModal = (id, action) => setModalState({ isOpen: true, id, action });

  // Function to close confirmation modal
  const closeModal = () => setModalState({ isOpen: false, id: null, action: null });

  // Handle adding a new newsletter
  const addNewsletter = () => {
    const newNewsletter = {
      id: newsletters.length + 1,
      title: newTitle,
      content: newContent,
      status: "Draft",
      scheduleDate: scheduleDate ? new Date(scheduleDate).toLocaleString() : null,
    };
    setNewsletters([...newsletters, newNewsletter]);
    setNewTitle("");
    setNewContent("");
    setScheduleDate("");
  };

  // Handle deleting a newsletter with confirmation
  const deleteNewsletter = (id) => {
    setNewsletters(newsletters.filter((newsletter) => newsletter.id !== id));
    closeModal();
  };

  // Handle publishing a newsletter
  const publishNewsletter = (id) => {
    setNewsletters(
      newsletters.map((newsletter) =>
        newsletter.id === id
          ? { ...newsletter, status: newsletter.scheduleDate ? "Queued" : "Published" }
          : newsletter
      )
    );
    closeModal();
  };

  // Handle unpublishing a newsletter (back to draft)
  const unpublishNewsletter = (id) => {
    setNewsletters(
      newsletters.map((newsletter) =>
        newsletter.id === id ? { ...newsletter, status: "Draft", scheduleDate: null } : newsletter
      )
    );
    closeModal();
  };

  // Filter newsletters based on selected status
  const filteredNewsletters = newsletters.filter((newsletter) => newsletter.status === selectedStatus);

  return (
    <div className="p-4 bg-gray-100 h-screen overflow-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Newsletter Management</h1>

      {/* Create new newsletter */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-10 max-w-3xl mx-auto" aria-labelledby="create-newsletter">
        <h2 className="text-2xl font-semibold mb-4" id="create-newsletter">Create New Newsletter</h2>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
          placeholder="Title"
          aria-label="Newsletter title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <textarea
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg h-32"
          placeholder="Content"
          aria-label="Newsletter content"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
        <div>
          <label htmlFor="scheduleDate" className="block text-sm font-medium text-gray-700">
            Schedule Date (optional)
          </label>
          <input
            id="scheduleDate"
            type="datetime-local"
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            aria-label="Schedule date for the newsletter"
            value={scheduleDate}
            onChange={(e) => setScheduleDate(e.target.value)}
          />
        </div>
        <button
          onClick={addNewsletter}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          aria-label="Add newsletter"
        >
          Add Newsletter
        </button>
      </div>

      {/* Dropdown for selecting newsletter status */}
      <div className="mb-6 max-w-3xl mx-auto">
        <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">Select Newsletter Status</label>
        <select
          id="status"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="block w-full border border-gray-300 rounded-lg p-2"
        >
          <option value="Draft">Draft</option>
          <option value="Queued">Scheduled</option>
          <option value="Published">Published</option>
        </select>
      </div>

      {/* Display filtered newsletters based on selected status */}
      <div className="max-w-3xl mx-auto">
        {filteredNewsletters.length > 0 ? (
          filteredNewsletters.map((newsletter) => (
            <div key={newsletter.id} className="bg-white shadow-md rounded-lg p-6 mb-4">
              <h3 className="text-xl font-semibold">
                {newsletter.title}
                <span className={`ml-2 text-sm px-2 py-1 rounded-full ${newsletter.status === "Draft" ? "bg-yellow-200 text-yellow-800" : newsletter.status === "Queued" ? "bg-blue-200 text-blue-800" : "bg-green-200 text-green-800"}`}>
                  {newsletter.status}
                </span>
              </h3>
              <p className="text-gray-700 mt-2">{newsletter.content}</p>
              <div className="flex space-x-4 mt-4">
                {newsletter.status === "Draft" && (
                  <>
                    <button
                      onClick={() => openModal(newsletter.id, "publish")}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                      aria-label="Publish or schedule newsletter"
                    >
                      {newsletter.scheduleDate ? "Schedule" : "Publish Now"}
                    </button>
                    <button
                      onClick={() => openModal(newsletter.id, "delete")}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                      aria-label="Delete newsletter"
                    >
                      Delete
                    </button>
                  </>
                )}
                {newsletter.status === "Queued" && (
                  <p className="text-gray-500 text-sm">Scheduled for: {newsletter.scheduleDate}</p>
                )}
                {newsletter.status === "Published" && (
                  <button
                    onClick={() => openModal(newsletter.id, "unpublish")}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                    aria-label="Unpublish newsletter"
                  >
                    Unpublish
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No newsletters available for the selected status.</p>
        )}
      </div>

      {/* Confirmation Modal */}
      {modalState.isOpen && (
        <ConfirmationModal
          message={`Are you sure you want to ${modalState.action} this newsletter?`}
          onConfirm={() => {
            if (modalState.action === "delete") deleteNewsletter(modalState.id);
            else if (modalState.action === "publish") publishNewsletter(modalState.id);
            else if (modalState.action === "unpublish") unpublishNewsletter(modalState.id);
          }}
          onCancel={closeModal}
        />
      )}
    </div>
  );
};

export default Page;
