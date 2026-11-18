'use client'

import { FormEvent, useState } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

export default function ApplyPage() {
  const [mobile, setMobile] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [pepConfirmed, setPepConfirmed] = useState(false)
  const [captchaAnswer, setCaptchaAnswer] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!/^[6-9]\d{9}$/.test(mobile)) return setError('Please enter a valid 10-digit Indian mobile number.')
    if (!termsAccepted || !pepConfirmed) return setError('Please confirm both declarations to continue.')
    if (captchaAnswer.trim() !== '18') return setError('The captcha answer is incorrect. Please try again.')
    setError('')
    setSubmitted(true)
  }

  return <main id="top" className="apply-page">
    <SiteHeader />
    <section className="apply-intro"><div className="container apply-intro-layout"><div><div className="eyebrow"><span className="eyebrow-line"/> PERSONAL LOAN APPLICATION</div><h1>Start your personal<br/><em>loan application.</em></h1><p>Share a few details to get started. You can review the indicative pricing and charges before moving ahead.</p><div className="apply-points"><span><b>01</b> Simple to get started</span><span><b>02</b> Clear pricing details</span><span><b>03</b> Your choice, your pace</span></div></div><div className="apply-illustration"><div className="apply-orbit orbit-outer"/><div className="apply-orbit orbit-inner"/><div className="apply-document"><span>MIDWAY <b>↗</b></span><i/><i/><i/><strong>₹</strong></div><div className="apply-float">A clear next step <b>✓</b></div></div></div></section>

    <section className="apply-body"><div className="container apply-grid"><div className="apply-form-card"><div className="apply-form-heading"><span className="form-step">STEP 01 / 02</span><h2>Enter your details</h2><p>Please provide your mobile number to continue.</p></div>
      {submitted ? <div className="apply-success" role="status"><span>✓</span><h3>Details checked</h3><p>This preview form does not send or save your information. Connect a lender application service to continue with a real application.</p><button type="button" onClick={()=>setSubmitted(false)}>Edit details</button></div> : <form onSubmit={handleSubmit} noValidate>
        <label className="apply-label" htmlFor="mobile">Mobile number <b>*</b></label><div className="mobile-input"><span>🇮🇳 <b>+91</b></span><input id="mobile" type="tel" inputMode="numeric" autoComplete="tel-national" maxLength={10} placeholder="Enter 10-digit mobile number" value={mobile} onChange={e=>setMobile(e.target.value.replace(/\D/g,'').slice(0,10))} required /></div><small className="field-hint">We’ll use this number for application updates.</small>
        <label className="consent-row"><input type="checkbox" checked={termsAccepted} onChange={e=>setTermsAccepted(e.target.checked)}/><span>I agree to the application Terms and Conditions.</span></label>
        <label className="consent-row"><input type="checkbox" checked={pepConfirmed} onChange={e=>setPepConfirmed(e.target.checked)}/><span>I confirm that I am not a Politically Exposed Person (PEP), or related to one.</span></label>
        <div className="captcha-block"><label className="apply-label" htmlFor="captcha">Enter captcha <b>*</b></label><div className="captcha-row"><span className="captcha-question" aria-label="What is 9 plus 9?">9 + 9 = ?</span><input id="captcha" inputMode="numeric" placeholder="Your answer" value={captchaAnswer} onChange={e=>setCaptchaAnswer(e.target.value.replace(/\D/g,''))} required/></div></div>
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="button button-blue apply-submit" type="submit">Continue <span>→</span></button><p className="form-privacy">By continuing, you agree to be contacted about your enquiry. Your details are handled according to the applicable privacy terms.</p>
      </form>}
    </div><aside className="apply-aside"><div className="aside-heading"><span className="eyebrow"><span className="eyebrow-line"/> BEFORE YOU APPLY</span><h2>Loan pricing<br/><em>& charges.</em></h2><p>Indicative pricing at a glance. The lender will confirm your final offer and applicable charges.</p></div><div className="charge-card" id="charges"><h3>Rate &amp; fees</h3><div><span>Monthly interest rate</span><b>2.9166%</b></div><div><span>Offered APR</span><b>35% fixed</b></div><div><span>Tenure</span><b>1–3 years</b></div><div><span>Loan amount</span><b>₹10,000–₹3,00,000</b></div><div><span>Processing fee</span><b>2% of loan amount</b></div><div><span>GST on processing fee</span><b>18%</b></div></div><div className="example-card"><h3>Representative example</h3><p>For a ₹50,000 loan at 35% APR over 12 months:</p><div><span>Processing fee (2%)</span><b>₹1,000</b></div><div><span>GST on processing fee (18%)</span><b>₹180</b></div><div><span>Estimated amount disbursed</span><b>₹48,820</b></div><div><span>Estimated monthly EMI</span><b>₹4,998</b></div><div><span>Total repayment</span><b>₹59,976</b></div><div><span>Total interest</span><b>₹9,976</b></div><small>Illustration only. EMI is calculated on ₹50,000 at a monthly rate of 2.9166%, before fees. Actual terms depend on lender assessment.</small></div></aside></div></section>
    <SiteFooter />
  </main>
}
