import { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [charCount, setCharCount] = useState(0);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";
    if (message.length > 500) return;

    setSubmitting(true);
    const data = new FormData(form);
    const params = new URLSearchParams();
    data.forEach((value, key) => {
      params.append(key, value.toString());
    });

    try {
      await fetch("https://readdy.ai/api/form/d7cj5ehnoju8nk5a0sog", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#0d1520]/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-lg w-full max-w-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#1a2332] px-8 py-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">Book a Strategy Call</h3>
              <p className="text-sm text-slate-300 mt-1 font-light">30 minutes · No obligation · Limited availability</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer ml-4 flex-shrink-0"
            >
              <i className="ri-close-line text-xl" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-8">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 flex items-center justify-center bg-[#1a2332]/10 rounded-full mx-auto mb-4">
                <i className="ri-check-line text-2xl text-[#1a2332]" />
              </div>
              <h4 className="text-lg font-semibold text-[#1a2332] mb-2">Request Received</h4>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                Thank you. John will be in touch within one business day to confirm your session.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 bg-[#1a2332] text-white text-sm font-medium rounded-md cursor-pointer whitespace-nowrap"
              >
                Close
              </button>
            </div>
          ) : (
            <form
              data-readdy-form
              id="book-strategy-call"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-md text-sm text-slate-700 focus:outline-none focus:border-[#1a2332] transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-md text-sm text-slate-700 focus:outline-none focus:border-[#1a2332] transition-colors"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-md text-sm text-slate-700 focus:outline-none focus:border-[#1a2332] transition-colors"
                  placeholder="you@yourpractice.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Business Type *
                </label>
                <select
                  name="business_type"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-md text-sm text-slate-700 focus:outline-none focus:border-[#1a2332] transition-colors bg-white cursor-pointer"
                >
                  <option value="">Select your business type</option>
                  <option value="Chiropractic Practice">Chiropractic Practice</option>
                  <option value="Sports Medicine">Sports Medicine</option>
                  <option value="Medical Practice">Medical Practice</option>
                  <option value="Med Spa">Med Spa</option>
                  <option value="Dental Practice">Dental Practice</option>
                  <option value="Other Service Business">Other Service Business</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Annual Revenue (Approximate)
                </label>
                <select
                  name="annual_revenue"
                  className="w-full px-4 py-3 border border-slate-200 rounded-md text-sm text-slate-700 focus:outline-none focus:border-[#1a2332] transition-colors bg-white cursor-pointer"
                >
                  <option value="">Select range</option>
                  <option value="Under $250K">Under $250K</option>
                  <option value="$250K – $500K">$250K – $500K</option>
                  <option value="$500K – $1M">$500K – $1M</option>
                  <option value="$1M – $3M">$1M – $3M</option>
                  <option value="$3M+">$3M+</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  What is your biggest challenge right now?
                </label>
                <textarea
                  name="message"
                  rows={3}
                  maxLength={500}
                  onChange={(e) => setCharCount(e.target.value.length)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-md text-sm text-slate-700 focus:outline-none focus:border-[#1a2332] transition-colors resize-none"
                  placeholder="Briefly describe your current situation..."
                />
                <p className="text-xs text-slate-400 text-right mt-1">{charCount}/500</p>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-[#1a2332] text-white text-sm font-bold rounded-md hover:bg-[#243044] transition-colors duration-200 cursor-pointer whitespace-nowrap disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Request Strategy Call"}
              </button>

              <p className="text-xs text-slate-400 text-center font-light">
                Your information is kept strictly confidential.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
