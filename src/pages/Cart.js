import { useState } from "react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { beach } from "../assets/index";
import CartItem from "../components/CartItem";
import { ToastContainer, toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("please sign in to checkout",{
       
      });
    }
  };

  const payment=async(token)=>{
    await axios.post("http://localhost:8000/pay",{
    amount: totalAmt * 100,
    token: token,
  });
};

  return (
    <div>
      <img className="w-full h-60 object-cover" src={beach} alt="beach" />

      <div
        style={{ marginRight: 100 }}
        className="max-w- screen-xl mx-auto py-20 flex "
      >
        <CartItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">cart totals</h2>
            <p className=" flex-titleFont font-bold text-lg">
              SubTotal{""}
              <span className="font-titleFont font-bold text-lg">
                $ {totalAmt}
              </span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping:{""}
              <span>
                Nike By You and Converse Custom orders arrive in two to six
                weeks-standard and expedited shipping times do not apply. Orders
                to APO and FPO addresses ship free
              </span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
            Total <span className="text-xl font-bold">$ {totalAmt}</span>
          </p>
          <button
            onClick={handleCheckout}
            className="text-base bg-black text-white w-full py-3 mt-6
               hover:bg-gray-800 duration-300"
          >
            Proceed to Checkout
          </button>
          {payNow && (
            <div className="w-full mt-6 flex items-center justify-center">
              <StripeCheckout
                stripeKey="pk_test_51NueHWDxiz7JghQeqXSqXth2AsrNiGbBnm5UcWsGWfqLj4b6OxTaZj3sBmSTzSR3MrmBK7CsdjDfttfplLLAntW100Y6tm3OwR"
                name="bazar Online Shopping"
                amount={totalAmt * 100}
                label="Pay Now"
                description={`Your payment amount is $${totalAmt}`}
                token={payment}
                email={userInfo.email}
              ></StripeCheckout>
            </div>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Cart;
