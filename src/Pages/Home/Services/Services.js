import React from "react";
import useServices from "../../../Hooks/useServices";
import Service from "../Service/Service";
import "./Services.css";
const Services = () => {
  const [services, setServices] = useServices();
  console.log(services)
  return (
    <div className="service-container" id="services">
      <div className="service-heading">
      <h1>CHOOSE THE PROGRAM</h1>
      <h4>NEW GYM EXPERIENCE</h4>
      </div>
      <div className="services">
      {
          services.slice(0,3).map(service=><Service service={service} key={service.id}></Service>)
      }
      </div>
    </div>
  );
};

export default Services;
