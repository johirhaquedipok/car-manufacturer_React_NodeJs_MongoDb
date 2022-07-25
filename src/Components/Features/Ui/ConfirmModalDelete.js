import React from "react";

const ConfirmModalDelete = ({ modal, handleDeleteProduct }) => {
  return (
    <div className="">
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-6"
            className="btn btn-sm btn-circle absolute right-2 top-2 "
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Confirmation</h3>
          <p className="py-4">You can recheck also!</p>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn btn-primary">
              No
            </label>
            <label
              htmlFor="my-modal-6"
              className="btn"
              type="submit"
              onClick={() => handleDeleteProduct(modal)}
            >
              Yes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModalDelete;
