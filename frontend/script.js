// SMART HANGOUT FINDER - JavaScript

// Dummy data for places
const placesData = {
    cafe: [
        {
            name: "Cozy Corner Cafe",
            budget: 200,
            image: "https://th.bing.com/th/id/OIP.5kpfbR15BB7xeHXhGDLFdwHaEK?w=301&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
            description: "Relaxing cafe with WiFi and delicious coffee.",
            offers: ["Daily Special: 20% off on all beverages", "Buy 1 Get 1 Free on pastries"],
            rating: 4.5,
            reviews: 128,
            address: "Andheri West, Mumbai",
            items: ["Espresso", "Cappuccino", "Pastries", "Sandwiches", "WiFi"]
        },
        {
            name: "Urban Brew",
            budget: 300,
            image: "https://tse4.mm.bing.net/th/id/OIP.TXO7-IOamBmHq-srQXddPwHaHa?pid=ImgDet&w=187&h=187&c=7&dpr=1.3&o=7&rm=3",
            description: "Modern cafe with artisanal coffee and snacks.",
            offers: ["Today's Special: Free cookie with any drink", "Student discount: 15% off"],
            rating: 4.2,
            reviews: 95,
            address: "Kandivali East, Mumbai",
            items: ["Latte", "Smoothies", "Bagels", "Salads", "Free WiFi"]
        },
        {
            name: "Sunset Terrace Cafe",
            budget: 250,
            image: "https://tse4.mm.bing.net/th/id/OIP.zTb1eDE7Jn5ghk0RuNv2gQHaDt?w=3840&h=1920&rs=1&pid=ImgDetMain&o=7&rm=3",
            description: "Outdoor cafe with sunset views and live music.",
            offers: ["Evening deal: ₹99 snacks with any drink", "Live music every Friday"],
            rating: 4.7,
            reviews: 156,
            address: "Malad West, Mumbai",
            items: ["Cocktails", "Mocktails", "Appetizers", "Desserts", "Outdoor seating"]
        },
        {
            name: "Bean & Bliss",
            budget: 220,
            image: "https://tse4.mm.bing.net/th/id/OIP.U78mq0HC24kIjwaAuAR16wHaE7?pid=ImgDet&w=184&h=122&c=7&dpr=1.3&o=7&rm=3",
            description: "Cozy spot for coffee lovers and sweet treats.",
            offers: ["Dessert combo: 2 desserts + coffee for ₹299", "Happy hour 4-6pm: 2-for-1 drinks"],
            rating: 4.3,
            reviews: 87,
            address: "Goregaon East, Mumbai",
            items: ["Coffee", "Tea", "Cakes", "Cookies", "Ice Cream"]
        },
        {
            name: "Morning Brew Cafe",
            budget: 180,
            image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80",
            description: "Perfect for morning coffee and breakfast.",
            offers: ["Breakfast combo: ₹149", "Free refill on coffee"],
            rating: 4.1,
            reviews: 72,
            address: "Borivali West, Mumbai",
            items: ["Breakfast sets", "Toast", "Juices", "Coffee varieties"]
        },
        {
            name: "The Reading Nook",
            budget: 240,
            image: "https://th.bing.com/th/id/OIP.Y4qLJ43BkASa5TmOX34T2gHaE-?w=299&h=202&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
            description: "Cafe with books and quiet ambiance.",
            offers: ["Book + coffee deal: ₹199", "Student study area"],
            rating: 4.4,
            reviews: 103,
            address: "Andheri East, Mumbai",
            items: ["Specialty coffees", "Books", "Light meals", "WiFi"]
        },
        {
            name: "Frosty Delights",
            budget: 260,
            image: "https://www.miricitysharing.com/wp-content/uploads/2024/03/Frosty-Ice-Cream-Dessert-Station-Miri.jpg",
            description: "Ice cream and dessert paradise.",
            offers: ["Ice cream sundae: ₹149", "Family pack discounts"],
            rating: 4.6,
            reviews: 134,
            address: "Kandivali West, Mumbai",
            items: ["Ice creams", "Shakes", "Waffles", "Desserts"]
        }
    ],
    restaurant: [
        {
            name: "Tasty Bites Restaurant",
            budget: 500,
            image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=900&q=80",
            description: "Fine dining with Indian and Continental cuisine.",
            offers: ["Lunch Special: Thali for ₹299", "Happy Hour: 30% off on drinks"],
            rating: 4.5,
            reviews: 245,
            address: "Malad East, Mumbai",
            items: ["Thali", "Curry", "Rice", "Naan", "Drinks"]
        },
        {
            name: "Spice Garden",
            budget: 400,
            image: "https://www.thelinckl.com.my/wp-content/uploads/2018/07/Untitled-design-2019-02-21T195725.129-1024x585.png",
            description: "Authentic Indian restaurant with vegetarian options.",
            offers: ["Weekend Buffet: ₹399 per person", "Family Pack: Buy 2 Get 1 Free"],
            rating: 4.3,
            reviews: 189,
            address: "Goregaon West, Mumbai",
            items: ["Vegetarian thali", "Paneer dishes", "Dosas", "Idlis", "Juices"]
        },
        {
            name: "The Grill House",
            budget: 550,
            image: "https://th.bing.com/th?q=Grilling%20Salmon&pid=ImgDet&w=150&h=150&c=1&p=1&rs=1&t=1&dpr=1.3&mkt=en-in&adlt=demote&o=7&rm=3",
            description: "Grill and steak specials with barbecue flavors.",
            offers: ["Weekend BBQ Special: ₹499", "Group meal deals available"],
            rating: 4.7,
            reviews: 312,
            address: "Borivali East, Mumbai",
            items: ["Steaks", "Grilled chicken", "BBQ ribs", "Salads", "Wine"]
        },
        {
            name: "Veggie Delight",
            budget: 350,
            image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80",
            description: "Healthy vegetarian restaurant with fresh juices.",
            offers: ["Salad combo: ₹249", "Juice happy hour: 2-for-1"],
            rating: 4.2,
            reviews: 167,
            address: "Andheri West, Mumbai",
            items: ["Salads", "Smoothies", "Veggie burgers", "Wraps", "Fresh juices"]
        },
        {
            name: "Ocean's Catch",
            budget: 600,
            image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=900&q=80",
            description: "Fresh seafood and coastal cuisine.",
            offers: ["Seafood platter: ₹599", "Wine pairing available"],
            rating: 4.8,
            reviews: 278,
            address: "Kandivali East, Mumbai",
            items: ["Fish curry", "Prawns", "Crab", "Seafood rice", "Cocktails"]
        },
        {
            name: "Pasta Paradise",
            budget: 450,
            image: "https://cdn.tictuk.com/5909072552331463/banner_mobile_b9251e7d-c999-55a2-8b20-0ad86642283e.jpeg?a=043037f4-c103-046a-7e69-a62901fc39e9",
            description: "Authentic Italian pasta and pizza.",
            offers: ["Pizza + pasta combo: ₹399", "Family meal deals"],
            rating: 4.4,
            reviews: 201,
            address: "Malad West, Mumbai",
            items: ["Pasta", "Pizza", "Risotto", "Tiramisu", "Italian wines"]
        },
        {
            name: "Royal Chinese",
            budget: 380,
            image: "https://img.restaurantguru.com/c665-Restaurant-ROYAL-CHINESE-food.jpg",
            description: "Traditional Chinese cuisine with modern twist.",
            offers: ["Dim sum platter: ₹299", "Lunch buffet: ₹249"],
            rating: 4.1,
            reviews: 145,
            address: "Goregaon East, Mumbai",
            items: ["Noodles", "Dumplings", "Fried rice", "Manchurian", "Soups"]
        },
        {
            name: "Midnight Spice",
            budget: 420,
            image: "https://th.bing.com/th/id/OIP.Pwpyl_O587VVwNFsTT0TyAHaE8?w=263&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
            description: "Late-night restaurant with spicy delights and cocktails.",
            offers: ["Night owl discount: 20% off after 10pm", "Free dessert with dinner"],
            rating: 4.6,
            reviews: 189,
            address: "Andheri West, Mumbai",
            items: ["Spicy curries", "Cocktails", "Tandoori", "Paneer dishes", "Mocktails"]
        }
    ],
    mcd: [
        {
            name: "McDonald's Downtown",
            budget: 250,
            image: "https://th.bing.com/th/id/OIP.p88fwbHUxU_MA4WHKmS9_QHaD4?w=281&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
            description: "Fast food with burgers, fries, and more.",
            offers: ["Big Mac Meal: ₹150", "Happy Meal for kids", "Free McFlurry on app order"],
            rating: 4.0,
            reviews: 456,
            address: "Andheri West, Mumbai",
            items: ["Big Mac", "Fries", "Coke", "Happy Meal", "McFlurry"]
        },
        {
            name: "McDonald's Plaza",
            budget: 230,
            image: "https://tse3.mm.bing.net/th/id/OIP.3A506aHiDaQVz9zrOdhi5QHaJQ?pid=ImgDet&w=184&h=230&c=7&dpr=1.3&o=7&rm=3",
            description: "Classic McDonald's with drive-thru and mobile deals.",
            offers: ["Combo deals: ₹199", "Free fries with large meal"],
            rating: 3.9,
            reviews: 387,
            address: "Borivali West, Mumbai",
            items: ["Chicken nuggets", "Fries", "Soft drinks", "Ice cream", "Salads"]
        },
        {
            name: "McDonald's Mall",
            budget: 240,
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
            description: "McDonald's inside the mall with family seating.",
            offers: ["Family meal: ₹499", "Kids play area"],
            rating: 4.1,
            reviews: 298,
            address: "Malad West, Mumbai",
            items: ["Burgers", "Wraps", "Fries", "McCafe coffee", "Desserts"]
        },
        {
            name: "McDonald's Express",
            budget: 220,
            image: "data:image/webp;base64,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",
            description: "Quick service McDonald's for on-the-go.",
            offers: ["Drive-thru deals", "App exclusive offers"],
            rating: 3.8,
            reviews: 234,
            address: "Goregaon East, Mumbai",
            items: ["Breakfast menu", "Lunch combos", "Snacks", "Beverages"]
        },
        {
            name: "McDonald's Central",
            budget: 260,
            image: "https://th.bing.com/th/id/OIP.a7Rs8sSEEhVP34qMOJUxAQHaE8?w=250&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",description: "Central location with all-day breakfast.",
            offers: ["All-day breakfast", "Senior citizen discount"],
            rating: 4.2,
            reviews: 345,
            address: "Andheri East, Mumbai",
            items: ["McMuffins", "Hash browns", "Pancakes", "Coffee", "Smoothies"]
        },
        {
            name: "McDonald's Junction",
            budget: 235,
            image: "https://th.bing.com/th/id/OIP.NoX3-P5lideTLUyxxB3rjwHaEL?w=314&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
            description: "Family-friendly McDonald's with play area.",
            offers: ["Kids birthday parties", "Group discounts"],
            rating: 4.0,
            reviews: 267,
            address: "Kandivali West, Mumbai",
            items: ["Happy Meals", "Sharing boxes", "McNuggets", "Sauces", "Milkshakes"]
        },
        {
            name: "McDonald's Metro",
            budget: 245,
            image: "https://www.moneydigest.sg/wp-content/uploads/2023/12/mdd1.png",
            description: "Modern McDonald's with digital ordering.",
            offers: ["Digital menu deals", "Loyalty rewards"],
            rating: 4.3,
            reviews: 389,
            address: "Borivali East, Mumbai",
            items: ["Custom burgers", "Veggie options", "Salads", "Fruit bags", "Hot drinks"]
        }
    ],
    mall: [
        {
            name: "City Mall",
            budget: 100,
            image: "https://visit.today/images/elements/upload/full/IMG7357.jpeg",
            description: "Shopping mall with stores, food court, and entertainment.",
            offers: ["Free entry", "Movie tickets: ₹200", "Food court discounts"],
            rating: 4.4,
            reviews: 567,
            address: "Goregaon West, Mumbai",
            items: ["Clothing stores", "Food court", "Cinema", "Games", "Parking"]
        },
        {
            name: "Skyline Plaza",
            budget: 120,
            image: "https://whereinpampanga.com/wp-content/uploads/2022/08/285050409_1711996522513627_9063010602489806180_n-1140x855.jpg",
            description: "Modern mall with multiplex cinema and arcade.",
            offers: ["Cinema combo: ₹299", "Food court meal deals"],
            rating: 4.5,
            reviews: 432,
            address: "Malad East, Mumbai",
            items: ["Fashion brands", "Electronics", "Restaurants", "Bowling", "Kids zone"]
        },
        {
            name: "Metro Mall",
            budget: 110,
            image: "data:image/webp;base64,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",
            description: "Entertainment-focused mall with gaming and dining.",
            offers: ["Gaming packages", "Dining deals"],
            rating: 4.2,
            reviews: 378,
            address: "Andheri West, Mumbai",
            items: ["Arcade games", "Food stalls", "Movie theater", "Shops", "Events"]
        },
        {
            name: "Central Mall",
            budget: 105,
            image: "data:image/webp;base64,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",
            description: "Central shopping destination with luxury brands.",
            offers: ["Luxury discounts", "VIP parking"],
            rating: 4.6,
            reviews: 498,
            address: "Borivali West, Mumbai",
            items: ["Designer stores", "Jewelry", "Cafes", "Spa", "Fine dining"]
        },
        {
            name: "Plaza Grande",
            budget: 115,
            image: "https://photos.moderncities.com/Cities/Miami/Coral-Gables-Giralda-Plaza/i-qczWPnn/0/1c67fe44/L/Coral%20Gables%20Community%20Foundation-L.jpg",
            description: "Grand mall with international brands and food court.",
            offers: ["International brand sales", "Food festival deals"],
            rating: 4.3,
            reviews: 345,
            address: "Kandivali East, Mumbai",
            items: ["Global brands", "Food court", "Cinema", "Events", "Parking"]
        },
        {
            name: "Urban Mall",
            budget: 95,
            image: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=900&q=80",
            description: "Modern urban mall with trendy stores.",
            offers: ["Student discounts", "Weekend events"],
            rating: 4.1,
            reviews: 289,
            address: "Andheri East, Mumbai",
            items: ["Trendy fashion", "Tech gadgets", "Cafes", "Bookstore", "Fitness center"]
        },
        {
            name: "Family Mall",
            budget: 100,
            image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
            description: "Family-oriented mall with kids activities.",
            offers: ["Kids play areas", "Family packages"],
            rating: 4.4,
            reviews: 412,
            address: "Malad West, Mumbai",
            items: ["Kids stores", "Toys", "Family restaurants", "Cinema", "Play zones"]
        },
        {
            name: "Royal Plaza Mall",
            budget: 130,
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
            description: "Spacious mall with premium brands, cinema, and dining.",
            offers: ["Weekend shopping specials", "Cinema combo deal"],
            rating: 4.5,
            reviews: 521,
            address: "Borivali East, Mumbai",
            items: ["Luxury brands", "Food court", "Movies", "Entertainment", "Events"]
        }
    ],
    other: [
        {
            name: "Adventure Park",
            budget: 300,
            image: "https://lh5.googleusercontent.com/p/AF1QipMQUNk2Juno_dqX9LcqC-UO64gpMNLex7WRTBmK=w1220-h920-k-no",
            description: "Fun park with rides and games.",
            offers: ["Group discount: 20% off", "Season pass available"],
            rating: 4.5,
            reviews: 678,
            address: "Goregaon East, Mumbai",
            items: ["Roller coasters", "Ferris wheel", "Games", "Food stalls", "Shows"]
        },
        {
            name: "Riverside Lounge",
            budget: 350,
            image: "data:image/webp;base64,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",
            description: "Chill hangout by the river with live DJ.",
            offers: ["Evening special: ₹299 cocktails", "Live music every weekend"],
            rating: 4.3,
            reviews: 234,
            address: "Borivali East, Mumbai",
            items: ["Cocktails", "Beer", "Snacks", "Live music", "River view"]
        },
        {
            name: "Night Bazaar",
            budget: 150,
            image: "data:image/webp;base64,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",
            description: "Vibrant night market with food stalls and shopping.",
            offers: ["Street food combo: ₹199", "Live performances"],
            rating: 4.2,
            reviews: 345,
            address: "Kandivali West, Mumbai",
            items: ["Street food", "Handicrafts", "Clothing", "Jewelry", "Entertainment"]
        },
        {
            name: "Sky Lounge",
            budget: 400,
            image: "https://santagrandhotels.com.my/wp-content/uploads/sites/214/2023/03/IMG_7502.jpg",
            description: "Rooftop lounge with city views and cocktails.",
            offers: ["Sunset happy hour", "VIP seating"],
            rating: 4.6,
            reviews: 198,
            address: "Andheri West, Mumbai",
            items: ["Signature cocktails", "Appetizers", "City views", "Music", "Events"]
        },
        {
            name: "Game Zone",
            budget: 200,
            image: "https://i.ytimg.com/vi/uKQNusx9bF0/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH8CYAC0AWKAgwIABABGH8gSCgaMA8=&rs=AOn4CLBuDMRS9nNQaWeCKyd6ruYMNpf7oQ",
            description: "Gaming arcade with latest consoles and VR.",
            offers: ["Hourly packages", "Tournament entries"],
            rating: 4.4,
            reviews: 456,
            address: "Malad East, Mumbai",
            items: ["Video games", "VR experiences", "Pool tables", "Snacks", "Drinks"]
        },
        {
            name: "Art Cafe",
            budget: 280,
            image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
            description: "Cafe with art exhibitions and creative workshops.",
            offers: ["Art workshop: ₹499", "Exhibition entry free"],
            rating: 4.1,
            reviews: 167,
            address: "Goregaon West, Mumbai",
            items: ["Coffee", "Art supplies", "Light meals", "Workshops", "Gallery"]
        },
        {
            name: "Sports Bar",
            budget: 320,
            image: "https://tse3.mm.bing.net/th/id/OIP.ABgrKUeoDvqnaHjYUdeetAHaFX?pid=ImgDet&w=184&h=133&c=7&dpr=1.3&o=7&rm=3",
            description: "Sports bar with live screenings and pub grub.",
            offers: ["Game day specials", "Happy hour drinks"],
            rating: 4.3,
            reviews: 289,
            address: "Borivali West, Mumbai",
            items: ["Beer", "Wings", "Nachos", "Live sports", "Pool tables"]
        }
    ]
};

