import React from "react";
import Table from "../market-grid/Table";

const Modal = ({ selectedMarket, marketConfig }) => {
  const { exchange, market, symbol, tradeable, triggerable } = selectedMarket;

  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body table-responsive">
            <table class="table table-hover table-striped table-dark text-center ">
              <thead>
                <tr>
                  {marketConfig.map(({ title }) => (
                    <th key={title}>{title}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{exchange}</td>
                  <td>{market}</td>
                  <td>{symbol}</td>
                  <td>{tradeable ? "yes" : "no"}</td>
                  <td>{triggerable ? "yes" : "no"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
