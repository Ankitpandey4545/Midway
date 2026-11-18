'use client'

import { useMemo, useState } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

export default function LoanCalculatorPage() {
  const [amount, setAmount] = useState(300000)
  const [rate, setRate] = useState(12)
  const [months, setMonths] = useState(36)
  const emi = useMemo(() => {
    const monthlyRate = rate / 1200
    if (!monthlyRate) return Math.round(amount / months)
    return Math.round(amount * monthlyRate * (1 + monthlyRate) ** months / ((1 + monthlyRate) ** months - 1))
  }, [amount, rate, months])
  const total = emi * months

  return <main id="top" className="tool-page">
    <SiteHeader />
    <section className="tool-hero"><div className="container tool-hero-inner"><div className="eyebrow eyebrow-light"><span className="eyebrow-line"/> PLAN YOUR NEXT MOVE</div><h1>Loan calculator.<br/><em>Clear numbers.</em></h1><p>Adjust the amount, interest rate and repayment period to get an estimated monthly EMI.</p><a className="tool-back" href="/#top">← Back to Midway home</a></div></section>
    <section className="tool-content"><div className="container tool-calculator-layout">
      <div className="tool-intro"><span className="tool-kicker">PERSONAL LOAN ESTIMATOR</span><h2>Know your<br/><em>monthly estimate.</em></h2><p>Use the controls to explore a repayment amount that feels comfortable. You can change each value at any time.</p><div className="tool-note"><span>i</span><p>This estimate is for illustration only. Actual rates, fees and terms depend on lender approval and your eligibility.</p></div></div>
      <div className="calc-panel tool-calc-panel"><div className="calc-panel-head"><div><span className="card-label">YOUR ESTIMATE</span><h3>Shape it around your plans.</h3></div><span className="calc-icon">↗</span></div>
        <label className="tool-field-label" htmlFor="loan-amount"><span>Loan amount</span><b>₹{amount.toLocaleString('en-IN')}</b></label><input id="loan-amount" className="tool-range" type="range" min="50000" max="1000000" step="25000" value={amount} onChange={e=>setAmount(Number(e.target.value))}/><div className="range-ends"><span>₹50,000</span><span>₹10,00,000</span></div>
        <div className="tool-select-grid"><label>Interest rate <span><input type="number" min="1" max="36" step="0.5" value={rate} onChange={e=>setRate(Math.min(36,Math.max(1,Number(e.target.value))))}/> % p.a.</span></label><label>Repayment period <select value={months} onChange={e=>setMonths(Number(e.target.value))}><option value={12}>12 months</option><option value={24}>24 months</option><option value={36}>36 months</option><option value={48}>48 months</option><option value={60}>60 months</option></select></label></div>
        <div className="tool-result"><span>ESTIMATED MONTHLY EMI</span><b>₹{emi.toLocaleString('en-IN')}</b><div><span>Total repayment</span><strong>₹{total.toLocaleString('en-IN')}</strong></div><div><span>Estimated interest</span><strong>₹{(total-amount).toLocaleString('en-IN')}</strong></div></div>
        <a className="button button-blue calc-button" href="mailto:hello@midway.in?subject=Personal%20loan%20enquiry">Ask us about your options <span>↗</span></a><p className="calc-disclaimer">This calculator does not represent a loan offer or approval. Midway is not a lender.</p>
      </div>
    </div></section>
    <section className="tool-bottom container"><span>HAVE QUESTIONS?</span><p>See our <a href="/#faq">frequently asked questions</a> or <a href="mailto:hello@midway.in">get in touch</a>.</p></section>
    <SiteFooter />
  </main>
}
