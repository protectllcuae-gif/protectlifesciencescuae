import Seo from '../components/Seo';

const Privacy = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-brand-pearl flex items-start justify-center">
      <Seo
        title="Privacy Policy"
        description="Protect Life Sciences privacy policy and data handling information."
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Privacy Policy', url: '/privacy' }
        ]}
      />
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-md border border-brand-sage/20">
        <h1 className="text-2xl font-extrabold text-brand-charcoal mb-4">Privacy Policy</h1>
        <p className="text-sm text-brand-charcoal/70 leading-relaxed">This is a placeholder privacy policy page. Replace with your official privacy policy content.</p>
      </div>
    </div>
  );
};

export default Privacy;
