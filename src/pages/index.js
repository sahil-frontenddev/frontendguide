import React from "react";
import Layout from "../components/Layout";


export default function Home() {

  return <Layout homePage={true}>
  
<section id="banner-img" className="banner-img bg-banner-img">
  <div className="row no-gutters">
        <div className="col-12 col-md-5"></div>
        <div className="col-12 col-md-7">
            <div className="overlay"></div>
            <div className="row no-gutters height1">
                <div className="col-2 d-flex justify-content-center align-items-center">
                    <p className="verticle-text text-white padding-vert">Your One-Stop Hub for Frontend Tips, Tricks, and Inspiration!</p>
                </div>
                <div className="col-10 d-flex  align-items-center">
                    <h1 className="main-heading text-white">Frontend<br />Tips<br /> Tricks<br /> & Blogs</h1>
                </div>
            </div>
        </div>
    </div>
</section></Layout>
}
