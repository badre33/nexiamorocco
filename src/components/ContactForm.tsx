import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User, Building2, MessageSquare, Send, CheckCircle, ChevronDown } from "lucide-react";

const countryCodes = [
  { code: "+1", country: "États-Unis/Canada", flag: "🇺🇸" },
  { code: "+7", country: "Russie", flag: "🇷🇺" },
  { code: "+20", country: "Égypte", flag: "🇪🇬" },
  { code: "+27", country: "Afrique du Sud", flag: "🇿🇦" },
  { code: "+30", country: "Grèce", flag: "🇬🇷" },
  { code: "+31", country: "Pays-Bas", flag: "🇳🇱" },
  { code: "+32", country: "Belgique", flag: "🇧🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+34", country: "Espagne", flag: "🇪🇸" },
  { code: "+36", country: "Hongrie", flag: "🇭🇺" },
  { code: "+39", country: "Italie", flag: "🇮🇹" },
  { code: "+40", country: "Roumanie", flag: "🇷🇴" },
  { code: "+41", country: "Suisse", flag: "🇨🇭" },
  { code: "+43", country: "Autriche", flag: "🇦🇹" },
  { code: "+44", country: "Royaume-Uni", flag: "🇬🇧" },
  { code: "+45", country: "Danemark", flag: "🇩🇰" },
  { code: "+46", country: "Suède", flag: "🇸🇪" },
  { code: "+47", country: "Norvège", flag: "🇳🇴" },
  { code: "+48", country: "Pologne", flag: "🇵🇱" },
  { code: "+49", country: "Allemagne", flag: "🇩🇪" },
  { code: "+51", country: "Pérou", flag: "🇵🇪" },
  { code: "+52", country: "Mexique", flag: "🇲🇽" },
  { code: "+53", country: "Cuba", flag: "🇨🇺" },
  { code: "+54", country: "Argentine", flag: "🇦🇷" },
  { code: "+55", country: "Brésil", flag: "🇧🇷" },
  { code: "+56", country: "Chili", flag: "🇨🇱" },
  { code: "+57", country: "Colombie", flag: "🇨🇴" },
  { code: "+58", country: "Venezuela", flag: "🇻🇪" },
  { code: "+60", country: "Malaisie", flag: "🇲🇾" },
  { code: "+61", country: "Australie", flag: "🇦🇺" },
  { code: "+62", country: "Indonésie", flag: "🇮🇩" },
  { code: "+63", country: "Philippines", flag: "🇵🇭" },
  { code: "+64", country: "Nouvelle-Zélande", flag: "🇳🇿" },
  { code: "+65", country: "Singapour", flag: "🇸🇬" },
  { code: "+66", country: "Thaïlande", flag: "🇹🇭" },
  { code: "+81", country: "Japon", flag: "🇯🇵" },
  { code: "+82", country: "Corée du Sud", flag: "🇰🇷" },
  { code: "+84", country: "Vietnam", flag: "🇻🇳" },
  { code: "+86", country: "Chine", flag: "🇨🇳" },
  { code: "+90", country: "Turquie", flag: "🇹🇷" },
  { code: "+91", country: "Inde", flag: "🇮🇳" },
  { code: "+92", country: "Pakistan", flag: "🇵🇰" },
  { code: "+93", country: "Afghanistan", flag: "🇦🇫" },
  { code: "+94", country: "Sri Lanka", flag: "🇱🇰" },
  { code: "+95", country: "Myanmar", flag: "🇲🇲" },
  { code: "+98", country: "Iran", flag: "🇮🇷" },
  { code: "+212", country: "Maroc", flag: "🇲🇦" },
  { code: "+213", country: "Algérie", flag: "🇩🇿" },
  { code: "+216", country: "Tunisie", flag: "🇹🇳" },
  { code: "+218", country: "Libye", flag: "🇱🇾" },
  { code: "+220", country: "Gambie", flag: "🇬🇲" },
  { code: "+221", country: "Sénégal", flag: "🇸🇳" },
  { code: "+222", country: "Mauritanie", flag: "🇲🇷" },
  { code: "+223", country: "Mali", flag: "🇲🇱" },
  { code: "+224", country: "Guinée", flag: "🇬🇳" },
  { code: "+225", country: "Côte d'Ivoire", flag: "🇨🇮" },
  { code: "+226", country: "Burkina Faso", flag: "🇧🇫" },
  { code: "+227", country: "Niger", flag: "🇳🇪" },
  { code: "+228", country: "Togo", flag: "🇹🇬" },
  { code: "+229", country: "Bénin", flag: "🇧🇯" },
  { code: "+230", country: "Maurice", flag: "🇲🇺" },
  { code: "+231", country: "Libéria", flag: "🇱🇷" },
  { code: "+232", country: "Sierra Leone", flag: "🇸🇱" },
  { code: "+233", country: "Ghana", flag: "🇬🇭" },
  { code: "+234", country: "Nigeria", flag: "🇳🇬" },
  { code: "+235", country: "Tchad", flag: "🇹🇩" },
  { code: "+236", country: "République Centrafricaine", flag: "🇨🇫" },
  { code: "+237", country: "Cameroun", flag: "🇨🇲" },
  { code: "+238", country: "Cap-Vert", flag: "🇨🇻" },
  { code: "+239", country: "São Tomé-et-Príncipe", flag: "🇸🇹" },
  { code: "+240", country: "Guinée équatoriale", flag: "🇬🇶" },
  { code: "+241", country: "Gabon", flag: "🇬🇦" },
  { code: "+242", country: "République du Congo", flag: "🇨🇬" },
  { code: "+243", country: "République démocratique du Congo", flag: "🇨🇩" },
  { code: "+244", country: "Angola", flag: "🇦🇴" },
  { code: "+245", country: "Guinée-Bissau", flag: "🇬🇼" },
  { code: "+246", country: "Territoire britannique de l'océan Indien", flag: "🇮🇴" },
  { code: "+247", country: "Ascension", flag: "🇦🇨" },
  { code: "+248", country: "Seychelles", flag: "🇸🇨" },
  { code: "+249", country: "Soudan", flag: "🇸🇩" },
  { code: "+250", country: "Rwanda", flag: "🇷🇼" },
  { code: "+251", country: "Éthiopie", flag: "🇪🇹" },
  { code: "+252", country: "Somalie", flag: "🇸🇴" },
  { code: "+253", country: "Djibouti", flag: "🇩🇯" },
  { code: "+254", country: "Kenya", flag: "🇰🇪" },
  { code: "+255", country: "Tanzanie", flag: "🇹🇿" },
  { code: "+256", country: "Ouganda", flag: "🇺🇬" },
  { code: "+257", country: "Burundi", flag: "🇧🇮" },
  { code: "+258", country: "Mozambique", flag: "🇲🇿" },
  { code: "+260", country: "Zambie", flag: "🇿🇲" },
  { code: "+261", country: "Madagascar", flag: "🇲🇬" },
  { code: "+262", country: "Réunion/Mayotte", flag: "🇷🇪" },
  { code: "+263", country: "Zimbabwe", flag: "🇿🇼" },
  { code: "+264", country: "Namibie", flag: "🇳🇦" },
  { code: "+265", country: "Malawi", flag: "🇲🇼" },
  { code: "+266", country: "Lesotho", flag: "🇱🇸" },
  { code: "+267", country: "Botswana", flag: "🇧🇼" },
  { code: "+268", country: "Eswatini", flag: "🇸🇿" },
  { code: "+269", country: "Comores", flag: "🇰🇲" },
  { code: "+290", country: "Sainte-Hélène", flag: "🇸🇭" },
  { code: "+291", country: "Érythrée", flag: "🇪🇷" },
  { code: "+297", country: "Aruba", flag: "🇦🇼" },
  { code: "+298", country: "Îles Féroé", flag: "🇫🇴" },
  { code: "+299", country: "Groenland", flag: "🇬🇱" },
  { code: "+350", country: "Gibraltar", flag: "🇬🇮" },
  { code: "+351", country: "Portugal", flag: "🇵🇹" },
  { code: "+352", country: "Luxembourg", flag: "🇱🇺" },
  { code: "+353", country: "Irlande", flag: "🇮🇪" },
  { code: "+354", country: "Islande", flag: "🇮🇸" },
  { code: "+355", country: "Albanie", flag: "🇦🇱" },
  { code: "+356", country: "Malte", flag: "🇲🇹" },
  { code: "+357", country: "Chypre", flag: "🇨🇾" },
  { code: "+358", country: "Finlande", flag: "🇫🇮" },
  { code: "+359", country: "Bulgarie", flag: "🇧🇬" },
  { code: "+370", country: "Lituanie", flag: "🇱🇹" },
  { code: "+371", country: "Lettonie", flag: "🇱🇻" },
  { code: "+372", country: "Estonie", flag: "🇪🇪" },
  { code: "+373", country: "Moldavie", flag: "🇲🇩" },
  { code: "+374", country: "Arménie", flag: "🇦🇲" },
  { code: "+375", country: "Belarus", flag: "🇧🇾" },
  { code: "+376", country: "Andorre", flag: "🇦🇩" },
  { code: "+377", country: "Monaco", flag: "🇲🇨" },
  { code: "+378", country: "Saint-Marin", flag: "🇸🇲" },
  { code: "+380", country: "Ukraine", flag: "🇺🇦" },
  { code: "+381", country: "Serbie", flag: "🇷🇸" },
  { code: "+382", country: "Monténégro", flag: "🇲🇪" },
  { code: "+383", country: "Kosovo", flag: "🇽🇰" },
  { code: "+385", country: "Croatie", flag: "🇭🇷" },
  { code: "+386", country: "Slovénie", flag: "🇸🇮" },
  { code: "+387", country: "Bosnie-Herzégovine", flag: "🇧🇦" },
  { code: "+389", country: "Macédoine du Nord", flag: "🇲🇰" },
  { code: "+420", country: "République tchèque", flag: "🇨🇿" },
  { code: "+421", country: "Slovaquie", flag: "🇸🇰" },
  { code: "+423", country: "Liechtenstein", flag: "🇱🇮" },
  { code: "+500", country: "Îles Malouines", flag: "🇫🇰" },
  { code: "+501", country: "Belize", flag: "🇧🇿" },
  { code: "+502", country: "Guatemala", flag: "🇬🇹" },
  { code: "+503", country: "El Salvador", flag: "🇸🇻" },
  { code: "+504", country: "Honduras", flag: "🇭🇳" },
  { code: "+505", country: "Nicaragua", flag: "🇳🇮" },
  { code: "+506", country: "Costa Rica", flag: "🇨🇷" },
  { code: "+507", country: "Panama", flag: "🇵🇦" },
  { code: "+508", country: "Saint-Pierre-et-Miquelon", flag: "🇵🇲" },
  { code: "+509", country: "Haïti", flag: "🇭🇹" },
  { code: "+590", country: "Guadeloupe", flag: "🇬🇵" },
  { code: "+591", country: "Bolivie", flag: "🇧🇴" },
  { code: "+592", country: "Guyana", flag: "🇬🇾" },
  { code: "+593", country: "Équateur", flag: "🇪🇨" },
  { code: "+594", country: "Guyane française", flag: "🇬🇫" },
  { code: "+595", country: "Paraguay", flag: "🇵🇾" },
  { code: "+596", country: "Martinique", flag: "🇲🇶" },
  { code: "+597", country: "Suriname", flag: "🇸🇷" },
  { code: "+598", country: "Uruguay", flag: "🇺🇾" },
  { code: "+599", country: "Antilles néerlandaises", flag: "🇧🇶" },
  { code: "+670", country: "Timor oriental", flag: "🇹🇱" },
  { code: "+672", country: "Antarctique", flag: "🇦🇶" },
  { code: "+673", country: "Brunei", flag: "🇧🇳" },
  { code: "+674", country: "Nauru", flag: "🇳🇷" },
  { code: "+675", country: "Papouasie-Nouvelle-Guinée", flag: "🇵🇬" },
  { code: "+676", country: "Tonga", flag: "🇹🇴" },
  { code: "+677", country: "Îles Salomon", flag: "🇸🇧" },
  { code: "+678", country: "Vanuatu", flag: "🇻🇺" },
  { code: "+679", country: "Fidji", flag: "🇫🇯" },
  { code: "+680", country: "Palaos", flag: "🇵🇼" },
  { code: "+681", country: "Wallis-et-Futuna", flag: "🇼🇫" },
  { code: "+682", country: "Îles Cook", flag: "🇨🇰" },
  { code: "+683", country: "Niue", flag: "🇳🇺" },
  { code: "+684", country: "Samoa américaines", flag: "🇦🇸" },
  { code: "+685", country: "Samoa", flag: "🇼🇸" },
  { code: "+686", country: "Kiribati", flag: "🇰🇮" },
  { code: "+687", country: "Nouvelle-Calédonie", flag: "🇳🇨" },
  { code: "+688", country: "Tuvalu", flag: "🇹🇻" },
  { code: "+689", country: "Polynésie française", flag: "🇵🇫" },
  { code: "+690", country: "Tokelau", flag: "🇹🇰" },
  { code: "+691", country: "États fédérés de Micronésie", flag: "🇫🇲" },
  { code: "+692", country: "Îles Marshall", flag: "🇲🇭" },
  { code: "+850", country: "Corée du Nord", flag: "🇰🇵" },
  { code: "+852", country: "Hong Kong", flag: "🇭🇰" },
  { code: "+853", country: "Macao", flag: "🇲🇴" },
  { code: "+855", country: "Cambodge", flag: "🇰🇭" },
  { code: "+856", country: "Laos", flag: "🇱🇦" },
  { code: "+880", country: "Bangladesh", flag: "🇧🇩" },
  { code: "+886", country: "Taïwan", flag: "🇹🇼" },
  { code: "+960", country: "Maldives", flag: "🇲🇻" },
  { code: "+961", country: "Liban", flag: "🇱🇧" },
  { code: "+962", country: "Jordanie", flag: "🇯🇴" },
  { code: "+963", country: "Syrie", flag: "🇸🇾" },
  { code: "+964", country: "Irak", flag: "🇮🇶" },
  { code: "+965", country: "Koweït", flag: "🇰🇼" },
  { code: "+966", country: "Arabie saoudite", flag: "🇸🇦" },
  { code: "+967", country: "Yémen", flag: "🇾🇪" },
  { code: "+968", country: "Oman", flag: "🇴🇲" },
  { code: "+970", country: "Palestine", flag: "🇵🇸" },
  { code: "+971", country: "Émirats arabes unis", flag: "🇦🇪" },
  { code: "+972", country: "Israël", flag: "🇮🇱" },
  { code: "+973", country: "Bahreïn", flag: "🇧🇭" },
  { code: "+974", country: "Qatar", flag: "🇶🇦" },
  { code: "+975", country: "Bhoutan", flag: "🇧🇹" },
  { code: "+976", country: "Mongolie", flag: "🇲🇳" },
  { code: "+977", country: "Népal", flag: "🇳🇵" },
  { code: "+992", country: "Tadjikistan", flag: "🇹🇯" },
  { code: "+993", country: "Turkménistan", flag: "🇹🇲" },
  { code: "+994", country: "Azerbaïdjan", flag: "🇦🇿" },
  { code: "+995", country: "Géorgie", flag: "🇬🇪" },
  { code: "+996", country: "Kirghizistan", flag: "🇰🇬" },
  { code: "+998", country: "Ouzbékistan", flag: "🇺🇿" }
];

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    countryCode: "+212",
    phone: "",
    service: "",
    message: ""
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) newErrors.firstName = "Le prénom est requis";
    if (!formData.lastName.trim()) newErrors.lastName = "Le nom est requis";
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email invalide";
    }
    if (!formData.phone.trim()) newErrors.phone = "Le téléphone est requis";
    if (!formData.message.trim()) newErrors.message = "Le message est requis";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
    if (errors.service) {
      setErrors(prev => ({ ...prev, service: "" }));
    }
  };

  const selectedCountry = countryCodes.find(c => c.code === formData.countryCode) || countryCodes.find(c => c.code === "+212");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message envoyé avec succès !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      countryCode: "+212",
      phone: "",
      service: "",
      message: ""
    });
    
    setIsSubmitting(false);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-nexia-primary mb-4">
            Contactez nos experts
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Parlez-nous de votre projet. Notre équipe d&apos;experts vous accompagnera dans toutes vos démarches comptables et fiscales.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <User className="w-4 h-4 text-nexia-secondary" />
                  Prénom *
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`h-12 transition-all duration-200 ${errors.firstName ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-nexia-secondary hover:border-gray-400'} focus:ring-2 focus:ring-nexia-secondary/20`}
                  placeholder="Votre prénom"
                />
                {errors.firstName && <p className="text-red-500 text-sm font-medium">{errors.firstName}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-semibold text-gray-700">
                  Nom *
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`h-12 transition-all duration-200 ${errors.lastName ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-nexia-secondary hover:border-gray-400'} focus:ring-2 focus:ring-nexia-secondary/20`}
                  placeholder="Votre nom"
                />
                {errors.lastName && <p className="text-red-500 text-sm font-medium">{errors.lastName}</p>}
              </div>
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-nexia-secondary" />
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`h-12 transition-all duration-200 ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-nexia-secondary hover:border-gray-400'} focus:ring-2 focus:ring-nexia-secondary/20`}
                  placeholder="votre.email@exemple.com"
                />
                {errors.email && <p className="text-red-500 text-sm font-medium">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-nexia-secondary" />
                  Téléphone *
                </Label>
                <div className="relative">
                  <div className={`flex h-12 border rounded-md transition-all duration-200 ${errors.phone ? 'border-red-500' : 'border-gray-300 hover:border-gray-400 focus-within:border-nexia-secondary'} focus-within:ring-2 focus-within:ring-nexia-secondary/20`}>
                    {/* Country Code Selector */}
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                        className="flex items-center justify-center h-full px-3 bg-gray-50 border-r border-gray-300 rounded-l-md hover:bg-gray-100 transition-colors focus:outline-none focus:bg-gray-100 min-w-[100px]"
                      >
                        <div className="flex items-center justify-center gap-2" style={{ paddingTop: '2px' }}>
                          <span className="text-lg leading-none">{selectedCountry?.flag}</span>
                          <span className="text-sm font-medium text-gray-700 leading-none">{formData.countryCode}</span>
                          <ChevronDown className="w-3 h-3 text-gray-500" />
                        </div>
                      </button>
                      
                      {/* Dropdown */}
                      {showCountryDropdown && (
                        <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto">
                          <div className="p-2">
                            {countryCodes.map((country) => (
                              <button
                                key={country.code}
                                type="button"
                                onClick={() => {
                                  setFormData(prev => ({ ...prev, countryCode: country.code }));
                                  setShowCountryDropdown(false);
                                }}
                                className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-nexia-secondary/10 rounded-md transition-colors"
                              >
                                <span className="text-lg">{country.flag}</span>
                                <span className="font-medium text-gray-900 min-w-[60px]">{country.code}</span>
                                <span className="text-sm text-gray-600 truncate">{country.country}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Phone Input */}
                    <Input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="flex-1 h-full border-0 focus:ring-0 rounded-l-none bg-white text-sm"
                      placeholder="XX XX XX XX"
                      style={{ lineHeight: '1.5' }}
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-sm font-medium mt-1">{errors.phone}</p>}
                </div>
              </div>
            </div>

            {/* Company and Service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-nexia-secondary" />
                  Entreprise
                </Label>
                <Input
                  id="company"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="h-12 border-gray-300 focus:border-nexia-secondary hover:border-gray-400 transition-all duration-200 focus:ring-2 focus:ring-nexia-secondary/20"
                  placeholder="Nom de votre entreprise"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-700">
                  Service souhaité
                </Label>
                <Select onValueChange={handleSelectChange} value={formData.service}>
                  <SelectTrigger className="h-12 border-gray-300 focus:border-nexia-secondary hover:border-gray-400 transition-all duration-200 focus:ring-2 focus:ring-nexia-secondary/20">
                    <SelectValue placeholder="Sélectionnez un service" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 shadow-xl">
                    <SelectItem value="audit" className="hover:bg-nexia-secondary/10">Audit et Assurance</SelectItem>
                    <SelectItem value="conseil" className="hover:bg-nexia-secondary/10">Conseil Fiscal</SelectItem>
                    <SelectItem value="comptabilite" className="hover:bg-nexia-secondary/10">Expertise Comptable</SelectItem>
                    <SelectItem value="social" className="hover:bg-nexia-secondary/10">Social et Paie</SelectItem>
                    <SelectItem value="juridique" className="hover:bg-nexia-secondary/10">Conseil Juridique</SelectItem>
                    <SelectItem value="autre" className="hover:bg-nexia-secondary/10">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-nexia-secondary" />
                Message *
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`transition-all duration-200 resize-none ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-nexia-secondary hover:border-gray-400'} focus:ring-2 focus:ring-nexia-secondary/20`}
                placeholder="Décrivez votre projet ou vos besoins en détail..."
              />
              {errors.message && <p className="text-red-500 text-sm font-medium">{errors.message}</p>}
            </div>

            {/* Information Note */}
            <div className="bg-gradient-to-r from-blue-50 to-nexia-secondary/5 border border-blue-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-nexia-secondary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-800">
                  <p className="font-semibold mb-1">Confidentialité garantie</p>
                  <p className="text-blue-700">Vos informations sont traitées en toute confidentialité selon nos standards professionnels. Notre équipe s&apos;engage à vous répondre dans un délai de 24h ouvrées.</p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-nexia-primary to-nexia-primary/90 hover:from-nexia-primary/90 hover:to-nexia-primary text-white px-8 py-4 h-auto text-base font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-3 min-w-[200px] shadow-md"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Envoyer le message
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}