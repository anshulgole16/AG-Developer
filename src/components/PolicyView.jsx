import { X } from 'lucide-react'
import { useEffect } from 'react'

const policies = {
  privacy: {
    title: 'Privacy Policy',
    content: (
      <div className="space-y-6">
        <p>We respect your privacy and are committed to protecting your personal information.</p>
        
        <div>
          <h3 className="text-xl font-bold text-text-primary mb-2">1. Information We Collect</h3>
          <p>We may collect your name, email, phone number, and project details when you contact us or fill out forms on our website.</p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-text-primary mb-2">2. How We Use Your Information</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>To communicate with you</li>
            <li>To understand your project requirements</li>
            <li>To deliver services</li>
            <li>To provide support</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-text-primary mb-2">3. Data Protection</h3>
          <p>Your information is kept secure and is not shared with third parties without your consent.</p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-text-primary mb-2">4. Cookies</h3>
          <p>Our website may use basic cookies to improve user experience.</p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-text-primary mb-2">5. Third-Party Services</h3>
          <p>We may use tools like WhatsApp, email services, or hosting providers. These services may collect limited data as per their policies.</p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-text-primary mb-2">6. Your Rights</h3>
          <p>You can request to update or delete your data anytime by contacting us.</p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-text-primary mb-2">7. Contact</h3>
          <p>If you have any questions, contact:<br/>
          Email: anshulgole4@gmail.com<br/>
          Phone: +91 8305995654</p>
        </div>
      </div>
    )
  },
  payment: {
    title: 'Payment & Cancellation Policy',
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-text-primary mb-2">1. Advance Payment</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>50% advance payment is required before starting any project.</li>
            <li>Work will begin only after receiving the advance.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-text-primary mb-2">2. Final Payment</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Remaining 50% must be paid after project completion.</li>
            <li>Final files/website access will be provided after full payment.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-text-primary mb-2">3. Cancellation Policy</h3>
          <p className="font-medium mb-1">If client cancels within 24 hours:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>25% of the advance will be refunded</li>
            <li>Remaining 25% will be retained as service/effort charges</li>
          </ul>
          <p className="font-medium mb-1">If client cancels after 24 hours:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>No refund will be provided</li>
            <li>Advance amount will be non-refundable</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-text-primary mb-2">4. Delay in Payment</h3>
          <p>Project delivery may be paused if payment is delayed.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-text-primary mb-2">5. Scope Changes</h3>
          <p>Additional features or major changes may require extra charges.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-text-primary mb-2">6. No Refund After Completion</h3>
          <p>Once the project is completed and delivered, no refund will be provided.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-text-primary mb-2">7. Agreement</h3>
          <p>By starting the project, the client agrees to all the above terms.</p>
        </div>
      </div>
    )
  },
  terms: {
    title: 'Terms & Conditions',
    content: (
      <div className="space-y-6">
        <p>These Terms & Conditions govern the use of our services. By starting a project with us, you agree to the following terms:</p>
        
        <div>
          <h3 className="text-xl font-bold text-text-primary mb-2">1. Services</h3>
          <p>We provide website design and development services based on client requirements.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-text-primary mb-2">2. Project Initiation</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>A 50% advance payment is required to begin the project.</li>
            <li>Work will not start without advance payment.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-text-primary mb-2">3. Project Timeline</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Delivery timelines depend on project scope.</li>
            <li>Delays may occur if client does not provide required content or approvals on time.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-text-primary mb-2">4. Client Responsibilities</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provide content (text, images, details) on time</li>
            <li>Give timely feedback and approvals</li>
            <li>Ensure information provided is accurate</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-text-primary mb-2">5. Revisions</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Revisions are provided as per selected plan.</li>
            <li>Extra revisions may be chargeable.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-text-primary mb-2">6. Payment Terms</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Remaining 50% payment must be completed after project completion.</li>
            <li>Final files, code, or website access will be given only after full payment.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-text-primary mb-2">7. Cancellation & Refund</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Cancellation within 24 hours: 25% of advance will be refunded</li>
            <li>Cancellation after 24 hours: No refund</li>
            <li>No refund after project completion</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-text-primary mb-2">8. Ownership</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Full ownership of the website will be transferred after complete payment.</li>
            <li>Until full payment, all rights remain with the developer.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-text-primary mb-2">9. Maintenance & Support</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Basic support may be provided depending on plan</li>
            <li>Ongoing maintenance is a separate paid service</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-text-primary mb-2">10. Third-Party Services</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Domain, hosting, or third-party tools are subject to their own terms and costs</li>
            <li>We are not responsible for third-party downtime or issues</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-text-primary mb-2">11. Limitation of Liability</h3>
          <p>We are not responsible for any business loss, data loss, or downtime after delivery.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-text-primary mb-2">12. Termination</h3>
          <p>We reserve the right to stop work if client fails to communicate or make payments.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-text-primary mb-2">13. Changes to Terms</h3>
          <p>These terms may be updated at any time without prior notice.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-text-primary mb-2">14. Contact</h3>
          <p>Email: anshulgole4@gmail.com<br/>
          Phone: +91 8305995654<br/>
          Location: Gwalior</p>
        </div>
      </div>
    )
  }
}

export default function PolicyView({ policyType, onClose }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  if (!policyType || !policies[policyType]) return null
  
  const policy = policies[policyType]

  return (
    <div 
      className="fixed inset-0 z-[200] bg-bg overflow-y-auto"
      data-lenis-prevent="true"
    >
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 relative">
        <button 
          onClick={onClose}
          className="fixed top-6 right-6 w-12 h-12 bg-surface border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all z-10 shadow-xl cursor-pointer"
        >
          <X size={24} />
        </button>
        
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-12">
          {policy.title}
        </h1>
        
        <div className="text-text-secondary text-lg leading-relaxed pb-24">
          {policy.content}
        </div>
      </div>
    </div>
  )
}
