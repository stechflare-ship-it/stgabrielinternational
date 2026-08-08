import React, { useState } from 'react';
import { Send, CheckCircle2, User, Phone, Mail, GraduationCap, Building2, MessageSquare, ShieldCheck } from 'lucide-react';
import { AdmissionFormData } from '../types';

export const AdmissionForm: React.FC = () => {
  const [formData, setFormData] = useState<AdmissionFormData>({
    parentName: '',
    phone: '',
    email: '',
    childName: '',
    gradeApplying: 'Grade 1',
    type: 'Boarding',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.parentName.trim() || !formData.phone.trim() || !formData.childName.trim()) {
      setErrorMsg('Please fill in parent name, phone number, and child name.');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="bg-white rounded-3xl border-2 border-[#C59B27]/40 shadow-2xl p-6 sm:p-10 my-8">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-gray-100 pb-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#C59B27]">
              Admission Enquiry Form
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1D33] mt-1">
              Apply or Request School Information
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Fill out the form below to receive full prospectus, fee schedules, and interview booking instructions.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
              {errorMsg}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Parent Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#0B1D33] flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Parent / Guardian Name *</span>
              </label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                placeholder="e.g. Mary Wanjiku"
                required
                className="w-full text-xs p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C59B27] bg-gray-50 focus:bg-white"
              />
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#0B1D33] flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Telephone / Phone Number *</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+254 700 000 000"
                required
                className="w-full text-xs p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C59B27] bg-gray-50 focus:bg-white"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#0B1D33] flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="parent@example.com"
                className="w-full text-xs p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C59B27] bg-gray-50 focus:bg-white"
              />
            </div>

            {/* Child Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#0B1D33] flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Child / Student Name *</span>
              </label>
              <input
                type="text"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                placeholder="Child's Full Name"
                required
                className="w-full text-xs p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C59B27] bg-gray-50 focus:bg-white"
              />
            </div>

            {/* Grade Applying */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#0B1D33]">
                Grade / Year Level Applying For
              </label>
              <select
                name="gradeApplying"
                value={formData.gradeApplying}
                onChange={handleChange}
                className="w-full text-xs p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C59B27] bg-gray-50 focus:bg-white font-medium"
              >
                <option value="Playgroup (Ages 2-3)">Playgroup (Ages 2-3)</option>
                <option value="Nursery (Ages 3-4)">Nursery (Ages 3-4)</option>
                <option value="Reception (Ages 4-5)">Reception (Ages 4-5)</option>
                <option value="Grade 1 / Year 1">Grade 1 / Year 1</option>
                <option value="Grade 2 / Year 2">Grade 2 / Year 2</option>
                <option value="Grade 3 / Year 3">Grade 3 / Year 3</option>
                <option value="Grade 4 / Year 4">Grade 4 / Year 4</option>
                <option value="Grade 5 / Year 5">Grade 5 / Year 5</option>
                <option value="Grade 6 / Year 6">Grade 6 / Year 6</option>
                <option value="Lower Secondary (Years 7-9)">Lower Secondary (Years 7-9)</option>
                <option value="IGCSE (Years 10-11)">IGCSE (Years 10-11)</option>
                <option value="A-Level (Years 12-13)">A-Level (Years 12-13)</option>
              </select>
            </div>

            {/* Day / Boarding Option */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#0B1D33] flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Attendance Preference</span>
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full text-xs p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C59B27] bg-gray-50 focus:bg-white font-medium"
              >
                <option value="Boarding">Boarding School (Boys / Girls Separate)</option>
                <option value="Day">Day School</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#0B1D33] flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Additional Questions or Special Notes</span>
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your child's academic background, interests, or specific questions..."
              className="w-full text-xs p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C59B27] bg-gray-50 focus:bg-white"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-xl bg-[#C59B27] hover:bg-[#E0BA43] text-[#0B1D33] font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
          >
            {isSubmitting ? (
              <span>Processing Enquiry...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Admission Enquiry</span>
              </>
            )}
          </button>
        </form>
      ) : (
        /* Success State */
        <div className="text-center py-10 space-y-4 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-500">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h3 className="font-serif text-2xl font-bold text-[#0B1D33]">
            Enquiry Received Successfully!
          </h3>

          <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-[#0B1D33]">{formData.parentName}</strong>. Your enquiry regarding <strong className="text-[#0B1D33]">{formData.childName}</strong> ({formData.gradeApplying}) has been recorded.
          </p>

          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 max-w-md mx-auto text-xs text-gray-700 space-y-2">
            <p className="font-semibold text-[#C59B27] uppercase tracking-wider">
              Next Steps for Admission:
            </p>
            <p>
              Our admissions officer will contact you at <strong>{formData.phone}</strong> within 24 hours to schedule an interview or campus tour.
            </p>
          </div>

          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 px-6 py-2.5 rounded-xl bg-[#0B1D33] text-white text-xs font-bold hover:bg-[#162E4D] transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      )}
    </div>
  );
};
