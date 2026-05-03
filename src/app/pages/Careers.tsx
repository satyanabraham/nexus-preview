import { useState } from 'react';
import { Upload, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export function Careers() {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    whyJoin: '',
    experience: '',
  });
  const [resume, setResume] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const jobCategories = [
    {
      title: 'Core Infrastructure Layer',
      roles: [
        'GPU Infrastructure Engineers',
        'Data Center Architects',
        'Cloud Infrastructure Specialists (AWS / Azure / GCP)',
        'HPC (High Performance Computing) Engineers',
        'Network & Fabric Engineers (InfiniBand, NVLink)',
        'Storage Engineers (Distributed / Object / High-throughput)',
      ],
    },
    {
      title: 'Platform & DevOps',
      roles: [
        'DevOps Engineers',
        'Platform Engineers',
        'Site Reliability Engineers (SRE)',
        'Kubernetes Specialists',
        'CI/CD Pipeline Engineers',
        'Solutions Architects (AI Infra)',
        'Infrastructure-as-Code Engineers (Terraform, Pulumi)',
        'Implementation Specialists',
      ],
    },
    {
      title: 'AI/ML Engineering',
      roles: [
        'Machine Learning Engineers',
        'AI Engineers (LLMs, GenAI, Agents)',
        'Data Scientists',
        'MLOps Engineers',
        'Model Optimization Engineers (Inference, Quantization)',
        'Computer Vision / NLP Specialists',
      ],
    },
    {
      title: 'Orchestration & Workload Intelligence Layer',
      roles: [
        'AI Infrastructure Analysts',
        'Workload Optimization Specialists',
        'GPU Utilization Engineers',
        'Scheduling & Resource Allocation Engineers',
        'Observability Engineers (AI infra focused)',
        'Digital Twin Engineers (for infra visualization)',
      ],
    },
    {
      title: 'FinOps & Cost Intelligence',
      roles: [
        'FinOps Analysts (AI/GPU cost optimization)',
        'Cloud Cost Engineers',
        'Capacity Planning Specialists',
        'Commercial Optimization Analysts',
        'Pricing & Utilization Strategists',
      ],
    },
    {
      title: 'Security, Compliance & Governance Layer',
      roles: [
        'Cloud Security Engineers',
        'AI Security Specialists',
        'Data Governance Experts',
        'Compliance & Risk Analysts (GDPR, UAE regs, etc.)',
        'Identity & Access Engineers (Zero Trust)',
      ],
    },
  ];

  const handleRoleToggle = (role: string) => {
    if (selectedRoles.includes(role)) {
      setSelectedRoles(selectedRoles.filter((r) => r !== role));
      setError('');
    } else {
      if (selectedRoles.length >= 5) {
        setError('You can select up to 5 roles maximum');
        return;
      }
      setSelectedRoles([...selectedRoles, role]);
      setError('');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        setError('Resume file size must be less than 5MB');
        return;
      }
      setResume(file);
      setError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedRoles.length === 0) {
      setError('Please select at least one role');
      return;
    }

    if (!resume) {
      setError('Please upload your resume');
      return;
    }

    // Create mailto link with form data
    const subject = `Job Application - ${selectedRoles[0]}${selectedRoles.length > 1 ? ` +${selectedRoles.length - 1} more` : ''}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
LinkedIn: ${formData.linkedin}

Selected Roles:
${selectedRoles.map((role, i) => `${i + 1}. ${role}`).join('\n')}

Why I want to join NEXUS:
${formData.whyJoin}

Relevant Experience:
${formData.experience}

Note: Resume attached separately - ${resume.name}
    `.trim();

    const mailtoLink = `mailto:contact@nexus-aidc.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', linkedin: '', whyJoin: '', experience: '' });
      setSelectedRoles([]);
      setResume(null);
    }, 3000);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-black text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <span className="text-green-400 font-bold text-xs uppercase tracking-[0.3em]">
              Careers at Nexus
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Join the Future of
            <span className="block text-green-400 mt-2">AI Infrastructure</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            We're building the next generation of AI infrastructure management. Join our team of world-class engineers and innovators.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-black mb-4">
              Express Your Interest
            </h2>
            <p className="text-lg text-gray-700">
              Select the roles you're interested in (up to 5) and tell us about yourself
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              <p className="text-red-800 font-semibold">{error}</p>
            </div>
          )}

          {submitted && (
            <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
              <p className="text-green-800 font-semibold">
                Opening email client with your application details. Please attach your resume and send.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Personal Information */}
            <div className="bg-zinc-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-black mb-5">Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="+971-50-xxx-xxxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
              </div>
            </div>

            {/* Role Selection */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-2">
                Select Roles of Interest
              </h3>
              <p className="text-gray-600 mb-5">
                Choose up to 5 roles that match your expertise ({selectedRoles.length}/5 selected)
              </p>
              
              <div className="space-y-6">
                {jobCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="bg-zinc-50 p-5 rounded-lg">
                    <h4 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      {category.title}
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {category.roles.map((role, roleIndex) => (
                        <label
                          key={roleIndex}
                          className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                            selectedRoles.includes(role)
                              ? 'bg-green-100 border-2 border-green-500'
                              : 'bg-white border-2 border-gray-200 hover:border-green-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={selectedRoles.includes(role)}
                            onChange={() => handleRoleToggle(role)}
                            className="mt-1 w-5 h-5 text-green-500 rounded focus:ring-green-500"
                          />
                          <span className="text-sm text-gray-800 font-medium leading-tight">
                            {role}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Upload Resume * (PDF, DOC, DOCX - Max 5MB)
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  id="resume-upload"
                  required
                />
                <label
                  htmlFor="resume-upload"
                  className="flex items-center justify-center gap-3 w-full px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-green-500 transition-colors bg-zinc-50"
                >
                  <Upload className="w-6 h-6 text-gray-400" />
                  <span className="text-gray-700 font-semibold">
                    {resume ? resume.name : 'Click to upload your resume'}
                  </span>
                </label>
              </div>
            </div>

            {/* Why Join NEXUS */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Why do you want to join NEXUS? *
              </label>
              <textarea
                required
                value={formData.whyJoin}
                onChange={(e) => setFormData({ ...formData, whyJoin: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors resize-none"
                placeholder="Tell us what excites you about NEXUS and why you want to be part of our journey..."
              />
            </div>

            {/* Experience */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Relevant Experience *
              </label>
              <p className="text-sm text-gray-600 mb-2">
                Please outline your experience relevant to the selected role(s)
              </p>
              <textarea
                required
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                rows={8}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors resize-none"
                placeholder="List your relevant experience, key projects, technologies you've worked with, and achievements..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="px-12 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-black font-bold rounded-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 text-lg uppercase tracking-wide"
              >
                <span>Submit Application</span>
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-14 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-black mb-4">
            What Happens Next?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h4 className="font-bold text-black mb-2">Review</h4>
              <p className="text-gray-600 text-sm">
                We'll review your application and assess your fit for the selected roles
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h4 className="font-bold text-black mb-2">Interview</h4>
              <p className="text-gray-600 text-sm">
                Qualified candidates will be invited for interviews with our team
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h4 className="font-bold text-black mb-2">Offer</h4>
              <p className="text-gray-600 text-sm">
                Successful candidates receive an offer to join the NEXUS team
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
