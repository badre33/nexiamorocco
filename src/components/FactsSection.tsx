import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { supabase } from '@/integrations/supabase/client';

const globalStats = [
  { number: "35 000+", label: "personnes", region: "global" },
  { number: "122", label: "pays", region: "global" },
  { number: "1:10", label: "Ratio associé/employé", region: "global" },
];

const regionalStats = [
  { number: "206", label: "Bureaux", region: "Amérique du Nord", coordinates: [-100, 45] as [number, number] },
  { number: "1372", label: "Associés", region: "Amérique du Nord", coordinates: [-95, 40] as [number, number] },
  { number: "361", label: "Bureaux", region: "Europe, Moyen-Orient et Afrique", coordinates: [20, 50] as [number, number] },
  { number: "1252", label: "Associés", region: "Europe, Moyen-Orient Afrique", coordinates: [15, 45] as [number, number] },
  { number: "106", label: "Bureaux", region: "Asie-Pacifique", coordinates: [120, 30] as [number, number] },
  { number: "708", label: "Associés", region: "Asie-Pacifique", coordinates: [125, 25] as [number, number] },
  { number: "54", label: "Bureaux", region: "Amérique Latine", coordinates: [-70, -15] as [number, number] },
  { number: "110", label: "Associés", region: "Amérique Latine", coordinates: [-65, -20] as [number, number] },
  { number: "50", label: "Comités et Groupes d'Affaires", region: "Centre", coordinates: [0, 20] as [number, number] },
];

const services = [
  { name: "Conseil", color: "bg-purple-600" },
  { name: "Audit", color: "bg-purple-500" },
  { name: "Fiscalité", color: "bg-orange-500" },
];

export default function FactsSection() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [showTokenInput, setShowTokenInput] = useState(false);
  const [tokenInputValue, setTokenInputValue] = useState('');

  useEffect(() => {
    const fetchMapboxToken = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('get-mapbox-token');
        if (data?.token) {
          setMapboxToken(data.token);
        } else {
          setShowTokenInput(true);
        }
      } catch (error) {
        setShowTokenInput(true);
      }
    };

    fetchMapboxToken();
  }, []);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      projection: 'globe',
      zoom: 1.2,
      center: [30, 15],
      pitch: 0,
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    map.current.scrollZoom.disable();

    map.current.on('style.load', () => {
      map.current?.setFog({
        color: 'rgb(186, 210, 235)',
        'high-color': 'rgb(36, 92, 223)',
        'horizon-blend': 0.02,
        'space-color': 'rgb(11, 11, 25)',
        'star-intensity': 0.6,
      });

      // Add markers for each region
      regionalStats.forEach((stat, index) => {
        const el = document.createElement('div');
        el.className = 'mapbox-marker';
        el.innerHTML = `
          <div class="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border-2 border-purple-200 min-w-[140px]">
            <div class="text-2xl font-bold text-purple-600 mb-1">${stat.number}</div>
            <div class="text-xs text-gray-700 font-medium">${stat.label}</div>
            <div class="text-xs text-gray-500 mt-1">(${stat.region})</div>
          </div>
        `;

        new mapboxgl.Marker({ element: el, anchor: 'center' })
          .setLngLat(stat.coordinates)
          .addTo(map.current!);
      });
    });

    // Rotation animation
    const secondsPerRevolution = 200;
    const maxSpinZoom = 5;
    let userInteracting = false;
    let spinEnabled = true;

    function spinGlobe() {
      if (!map.current) return;
      
      const zoom = map.current.getZoom();
      if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
        const distancePerSecond = 360 / secondsPerRevolution;
        const center = map.current.getCenter();
        center.lng -= distancePerSecond;
        map.current.easeTo({ center, duration: 1000, easing: (n) => n });
      }
    }

    map.current.on('mousedown', () => {
      userInteracting = true;
    });
    
    map.current.on('dragstart', () => {
      userInteracting = true;
    });
    
    map.current.on('mouseup', () => {
      userInteracting = false;
      spinGlobe();
    });
    
    map.current.on('touchend', () => {
      userInteracting = false;
      spinGlobe();
    });

    map.current.on('moveend', () => {
      spinGlobe();
    });

    spinGlobe();

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  const handleTokenSubmit = () => {
    if (tokenInputValue.trim()) {
      setMapboxToken(tokenInputValue.trim());
      setShowTokenInput(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-nexia-primary mb-6">Notre Monde en Chiffres</h2>
          <p className="text-lg text-gray-700 max-w-5xl leading-relaxed">
            Nexia International est un réseau mondial de premier plan regroupant des cabinets indépendants d'expertise comptable 
            et de conseil. Lorsque vous choisissez un cabinet Nexia, vous bénéficiez d'un service plus réactif, plus personnalisé 
            et dirigé par des associés, partout dans le monde.
          </p>
        </div>

        {showTokenInput && (
          <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Configuration Mapbox requise</h3>
            <p className="text-blue-700 mb-4">
              Pour afficher la carte interactive, veuillez entrer votre token public Mapbox. 
              Vous pouvez l'obtenir sur <a href="https://mapbox.com/" target="_blank" className="underline">mapbox.com</a>.
            </p>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="pk.eyJ1IjoibW9udG9rZW4iLCJhIjoiY2tsd..."
                value={tokenInputValue}
                onChange={(e) => setTokenInputValue(e.target.value)}
                className="flex-1 px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleTokenSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Valider
              </button>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-4 gap-8">
          {/* World Map Section */}
          <div className="lg:col-span-3">
            <div className="relative h-[500px] bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              {mapboxToken ? (
                <>
                  <div ref={mapContainer} className="absolute inset-0" />
                  
                  {/* Global Stats Overlay */}
                  <div className="absolute top-6 left-6 z-10">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border-2 border-purple-200">
                      <div className="text-3xl font-bold text-purple-600 mb-1">Plus de 35 000</div>
                      <div className="text-sm text-gray-600">personnes</div>
                    </div>
                  </div>

                  <div className="absolute top-6 right-6 z-10">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border-2 border-purple-200 text-center">
                      <div className="text-lg font-semibold text-gray-700 mb-2">Présent dans plus de</div>
                      <div className="text-3xl font-bold text-purple-600 mb-1">122</div>
                      <div className="text-sm text-gray-600">pays</div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 right-6 z-10">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border-2 border-purple-200 text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">1:10</div>
                      <div className="text-sm text-gray-600">Ratio associé/employé</div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-gray-500 text-lg mb-2">Carte en attente de configuration</div>
                    <div className="text-gray-400">Veuillez configurer votre token Mapbox</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Services and Achievements */}
          <div className="space-y-6">
            {/* Services */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Lignes de services</h3>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`${service.color} text-white px-4 py-2 rounded-full text-sm font-medium flex-1 text-center`}>
                      {service.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Récompenses et Accréditations</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">9th</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <div className="font-medium">International Accounting Bulletin Survey 2019</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-pink-600 font-bold text-xs">★</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <div className="font-medium">Prix du Réseau Étoile Montante - IAB Awards 2019</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-xs">$</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <div className="font-medium">US$ 4.3 billion</div>
                    <div className="text-xs">4.3 milliards USD de revenus pour 2019</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 font-bold text-xs">727</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <div className="font-medium">727 bureaux dans le monde</div>
                    <div className="text-xs">927 bureaux dans le monde au vous avec nous que nous soyons</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .mapbox-marker {
          cursor: pointer;
        }
        .mapbox-marker:hover {
          transform: scale(1.05);
          transition: transform 0.2s ease;
        }
      `}</style>
    </section>
  );
}