// src/data/tourData.js
export const tourData = {
  title: "Bali Adventure Tour",
  location: "Ubud, Bali, Indonesia",
  duration: "5 Days 4 Nights",
  description: "Experience the beauty and culture of Bali with our carefully curated adventure tour.",
  price: 899,
  quota: 12,
  schedule: "Every Monday from June to September",
  longDescription: "This 5-day adventure takes you through the heart of Bali, from the cultural center of Ubud to the stunning waterfalls and rice terraces that make this island so special. You'll have opportunities to experience local traditions, taste authentic Balinese cuisine, and explore both popular attractions and hidden gems.",
  heroImage: "https://images.unsplash.com/photo-1564429090694-5bcd9556859e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  includes: [
    "4 nights accommodation in 4-star hotels",
    "All breakfasts and 3 dinners",
    "Private transportation with AC",
    "English speaking guide",
    "All entrance fees to attractions",
    "Traditional Balinese massage"
  ],
  excludes: [
    "International flights",
    "Travel insurance",
    "Personal expenses",
    "Tips for guides and drivers",
    "Visa fees if applicable"
  ],
  itineraryDays: [
    {
      day: 1,
      title: "Arrival & Ubud Exploration",
      activities: [
        "Airport pickup and transfer to Ubud",
        "Check-in at hotel and refresh",
        "Visit Ubud Monkey Forest",
        "Explore Ubud Art Market",
        "Welcome dinner at local restaurant"
      ],
      image: "https://images.unsplash.com/photo-1564429090694-5bcd9556859e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      day: 2,
      title: "Rice Terraces & Waterfalls",
      activities: [
        "Morning visit to Tegalalang Rice Terrace",
        "Coffee plantation tour and tasting",
        "Trek to Tegenungan Waterfall",
        "Afternoon free for leisure",
        "Optional yoga class (additional cost)"
      ],
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      day: 3,
      title: "Cultural Immersion",
      activities: [
        "Visit Tirta Empul Temple for water purification",
        "Traditional Balinese cooking class",
        "Afternoon visit to Goa Gajah (Elephant Cave)",
        "Evening Kecak fire dance performance"
      ],
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      day: 4,
      title: "Beach Day & Sunset",
      activities: [
        "Full day trip to Padang Padang Beach",
        "Snorkeling at Blue Lagoon (equipment provided)",
        "Visit Uluwatu Temple",
        "Sunset dinner at Jimbaran Bay"
      ],
      image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      day: 5,
      title: "Departure",
      activities: [
        "Morning free for last-minute shopping",
        "Check-out from hotel",
        "Transfer to airport for departure"
      ]
    }
  ],
  galleryImages: [
    {
      url: "https://images.unsplash.com/photo-1518544866330-95a2bfb5d31e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Bali rice terraces"
    },
    {
      url: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      alt: "Bali waterfall"
    },
    {
      url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      alt: "Balinese temple"
    }
  ]
};