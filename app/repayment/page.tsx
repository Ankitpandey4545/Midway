'use client'

import { FormEvent, useState } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

export default function RepaymentPage() {
  const [mobile, setMobile] = useState('')
  const [reference, setReference] = useState('')
  const [error, setError] = useState('')
  const [lookedUp, setLookedUp] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!/^[6-9]\d{9}$/.test(mobile)) return setError('Please enter a valid 10-digit Indian mobile number.')
    if (reference.trim().length < 4) return setError('Please enter the loan reference shared by your lender.')
    setError('')
    setLookedUp(true)
  }

  return <main id="top" className="repayment-page">
    <SiteHeader />
    <section className="repay-hero"><div className="container repay-hero-inner"><div><div className="eyebrow eyebrow-light"><span className="eyebrow-line"/> REPAYMENT SUPPORT</div><h1>Stay clear on<br/><em>every payment.</em></h1><p>Use your lender’s repayment schedule and payment instructions to keep your loan on track.</p></div><div className="repay-hero-mark"><span>EMI</span><b>₹</b><i>✓</i></div></div></section>
    <section className="repay-content"><div className="container repay-layout"><div className="repay-form-card"><div className="apply-form-heading"><span className="form-step">REPAYMENT LOOKUP</span><h2>Find your loan details</h2><p>Enter the details linked to your loan account.</p></div>{lookedUp ? <div className="apply-success repay-success" role="status"><span>i</span><h3>Lookup isn’t connected yet</h3><p>This preview doesn’t send or store your details, and no payment was initiated. Check your lender’s app or loan documents for your balance, due date and payment link.</p><button type="button" onClick={()=>setLookedUp(false)}>Edit details</button></div> : <form onSubmit={handleSubmit} noValidate><label className="apply-label" htmlFor="repay-mobile">Registered mobile number <b>*</b></label><div className="mobile-input"><span>🇮🇳 <b>+91</b></span><input id="repay-mobile" type="tel" inputMode="numeric" autoComplete="tel-national" maxLength={10} placeholder="Enter 10-digit mobile number" value={mobile} onChange={e=>setMobile(e.target.value.replace(/\D/g,'').slice(0,10))} required/></div><small className="field-hint">Use the mobile number associated with your lender account.</small><label className="apply-label repay-ref-label" htmlFor="loan-reference">Loan account / reference number <b>*</b></label><input className="repay-reference" id="loan-reference" type="text" autoComplete="off" placeholder="Enter the reference from your loan documents" value={reference} onChange={e=>setReference(e.target.value)} required/>{error && <p className="form-error" role="alert">{error}</p>}<button className="button button-blue apply-submit" type="submit">Continue <span>→</span></button><p className="form-privacy">This preview form does not send or save the details you enter.</p></form>}</div>
      <aside className="repay-side"><div className="eyebrow"><span className="eyebrow-line"/> BEFORE MAKING A PAYMENT</div><h2>Three things<br/>to <em>check.</em></h2><div className="repay-checks"><article><span>01</span><div><b>Confirm the due amount</b><p>Check the current EMI and due date in the lender’s official app or statement.</p></div></article><article><span>02</span><div><b>Use an official channel</b><p>Make payments only through the payment method shared by your lender.</p></div></article><article><span>03</span><div><b>Save your receipt</b><p>Keep the confirmation or receipt after a successful payment.</p></div></article></div><div className="repay-help"><b>Need help with a payment?</b><p>Contact the lender named in your loan agreement. They manage your repayment schedule and account.</p><a href="/#faq">Read FAQs <span>↗</span></a></div></aside>
    </div></section>
    <section className="repay-disclaimer"><div className="container"><span>IMPORTANT</span><p>Midway does not collect loan repayments or access your lender account. Repayment information and payment options come directly from your lender.</p></div></section>
    <SiteFooter />
  </main>
}
