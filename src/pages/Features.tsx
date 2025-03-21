
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  GraduationCap, 
  Users, 
  LineChart, 
  ShieldCheck, 
  ChevronRight, 
  Check,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  ScrollText,
  Sparkles
} from 'lucide-react';
import CreditEvaluationDemo from '@/components/feature-demos/CreditEvaluationDemo';
import FinancialLiteracyDemo from '@/components/feature-demos/FinancialLiteracyDemo';
import MentorshipDemo from '@/components/feature-demos/MentorshipDemo';
import MarketLinkageDemo from '@/components/feature-demos/MarketLinkageDemo';
import { useIsMobile } from '@/hooks/use-mobile';

const Features = () => {
  const isMobile = useIsMobile();
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToDemo = (demoId: string) => {
    setActiveDemo(demoId);
    const element = document.getElementById(demoId);
    if (element) {
      // Add some offset to account for fixed header
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Features</h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover the complete suite of tools and services designed to empower women entrepreneurs.
            </p>
            <nav className="flex justify-center">
              <ol className="flex space-x-2 items-center text-sm text-gray-500">
                <li>
                  <Link to="/" className="hover:text-primary transition-all-300">Home</Link>
                </li>
                <li><ChevronRight size={14} /></li>
                <li className="text-primary font-medium">Features</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Quick Feature Navigation */}
      {!isMobile && (
        <section className="py-10 bg-white border-b">
          <div className="container-custom">
            <div className="flex justify-center space-x-8">
              <button 
                onClick={() => scrollToDemo('credit-evaluation')}
                className={`flex flex-col items-center px-4 py-2 rounded-lg transition-all ${
                  activeDemo === 'credit-evaluation' ? 'bg-primary/10 text-primary' : 'hover:bg-gray-50'
                }`}
              >
                <TrendingUp size={24} className="mb-2" />
                <span className="text-sm font-medium">Credit Evaluation</span>
              </button>
              
              <button 
                onClick={() => scrollToDemo('financial-literacy')}
                className={`flex flex-col items-center px-4 py-2 rounded-lg transition-all ${
                  activeDemo === 'financial-literacy' ? 'bg-primary/10 text-primary' : 'hover:bg-gray-50'
                }`}
              >
                <GraduationCap size={24} className="mb-2" />
                <span className="text-sm font-medium">Financial Literacy</span>
              </button>
              
              <button 
                onClick={() => scrollToDemo('mentorship')}
                className={`flex flex-col items-center px-4 py-2 rounded-lg transition-all ${
                  activeDemo === 'mentorship' ? 'bg-primary/10 text-primary' : 'hover:bg-gray-50'
                }`}
              >
                <Users size={24} className="mb-2" />
                <span className="text-sm font-medium">Mentorship</span>
              </button>
              
              <button 
                onClick={() => scrollToDemo('market-linkage')}
                className={`flex flex-col items-center px-4 py-2 rounded-lg transition-all ${
                  activeDemo === 'market-linkage' ? 'bg-primary/10 text-primary' : 'hover:bg-gray-50'
                }`}
              >
                <LineChart size={24} className="mb-2" />
                <span className="text-sm font-medium">Market Linkage</span>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* AI Credit Evaluation */}
      <section id="credit-evaluation" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-12">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-2">
                Feature 01
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">AI-Powered Credit Evaluation</h2>
              <p className="text-gray-600 leading-relaxed">
                Our proprietary AI algorithms evaluate your business potential beyond traditional credit scores, making funding more accessible for women entrepreneurs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-0.5">
                    <Check size={12} />
                  </div>
                  <span className="text-gray-600">Holistic business evaluation beyond credit score</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-0.5">
                    <Check size={12} />
                  </div>
                  <span className="text-gray-600">Assessment of growth potential and market viability</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-0.5">
                    <Check size={12} />
                  </div>
                  <span className="text-gray-600">Customized funding recommendations based on business needs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-0.5">
                    <Check size={12} />
                  </div>
                  <span className="text-gray-600">Connections to funding sources aligned with your business model</span>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="bg-primary/10 rounded-tr-[100px] rounded-bl-[100px] h-full w-full absolute -top-6 -right-6 z-0"></div>
              <div className="glass-card rounded-xl overflow-hidden relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="AI Credit Evaluation" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <CreditEvaluationDemo />
          </div>
        </div>
      </section>

      {/* Financial Literacy */}
      <section id="financial-literacy" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-12">
            <div className="order-2 md:order-1 relative">
              <div className="bg-accent/10 rounded-tl-[100px] rounded-br-[100px] h-full w-full absolute -top-6 -left-6 z-0"></div>
              <div className="glass-card rounded-xl overflow-hidden relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Financial Literacy" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-2">
                Feature 02
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Gamified Financial Literacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Access personalized, gamified financial education modules designed to improve your business financial knowledge in an engaging way.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-0.5">
                    <Check size={12} />
                  </div>
                  <span className="text-gray-600">Interactive modules on budgeting, cash flow, and investment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-0.5">
                    <Check size={12} />
                  </div>
                  <span className="text-gray-600">Personalized learning path based on your business needs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-0.5">
                    <Check size={12} />
                  </div>
                  <span className="text-gray-600">Earn badges and rewards as you complete financial modules</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-0.5">
                    <Check size={12} />
                  </div>
                  <span className="text-gray-600">Track your progress and implement learnings in real-time</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8">
            <FinancialLiteracyDemo />
          </div>
        </div>
      </section>

      {/* Mentorship */}
      <section id="mentorship" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-12">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-2">
                Feature 03
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Personalized Mentorship</h2>
              <p className="text-gray-600 leading-relaxed">
                Connect with experienced mentors who provide guidance tailored to your specific business needs and challenges.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-0.5">
                    <Check size={12} />
                  </div>
                  <span className="text-gray-600">One-on-one sessions with successful women entrepreneurs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-0.5">
                    <Check size={12} />
                  </div>
                  <span className="text-gray-600">Mentor matching based on industry, experience, and goals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-0.5">
                    <Check size={12} />
                  </div>
                  <span className="text-gray-600">Group mentorship sessions and peer networking opportunities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-0.5">
                    <Check size={12} />
                  </div>
                  <span className="text-gray-600">Tools to track mentorship goals and measure progress</span>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="bg-secondary/20 rounded-tr-[100px] rounded-bl-[100px] h-full w-full absolute -top-6 -right-6 z-0"></div>
              <div className="glass-card rounded-xl overflow-hidden relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Personalized Mentorship" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <MentorshipDemo />
          </div>
        </div>
      </section>

      {/* Market Linkages */}
      <section id="market-linkage" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-12">
            <div className="order-2 md:order-1 relative">
              <div className="bg-primary/10 rounded-tl-[100px] rounded-br-[100px] h-full w-full absolute -top-6 -left-6 z-0"></div>
              <div className="glass-card rounded-xl overflow-hidden relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Market Linkages" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-2">
                Feature 04
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Market Linkage Tools</h2>
              <p className="text-gray-600 leading-relaxed">
                Gain access to new markets and opportunities through our extensive network of partners and platforms.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-0.5">
                    <Check size={12} />
                  </div>
                  <span className="text-gray-600">Connect with corporate buyers and procurement opportunities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-0.5">
                    <Check size={12} />
                  </div>
                  <span className="text-gray-600">Access to e-commerce platforms and digital marketplace integration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-0.5">
                    <Check size={12} />
                  </div>
                  <span className="text-gray-600">Export market guidance and international trade support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-0.5">
                    <Check size={12} />
                  </div>
                  <span className="text-gray-600">Supply chain and logistics optimization for your business</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8">
            <MarketLinkageDemo />
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-2">
              More Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Additional Platform Benefits</h2>
            <p className="text-gray-600 text-lg">
              NariNiti offers comprehensive support through a variety of complementary tools and resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card rounded-xl p-8 hover:shadow-lg transition-all-300">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Business Analytics</h3>
              <p className="text-gray-600">
                Track your business performance with intuitive dashboards and gain insights to optimize operations and growth.
              </p>
              <Link to="/contact" className="text-primary font-medium mt-4 inline-flex items-center space-x-1 hover:underline">
                <span>Learn more</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
            
            <div className="glass-card rounded-xl p-8 hover:shadow-lg transition-all-300">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <ScrollText size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Document Templates</h3>
              <p className="text-gray-600">
                Access a library of business document templates, including business plans, financial projections, and contracts.
              </p>
              <Link to="/contact" className="text-primary font-medium mt-4 inline-flex items-center space-x-1 hover:underline">
                <span>Learn more</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
            
            <div className="glass-card rounded-xl p-8 hover:shadow-lg transition-all-300">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">AI Business Assistant</h3>
              <p className="text-gray-600">
                Get personalized answers to your business questions through our AI-powered virtual assistant, available 24/7.
              </p>
              <Link to="/contact" className="text-primary font-medium mt-4 inline-flex items-center space-x-1 hover:underline">
                <span>Learn more</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Join NariNiti today and gain access to our complete suite of tools designed for women entrepreneurs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="btn-accent">
              Get Started Now
            </Link>
            <Link to="/contact" className="border-2 border-white/30 px-6 py-3 rounded-full text-white font-semibold hover:bg-white/10 transition-all-300 flex items-center justify-center space-x-2">
              <span>Contact Our Team</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
