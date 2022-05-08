import React from "react";
import { Accordion } from "react-bootstrap";
import "./Disclaimer.css";
const Disclaimer = () => {
  return (
    <div className="disclaimer">
      <Accordion defaultActiveKey="0" className="text-justify">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Legal disclaimers and annotations</Accordion.Header>
          <Accordion.Body>
            The prices specified herein are indicative and may not be final. The
            indicated price may differ due to purchase of any additional
            accessories, parts or products, services that may be availed by the
            customer, discounts offered, change in government taxes, duties,
            fees or levies, change of state of registration etc. Mercedes- Benz
            India or the Authorised Franchise Partner shall not be responsible
            or liable to compensate for the difference in the prices due to
            aforesaid reasons or any reason beyond the control of Mercedes-Benz
            India or the Authorised Franchise Partner. Actual colour of the
            vehicle may differ from those shown in pictures. While Mercedes-Benz
            India tries to make sure that all information provided herein is
            accurate, we shall not be responsible for typographical and other
            errors (e.g., data transmission) that may appear on the site. If the
            posted price (including finance and lease payments) for a vehicle is
            incorrect, Mercedes-Benz India will endeavor to provide you with the
            correct prices as soon as we become aware of the error. In the event
            a vehicle is priced incorrectly, Mercedes-Benz India shall have the
            right to refuse or cancel any orders placed for the vehicle
            presented with the incorrect price. In addition, vehicle prices are
            subject to change and all vehicles are subject to prior sale and may
            not be available when you are ready to purchase.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Disclaimer;
