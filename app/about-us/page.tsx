import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

export default function AboutUsPage() {
  return <main id="top" className="tool-page">
    <SiteHeader />
    <section className="about-hero"><div className="container about-hero-layout"><div><div className="eyebrow"><span className="eyebrow-line"/> ABOUT MIDWAY</div><h1>Moving forward,<br/><em>together.</em></h1><p>Money decisions can feel like a lot. Midway is here to make the next step feel clearer, with simple information and a journey designed around you.</p><a className="button button-blue" href="/loan-calculator">Explore the loan calculator <span>↗</span></a></div><div className="about-art"><div className="about-sun"/><div className="about-road road-one"/><div className="about-road road-two"/><div className="about-road road-three"/><span>YOUR PLANS.<br/>YOUR WAY FORWARD.</span><b>MIDWAY · 01</b></div></div></section>
    <section className="about-principles"><div className="container"><div className="eyebrow"><span className="eyebrow-line"/> WHAT WE BELIEVE</div><h2>Clarity makes room<br/>for <em>confidence.</em></h2><div className="principle-grid"><article><span>01 / CLEAR BY DESIGN</span><h3>Understand every step.</h3><p>We aim to make the process and key loan details easier to follow, so you can make an informed choice.</p></article><article><span>02 / YOUR PACE</span><h3>Decisions stay yours.</h3><p>Explore your options, compare what matters and move ahead when the choice feels right for you.</p></article><article><span>03 / REAL LIFE FIRST</span><h3>Built around your plans.</h3><p>A personal loan is a commitment. We encourage thoughtful borrowing that fits your needs and repayment ability.</p></article></div></div></section>
    <section className="about-cta"><div className="container about-cta-inner"><div><div className="eyebrow eyebrow-light"><span className="eyebrow-line"/> TAKE THE NEXT STEP</div><h2>Make your next move<br/><em>with clarity.</em></h2></div><a className="button button-white" href="/loan-calculator">Try the loan calculator <span>↗</span></a></div></section>
    <SiteFooter />
  </main>
}
