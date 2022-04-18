import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="blogs">
      <h1>Question: Difference between authorization and authentication</h1>
      <p>
        Answer: Authentication and authorization are both common terms. <br />
        They represent fundamentally different functions
        <br />
        The first one is the process of verifying a user, while the second is
        the process of verifying what they have access to. <br />
        And Authentication is the process of verifying that a user is who they
        claim to be. <br />
        To prove our identity, we mostly need to provide them with our valid
        credentials like the username and password.
      </p>

      <br />
      <br />

      <h1>
        Question: Why are you using firebase? What other options do you have to
        implement authentication?
      </h1>
      <p>
        Answer: I'm using firebase for authentication of my application. <br />
        It can easily built one of the best security system. 
        Here are few authentication system
        <li>STYTCH</li>
        <li>Supabase</li>
        <li>Ory</li>
        <li>Okta</li>
        <li>PingIdentity</li>
        <li>Keycloak</li>
        <li>Frontegg</li>
        <li>Auth0</li>
        <li>Amazon</li>
        <li>Cognito</li>
        <br />
      </p>

      <br />
      <br />

      <h1>
        Question : What other services does firebase provide other than
        authentication?
      </h1>
      <p>
        Answer : There are many services other than authentication which
        Firebase provides, <br />
        Most useful of them are: <br />
        <li>Cloud Firestore</li>
        <li>Cloud Functions</li>
        <li>Hosting</li>
        <li>Cloud Storage</li>
        <li>Google Analytics</li>
        <li>Predictions</li>
        <li>Cloud Messaging</li>
        <li>Dynamic Links</li>
        <li>Remote Config</li>
      </p>
    </div>
  );
};

export default Blogs;
