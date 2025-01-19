import React from 'react';

import "../../static/css/404/css/style.css"
import { Link } from 'gatsby';
export default function ErrorPage() {
  return (
    <section className="error-page-3 bg-error3-img">
    <div className="container">
        <div className="row">
            <div className="col-12 text-right text-alignment">
                <div className="error3-text">
                    <h1 className="main-heading">404 error</h1>
                    <h1 className="sub-heading">Page not found!</h1>
                    <p className="text-error">Please check your Url ! or scontact web Admin, Thanks</p>
                    <Link to="/"  className="btn btn-primary rounded-pill home-btn">Home Page</Link>
                </div>
            </div>

        </div>
    </div>



</section>
  )
}
