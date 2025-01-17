import React from "react";

const HtmlAttributes = {
  lang: "en"
}

const HeadComponents = [
  // Meta Tags
  <meta key="httpEquiv" httpEquiv="X-UA-Compatible" content="IE=edge" />,
  <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />,
  <meta key="keywords" name="keywords" content="frontend development, HTML tutorials, CSS tips, JavaScript guides, React blogs, web development, frontend design, UI/UX design, coding tutorials, frontend trends, modern web design, responsive design, frontend frameworks, frontend tools, developer resources." />,

  <meta key="description" name="description" content="frontend blogs | Discover expert tips, tutorials, and insights on frontend development at Frontend-Blogs.in. Stay updated with the latest trends in HTML, CSS, JavaScript, React, and more. Perfect for developers of all levels!" />,
  // <meta key="author" name="author" content="ThemesCamp" />,
//   <!-- Bundle -->
    <link rel="stylesheet" href="/css/bundle.min.css" />,
    // <!-- Plugin Css -->
    <link rel="stylesheet" href="/css/cubeportfolio.min.css" />,
    <link rel="stylesheet" href="/css/animate.min.css" />,
    <link rel="stylesheet" href="/css/jquery.fancybox.css" />,
    <link rel="stylesheet" href="/css/jquery.fancybox.min.css" />,
    <link rel="stylesheet" href="/css/line-awesome.min.css" />,
    // <!-- Style Sheet -->
    <link rel="stylesheet" href="/css/owl.carousel.min.css" />,
    <link rel="stylesheet" href="/css/style.css"></link>,
    <script src="/js/bundle.min.js"></script>,

// <!-- Plugin Js -->
<script src="/js/owl.carousel.min.js"></script>,
<script src="/js/jquery.cubeportfolio.min.js"></script>,
// <!-- custom script -->
<script src="/js/jquery.fancybox.js"></script>,
<script src="/js/jquery.fancybox.min.js"></script>,
<script src="/js/mediaelement-and-player.min.js"></script>,
<script src="/js/wow.min.js"></script>,
<script src="/js/parallaxie.min.js"></script>,
<script src="/js/script.js"></script>
  
]

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHtmlAttributes(HtmlAttributes);
  setHeadComponents(HeadComponents);
}
