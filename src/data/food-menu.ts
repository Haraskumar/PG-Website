export interface DailyMealSchedule {
  day: string;
  breakfast: string;
  lunch: string;
  eveningSnack?: string;
  dinner: string;
}

export const LUXORA_MEAL_INFO = {
  brand: 'LUXORA',
  title: '4-Time Daily Gourmet Dining',
  tagline: 'Wholesome, Hygienic, Homely & Nutritious Meals Prepared by In-House Chefs',
  frequency: '4 Times a Day (Breakfast, Lunch, Evening Snack & Dinner)',
  highlights: [
    'Unlimited healthy servings with fresh ingredients purchased daily',
    'Special Gujarati and North Indian seasonal thali variations',
    'Evening tea/coffee with hot fresh snacks for post-college energy',
    'Sunday festive feast & sweet dishes (Gulab Jamun, Shrikhand, Halwa)',
    '100% RO filtered water with mineral enrichment for cooking & drinking',
    'Separate stainless-steel dining hall with strict cleanliness protocols'
  ],
  schedule: [
    {
      day: 'Monday',
      breakfast: 'Poha / Upma with Green Chutney, Masala Tea & Fresh Milk',
      lunch: 'Gujarati Dal, Rice, Seasonal Sabzi, Phulka Rotis, Papad & Buttermilk (Chhaas)',
      eveningSnack: 'Hot Tea / Coffee with Vegetable Cutlets or Biscuits',
      dinner: 'Paneer Butter Masala, Tawa Rotis, Jeera Rice, Dal Tadka & Salad'
    },
    {
      day: 'Tuesday',
      breakfast: 'Methi Thepla with Pickle, Curd, Tea & Bournvita Milk',
      lunch: 'Kadhi, Khichdi, Bataka Nu Shaak, Soft Phulka Roti, Salad & Chhaas',
      eveningSnack: 'Masala Tea with Khaman / Dhokla & Chutney',
      dinner: 'Mix Veg Korma, Dal Fry, Steamed Basmati Rice, Hot Chapati & Pickle'
    },
    {
      day: 'Wednesday',
      breakfast: 'Aloo Paratha with Curd, Mint Dip, Tea & Milk',
      lunch: 'Chole Masala, Bhature / Poori, Jeera Rice, Boondi Raita & Salad',
      eveningSnack: 'Tea / Coffee with Crispy Samosa or Pakoda',
      dinner: 'Sev Tameta Nu Shaak, Bhakhri, Dal Tadka, Steamed Rice & Salad'
    },
    {
      day: 'Thursday',
      breakfast: 'South Indian Idli Sambhar & Coconut Chutney, Filter Coffee / Tea',
      lunch: 'Rajma Masala, Kashmiri Pulao, Chapati, Dal & Fresh Salad',
      eveningSnack: 'Masala Tea with Bhel Puri or Roasted Makhana',
      dinner: 'Aloo Gobi Matar, Phulka Rotis, Dal Fry, Steamed Rice & Roasted Papad'
    },
    {
      day: 'Friday',
      breakfast: 'Masala Vermicelli / Bread Butter Jam & Boiled Sprouts, Tea & Milk',
      lunch: 'Gujarati Dal-Bhat, Bhindi Masala, Hot Phulkas & Refreshing Chhaas',
      eveningSnack: 'Hot Tea / Coffee with French Fries or Veg Sandwich',
      dinner: 'Veg Biryani with Mix Veg Raita, Dal Makhani & Tawa Naan/Roti'
    },
    {
      day: 'Saturday',
      breakfast: 'Uttapam / Medu Vada with Sambhar & Chutney, Tea & Milk',
      lunch: 'Kadhi-Pakoda, Steamed Rice, Ringan Nu Shaak, Hot Rotis & Salad',
      eveningSnack: 'Tea / Coffee with Biscuits & Namkeen',
      dinner: 'Pav Bhaji with Butter Pav, Onion Salad, Lemon & Jeera Chhaas'
    },
    {
      day: 'Sunday',
      breakfast: 'Special Sunday Puri Bhaji / Fafda Jalebi & Masala Tea',
      lunch: 'Grand Weekend Thali: Paneer Lababdar, Dal Maharani, Jeera Rice, Butter Rotis, Gulab Jamun & Chhaas',
      eveningSnack: 'Tea / Coffee with Light Evening Munchies',
      dinner: 'Chinese Fried Rice, Veg Manchurian & Hot Soup or Light Khichdi Kadhi'
    }
  ]
};

export const SORATH_MEAL_INFO = {
  brand: 'SORATH',
  title: '3-Time Wholesome Student Dining',
  tagline: 'Clean, Homely, Unlimited Food Designed for Student Health & Energy',
  frequency: '3 Times a Day (Morning Breakfast, Afternoon Lunch & Evening Dinner)',
  highlights: [
    '3 hearty, home-cooked meals every day included directly in rent',
    'Unlimited servings of Dal, Sabzi, Rice & fresh hot Rotis',
    'Prepared in sanitized, modern kitchens with daily vegetable sourcing',
    'Pure RO treated drinking water at all dining stations',
    'Sunday special sweet dish and special menu'
  ],
  schedule: [
    {
      day: 'Monday',
      breakfast: 'Poha with Sev, Green Chutney & Hot Tea',
      lunch: 'Gujarati Dal, Steamed Rice, Aloo Beans Sabzi, Phulka Rotis & Chhaas',
      dinner: 'Sev Tameta Nu Shaak, Dal Fry, Steamed Rice, Hot Rotis & Salad'
    },
    {
      day: 'Tuesday',
      breakfast: 'Methi Thepla with Pickle, Curd & Tea',
      lunch: 'Kadhi, Vegetable Khichdi, Sukhi Bhaji, Soft Rotis & Salad',
      dinner: 'Aloo Matar Sabzi, Dal Tadka, Jeera Rice, Phulka Rotis & Papad'
    },
    {
      day: 'Wednesday',
      breakfast: 'Upma with Lemon & Peanut Crunch & Hot Tea',
      lunch: 'Chole Curry, Steamed Rice, Fresh Phulkas & Salad',
      dinner: 'Mix Vegetable Sabzi, Dal Fry, Rice & Hot Rotis'
    },
    {
      day: 'Thursday',
      breakfast: 'Idli Sambhar with Coconut Chutney & Tea',
      lunch: 'Rajma Masala, Rice, Phulka Rotis, Dal & Salad',
      dinner: 'Bhindi Masala, Dal Tadka, Steamed Rice & Soft Chapati'
    },
    {
      day: 'Friday',
      breakfast: 'Bread Butter / Jam with Tea or Milk',
      lunch: 'Gujarati Dal-Bhat, Cabbage Matar Sabzi, Hot Rotis & Chhaas',
      dinner: 'Veg Pulao with Curry, Dal Tadka, Phulkas & Salad'
    },
    {
      day: 'Saturday',
      breakfast: 'Masala Sevaiyaan / Thepla with Pickle & Tea',
      lunch: 'Kadhi Pakoda, Steamed Rice, Tawa Rotis & Salad',
      dinner: 'Pav Bhaji with Butter Pav, Onion Salad & Chhaas'
    },
    {
      day: 'Sunday',
      breakfast: 'Sunday Special Puri Shaak / Fafda with Tea',
      lunch: 'Paneer Sabzi, Dal Makhani, Jeera Rice, Hot Rotis & Sweet (Gulab Jamun)',
      dinner: 'Light Masala Khichdi, Gujarati Kadhi, Papad & Pickle'
    }
  ]
};
