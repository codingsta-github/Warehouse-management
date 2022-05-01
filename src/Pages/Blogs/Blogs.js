import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="blogs">
      <h1>Question 1: Difference between javascript and nodejs</h1>
      <p>
        <b> Answer : </b>
        <br />
        <b>JavaScript : </b>is a Scripting language. Javascript is a high-level
        programming language that uses the concept of Oops but it is based on
        prototype inheritance. It is mostly abbreviated as JS. It can be said
        that Javascript is the updated version of the ECMA script.
        <br />
        <b>NodeJS :</b> NodeJS is a cross-platform and open source Javascript
        runtime environment that allows the javascript to be run on the
        server-side. Nodejs allows Javascript code to run outside the browser.
        Nodejs comes with a lot of modules and mostly used in web development.
      </p>

      <br />
      <br />

      <h1>
        Question 2: When should you use nodejs and when should you use mongodb?
      </h1>
      <p>
        <b>Answer :</b> <br /> <b>Node.js</b> Node.js has many valuable virtues
        and works well for these clients. It might not be the best choice for
        every project. Node.js should be considered for any real-time
        applications intended to run on various devices. If the product requires
        fast prototyping or performs CPU-intensive tasks there are other
        technologies, including Rails, that will do a better job. <br />
        <b>MongoDB</b> is a great database for web applications, especially if
        the application services many users who do not interact with each other.
        Think financial services applications, where users only need access to
        their own data. Or a blogging application, where users want to log in
        and create/edit their own blogs. Users not interacting with each other
        is the key takeaway.
      </p>

      <br />
      <br />

      <h1>Question 3: Differences between sql and nosql databases.</h1>
      <p>
        <b> Answer : </b>
        <br />
        <li>
          <b>Type :</b> SQL databases are known as Relational Databases (RDBMS),
          this implies that SQL databases store the data in the form of tables
          that form relations between them. Whereas, NoSQL databases are known
          as non-relational databases.
        </li>
        <li>
          <b>Language : </b> SQL is a very powerful and adaptable language, but
          it can be restrictive at the same time. It allows the user to store
          data only in the form of some predefined structures or schemas. This
          requires a lot of preparation up-front. But on the other hand, NoSQL
          is more dynamic than SQL and allows databases to have their own
          structure and syntax.
        </li>
        <li>
          <b>Scalability : </b> In most cases, SQL is vertically scalable. This
          means that the single server load can be increased by enhancing the
          RAM, CPU, and SSD. But, unlike SQL, NoSQL is horizontally scalable.
          This means that more traffic can be managed only by sharding or adding
          more servers to the database. Thus, in the end, NoSQL databases can
          become larger and more powerful.
        </li>
      </p>

      <h1>Question 4: What is the purpose of jwt and how does it work</h1>
      <p>
        <b>Answer :</b> <br />
        <b>JWT (JSON Web Token) </b> is a standard used to share information in
        a secure way.Though it’s a very popular technology, JWT authentication
        comes with its share of controversy. Some say one should never use it.
        Others say JWT authentication is amazing. The truth lies somewhere in
        between the value of using JWT depends on your use case and project
        requirements.
        <br />
        Basically the identity provider(IdP) generates a JWT certifying user
        identity and Resource server decodes and verifies the authenticity of
        the token using secret salt / public key. User sign-in using username
        and password or google/facebook. Authentication server verifies the
        credentials and issues a jwt signed using either a secret salt or a
        private key. User’s Client uses the JWT to access protected resources by
        passing the JWT in HTTP Authorization header. Resource server then
        verifies the authenticity of the token using the secret salt/ public
        key.
      </p>
    </div>
  );
};

export default Blogs;
