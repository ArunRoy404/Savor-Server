const foodItems = [
  {
    name: "Spaghetti Carbonara",
    image: "https://img.freepik.com/free-photo/italian-pasta-spaghetti-with-meatballs-parmesan-cheese-black-plate-dark-rustic-wood-background-dinner-slow-food-concept_2829-4639.jpg?semt=ais_hybrid&w=740",
    category: "Italian",
    description: "A classic Roman pasta dish made with egg yolks, pecorino cheese, pancetta, and black pepper.",
    servings: 4,
    rating: 4.6,
    nutritional: {
      caloriesPerServing: 650,
      macros: {
        protein: "25g",
        carbs: "70g",
        fats: "22g"
      },
      allergens: ["Dairy", "Eggs"],
      dietaryTags: ["Gluten", "Dairy"]
    },
    ingredients: [
      "400g spaghetti",
      "150g pancetta",
      "3 large egg yolks",
      "50g grated pecorino Romano",
      "Freshly ground black pepper"
    ],
    purchaseCount: 128,
    price: 14.99,
    quantity: 10,
    origin: "Italy",
    procedure: "Cook spaghetti in salted water. Sauté cubed pancetta until crispy. Whisk egg yolks with pecorino and pepper. Toss hot pasta into the pan with pancetta, then mix in egg sauce off heat.",
    ownerName: "Arun Roy",
    ownerEmail: "hello@world.com",
  },
  {
    name: "Vegan Buddha Bowl",
    image: "https://media.istockphoto.com/id/1416818056/photo/colourful-vegan-bowl-with-quinoa-and-sweet-potato.jpg?s=612x612&w=0&k=20&c=t1I58CqucV6bLRaa4iDy7PIVjnV8D9eWDjEsX9X-87k=",
    category: "Vegan",
    description: "A colorful bowl filled with roasted vegetables, quinoa, avocado, and tahini dressing.",
    servings: 2,
    rating: 4.8,
    nutritional: {
      caloriesPerServing: 400,
      macros: {
        protein: "15g",
        carbs: "45g",
        fats: "18g"
      },
      allergens: [],
      dietaryTags: ["Vegan", "Gluten-Free"]
    },
    ingredients: [
      "1 cup cooked quinoa",
      "1 roasted sweet potato",
      "1/2 avocado sliced",
      "Steamed kale",
      "Tahini dressing"
    ],
   
    purchaseCount: 203,
    price: 12.49,
    quantity: 5,
    origin: "USA",
    procedure: "Roast sweet potatoes with olive oil. Cook quinoa. Layer greens, quinoa, veggies, and avocado. Drizzle with homemade tahini dressing.",
    ownerName: "Arun Roy",
    ownerEmail: "hello@world.com",
  },
  {
    name: "Chicken Tikka Masala",
    image: "https://www.spicebangla.com/wp-content/uploads/2024/04/chicken-tikka-masala-900x506.jpg",
    category: "Indian",
    description: "Grilled chicken in a creamy tomato-based curry sauce served with rice or naan.",
    servings: 3,
    rating: 4.5,
    nutritional: {
      caloriesPerServing: 550,
      macros: {
        protein: "30g",
        carbs: "35g",
        fats: "25g"
      },
      allergens: ["Dairy"],
      dietaryTags: ["Non-Vegetarian"]
    },
    ingredients: [
      "500g chicken breast",
      "Yogurt marinade",
      "Onions, garlic, ginger",
      "Tomato puree",
      "Heavy cream"
    ],
    purchaseCount: 98,
    price: 16.99,
    quantity: 7,
    origin: "India",
    procedure: "Marinate chicken in yogurt and spices, grill until charred. Sauté onions, garlic, ginger, add tomato puree and simmer. Add chicken and cream, finish with garam masala.",
    ownerName: "Arun Roy",
    ownerEmail: "hello@world.com",
  },
  {
    name: "Mango Smoothie",
    image: "https://www.superhealthykids.com/wp-content/uploads/2019/12/Mango-Smoothie-Bowl-1-500x500.jpeg",
    category: "Beverage",
    description: "A refreshing smoothie made with fresh mango, banana, and coconut milk.",
    servings: 2,
    rating: 4.7,
    nutritional: {
      caloriesPerServing: 200,
      macros: {
        protein: "2g",
        carbs: "45g",
        fats: "3g"
      },
      allergens: [],
      dietaryTags: ["Vegan", "Gluten-Free"]
    },
    ingredients: [
      "2 ripe mangoes",
      "1 banana",
      "1 cup coconut milk",
      "Ice cubes",
      "Honey (optional)"
    ],
    purchaseCount: 145,
    price: 7.99,
    quantity: 9,
    origin: "Tropical regions",
    procedure: "Blend frozen mango chunks, banana, coconut milk, and ice until smooth. Sweeten with honey if needed.",
    ownerName: "Arun Roy",
    ownerEmail: "hello@world.com",
  },
  {
    name: "Pad Thai",
    image: "https://www.thespruceeats.com/thmb/7ZigBiPKOGoLCqZUAtKcq5xlJMQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chicken-pad-thai-3217194-Hero_01-098e8b1085c24a90a97a5a4fce7070f3.jpg",
    category: "Thai",
    description: "Stir-fried rice noodles with shrimp, bean sprouts, peanuts, and tamarind sauce.",
    servings: 2,
    rating: 4.4,
    nutritional: {
      caloriesPerServing: 450,
      macros: {
        protein: "20g",
        carbs: "60g",
        fats: "12g"
      },
      allergens: ["Shellfish", "Peanuts"],
      dietaryTags: ["Non-Vegetarian"]
    },
    ingredients: [
      "200g rice noodles",
      "150g shrimp",
      "Bean sprouts",
      "Tofu",
      "Tamarind sauce"
    ],
    purchaseCount: 112,
    price: 13.99,
    quantity: 16,
    origin: "Thailand",
    procedure: "Soak noodles in warm water. Stir-fry tofu, add beaten egg, then shrimp. Add noodles, bean sprouts, and tamarind sauce. Garnish with crushed peanuts and lime.",
    ownerName: "Arun Roy",
    ownerEmail: "hello@world.com",
  },
  {
    name: "Avocado Toast",
    image: "https://californiaavocado.com/wp-content/uploads/2020/07/California-Avocado-Toast-Three-Ways-768x532.jpeg",
    category: "Breakfast",
    description: "Toasted sourdough topped with smashed avocado, chili flakes, and a poached egg.",
    servings: 1,
    rating: 4.3,
    nutritional: {
      caloriesPerServing: 350,
      macros: {
        protein: "12g",
        carbs: "30g",
        fats: "18g"
      },
      allergens: ["Eggs"],
      dietaryTags: ["Vegetarian"]
    },
    ingredients: [
      "1 slice sourdough bread",
      "1 ripe avocado",
      "1 poached egg",
      "Chili flakes",
      "Lemon juice"
    ],
    purchaseCount: 89,
    price: 9.49,
    quantity: 3,
    origin: "USA",
    procedure: "Toast bread, mash avocado on top, add poached egg, sprinkle chili flakes, and drizzle lemon juice.",
    ownerName: "Arun Roy",
    ownerEmail: "hello@world.com",
  },
  {
    name: "Grilled Salmon Salad",
    image: "https://assets.sweat.com/html_body_blocks/images/000/005/931/original/Nicoise_Salad_with_Grilled_Salmon_1_enc94702a1dae88403112fcbb43f3629e7.jpg?1512951482",
    category: "Salad",
    description: "Fresh greens topped with grilled salmon, cherry tomatoes, and balsamic vinaigrette.",
    servings: 2,
    rating: 4.6,
    nutritional: {
      caloriesPerServing: 400,
      macros: {
        protein: "30g",
        carbs: "15g",
        fats: "20g"
      },
      allergens: ["Fish"],
      dietaryTags: ["Keto", "Paleo"]
    },
    ingredients: [
      "200g salmon fillet",
      "Mixed greens",
      "Cherry tomatoes",
      "Cucumber",
      "Balsamic dressing"
    ],
    purchaseCount: 107,
    price: 17.99,
    quantity: 21,
    origin: "France",
    procedure: "Grill salmon with seasoning. Toss greens with balsamic dressing. Top with salmon, tomatoes, and cucumber slices.",
    ownerName: "Arun Roy",
    ownerEmail: "hello@world.com",
  },
  {
    name: "Chocolate Avocado Mousse",
    image: "https://img.taste.com.au/KQLe5OBd/w720-h480-cfill-q80/taste/2016/11/dairy-free-avocado-chocolate-mousse-90600-1.jpeg",
    category: "Dessert",
    description: "A creamy, healthy dessert made with avocado, cocoa powder, and maple syrup.",
    servings: 4,
    rating: 4.5,
    nutritional: {
      caloriesPerServing: 250,
      macros: {
        protein: "4g",
        carbs: "20g",
        fats: "18g"
      },
      allergens: [],
      dietaryTags: ["Vegan", "Dairy-Free", "Gluten-Free"]
    },
    ingredients: [
      "2 ripe avocados",
      "1/4 cup cocoa powder",
      "1/4 cup maple syrup",
      "1 tsp vanilla extract",
      "Almond milk as needed"
    ],
    purchaseCount: 95,
    price: 8.99,
    quantity: 8,
    origin: "USA",
    procedure: "Blend avocado, cocoa, maple syrup, and vanilla until smooth. Chill before serving.",
    ownerName: "Arun Roy",
    ownerEmail: "hello@world.com",
  },
  {
    name: "Beef Tacos",
    image: "https://images.getrecipekit.com/20230306234647-crispybeeftaco_sq.jpg?aspect_ratio=16:9&quality=90&",
    category: "Mexican",
    description: "Soft corn tortillas filled with seasoned beef, onions, cilantro, and lime.",
    servings: 4,
    rating: 4.2,
    nutritional: {
      caloriesPerServing: 500,
      macros: {
        protein: "25g",
        carbs: "40g",
        fats: "20g"
      },
      allergens: [],
      dietaryTags: ["Non-Vegetarian"]
    },
    ingredients: [
      "500g ground beef",
      "Corn tortillas",
      "Onion",
      "Cilantro",
      "Lime wedges"
    ],
    purchaseCount: 134,
    price: 15.49,
    quantity: 6,
    origin: "Mexico",
    procedure: "Brown beef with onion and taco seasoning. Warm tortillas, fill with meat, add cilantro, and squeeze lime over top.",
    ownerName: "Arun Roy",
    ownerEmail: "hello@world.com",
  },
  {
    name: "Oatmeal with Berries",
    image: "https://thehealthytart.com/wp-content/uploads/2018/01/Porridge-with-Berries-and-Seeds_landscape.jpg",
    category: "Breakfast",
    description: "Warm oatmeal topped with mixed berries, honey, and a sprinkle of chia seeds.",
    servings: 1,
    rating: 4.5,
    nutritional: {
      caloriesPerServing: 300,
      macros: {
        protein: "8g",
        carbs: "50g",
        fats: "8g"
      },
      allergens: [],
      dietaryTags: ["Vegan", "Gluten-Free"]
    },
    ingredients: [
      "1/2 cup oats",
      "1 cup almond milk",
      "Mixed berries",
      "Honey",
      "Chia seeds"
    ],
    purchaseCount: 117,
    price: 6.99,
    quantity: 0,
    origin: "Scandinavia",
    procedure: "Simmer oats in almond milk until thickened. Top with fresh berries, drizzle honey, and sprinkle chia seeds.",
    ownerName: "Arun Roy",
    ownerEmail: "hello@world.com",
  },
  {
    name: "Sushi Rolls",
    image: "https://japanesetaste.com/cdn/shop/articles/how-to-make-makizushi-sushi-rolls-japanese-taste.jpg?v=1707913754&width=600",
    category: "Japanese",
    description: "Freshly made sushi rolls with sticky rice, seaweed, and a choice of fish or vegetables.",
    servings: 2,
    rating: 4.7,
    nutritional: {
      caloriesPerServing: 380,
      macros: {
        protein: "15g",
        carbs: "50g",
        fats: "10g"
      },
      allergens: ["Fish", "Shellfish"],
      dietaryTags: ["Non-Vegetarian", "Gluten-Free"]
    },
    ingredients: [
      "Sushi rice",
      "Nori sheets",
      "Fresh tuna or avocado",
      "Cucumber",
      "Soy sauce (optional)"
    ],
    purchaseCount: 92,
    price: 18.99,
    quantity: 14,
    origin: "Japan",
    procedure: "Prepare sushi rice and spread on nori. Add fillings like fish or veggies. Roll tightly and slice into pieces. Serve with soy sauce.",
    ownerName: "Arun Roy",
    ownerEmail: "hello@world.com",
  },
  {
    name: "Falafel Wrap",
    image: "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/falafel_wraps_59124_16x9.jpg",
    category: "Middle Eastern",
    description: "Crispy falafel wrapped in warm pita with fresh veggies and tahini sauce.",
    servings: 1,
    rating: 4.6,
    nutritional: {
      caloriesPerServing: 420,
      macros: {
        protein: "12g",
        carbs: "55g",
        fats: "14g"
      },
      allergens: [],
      dietaryTags: ["Vegan", "Vegetarian"]
    },
    ingredients: [
      "Chickpeas",
      "Onion",
      "Garlic",
      "Parsley",
      "Whole wheat pita"
    ],
    purchaseCount: 105,
    price: 8.49,
    quantity: 25,
    origin: "Middle East",
    procedure: "Blend chickpeas with herbs and spices. Form into balls and fry until golden. Stuff into pita with lettuce, tomatoes, and tahini sauce.",
    ownerName: "Arun Roy",
    ownerEmail: "hello@world.com",
  }
];

export { foodItems };