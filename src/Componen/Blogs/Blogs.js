import React from 'react';
import useTitle from '../hook/Title';

const Blogs = () => {
    useTitle("All Blogs")
    return (
        <div className="m-5 p-5 flex flex-col gap-5 text-justify">
            <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            Q-1) Difference between SQL and NoSQL
            </div>
            <div className="collapse-content"> 
                <p><b>SQL:</b><br/>
                RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).These databases have fixed or static or predefined schema.These databases are not suited for hierarchical data storage.These databases are best suited for complex queries.Vertically Scalable.Follows ACID property.<b>Examples:</b> MySQL, PostgreSQL, Oracle, MS-SQL Server etc<br/><br/>
                <b>NoSQL:</b><br/>
                Non-relational or distributed database system.They have dynamic schema.These databases are best suited for hierarchical data storage.These databases are not so good for complex queries.Horizontally scalable.Follows CAP(consistency, availability, partition tolerance)<b>Examples:</b> MongoDB, GraphQL, HBase, Neo4j, Cassandra etc<br/><br/>
                </p>
            </div>
            </div>
            <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            Q-2) What is JWT, and how does it work?
            </div>
            <div className="collapse-content"> 
                <p>JWT, or JSON Web Token, is an open standard(RFC 7519) set of claims to share security information or authorization/authentication requests between a client and a server. Each JWT contains encoded JSON objects. JWTs are signed using a cryptographic algorithm by the token’s issuer to ensure that No one could alter the claims after the token is issued and later can be used by the receiving party to verify the token.
                </p>
            </div>
            </div>
            <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            Q-3) What is the difference between javascript and NodeJS?
            </div>
            <div className="collapse-content"> 
                <p ><b>Javascript:</b><br/>
                Javascript is a programming language that is used for writing scripts on the website. Javascript can only be run in the browsers.It is basically used on the client-side.Javascript is capable enough to add HTML and play with the DOM. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. Javascript is used in frontend development.Some of the javascript frameworks are RamdaJS, TypedJS, etc. It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. <br/><br/>
                <b>NodeJS:</b><br/>
                NodeJS is a Javascript runtime environment.We can run Javascript outside the browser with the help of NodeJS.It is mostly used on the server-side.Nodejs does not have capability to add HTML tags.V8 is the Javascript engine inside of node.js that parses and runs Javascript.Nodejs is used in server-side development.Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. Nodejs is written in C, C++ and Javascript.<br/><br/>
                </p>
            </div>
            </div>
            <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            Q-4) How does NodeJS handle multiple requests at the same time?
            </div>
            <div className="collapse-content"> 
                <p> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.<br/><br/>
                </p>
            </div>
            </div>
        </div>
    );
};

export default Blogs;