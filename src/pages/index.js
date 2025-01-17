import * as React from "react"

export default function Home() {
  return <>
  <div className="loader-area">
    <div className='loader'>
        <div className='one'></div>
        <div className='two'></div>
        <div className='three'></div>
    </div>
</div>

<header>

    <nav id="my-nav" className="navbar navbar-expand-lg navbar-light rounded-bar sidemenu-nav">

        <div className="logo width-logo1">
            <a href="index-blog.html"><img src="blog/img/logo-white.png" alt="Logo Img" /></a>
        </div>
        <div className="menu-btn ml-auto">
            <span></span>
            <span></span>
            <span></span>
        </div>

    </nav>

    <div className="outer-wrapper">

        <div className="overlay1">

            <a className="close-outerwindow"><i className="las la-times"></i></a>

            <nav className="navbar-1 w-100">

                <div className="row text-center">

                    <div className="col-12">
                        <div className="logo-img text-center">
                            <a href="index-blog.html"><img src="blog/img/logo.png" alt="Logo Img" /></a>
                        </div>

                        <ul className="navbar-nav mt-5 text-center small-nav">
                            <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="blog/top-stories.html">Top Stories</a></li>
                            <li className="nav-item"><a className="nav-link" href="blog/blogs.html">Blogs</a></li>
                            <li className="nav-item"><a className="nav-link" href="blog/contact.html">Contact</a></li>
                        </ul>
                        <ul className="footer_ul text-center mt-3 margin-top">
                            <li className="footer_list"><i className="lab la-facebook-f"></i></li>
                            <li className="footer_list"><i className="fab fa-x-twitter"></i></li>
                            <li className="footer_list"><i className="lab la-google-plus"></i></li>
                            <li className="footer_list"><i className="lab la-linkedin-in"></i></li>
                        </ul>
                        </div>
                        </div>
            </nav>
        </div>
    </div>

</header>
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
</section></>
}
