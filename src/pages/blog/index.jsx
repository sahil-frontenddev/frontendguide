import React from "react";

import { graphql,Link } from "gatsby"
import Layout from "../../components/Layout";

export default  function WorksDark ({data}) {
  console.log(data,"blogs data")
  

  return (
    <Layout homePage={false}>
      <section id="bg-top-stories-img" className="bg-top-stories-img">
          <div className="overlay"></div>
      </section>
          
<section id="search">
        <div className="container">
            <div className="row pt-sm-5">
                {/* <div className="col-12 col-lg-4 order-2 order-md-1">
                    <div className="search_outerbox">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search for..." />
                            <span className="input-group-btn">
                                <button className="btn btn-search" type="button"><i className="fa fa-search fa-fw"></i></button>
                        </span>
                        </div>
                    </div>

                    <section id="topics">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 pr-0 pl-0">
                                    <div className="topic_outerbox mt-4">
                                        <h2>Topics</h2>
                                        <div className="inner-box">
                                            <ul className="sub-heading">
                                                <li><a href="#">Doctors</a> <span className="dots">...............</span> 4</li>
                                                <li><a href="#">Patients</a> <span className="dots pr-1">...............</span>5</li>
                                                <li><a href="#">Corona</a><span className="dots pr-1">................</span>1</li>
                                                <li><a href="#">Spread</a><span className="dots">................</span>  8</li>
                                                <li><a href="#">Travel</a><span className="dots">.................</span>6</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="popular_post">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 p-0">
                                    <div className="outer_popular mt-4">
                                        <h2 className="text-black">Popular Post</h2>
                                        <div className="outer mt-4 display">
                                            <div className="popular_image">
                                                <a href="blogs.html"><img src="/img/post1.jpg" alt="popular image" /></a>
                                            </div>
                                            <div className="text_post">
                                                <p className="main"> Minimal Post...</p>
                                                <p className="date">March 03, 2020 by</p><span>Mark Edison</span>
                                            </div>
                                        </div>

                                        <div className="outer pt-lg-3 display">
                                            <div className="popular_image">
                                                <a href="blogs.html"><img src="/img/post2.jpg" alt="audio image" /></a>
                                            </div>
                                            <div className="text_post">
                                                <p className="main"> Standard Post....</p>
                                                <p className="date">March 12, 2020 by</p><span>Mark Edison</span>
                                            </div>
                                        </div>

                                        <div className="outer pt-lg-3 display">
                                            <div className="popular_image">
                                                <a href="blogs.html"><img src="/img/post3.jpg" alt="standard image" /></a>
                                            </div>
                                            <div className="text_post">
                                                <p className="main">Standard Post...</p>
                                                <p className="date">March 18, 2020 by</p><span>Mark Edison</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="tags">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 pr-0 pl-0">
                                    <div className="outer_tag mt-4">
                                        <h2 className="main_tag">Tags</h2>
                                        <div className="inner_tag">
                                            <div className="tag_text">
                                                <span><a href="">DOCTORS</a></span>
                                                <span><a href="">PATIENTS</a></span>
                                                <span><a href="">SPREAD</a></span>
                                                <span><a href="">TRAVEL</a></span>
                                                <span><a href="">CORONA</a></span>
                                                <span><a href="">PRECAUTIONS</a></span>
                                                <span><a href="">VACCINE</a></span>
                                                <span><a href="">BLOG</a></span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="archieve">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 pr-0 pl-0">
                                    <div className="topic_outerbox mt-4">
                                        <h2>Archives</h2>
                                        <div className="inner-box1">
                                            <ul className="sub-heading">
                                                <li><a href="#">May 2016</a> <span className="dots">..............</span>1</li>
                                                <li><a href="#">July 2015</a> <span className="dots">..............</span>3</li>
                                                <li><a href="#">Dec 2017</a> <span className="dots">..............</span>1</li>
                                                <li><a href="#">Oct 2019</a> <span className="dots">..............</span>6</li>
                                                <li><a href="#">Sep 2018</a> <span className="dots">..............</span>8</li>
                                                <li><a href="#">Feb 2020</a> <span className="dots">..............</span>1</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="sale_image">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 pr-0 pl-0 pt-4">
                                    <img className="sale_img" src="/img/sale-img.jpg" alt="advertisment image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="col-sm-12 col-md-12 col-lg-12 pt-sm-4 pt-md-0 pt-lg-0 order-1 order-md-2">

               
                {data.allMarkdownRemark.nodes.map((node)=> {

                 return (<>

                  
                    <div className="minimal_image mt-sm-10 mt-md-0 mt-lg-0">
                        <section className="min-post">
                            <img src={node.frontmatter.thumbnail} alt={node.frontmatter.title} />
                        </section>
                    </div>
                    <div className="text_minimal">
                        <a className="text-black" href="blogs.html"><h2>{node.frontmatter.title}</h2></a>
                        <div className="display">
                            <p className="date text-black">{new Date(node.frontmatter.date).toLocaleString('default')} </p><div className="verticle_line margin_1 bg-black"></div>
                            <span>Sahil Lalotra</span>
                        </div>
                        <p className="sub-heading text-grey">{node.frontmatter.description + '...'}</p>
                        <Link to={`/blog/${node.parent.name}`} className="btn btn-large btn-primary">
                              Read More
                            </Link>
                        {/* <a href="blogs.html" className="btn btn-large btn-primary">Read More</a> */}
                    </div>
                    <div className="divider1"></div>
                    </>)
                })}

                

                  

                   
                    <ul className="pagination mt-10">
                        <li className="page-item active">
                            <a className="page-link" href="#">1<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#"><i className="fas fa-arrow-right"></i></a>
                        </li>
                    </ul>

            </div>
        </div>
        </div>
        
</section>
    </Layout>
  );
};

export const Head = () => {
  return (
    <>
      <title>Frontend Guide  - Blogs</title>
     
    </>
  )
}

export const pageQuery = graphql`
  query MyQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(_posts)/"}}) {
    nodes {
      frontmatter {
        date
        title
        thumbnail
        description
      }
      id
      html
      parent {
        ... on File {
          name
        }
      }
    }
  }
}
`