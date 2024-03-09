import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CartPage.css";
import {
  getTotal,
  quantityDec,
  quantityInc,
  removeFromCart,
} from "../../Redux/Features/cartSlice";

function CartPage() {
  const { cart, totalAmt, cartQuantity } = useSelector((item) => {
    return item.usercart;
  });

  const dispatch = useDispatch();

  const handleRemoveCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleMinus = (product) => {
    dispatch(quantityDec(product));
  };

  const handlePlus = (product) => {
    dispatch(quantityInc(product));
  };

  const shipCharge = 2.2;

  useEffect(() => {
    dispatch(getTotal());
  }, [cart]);
  return (
    <>
      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                <div>
                  <p className="mb-0">
                    <span className="text-muted">Sort by:</span>{" "}
                    <a href="#!" className="text-body">
                      price <i className="fas fa-angle-down mt-1"></i>
                    </a>
                  </p>
                </div>
              </div>

              {cart.length > 0 ? (
                cart?.map((item) => {
                  return (
                    <div className="card rounded-3 mb-4" key={item?.id}>
                      <div className="card-body p-4">
                        <div className="row d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src={item?.img}
                              className="img-fluid rounded-3"
                              alt="Cotton T-shirt"
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <p className="lead fw-normal mb-2">{item?.name}</p>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button
                              className="btn btn-link px-2"
                              onClick={() => handleMinus(item)}
                            >
                              <i className="fas fa-minus"></i>
                            </button>

                            <input
                              id="form1"
                              min="0"
                              name="quantity"
                              value={item?.quantity}
                              type="text"
                              className="form-control form-control-sm w-25 py-2 px-0 text-center "
                              readOnly
                            />

                            <button
                              className="btn btn-link px-2"
                              onClick={() => handlePlus(item)}
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h5 className="mb-0">
                              ${Number(item.price) * item.quantity}
                            </h5>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a
                              style={{ cursor: "pointer" }}
                              className="text-danger "
                              onClick={() => handleRemoveCart(item)}
                            >
                              <i className="fas fa-trash fa-lg"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h1 className="text-center text-black p-5 ">
                  Your cart is empty....
                </h1>
              )}

              {cartQuantity > 0 && (
                <div className="card mb-4">
                  <div className="row justify-content-end pe-4 pt-4">
                    <div className="col-lg-4 col-xl-3">
                      <div className="d-flex justify-content-between">
                        <p className="mb-2 fw-bolder">Subtotal</p>
                        <p className="mb-2">${totalAmt}</p>
                      </div>

                      <div className="d-flex justify-content-between">
                        <p className="mb-0 fw-bolder">Shipping</p>
                        <p className="mb-0">${shipCharge}</p>
                      </div>

                      <hr className="my-4" />

                      <div
                        className="d-flex justify-content-between mb-4"
                        style={{ fontWeight: "bolders" }}
                      >
                        <p className="mb-2 fw-bolder">Total (tax included)</p>
                        <p className="mb-2 ">
                          $ {parseInt(totalAmt * shipCharge)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {cartQuantity > 0 && (
                <div className="card">
                  <div className="card-body">
                    <button
                      type="button"
                      className="btn btn-warning btn-block btn-lg"
                    >
                      Proceed to Pay
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* <div
        className="card shadow-2-strong mb-5 mb-lg-0"
        style={{ borderRadius: "16px" }}
      >
        <div className="card-body p-4"></div>
      </div> */}
    </>
  );
}

export default CartPage;