// Search functionality
const searchForm = document.getElementById('searchForm');
if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="loading"></span> Searching...';
        submitBtn.disabled = true;

        const minBudget = parseInt(document.getElementById('minBudget').value);
        const maxBudget = parseInt(document.getElementById('maxBudget').value);
        const category = document.getElementById('category').value;

        let filteredPlaces = [];
        if (category === 'all') {
            // Combine all categories for "All" selection
            Object.keys(placesData).forEach(cat => {
                filteredPlaces = filteredPlaces.concat(placesData[cat]);
            });
        } else {
            filteredPlaces = placesData[category] || [];
        }

        filteredPlaces = filteredPlaces.filter(place => place.budget >= minBudget && place.budget <= maxBudget);

        // Simulate loading delay for better UX
        setTimeout(() => {
            displayPlaces(filteredPlaces);
            const resultsSection = document.getElementById('resultsSection');
            if (resultsSection) {
                resultsSection.style.display = 'block';
                resultsSection.scrollIntoView({ behavior: 'smooth' });
            }

            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 800);
    });
}

function displayPlaces(places) {
    const container = document.getElementById('placesContainer');
    container.innerHTML = '';

    if (!places || places.length === 0) {
        container.innerHTML = `
            <div class="place-card" style="padding: 40px; text-align: center; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);">
                <div style="font-size: 48px; margin-bottom: 20px;">🔍</div>
                <h3 style="color: #666; margin-bottom: 10px;">No places match your search.</h3>
                <p style="color: #888; margin-bottom: 20px;">Try adjusting your budget or choosing a different category.</p>
                <button onclick="document.getElementById('category').value='all'; document.getElementById('minBudget').value='100'; document.getElementById('maxBudget').value='1000'; document.getElementById('searchForm').dispatchEvent(new Event('submit'));" style="background: linear-gradient(45deg, #667eea, #764ba2); color: white; border: none; padding: 12px 25px; border-radius: 25px; cursor: pointer; font-weight: bold;">Show All Places</button>
            </div>
        `;
        return;
    }

    places.forEach(place => {
        const ratingStars = '⭐'.repeat(Math.floor(place.rating)) + (place.rating % 1 >= 0.5 ? '⭐' : '');
        const card = document.createElement('div');
        card.className = 'place-card';
        card.setAttribute('role', 'button');
        card.tabIndex = 0;
        card.onclick = () => openPlaceDetailPage(place);
        card.onkeypress = (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                openPlaceDetailPage(place);
            }
        };
        card.innerHTML = `
            <img src="${place.image}" alt="${place.name}" onerror="this.src='https://via.placeholder.com/400x250?text=No+Image'">
            <div class="place-info">
                <h3>${place.name}</h3>
                <p><strong>Budget:</strong> ₹${place.budget}</p>
                <p><strong>Rating:</strong> <span class="rating-stars">${ratingStars}</span> ${place.rating} (${place.reviews} reviews)</p>
                <p><strong>Address:</strong> ${place.address}</p>
                <p>${place.description}</p>
                <div class="tag-list">
                    ${place.items.map(item => `<span class="tag">${item}</span>`).join('')}
                </div>
                <div style="margin-top: 15px;">
                    ${place.offers.map(offer => createOfferLink(offer)).join('')}
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function openPlaceDetailPage(place) {
    const encoded = encodeURIComponent(place.name);
    window.location.href = `details.html?place=${encoded}`;
}

function getPlaceByName(name) {
    const all = [];
    Object.values(placesData).forEach(arr => all.push(...arr));
    return all.find(p => p.name.toLowerCase() === name.toLowerCase());
}

function getQueryParam(key) {
    const params = new URLSearchParams(window.location.search);
    return params.get(key);
}

function goBackOrHome() {
    // Prefer navigating back if we have a valid referrer from the same site.
    try {
        const ref = document.referrer;
        const sameOrigin = ref && new URL(ref).origin === window.location.origin;
        if (sameOrigin && window.history.length > 1) {
            window.history.back();
            return;
        }
    } catch (e) {
        // Ignore invalid referrer URL parsing errors.
    }

    // Fallback to a safe landing page.
    window.location.href = 'places.html';
}

function renderPlaceDetailsPage(placeName) {
    const place = getPlaceByName(placeName);
    if (!place) {
        document.getElementById('placeDetailsRoot').innerHTML = `<div class="alert">No details found for "${placeName}".</div>`;
        return;
    }

    const ratingStars = '⭐'.repeat(Math.floor(place.rating)) + (place.rating % 1 >= 0.5 ? '⭐' : '');
    document.title = `${place.name} — SMART HANGOUT FINDER`;

    document.getElementById('placeDetailsRoot').innerHTML = `
        <div class="detail-topbar">
            <button class="back-button" onclick="goBackOrHome()">← Back</button>
        </div>
        <div class="detail-hero" id="detailHero" style="background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.18)), url('${place.image}'), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80');">
            <div class="detail-hero-overlay">
                <h1>${place.name}</h1>
                <p class="detail-subtitle">${place.address}</p>
                <div class="detail-tags">
                    <span class="tag">₹${place.budget}</span>
                    <span class="tag">${ratingStars} ${place.rating}</span>
                </div>
                <div class="custom-image-input">
                    <input id="customImageUrl" type="url" placeholder="Paste image URL to update hero" />
                    <button type="button" onclick="updateHeroImage()">Apply</button>
                </div>
            </div>
        </div>
        <div class="detail-content">
            <div class="detail-section">
                <h2>About</h2>
                <p>${place.description}</p>
            </div>
            <div class="detail-section">
                <h2>Available Items</h2>
                <div class="items-gallery">
                    ${place.items.map(item => {
                        const itemKey = item.toLowerCase().replace(/\s+/g, ' ');
                        const itemImages = {
                            coffee: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80',
                            espresso: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80',
                            latte: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
                            mocha: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
                            tea: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
                            dessert: 'https://images.unsplash.com/photo-1556911220-e15b29be8c91?auto=format&fit=crop&w=800&q=80',
                            cake: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80',
                            "ice cream": 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
                            "ice creams": 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
                            "cocktails": 'https://images.unsplash.com/photo-1554106272-28db7b5a8c3b?auto=format&fit=crop&w=800&q=80',
                            "mocktails": 'https://images.unsplash.com/photo-1554106272-28db7b5a8c3b?auto=format&fit=crop&w=800&q=80',
                            "bagels": 'https://images.unsplash.com/photo-1559628234-3990b26c5a50?auto=format&fit=crop&w=800&q=80',
                            "sandwiches": 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
                            "salads": 'https://images.unsplash.com/photo-1468777675496-5782faaea55b?auto=format&fit=crop&w=800&q=80',
                            "pizza": 'https://images.unsplash.com/photo-1548365328-072eca6f4380?auto=format&fit=crop&w=800&q=80',
                            "pasta": 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80',
                            "risotto": 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80',
                            "seafood": 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80',
                            "steak": 'https://images.unsplash.com/photo-1555992336-03a23ef7a5ad?auto=format&fit=crop&w=800&q=80',
                            "fries": 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
                            "nuggets": 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
                            "rice": 'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80',
                            "naan": 'https://images.unsplash.com/photo-1604908177527-01277cd4ec0a?auto=format&fit=crop&w=800&q=80',
                            "curry": 'https://images.unsplash.com/photo-1543352634-2d3bd56078d1?auto=format&fit=crop&w=800&q=80',
                            "drinks": 'https://images.unsplash.com/photo-1510626176961-4b1b3fe95d14?auto=format&fit=crop&w=800&q=80',
                            "juice": 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80',
                            "juices": 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80',
                            "smoothies": 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&q=80',
                            "cookies": 'https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=800&q=80',
                            "breakfast sets": 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
                            "dosas": 'https://images.unsplash.com/photo-1622427762799-0c8f792ce52e?auto=format&fit=crop&w=800&q=80',
                            "idlis": 'https://images.unsplash.com/photo-1552332386-f8dd00dc26d3?auto=format&fit=crop&w=800&q=80'
                        };
                        const imgSrc = itemImages[itemKey] || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80';

                        return `
                        <div class="item-card">
                            <img src="${imgSrc}" alt="${item}" onerror="this.src='https://via.placeholder.com/260x180?text=Item'" />
                            <div class="item-card-body">
                                <p>${item}</p>
                            </div>
                        </div>
                    `;}).join('')}
                </div>
            </div>
            <div class="detail-section">
                <h2>Offers & Specials</h2>
                <div class="offer-grid">
                    ${place.offers.map(offer => `<a class="offer-card" href="offer.html?offer=${encodeURIComponent(offer)}">${offer}</a>`).join('')}
                </div>
            </div>
            <div class="detail-section">
                <h2>Explore More</h2>
                <div class="category-links">
                    <a href="places.html#cafe" class="category-pill">Cafes</a>
                    <a href="places.html#restaurant" class="category-pill">Restaurants</a>
                    <a href="places.html#mcd" class="category-pill">McDonald's</a>
                    <a href="places.html#mall" class="category-pill">Malls</a>
                    <a href="places.html#other" class="category-pill">Other</a>
                </div>
            </div>
        </div>
    `;
}

function renderOfferPage(offerName) {
    document.title = `${offerName} — Offer Details`;
    const allPlaces = [];
    Object.values(placesData).forEach(arr => allPlaces.push(...arr));
    const matched = allPlaces.filter(p => p.offers.some(o => o.toLowerCase() === offerName.toLowerCase()));

    document.getElementById('offerRoot').innerHTML = `
        <div class="detail-topbar">
            <button class="back-button" onclick="goBackOrHome()">← Back</button>
        </div>
        <div class="offer-header">
            <h1>${offerName}</h1>
            <p class="offer-subtitle">See which hangout spots are offering this deal.</p>
        </div>
        <div class="offer-list">
            ${matched.length === 0 ? `<div class="alert">No places currently show this offer.</div>` : matched.map(place => {
                const ratingStars = '⭐'.repeat(Math.floor(place.rating)) + (place.rating % 1 >= 0.5 ? '⭐' : '');
                return `
                <div class="offer-place-card" onclick="openPlaceDetailPage({name: '${place.name}'})">
                    <img src="${place.image}" alt="${place.name}" onerror="this.src='https://via.placeholder.com/280x180?text=No+Image'" />
                    <div class="offer-place-body">
                        <h3>${place.name}</h3>
                        <p>${place.address}</p>
                        <p><strong>Rating:</strong> ${ratingStars} ${place.rating} (${place.reviews} reviews)</p>
                        <span class="offer-tag">${offerName}</span>
                    </div>
                </div>
            `}).join('')}
        </div>
    `;
}

function createOfferLink(offer) {
    return `<a class="offer-link" href="offer.html?offer=${encodeURIComponent(offer)}">${offer}</a>`;
}

// Page initialization - run after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Chat UI initialization
    chatMessages = document.getElementById('chatMessages');
    chatInput = document.getElementById('chatInput');
    sendBtn = document.getElementById('sendBtn');

    if (sendBtn && chatInput && chatMessages) {
        sendBtn.addEventListener('click', sendMessage);
        chatInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendMessage();
            }
        });
    } else {
        console.warn('Chat UI not fully available on this page, chatbot initialization skipped.');
    }

    // Mini chat widget on home page
    const miniChat = document.getElementById('miniChat');
    if (miniChat) {
        const miniMessages = document.getElementById('miniChatMessages');
        const miniInput = document.getElementById('miniChatInput');
        const miniSend = document.getElementById('miniChatSend');
        const miniClose = miniChat.querySelector('.mini-chat-close');

        function appendMiniMessage(sender, text, asHtml = false) {
            const msg = document.createElement('div');
            msg.className = `mini-chat-message ${sender}`;
            if (asHtml) msg.innerHTML = text;
            else msg.textContent = text;
            miniMessages.appendChild(msg);
            miniMessages.scrollTop = miniMessages.scrollHeight;
        }

        function sendMini() {
            const txt = miniInput.value.trim();
            if (!txt) return;
            appendMiniMessage('user', txt);
            miniInput.value = '';

            setTimeout(() => {
                const resp = getBotResponse(txt);
                appendMiniMessage('bot', resp, true);
            }, 800);
        }

        if (miniSend && miniInput) {
            miniSend.addEventListener('click', sendMini);
            miniInput.addEventListener('keydown', e => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    sendMini();
                }
            });
        }

        if (miniClose) {
            miniClose.addEventListener('click', () => {
                miniChat.style.display = 'none';
            });
        }
    }

    // Modal initialization (login/register)
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const closeBtns = document.getElementsByClassName('close');

    if (loginModal && registerModal && loginBtn && registerBtn && closeBtns) {
        loginBtn.onclick = function() {
            loginModal.style.display = 'block';
        }

        registerBtn.onclick = function() {
            registerModal.style.display = 'block';
        }

        for (let closeBtn of closeBtns) {
            closeBtn.onclick = function() {
                loginModal.style.display = 'none';
                registerModal.style.display = 'none';
            }
        }

        window.onclick = function(event) {
            if (event.target == loginModal) {
                loginModal.style.display = 'none';
            }
            if (event.target == registerModal) {
                registerModal.style.display = 'none';
            }
        }

        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');

        if (loginForm) {
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Login successful! (Demo)');
                loginModal.style.display = 'none';
            });
        }

        if (registerForm) {
            registerForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Registration successful! (Demo)');
                registerModal.style.display = 'none';
            });
        }
    }

    // Detect if this page wants to show a specific place or offer
    const placeNameParam = getQueryParam('place');
    if (placeNameParam) {
        renderPlaceDetailsPage(placeNameParam);
    }

    const offerParam = getQueryParam('offer');
    if (offerParam) {
        renderOfferPage(offerParam);
    }

    // Start location tracking (if available)
    initLocationTracking();
});

function sendMessage() {
    if (!chatInput || !chatMessages) return;

    const message = chatInput.value.trim();
    if (message === '') return;

    addMessage('user', message);
    chatInput.value = '';

    // Show typing indicator
    const typingIndicator = addTypingIndicator();

    // Enhanced AI responses with random delay for realism
    const delay = 1000 + Math.random() * 2000; // 1-3 seconds
    setTimeout(() => {
        removeTypingIndicator(typingIndicator);
        const response = getBotResponse(message);
        // Always render bot response as HTML so links and formatting appear correctly.
        addMessage('bot', response, true);
    }, delay);
}

function addTypingIndicator() {
    if (!chatMessages) return null;
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing';
    typingDiv.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <span>AI is typing...</span>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return typingDiv;
}

function removeTypingIndicator(indicator) {
    if (indicator && indicator.parentNode) {
        indicator.parentNode.removeChild(indicator);
    }
}

function addMessage(sender, text, asHtml = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    if (asHtml) {
        messageDiv.innerHTML = text;
    } else {
        messageDiv.textContent = text;
    }
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(message) {
    const lowerMessage = message.toLowerCase();

    function summarizePlaces(places, max = 4) {
        if (!places || places.length === 0) return 'No matches found.';
        return places.slice(0, max).map(p => `${p.name} (${p.address}, ₹${p.budget})`).join(', ');
    }

    function findBudget() {
        const match = message.match(/\b(\d{2,4})\b/);
        if (!match) return null;
        return parseInt(match[1], 10);
    }

    function findCategory() {
        if (lowerMessage.includes('cafe')) return 'cafe';
        if (lowerMessage.includes('restaurant')) return 'restaurant';
        if (lowerMessage.includes('mcd') || lowerMessage.includes('mc donald')) return 'mcd';
        if (lowerMessage.includes('mall')) return 'mall';
        if (lowerMessage.includes('park') || lowerMessage.includes('game') || lowerMessage.includes('lounge')) return 'other';
        return null;
    }

    function findOfferKeywords() {
        const allOffers = Object.values(placesData).flatMap(cls => cls.flatMap(p => p.offers));
        const query = lowerMessage.replace(/[^a-z0-9 ]/gi, ' ');
        return allOffers.filter(offer => offer.toLowerCase().includes(query)).slice(0, 4);
    }

    function findPlaceByName() {
        const all = Object.values(placesData).flat();
        return all.find(p => p.name.toLowerCase() === lowerMessage.trim());
    }

    function findPlaceByNameFuzzy() {
        const needle = lowerMessage.trim();
        if (!needle) return null;
        const all = Object.values(placesData).flat();
        return all.find(p => p.name.toLowerCase().includes(needle) || needle.includes(p.name.toLowerCase()));
    }

    // Greetings
    if (/(^|\s)(hello|hi|hey|namaste|greetings)(\s|$)/.test(lowerMessage)) {
        return "Hello! I'm your Mumbai hangout assistant. Tell me your budget, location, or type of place you want (cafe, restaurant, mall, McDonald's).";
    }

    // Direct place name
    const exactPlace = findPlaceByName();
    if (exactPlace) {
        const link = `details.html?place=${encodeURIComponent(exactPlace.name)}`;
        return `Looking for ${exactPlace.name}? Great choice! <a href="${link}" target="_blank" rel="noopener">Open details page</a>.`;
    }

    // Handle generic budget keyword (without a number)
    if (/\bbudget\b/.test(lowerMessage) && !/\b\d{2,4}\b/.test(lowerMessage)) {
        return `Tell me your budget range and I will list places for you. For example: <strong>budget 300</strong> or <strong>show places under 500</strong>.<br><br>Try one of these quick suggestions:<br><a href=\"#\" onclick=\"document.getElementById('chatInput').value='budget 300';document.getElementById('sendBtn').click(); return false;\">budget 300</a> · <a href=\"#\" onclick=\"document.getElementById('chatInput').value='budget 500';document.getElementById('sendBtn').click(); return false;\">budget 500</a> · <a href=\"#\" onclick=\"document.getElementById('chatInput').value='Show places under 400';document.getElementById('sendBtn').click(); return false;\">under 400</a>.`;
    }

    // Fuzzy place name (partial match)
    const fuzzyPlace = findPlaceByNameFuzzy();
    if (fuzzyPlace) {
        const link = `details.html?place=${encodeURIComponent(fuzzyPlace.name)}`;
        return `I found a match: ${fuzzyPlace.name}. <a href="${link}" target="_blank" rel="noopener">View details</a>.`;
    }

    // Budget-based recommendations
    const budget = findBudget();
    if (budget) {
        const allPlaces = Object.values(placesData).flat();
        const filtered = allPlaces.filter(p => p.budget <= budget);
        if (filtered.length) {
            const firstLink = `details.html?place=${encodeURIComponent(filtered[0].name)}`;
            return `With ₹${budget}, you can visit: ${summarizePlaces(filtered, 5)}. <a href="${firstLink}" target="_blank" rel="noopener">Open one example</a>.`;
        }
        return `There are no places under ₹${budget} in the current set, but you can still explore: places.html.`;
    }

    // Category recommendations
    const category = findCategory();
    if (category) {
        const list = placesData[category] || [];
        const exampleLink = `details.html?place=${encodeURIComponent(list[0].name)}`;
        return `Here are popular ${category === 'mcd' ? "McDonald's" : category} spots: ${summarizePlaces(list, 5)}. <a href="${exampleLink}" target="_blank" rel="noopener">Open one to view details</a>.`;
    }

    // Offer extraction
    if (/(offer|discount|deal|special)/.test(lowerMessage)) {
        const matchedOffers = findOfferKeywords();
        if (matchedOffers.length) {
            const names = matchedOffers.map(o => `"${o}"`).join(', ');
            return `I found these offer titles: ${names}. You can view more details at <a href="offer.html?offer=${encodeURIComponent(matchedOffers[0])}" target="_blank" rel="noopener">this offer page</a>.`;
        }

        const allOffers = Object.values(placesData).flatMap(cls => cls.flatMap(p => p.offers.map(o => ({ offer: o, place: p.name }))));
        const topOffers = allOffers.slice(0, 3);
        if (topOffers.length) {
            const listHtml = topOffers.map(o => `• <a href="offer.html?offer=${encodeURIComponent(o.offer)}" target="_blank" rel="noopener">${o.offer}</a> @ ${o.place}`).join('<br>');
            return `Here are a few popular deals:<br>${listHtml}<br>Ask me about a specific deal or place for more details.`;
        }

        return "Lots of places have offers! Try asking for a specific offer title, or check the place details pages for current specials.";
    }

    function findPlacesByItemKeywords() {
        const keywords = [
            { key: 'coffee', label: 'coffee' },
            { key: 'pizza', label: 'pizza' },
            { key: 'burger', label: 'burger' },
            { key: 'dessert', label: 'dessert' },
            { key: 'ice cream', label: 'ice cream' },
            { key: 'cocktail', label: 'cocktail' },
            { key: 'drink', label: 'drink' },
            { key: 'tea', label: 'tea' },
            { key: 'latte', label: 'latte' },
            { key: 'salad', label: 'salad' },
            { key: 'pasta', label: 'pasta' },
            { key: 'cake', label: 'cake' },
            { key: 'sushi', label: 'sushi' },
            { key: 'seafood', label: 'seafood' },
            { key: 'steak', label: 'steak' },
            { key: 'fries', label: 'fries' },
            { key: 'wifi', label: 'WiFi' },
            { key: 'mocktail', label: 'mocktail' },
        ];
        const found = keywords.filter(k => new RegExp(`\\b${k.key}\\b`, 'i').test(lowerMessage));
        if (!found.length) return null;

        const all = Object.values(placesData).flat();
        const matches = all.filter(p => p.items.some(item => found.some(k => new RegExp(`\\b${k.key}\\b`, 'i').test(item))));
        return { found, matches };
    }

    // Location-based queries
    if (/(andheri|kandivali|malad|goregaon|borivali)/.test(lowerMessage)) {
        const region = lowerMessage.match(/(andheri|kandivali|malad|goregaon|borivali)/)[0];
        const matches = Object.values(placesData).flat().filter(p => p.address.toLowerCase().includes(region));
        if (matches.length) {
            return `Places in ${region.charAt(0).toUpperCase() + region.slice(1)}: ${summarizePlaces(matches, 5)}.`;
        }
        return `I don't see specific places listed for ${region} yet, but you can explore the full list at places.html.`;
    }

    const itemMatch = findPlacesByItemKeywords();
    if (itemMatch && itemMatch.matches.length) {
        const termLabel = itemMatch.found[0].label;
        const key = itemMatch.found[0].key;
        const imageMap = {
            coffee: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80',
            pizza: 'https://images.unsplash.com/photo-1548365328-072eca6f4380?auto=format&fit=crop&w=800&q=80',
            burger: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
            dessert: 'https://images.unsplash.com/photo-1556911220-e15b29be8c91?auto=format&fit=crop&w=800&q=80',
            'ice cream': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
            cocktail: 'https://images.unsplash.com/photo-1554106272-28db7b5a8c3b?auto=format&fit=crop&w=800&q=80',
            rice: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80',
            curry: 'https://images.unsplash.com/photo-1543352634-2d3bd56078d1?auto=format&fit=crop&w=800&q=80',
            thali: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80',
            drinks: 'https://images.unsplash.com/photo-1510626176961-4b1b3fe95d14?auto=format&fit=crop&w=800&q=80',
            seafood: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80'
        };
        const imgUrl = imageMap[key] || imageMap[termLabel.toLowerCase()];
        const imgHtml = imgUrl ? `<div style="text-align:center;margin:12px 0;"><img src="${imgUrl}" alt="${termLabel}" style="width:220px;max-width:100%;border-radius:14px;box-shadow:0 10px 20px rgba(0,0,0,0.18);" onerror="this.src='https://images.unsplash.com/photo-1529180482700-2b9c7a4f45f9?auto=format&fit=crop&w=800&q=80'" /></div>` : '';
        const link = `details.html?place=${encodeURIComponent(itemMatch.matches[0].name)}`;
        return `${imgHtml}Looking for places with ${termLabel}? Try: ${summarizePlaces(itemMatch.matches, 5)}. <a href=\"${link}\" target=\"_blank\" rel=\"noopener\">Open one</a> to see details.`;
    }

    // Menu / food queries
    if (/(menu|food|eat|dish|drinks)/.test(lowerMessage)) {
        return "I can show you what each place offers. Just ask something like: 'What can I eat in a cafe?' or 'Show me places with coffee and desserts'.";
    }

    // Help fallback
    if (/(help|how|what|where|can i)/.test(lowerMessage)) {
        return "I can recommend cafes, restaurants, malls, McDonald's, and other hangout spots in Mumbai. Tell me your budget, preferred location, or desired category. For example: 'I want a cafe in Andheri' or 'Show me McDonald's offers'.";
    }

    // Default fallback
    return "Sorry, I didn't quite catch that. Try asking like: 'Show cafes under 300', 'Best malls near Goregaon', or 'Any discounts today?'";
}


