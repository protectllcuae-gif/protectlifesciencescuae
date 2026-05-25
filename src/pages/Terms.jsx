import Seo from '../components/Seo';

const Terms = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-brand-pearl flex items-start justify-center">
      <Seo
        title="Terms & Conditions"
        description="Protect Life Sciences terms and conditions for website and service use."
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Terms & Conditions', url: '/terms' }
        ]}
      />
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-md border border-brand-sage/20">
        <h1 className="text-2xl font-extrabold text-brand-charcoal mb-4">Terms & Conditions</h1>
        <p className="text-sm text-brand-charcoal/70 leading-relaxed">This is a placeholder Terms & Conditions page. Replace with your official terms content.</p>
      </div>
    </div>
  );
};

export default Terms;
