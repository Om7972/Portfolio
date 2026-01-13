import React, { useState, useEffect } from 'react';
import { Mail, Send, Github, Linkedin, Instagram, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Validate form whenever data changes
  useEffect(() => {
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    
    // Check overall validity
    setIsFormValid(
      !newErrors.name && 
      !newErrors.email && 
      !newErrors.subject && 
      !newErrors.message &&
      formData.name !== '' &&
      formData.email !== '' &&
      formData.subject !== '' &&
      formData.message !== ''
    );
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Reset status when user starts typing again after an error
    if (submitStatus === 'error') setSubmitStatus('idle');
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid) {
      setTouched({ name: true, email: true, subject: true, message: true });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using FormSubmit.co AJAX endpoint
      const response = await fetch("https://formsubmit.co/ajax/odhumkekar@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _subject: `Portfolio Contact: ${formData.subject}`
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTouched({ name: false, email: false, subject: false, message: false });
        // Optional: clear success message after a delay
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper to render input classes based on error state
  const getInputClasses = (fieldName: keyof typeof errors) => {
    const hasError = touched[fieldName] && errors[fieldName];
    return `w-full px-4 py-3 bg-background-tertiary border rounded-xl focus:ring-2 focus:border-transparent text-foreground placeholder-foreground-muted transition-all outline-none ${
      hasError 
        ? 'border-red-500/50 focus:ring-red-500/50' 
        : 'border-border focus:ring-primary'
    }`;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'odhumkekar@gmail.com',
      href: 'mailto:odhumkekar@gmail.com'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Om7972',
      color: 'hover:text-foreground'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/om-dhumkekar-9b1865295/',
      color: 'hover:text-blue-500'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com',
      color: 'hover:text-pink-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dots opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slideInUp">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Ready to start a project together? I'd love to hear from you. Let's create something amazing!
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3 animate-slideInLeft">
              <div className="bg-gradient-card p-8 rounded-2xl border border-border shadow-card">
                <h3 className="text-2xl font-semibold mb-6 gradient-text-accent">
                  Send me a message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground-secondary mb-2">
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClasses('name')}
                        placeholder="Your name"
                        disabled={isSubmitting}
                      />
                      {touched.name && errors.name && (
                        <div className="flex items-center gap-1 mt-2 text-red-500 text-xs">
                          <AlertCircle size={12} />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground-secondary mb-2">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClasses('email')}
                        placeholder="your.email@example.com"
                        disabled={isSubmitting}
                      />
                      {touched.email && errors.email && (
                        <div className="flex items-center gap-1 mt-2 text-red-500 text-xs">
                          <AlertCircle size={12} />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground-secondary mb-2">
                      Subject *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClasses('subject')}
                      placeholder="What's this about?"
                      disabled={isSubmitting}
                    />
                    {touched.subject && errors.subject && (
                      <div className="flex items-center gap-1 mt-2 text-red-500 text-xs">
                        <AlertCircle size={12} />
                        <span>{errors.subject}</span>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground-secondary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      rows={6}
                      className={`${getInputClasses('message')} resize-none`}
                      placeholder="Tell me about your project or just say hello!"
                      disabled={isSubmitting}
                    />
                    {touched.message && errors.message && (
                      <div className="flex items-center gap-1 mt-2 text-red-500 text-xs">
                        <AlertCircle size={12} />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3 text-green-400">
                      <CheckCircle size={20} />
                      <span>Message sent successfully! I'll get back to you soon.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400">
                      <AlertCircle size={20} />
                      <span>Something went wrong. Please try again or email me directly.</span>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className={`w-full py-4 px-6 font-bold text-lg rounded-xl transition-all transform flex items-center justify-center shadow-lg 
                      ${isFormValid && !isSubmitting
                        ? 'bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 text-white cursor-pointer' 
                        : 'bg-background-tertiary text-foreground-muted cursor-not-allowed opacity-50'}`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8 animate-slideInRight">
              {/* Contact Details */}
              <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card">
                <h3 className="text-xl font-semibold mb-6 gradient-text-accent">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-card transition-colors duration-300 group"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-foreground-muted">{info.label}</div>
                        <div className="text-foreground font-medium">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card">
                <h3 className="text-xl font-semibold mb-6 gradient-text-accent">
                  Connect with me
                </h3>
                
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-background-tertiary rounded-lg border border-border hover:border-primary hover:scale-110 transition-all duration-300 ${social.color} group`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
                
                <p className="text-sm text-foreground-muted mt-4">
                  Follow me on social media for updates on my latest projects and tech insights.
                </p>
              </div>

              {/* Quick Response Time */}
              <div className="bg-gradient-card p-6 rounded-2xl border border-border shadow-card">
                <h3 className="text-xl font-semibold mb-4 gradient-text-accent">
                  Response Time
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-sm text-foreground-secondary">
                      Usually responds within 24 hours
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-sm text-foreground-secondary">
                      Available for freelance projects
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <span className="text-sm text-foreground-secondary">
                      Open to collaboration opportunities
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;