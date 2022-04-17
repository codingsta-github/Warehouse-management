import React from "react";
import useServices from "../../../Hooks/useServices";
import Service from "../Service/Service";
import "./Services.css";
const Services = () => {
  const [services, setServices] = useServices();
  console.log(services)
  return (
    <div className="services" id="services">
      <h1>CHOOSE THE PROGRAM</h1>
      <h4>NEW GYM EXPERIENCE</h4>
      {
          services.map(service=><Service service={service} key={service.id}></Service>)
      }
    </div>
  );
};

export default Services;
