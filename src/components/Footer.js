import React from 'react'

export default function Footer() {
  return (
    <section id="footer" className="footer">
    <div className="container">
        <div className="row">
            <div className="col-12 text-center">
                <ul className="footer_ul">
                    <li className="footer_list"><i className="lab la-facebook-f"></i></li>
                    <li className="footer_list"><i className="fab fa-x-twitter"></i></li>
                    <li className="footer_list"><i className="lab la-google-plus"></i></li>
                    <li className="footer_list"><i className="lab la-linkedin-in"></i></li>
                    <li className="footer_list"><i className="lab la-instagram"></i></li>
                    <li className="footer_list"><i className="las la-envelope"></i></li>
                </ul>
                <p className="info footer_text"><i className="far fa-copyright"></i>2025 Frontend Guide. Made with love by Sahil Lalotra</p>
            </div>
        </div>
    </div>
</section>
  )
}
