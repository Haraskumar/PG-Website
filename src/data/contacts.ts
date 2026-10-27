export interface ContactConfig {
  primaryPhone: string;
  primaryPhoneDisplay: string;
  primaryContactName: string;
  whatsappNumber: string;
  secondaryPhone: string;
  secondaryPhoneDisplay: string;
  secondaryContactName: string;
  email: string;
  instagram: string;
  instagramHandle: string;
  office: {
    title: string;
    address: string;
    landmark: string;
    area: string;
    city: string;
    pincode: string;
    mapUrl: string;
    embedMapUrl: string;
    operatingHours: string;
  };
}

export const CONTACTS: ContactConfig = {
  primaryPhone: '+917069581011',
  primaryPhoneDisplay: '+91 70695 81011',
  primaryContactName: 'PG Management',
  whatsappNumber: '917069581011',
  secondaryPhone: '+916351909152',
  secondaryPhoneDisplay: '+91 63519 09152',
  secondaryContactName: 'Support Desk',
  email: 'luxora.pg11@gmail.com',
  instagram: 'https://www.instagram.com/luxora_pg/',
  instagramHandle: '@luxora_pg',
  office: {
    title: 'Central Management Office (Luxora & Sorath)',
    address: 'Pallavi Tower 1, Memnagar Fire Station Vijay Char Rasta, Navrangpura',
    landmark: 'Memnagar Fire Station, Vijay Char Rasta',
    area: 'Navrangpura',
    city: 'Ahmedabad, Gujarat',
    pincode: '380009',
    mapUrl: 'https://maps.app.goo.gl/LULdgp6zebYxpPvi8?g_st=iw',
    embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.697960714902!2d72.548889!3d23.043527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e854bdaa13459%3A0x4f09129a7da70896!2sPallavi%20Tower%2C%20Memnagar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    operatingHours: 'Mon – Sun: 9:00 AM – 9:00 PM',
  },
};

/**
 * Generate customized WhatsApp link for a specific PG and room query
 */
export function getWhatsAppBookingUrl(pgTitle?: string, sharingTier?: string): string {
  const base = `https://wa.me/${CONTACTS.whatsappNumber}`;
  let text = `Hello, I visited your website and would like to inquire about room availability.`;
  if (pgTitle) {
    text = `Hello, I am interested in booking / visiting *${pgTitle}*`;
    if (sharingTier) {
      text += ` for *${sharingTier}*`;
    }
    text += `. Please share details and availability.`;
  }
  return `${base}?text=${encodeURIComponent(text)}`;
}

/**
 * Generate instantaneous 1-tap WhatsApp visit scheduling link
 */
export function getWhatsAppDirectVisitUrl(propertyTitle?: string, userName?: string, userPhone?: string): string {
  const base = `https://wa.me/${CONTACTS.whatsappNumber}`;
  let text = `Hello! I'd like to schedule an in-person walkthrough`;
  if (propertyTitle) text += ` to *${propertyTitle}*`;
  if (userName) text += `\n👤 Name: ${userName}`;
  if (userPhone) text += `\n📞 WhatsApp: ${userPhone}`;
  text += `\nPlease confirm if I can visit today!`;
  return `${base}?text=${encodeURIComponent(text)}`;
}