// Get current location (enhanced)
let currentLocation = null;
let locationDisplay = null;

function initLocationTracking() {
    locationDisplay = document.createElement('div');
    locationDisplay.id = 'locationDisplay';
    locationDisplay.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9));
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        padding: 15px 20px;
        border-radius: 25px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.3);
        font-size: 14px;
        color: #333;
        z-index: 1000;
        display: none;
        border: 2px solid rgba(102, 126, 234, 0.3);
        transition: all 0.3s ease;
        cursor: pointer;
    `;
    locationDisplay.onmouseover = () => {
        locationDisplay.style.transform = 'scale(1.05)';
        locationDisplay.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3), 0 0 0 2px rgba(102, 126, 234, 0.5)';
    };
    locationDisplay.onmouseout = () => {
        locationDisplay.style.transform = 'scale(1)';
        locationDisplay.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.3)';
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                currentLocation = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    accuracy: position.coords.accuracy
                };

                // Reverse geocode to get location name
                fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`)
                    .then(response => response.json())
                    .then(data => {
                        const locationName = data.city || data.locality || `${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}`;
                        locationDisplay.innerHTML = `
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <span style="color: #667eea; font-size: 16px;">📍</span>
                                <div>
                                    <div style="font-weight: bold; color: #333;">${locationName}</div>
                                    <div style="font-size: 12px; color: #666;">Accuracy: ${Math.round(position.coords.accuracy)}m</div>
                                </div>
                            </div>
                        `;
                        locationDisplay.style.display = 'block';

                        // Add location-based recommendations to chatbot
                        addLocationContext(locationName);
                    })
                    .catch(() => {
                        locationDisplay.innerHTML = `
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <span style="color: #667eea; font-size: 16px;">📍</span>
                                <div>
                                    <div style="font-weight: bold; color: #333;">${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}</div>
                                    <div style="font-size: 12px; color: #666;">Location tracked</div>
                                </div>
                            </div>
                        `;
                        locationDisplay.style.display = 'block';
                    });
            },
            function(error) {
                console.log('Location access denied or unavailable');
                locationDisplay.innerHTML = `
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="color: #ff6b6b; font-size: 16px;">📍</span>
                        <div>
                            <div style="font-weight: bold; color: #333;">Location unavailable</div>
                            <div style="font-size: 12px; color: #666;">Enable location for better recommendations</div>
                        </div>
                    </div>
                `;
                locationDisplay.style.display = 'block';
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 300000
            }
        );
    } else {
        locationDisplay.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
                <span style="color: #ff6b6b; font-size: 16px;">📍</span>
                <div>
                    <div style="font-weight: bold; color: #333;">Geolocation not supported</div>
                    <div style="font-size: 12px; color: #666;">Update your browser</div>
                </div>
            </div>
        `;
        locationDisplay.style.display = 'block';
    }
}

function addLocationContext(locationName) {
    // Add location context to chatbot responses
    const originalGetBotResponse = getBotResponse;
    getBotResponse = function(message) {
        const response = originalGetBotResponse(message);
        if (currentLocation && (message.toLowerCase().includes('near') || message.toLowerCase().includes('close') || message.toLowerCase().includes('nearby'))) {
            return response + `\n\n📍 Based on your location in ${locationName}, I can help you find places nearby!`;
        }
        return response;
    };
}

function sendQuickMessage(message) {
    if (!chatInput) return;
    chatInput.value = message;
    sendMessage();
}

function updateHeroImage() {
    const urlField = document.getElementById('customImageUrl');
    const hero = document.getElementById('detailHero');
    if (!urlField || !hero) return;

    const url = urlField.value.trim();
    if (!url) {
        urlField.style.borderColor = '#ff6b6b';
        return;
    }

    hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.18)), url('${url}'), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80')`;
    urlField.style.borderColor = 'rgba(102, 126, 234, 0.8)';
}
document.addEventListener("DOMContentLoaded", function () {

    const searchForm = document.getElementById("searchForm");

    if (searchForm) {
        searchForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const minBudget = document.getElementById("minBudget").value;
            const maxBudget = document.getElementById("maxBudget").value;
            const category = document.getElementById("category").value;

            fetch("http://127.0.0.1:5000/search", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    minBudget: Number(minBudget),
                    maxBudget: Number(maxBudget),
                    category: category
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log("Results:", data);
            });
        });
    }

});

