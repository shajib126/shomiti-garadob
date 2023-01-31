import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleKisti } from "../../actions/KistiAction";
import "./KistiDetails.css";

const KistiDetails = () => {
  const { id } = useParams();
  const dipsatch = useDispatch();
  const { loading, error, kisti } = useSelector((state) => state.kisti);
  useEffect(() => {
    dipsatch(getSingleKisti(id));
    console.log(kisti);
  }, [dipsatch, id]);
  return (
    <>
    {kisti?.customer?.length == 0?'No kisti':
    <div className="kistiDetails">
      
      <div className="customer_details">
        <div>
          <img src={kisti?.kistiCustomer[0]?.customer.avatar.url} alt="" />
        </div>
        <div>
          <h2>#NAME: {kisti?.kistiCustomer[0]?.customer.name}</h2>
          <h2>#NID: {kisti?.kistiCustomer[0]?.customer.nid}</h2>
          <h2>CUSTOMER ID: {id}</h2>
        </div>
      </div>
      <div>
        {kisti?.kistiCustomer?.map((item, i) => (
          <div key={i} className="customer_details">
            <p>#{i+1}</p>
            <p>কিস্তি এমাউন্টঃ {item.payAmount}</p>
            <p>কিস্তি আইডিঃ {item._id}</p>
            <p>তারিখঃ {item.date}</p>
          </div>
        ))}
      </div>

    </div>
}
    </>
  );
};

export default KistiDetails;
