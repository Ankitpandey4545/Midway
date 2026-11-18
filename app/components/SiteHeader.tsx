import Image from 'next/image'

export function Brand() {
  return <a href="/" className="brand" aria-label="Midway home">
    <Image className="brand-image" src="/midway-logo.png" alt="Midway — Moving Forward, Together" width={1492} height={1492} priority />
  </a>
}

export default function SiteHeader() {
  return <>
    <div className="announcement"><span className="pulse"/> A clearer way to move forward <span className="announcement-arrow">↗</span></div>
    <header className="nav-wrap"><nav className="nav container"><Brand/><div className="nav-links"><a href="/#how">How it works</a><a href="/loan-calculator">Loan Calculator</a><a href="/about-us">About Us</a><a href="/#faq">FAQs</a></div><a className="button button-blue nav-cta" href="/apply">Apply Now <span>↗</span></a><a className="menu" href="/apply" aria-label="Apply now">☰</a></nav></header>
  </>
}
