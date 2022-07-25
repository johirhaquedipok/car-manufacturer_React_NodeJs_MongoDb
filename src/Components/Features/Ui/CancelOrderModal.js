import React from "react";

const ConfirmModal = ({ modal, handleCancelOrder }) => {
  return (
    <div className="">
      <input type="checkbox" id="my-modal-7" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-7"
            className="btn btn-sm btn-circle absolute right-2 top-2 "
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Confirmation</h3>
          <p className="py-4">
            Your all details are ok? Or you can recheck also!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal-7" className="btn">
              No
            </label>
            <label
              htmlFor="my-modal-7"
              className="btn"
              type="submit"
              onClick={() => handleCancelOrder(modal)}
            >
              Yes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
