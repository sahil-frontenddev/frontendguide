import React, { useState } from 'react'

export default function Header({homePage}) {

    const [menuOpen,setMenuOpen] = useState(false);
    const menuRef = React.useRef(null);

    const animationHandler = ()=>{
        const menu = menuRef.current;
        if (!menuOpen) {
            document.getElementsByTagName('body')[0].classList.add('stop-overflow');
            menu.classList.remove('end-anm1');
            menu.classList.add('inner-wrapper');
            menu.classList.add('start-anm1');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('stop-overflow');
            menu.classList.remove('start-anm1');
            menu.classList.add('end-anm1');
            setTimeout(() => {
                menu.classList.remove('inner-wrapper');
            }, 500);
        }
    }
  return (
    <header>
        {homePage? (<nav id="my-nav" className="navbar navbar-expand-lg navbar-light rounded-bar sidemenu-nav ">

<div className="logo width-logo1">
    <a href="index-blog.html"><img src="img/logo-white.png" alt="Logo Img" /></a>
</div>
<div className="menu-btn ml-auto" onClick={()=>{setMenuOpen(true);animationHandler()}}>
    <span></span>
    <span></span>
    <span></span>
</div>

</nav>): (
            <nav id="my-nav" className="navbar navbar-expand-lg navbar-light rounded-bar fixed-navbar fixed-menu1">
            <div className="row w-100 m-0">
            <div className="col-3 p-0 mt-3 mt-md-4">
            <ul className="navbar-icons">
                <li className="navbar_list"><i className="lab la-facebook-f"></i></li>
                <li className="navbar_list"><i className="fab fa-x-twitter"></i></li>
                <li className="navbar_list"><i className="lab la-linkedin-in"></i></li>
            </ul>
        </div>

        <div className="col-6">
            <div className="logo ml-auto mr-auto width-logo text-center mt-2 mt-md-3">
                <a href="../index-blog.html"><img src="/img/logo.png" alt="Logo Img" /></a>
            </div>
        </div>

        <div className="col-3 p-0 text-right">
            <div className="menu-btn mt-3 mt-md-4" onClick={()=>{setMenuOpen(true);animationHandler()}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>

</nav>
)}

    

    <div className="outer-wrapper" ref={menuRef}>

        <div className="overlay1">

            <a className="close-outerwindow" onClick={()=>{setMenuOpen(false);animationHandler()}}><i className="las la-times"></i></a>

            <nav className="navbar-1 w-100">

                <div className="row text-center">

                    <div className="col-12">
                        <div className="logo-img text-center">
                            <a href="index-blog.html"><img src="/img/logo.png" alt="Logo Img" /></a>
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
  )
}
