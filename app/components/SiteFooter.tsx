import { Brand } from './SiteHeader'

export default function SiteFooter() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-main">
      <div><Brand/><p>Moving forward, together.<br/>Thoughtful finance for real life.</p></div>
      <div className="footer-links"><span>EXPLORE</span><a href="/#how">How it works</a><a href="/about-us">About Midway</a><a href="/loan-calculator">Loan calculator</a><a href="/apply">Apply now</a></div>
      <div className="footer-links"><span>HERE TO HELP</span><a href="/#faq">FAQs</a><a href="mailto:hello@midway.in">Contact us ↗</a><a href="/loan-calculator">Estimate your EMI</a></div>
      <div className="footer-note"><span>MADE FOR THE WAY AHEAD.</span><div>INDIA <b>•</b> 2024</div><small>Midway facilitates access to personal loan offers through lending partners. Loan approval, terms and disbursal are subject to lender policies and eligibility criteria. Midway is not a lender.</small></div>
    </div>
    <div className="footer-bottom"><span>© 2024 MIDWAY. ALL RIGHTS RESERVED.</span><span><a href="/about-us">ABOUT US</a><a href="/loan-calculator">LOAN CALCULATOR</a><a href="#top">BACK TO TOP ↑</a></span></div>
  </div></footer>
}
