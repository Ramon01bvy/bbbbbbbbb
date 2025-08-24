import React, { useState } from 'react';

export default function MarcodonatoApp() {
  const [billing, setBilling] = useState('maandelijks');
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    { id: 'maandelijks', title: '1 maand', priceMonthly: 14.99, perks: ['Toegang tot alle programma’s', 'Basis tracking', 'Voedingsbibliotheek'] },
    { id: 'kwartaal', title: '3 maanden', priceMonthly: 11.99, perks: ['Alles van 1 maand', 'Voortgangsanalyses', 'Prioriteitsupport'] },
    { id: 'jaar', title: '12 maanden', priceMonthly: 9.99, perks: ['Alle functies', 'Exclusieve gidsen', 'Beste waarde'] },
  ];

  const programs = [
    { id: 1, title: 'Full Body', subtitle: 'Gebalanceerde kracht & conditie', length: '8 weken', image: 'https://images.unsplash.com/photo-1579758629939-037fdd04f1f3?auto=format&fit=crop&w=600&q=60' },
    { id: 2, title: 'Hybride Atleet', subtitle: 'Kracht + uithoudingsvermogen', length: '12 weken', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=60' },
    { id: 3, title: '5x5 Kracht', subtitle: 'Compound lifts voor pure kracht', length: '10 weken', image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=600&q=60' },
    { id: 4, title: 'Zomer Shred', subtitle: 'Vetverlies & conditie', length: '6 weken', image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=600&q=60' },
  ];

  const testimonials = [
    { id: 1, name: '64BITSUPPORT', quote: 'Beste fitness-app — de waarde is ongekend.', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { id: 2, name: 'J-C Lab', quote: 'Een alles-in-één app om je voortgang bij te houden en sterke programma’s te volgen.', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { id: 3, name: 'Chris107', quote: 'Boordevol video’s en support — ongeëvenaarde waarde.', image: 'https://randomuser.me/api/portraits/men/12.jpg' },
    { id: 4, name: 'Lotte99', quote: 'De coaching en programma’s zijn top, echt aan te raden!', image: 'https://randomuser.me/api/portraits/women/22.jpg' },
  ];

  const openSubscribe = (plan) => setSelectedPlan(plan);
  const closeSubscribe = () => setSelectedPlan(null);

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-gray-100 font-sans">
      <header className="bg-[#1A1A1A] border-b border-[#FBBB50]/30">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FBBB50]/20 flex items-center justify-center font-bold text-[#FBBB50]">M</div>
            <div>
              <h1 className="text-xl font-bold uppercase tracking-wide">Marcodonato</h1>
              <div className="text-sm text-gray-400">Elite Personal Training & Coaching</div>
            </div>
          </div>
          <nav className="space-x-6 flex flex-wrap justify-center md:justify-end items-center text-sm uppercase font-medium">
            <a className="hover:text-[#FBBB50]">Gidsen</a>
            <a className="hover:text-[#FBBB50]">Voeding</a>
            <a className="hover:text-[#FBBB50]">Prijzen</a>
            <button className="bg-[#FBBB50] text-black px-4 py-2 rounded-full font-semibold shadow hover:opacity-90 mt-2 md:mt-0">Aanmelden</button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight uppercase text-[#FBBB50]">Transformeer je lichaam en lifestyle</h2>
            <p className="mt-4 text-lg text-gray-300">Ontdek exclusieve programma’s, voedingsgidsen en trackingtools ontworpen voor ultieme resultaten.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="bg-[#FBBB50] text-black px-5 py-3 rounded-full font-semibold shadow hover:opacity-90">Start nu</button>
              <button className="border border-[#FBBB50] text-[#FBBB50] px-5 py-3 rounded-full hover:bg-[#FBBB50]/10">Bekijk programma’s</button>
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 gap-3 text-sm text-gray-400">
              <div className="bg-[#2A2A2A] p-4 rounded-lg shadow">30+ gidsen</div>
              <div className="bg-[#2A2A2A] p-4 rounded-lg shadow">200+ recepten</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-gray-800 shadow-lg flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1558611848-73f7eb4001d7?auto=format&fit=crop&w=1200&q=60" alt="workout" className="object-cover w-full h-full" />
            </div>
            <div className="absolute -bottom-6 left-6 bg-[#2A2A2A] p-4 rounded-xl shadow-md flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src="https://randomuser.me/api/portraits/men/28.jpg" alt="coach" className="object-cover w-full h-full" />
              </div>
              <div>
                <div className="font-bold text-white">Marcodonato Coaching</div>
                <div className="text-xs text-gray-400">Persoonlijke schema’s & tracking</div>
              </div>
            </div>
          </div>
        </section>

        {/* Programma’s */}
        <section className="mt-20">
          <h3 className="text-2xl font-bold uppercase text-[#FBBB50]">Trainingsbibliotheek</h3>
          <p className="mt-2 text-gray-400">Kies je focus en bekijk uitgelichte programma’s.</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((p) => (
              <article key={p.id} className="bg-[#2A2A2A] p-4 rounded-xl shadow hover:shadow-md flex flex-col">
                <div className="h-36 rounded-md overflow-hidden mb-3 bg-gray-700">
                  <img src={p.image} alt={p.title} className="object-cover w-full h-full" />
                </div>
                <h4 className="font-semibold text-white mb-1">{p.title}</h4>
                <p className="text-sm text-gray-400 mb-3">{p.subtitle}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs text-gray-500">{p.length}</span>
                  <button className="text-[#FBBB50] text-sm font-medium">Doe mee</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Features & analytics */}
        <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold uppercase text-[#FBBB50]">Een elite ervaring</h3>
            <p className="mt-2 text-gray-400">Volg je voortgang, analyseer je prestaties en ontdek premium voedingsopties.</p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>• Houd herhalingen, sets en tempo bij</li>
              <li>• Geavanceerde statistieken en PR’s</li>
              <li>• 200+ voedingsrecepten met macro’s</li>
            </ul>
          </div>
          <div className="bg-[#2A2A2A] p-6 rounded-xl shadow">
            <div className="text-sm text-gray-400">Voortgang</div>
            <div className="mt-4 h-40 rounded-md overflow-hidden bg-gray-700">
              <img src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=800&q=60" alt="grafiek" className="object-cover w-full h-full" />
            </div>
            <div className="mt-4 text-sm text-gray-400">Volg gewicht, PR’s en je transformatie.</div>
          </div>
        </section>

        {/* Prijzen */}
        <section className="mt-20">
          <h3 className="text-2xl font-bold uppercase text-[#FBBB50]">Word lid van Marcodonato</h3>
          <p className="text-gray-400 mt-2">Kies een plan dat bij je past. 30 dagen niet tevreden = geld terug.</p>

          {/* Abonnementen */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.id} className="bg-[#2A2A2A] p-6 rounded-xl shadow hover:shadow-md flex flex-col">
                <h4 className="text-xl font-bold text-white mb-2">{plan.title}</h4>
                <p className="text-[#FBBB50] text-2xl font-bold mb-4">€{plan.priceMonthly}/maand</p>
                <ul className="text-gray-300 mb-4 flex-1">
                  {plan.perks.map((perk, index) => (
                    <li key={index}>• {perk}</li>
                  ))}
                </ul>
                <button onClick={() => openSubscribe(plan)} className="bg-[#FBBB50] text-black px-4 py-2 rounded-full font-semibold shadow hover:opacity-90 mt-auto">Kies plan</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
