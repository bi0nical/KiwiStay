// ================================
// start of listings object array
// ================================

// initial variables
const searchBtn = document.querySelector('#runSearch');
let keyScript = '<script src="https://maps.googleapis.com/maps/api/js?key=' + mapKey +'&callback=initMap&libraries=places&v=weekly" async defer >';
// all listing information
let listings = [
    {
        id: 1,
        title: 'Snowhaven',
        type: 'House',
        area: 'Otago',
        img: ['./img/listing/id-1/snow-cabin-a.jpg', './img/listing/id-1/snow-cabin-b.jpg', './img/listing/id-1/snow-cabin-c.jpg'],
        areaImg: './img/area/otago.jpg',
        rating: 5,
        isSaved: false,
        amenities: ['Kitchen', 'Free Parking', 'Fireplace', 'Two Bathrooms'],
        extras: ['Lorem', 'Lorem Ipsum'],
        pricePerNight: 300,
        minGuests: 1,
        maxGuests: 4,
        minStay: 2,
        maxStay: 15,
        coordinates: [-45.06985051528506, 168.51447952836207], 
        tagline: 'A Winter Escape',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac est orci. Mauris eget condimentum diam. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia porttitor leo eget eleifend. Sed facilisis ornare lectus vitae fringilla. Nullam et lacinia sapien, ac aliquet arcu. Proin interdum, tortor in congue fermentum, velit nisi vulputate felis, vel faucibus lorem eros ut libero. Phasellus ullamcorper ipsum ut ultrices hendrerit. Vestibulum rhoncus placerat enim commodo dignissim. Maecenas vitae diam in elit tristique ultricies. Mauris aliquet vestibulum nunc nec molestie. Vivamus luctus vulputate neque, nec faucibus mauris consectetur eget. Suspendisse quam nisi, eleifend vel lacus id, sollicitudin venenatis sem",
        userReviews: ['Warm and cosy.', 'Lovely house.', 'Had a great time here!'],
        hostName: 'Brian and Janice',
        hostImg: './img/user/host-01.jpg',
        tags: ['snowhaven', 'snow'],
    },
    {
        id: 2,
        title: 'Beach at your doorstep',
        type: 'House',
        area: 'Tasman',
        img: ['./img/listing/id-2/beach-house-a.jpg', './img/listing/id-2/beach-house-b.jpg', './img/listing/id-2/beach-house-c.jpg'],
        areaImg: './img/area/tasman.jpg',
        rating: 5,
        isSaved: false,
        amenities: ['Kitchen', 'Free Parking', 'Fireplace','One bathroom'],
        extras: ['Lorem', 'Lorem Ipsum'],
        pricePerNight: 245,
        minGuests: 1,
        maxGuests: 4,
        minStay: 2,
        maxStay: 15,
        coordinates: [-40.82357863216771, 172.9059519826615],
        tagline: 'A True Tasman Bay Bach',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac est orci. Mauris eget condimentum diam. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia porttitor leo eget eleifend. Sed facilisis ornare lectus vitae fringilla. Nullam et lacinia sapien, ac aliquet arcu. Proin interdum, tortor in congue fermentum, velit nisi vulputate felis, vel faucibus lorem eros ut libero. Phasellus ullamcorper ipsum ut ultrices hendrerit. Vestibulum rhoncus placerat enim commodo dignissim. Maecenas vitae diam in elit tristique ultricies. Mauris aliquet vestibulum nunc nec molestie. Vivamus luctus vulputate neque, nec faucibus mauris consectetur eget. Suspendisse quam nisi, eleifend vel lacus id, sollicitudin venenatis sem",
        userReviews: ['Really great location!', 'Cool location.', 'Had an awesome time staying here!'],
        hostName: 'Stephen Lloyd',
        hostImg: './img/user/host-06.jpg',
        tags: ['beach', 'sun'],
    },
    {
        id: 3,
        title: 'Heart of the city',
        type: 'Hotel',
        area: 'Auckland',
        img: ['./img/listing/id-3/sky-tower-a.jpg', './img/listing/id-3/sky-tower-b.jpg', './img/listing/id-3/sky-tower-c.jpg'],
        areaImg: './img/area/auckland.jpg',
        rating: 4,
        isSaved: false,
        amenities: ['Kitchenette', 'Covered Parking', 'Bath', 'Room Service'],
        extras: ['Lorem', 'Lorem Ipsum'],
        pricePerNight: 195,
        minGuests: 1,
        maxGuests: 2,
        minStay: 1,
        maxStay: 5,
        coordinates: [-36.852855974993965, 174.76206022616685],
        tagline: 'The Auckland Skytower',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac est orci. Mauris eget condimentum diam. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia porttitor leo eget eleifend. Sed facilisis ornare lectus vitae fringilla. Nullam et lacinia sapien, ac aliquet arcu. Proin interdum, tortor in congue fermentum, velit nisi vulputate felis, vel faucibus lorem eros ut libero. Phasellus ullamcorper ipsum ut ultrices hendrerit. Vestibulum rhoncus placerat enim commodo dignissim. Maecenas vitae diam in elit tristique ultricies. Mauris aliquet vestibulum nunc nec molestie. Vivamus luctus vulputate neque, nec faucibus mauris consectetur eget. Suspendisse quam nisi, eleifend vel lacus id, sollicitudin venenatis sem",
        userReviews: ['Exceptional quality.', 'Really great Service', 'Some really awesome views to be had.'],
        hostName: 'Paul Brown',
        hostImg: './img/user/host-13.jpg',
        tags: ['city', 'modern'],
    },
    {
        id: 4,
        title: 'Mount views',
        type: 'Motel',
        area: 'Taranaki',
        img: ['./img/listing/id-4/taranaki-motel-a.jpg', './img/listing/id-4/taranaki-motel-b.jpg', './img/listing/id-4/taranaki-motel-c.jpg'],
        areaImg: './img/area/taranaki.jpg',
        rating: 3,
        isSaved: false,
        amenities: ['Kitchen', 'Free parking', 'Free Internet', 'One bathroom'],
        extras: ['Lorem', 'Lorem Ipsum'],
        pricePerNight: 105,
        minGuests: 2,
        maxGuests: 4,
        minStay: 3,
        maxStay: 10,
        coordinates: [-39.18785287343143, 174.12677166151101],
        tagline: 'Lorem Ipsum',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac est orci. Mauris eget condimentum diam. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia porttitor leo eget eleifend. Sed facilisis ornare lectus vitae fringilla. Nullam et lacinia sapien, ac aliquet arcu. Proin interdum, tortor in congue fermentum, velit nisi vulputate felis, vel faucibus lorem eros ut libero. Phasellus ullamcorper ipsum ut ultrices hendrerit. Vestibulum rhoncus placerat enim commodo dignissim. Maecenas vitae diam in elit tristique ultricies. Mauris aliquet vestibulum nunc nec molestie. Vivamus luctus vulputate neque, nec faucibus mauris consectetur eget. Suspendisse quam nisi, eleifend vel lacus id, sollicitudin venenatis sem",
        userReviews: ['Really peaceful. Enjoyed our stay.', 'Would visit again.', 'The host was very friendly.'],
        hostName: 'Katherine Baker',
        hostImg: './img/user/host-11.jpg',
        tags: ['mountain', 'views'],
    },
    {
        id: 5,
        title: 'Beach bungalow',
        type: 'House',
        area: 'Bay of plenty',
        img: ['./img/listing/id-5/beach-bunglow-a.jpg', './img/listing/id-5/beach-bunglow-b.jpg', './img/listing/id-5/beach-bunglow-c.jpg'],
        areaImg: './img/area/bayofplenty.jpg',
        rating: 4,
        isSaved: false,
        amenities: ['Kitchen', 'Free parking', 'Heating', 'Two bathrooms'],
        extras: ['Lorem', 'Lorem Ipsum'],
        pricePerNight: 255,
        minGuests: 1,
        maxGuests: 4,
        minStay: 1,
        maxStay: 15,
        coordinates: [-37.45942198276235, 175.98242903448383],
        tagline: 'Lorem Ipsum',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac est orci. Mauris eget condimentum diam. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia porttitor leo eget eleifend. Sed facilisis ornare lectus vitae fringilla. Nullam et lacinia sapien, ac aliquet arcu. Proin interdum, tortor in congue fermentum, velit nisi vulputate felis, vel faucibus lorem eros ut libero. Phasellus ullamcorper ipsum ut ultrices hendrerit. Vestibulum rhoncus placerat enim commodo dignissim. Maecenas vitae diam in elit tristique ultricies. Mauris aliquet vestibulum nunc nec molestie. Vivamus luctus vulputate neque, nec faucibus mauris consectetur eget. Suspendisse quam nisi, eleifend vel lacus id, sollicitudin venenatis sem",
        userReviews: ['A beautiful place to be for sunrise!', 'Perfect for our family holiday.', 'Really good neighborhood.'],
        hostName: 'Onkar and Samesh',
        hostImg: './img/user/host-14.jpg',
        tags: ['beach', 'family'],
    },
    {
        id: 6,
        title: 'On the rocks',
        type: 'Motel',
        area: 'West coast',
        img: ['./img/listing/id-6/coast-house-a.jpg', './img/listing/id-6/coast-house-b.jpg', './img/listing/id-6/coast-house-c.jpg'],
        areaImg: './img/area/westcoast.jpg',
        rating: 4,
        isSaved: false,
        amenities: ['Kitchen', 'Free Parking', 'Fireplace', 'One Bathroom'],
        extras: ['Lorem', 'Lorem Ipsum'],
        pricePerNight: 110,
        minGuests: 2,
        maxGuests: 4,
        minStay: 3,
        maxStay: 10,
        coordinates: [-42.110215297613955, 171.33438252749275],
        tagline: 'Lorem Ipsum',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac est orci. Mauris eget condimentum diam. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia porttitor leo eget eleifend. Sed facilisis ornare lectus vitae fringilla. Nullam et lacinia sapien, ac aliquet arcu. Proin interdum, tortor in congue fermentum, velit nisi vulputate felis, vel faucibus lorem eros ut libero. Phasellus ullamcorper ipsum ut ultrices hendrerit. Vestibulum rhoncus placerat enim commodo dignissim. Maecenas vitae diam in elit tristique ultricies. Mauris aliquet vestibulum nunc nec molestie. Vivamus luctus vulputate neque, nec faucibus mauris consectetur eget. Suspendisse quam nisi, eleifend vel lacus id, sollicitudin venenatis sem",
        userReviews: ['Warm and cosy.', 'Close to some really cool spots along the coast.', 'Clean and comfy!'],
        hostName: 'Walter Mann',
        hostImg: './img/user/host-19.jpg',
        tags: ['rocks', 'coast'],
    },
    {
        id: 7,
        title: 'Bargain backpackers',
        type: 'Hostel',
        area: 'Canterbury',
        img: ['./img/listing/id-7/chch-hostel-a.jpg', './img/listing/id-7/chch-hostel-b.jpg', './img/listing/id-7/chch-hostel-c.jpg'],
        areaImg: './img/area/canterbury.jpg',
        rating: 2,
        isSaved: false,
        amenities: ['Shared Kitchen', 'Parking Available', 'Weekly Events', 'Shared Bathrooms'],
        extras: ['Lorem', 'Lorem Ipsum'],
        pricePerNight: 30,
        minGuests: 1,
        maxGuests: 1,
        minStay: 1,
        maxStay: 10,
        coordinates: [-43.53185275589354, 172.63015537157355],
        tagline: 'Lorem Ipsum',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac est orci. Mauris eget condimentum diam. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia porttitor leo eget eleifend. Sed facilisis ornare lectus vitae fringilla. Nullam et lacinia sapien, ac aliquet arcu. Proin interdum, tortor in congue fermentum, velit nisi vulputate felis, vel faucibus lorem eros ut libero. Phasellus ullamcorper ipsum ut ultrices hendrerit. Vestibulum rhoncus placerat enim commodo dignissim. Maecenas vitae diam in elit tristique ultricies. Mauris aliquet vestibulum nunc nec molestie. Vivamus luctus vulputate neque, nec faucibus mauris consectetur eget. Suspendisse quam nisi, eleifend vel lacus id, sollicitudin venenatis sem",
        userReviews: ['Made some great friends here.', 'You get what you pay for, staff were quite helpful.', 'Too noisy for me, perfect for backpackers.'],
        hostName: 'Arlo Barnes',
        hostImg: './img/user/host-07.jpg',
        tags: ['city', 'cheap'],
    },
    {
        id: 8,
        title: 'Endless coastline',
        type: 'House',
        area: 'Northland',
        img: ['./img/listing/id-8/northland-house-a.jpg', './img/listing/id-8/northland-house-b.jpg', './img/listing/id-8/northland-house-c.jpg'],
        areaImg: './img/area/northland.jpg',
        rating: 4,
        isSaved: false,
        amenities: ['Kitchen', 'Free Parking', 'Heat Pump', 'Two Bathrooms'],
        extras: ['Lorem', 'Lorem Ipsum'],
        pricePerNight: 240,
        minGuests: 1,
        maxGuests: 4,
        minStay: 1,
        maxStay: 15,
        coordinates: [-35.159201853657706, 173.15693981882583],
        tagline: 'Lorem Ipsum',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac est orci. Mauris eget condimentum diam. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia porttitor leo eget eleifend. Sed facilisis ornare lectus vitae fringilla. Nullam et lacinia sapien, ac aliquet arcu. Proin interdum, tortor in congue fermentum, velit nisi vulputate felis, vel faucibus lorem eros ut libero. Phasellus ullamcorper ipsum ut ultrices hendrerit. Vestibulum rhoncus placerat enim commodo dignissim. Maecenas vitae diam in elit tristique ultricies. Mauris aliquet vestibulum nunc nec molestie. Vivamus luctus vulputate neque, nec faucibus mauris consectetur eget. Suspendisse quam nisi, eleifend vel lacus id, sollicitudin venenatis sem",
        userReviews: ['Small but cosy.', 'Tucked away in a forest near the beach. Excellent stay.', 'The host was very friendly.'],
        hostName: 'Janet & Roxy',
        hostImg: './img/user/host-04.jpg',
        tags: ['north', 'coast'],
    },
    {
        id: 9,
        title: "Fisherman's retreat",
        type: 'House',
        area: 'Southland',
        img: ['./img/listing/id-9/southland-house-a.jpg', './img/listing/id-9/southland-house-b.jpg', './img/listing/id-9/southland-house-c.jpg'],
        areaImg: './img/area/southland.jpg',
        rating: 4,
        isSaved: false,
        amenities: ['Kitchen', 'Free Boat Docking', 'Fireplace', 'One Bathroom'],
        extras: ['Lorem', 'Lorem Ipsum'],
        pricePerNight: 275,
        minGuests: 1,
        maxGuests: 4,
        minStay: 1,
        maxStay: 15,
        coordinates: [-46.61202220285918, 168.3575244518477],
        tagline: 'Lorem Ipsum',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac est orci. Mauris eget condimentum diam. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia porttitor leo eget eleifend. Sed facilisis ornare lectus vitae fringilla. Nullam et lacinia sapien, ac aliquet arcu. Proin interdum, tortor in congue fermentum, velit nisi vulputate felis, vel faucibus lorem eros ut libero. Phasellus ullamcorper ipsum ut ultrices hendrerit. Vestibulum rhoncus placerat enim commodo dignissim. Maecenas vitae diam in elit tristique ultricies. Mauris aliquet vestibulum nunc nec molestie. Vivamus luctus vulputate neque, nec faucibus mauris consectetur eget. Suspendisse quam nisi, eleifend vel lacus id, sollicitudin venenatis sem",
        userReviews: ['Perfect spot for some fishing. Suits the name.', 'A good place to unwind.', 'Perfect for a family get-together.'],
        hostName: 'Tui Henare',
        hostImg: './img/user/host-09.jpg',
        tags: ['fishing', 'south'],
    },
    {
        id: 10,
        title: 'Beach bunks',
        type: 'Hostel',
        area: "Hawke's bay",
        img: ['./img/listing/id-10/hawkesbay-hostel-a.jpg', './img/listing/id-10/hawkesbay-hostel-b.jpg', './img/listing/id-10/hawkesbay-hostel-c.jpg'],
        areaImg: './img/area/hawkesbay.jpg',
        rating: 4,
        isSaved: false,
        amenities: ['Shared Kitchen', 'Parking Available', 'Private Room', 'Shared Bathrooms'],
        extras: ['Lorem', 'Lorem Ipsum'],
        pricePerNight: 42,
        minGuests: 1,
        maxGuests: 1,
        minStay: 1,
        maxStay: 15,
        coordinates: [-39.498548433230134, 176.91844490405103],
        tagline: 'Lorem Ipsum',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac est orci. Mauris eget condimentum diam. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia porttitor leo eget eleifend. Sed facilisis ornare lectus vitae fringilla. Nullam et lacinia sapien, ac aliquet arcu. Proin interdum, tortor in congue fermentum, velit nisi vulputate felis, vel faucibus lorem eros ut libero. Phasellus ullamcorper ipsum ut ultrices hendrerit. Vestibulum rhoncus placerat enim commodo dignissim. Maecenas vitae diam in elit tristique ultricies. Mauris aliquet vestibulum nunc nec molestie. Vivamus luctus vulputate neque, nec faucibus mauris consectetur eget. Suspendisse quam nisi, eleifend vel lacus id, sollicitudin venenatis sem",
        userReviews: ['Really good value.', 'A cool building!', 'Can get noisy, but I had a lot of fun here.'],
        hostName: 'Flo Nelson',
        hostImg: './img/user/host-10.jpg',
        tags: ['bunks', 'beach'],
    },
    {
        id: 11,
        title: 'Mountain views',
        type: 'Motel',
        area: 'Otago',
        img: ['./img/listing/id-11/otago-motel-a.jpg', './img/listing/id-11/otago-motel-b.jpg', './img/listing/id-11/otago-motel-c.jpg'],
        areaImg: './img/area/otago.jpg',
        rating: 5,
        isSaved: false,
        amenities: ['Kitchen', 'Free Parking', 'Heat Pump', 'Spa Pool'],
        extras: ['Lorem', 'Lorem Ipsum'],
        pricePerNight: 120,
        minGuests: 2,
        maxGuests: 4,
        minStay: 3,
        maxStay: 10,
        coordinates: [-45.26302105773877, 169.3803549627452],
        tagline: 'Lorem Ipsum',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac est orci. Mauris eget condimentum diam. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia porttitor leo eget eleifend. Sed facilisis ornare lectus vitae fringilla. Nullam et lacinia sapien, ac aliquet arcu. Proin interdum, tortor in congue fermentum, velit nisi vulputate felis, vel faucibus lorem eros ut libero. Phasellus ullamcorper ipsum ut ultrices hendrerit. Vestibulum rhoncus placerat enim commodo dignissim. Maecenas vitae diam in elit tristique ultricies. Mauris aliquet vestibulum nunc nec molestie. Vivamus luctus vulputate neque, nec faucibus mauris consectetur eget. Suspendisse quam nisi, eleifend vel lacus id, sollicitudin venenatis sem",
        userReviews: ['The most relaxing stay I have ever had.', 'Nice and quiet', 'Celebrated my 20th anniversary here with my spouse. Highly reccommended.'],
        hostName: 'Mia & Daniel',
        hostImg: './img/user/host-05.jpg',
        tags: ['mountain', 'alpine'],
    },
    {
        id: 12,
        title: 'The Dune',
        type: 'Hotel',
        area: 'Tasman',
        img: ['./img/listing/id-12/tasman-hotel-a.jpg', './img/listing/id-12/tasman-hotel-b.jpg', './img/listing/id-12/tasman-hotel-c.jpg'],
        areaImg: './img/area/tasman.jpg',
        rating: 4,
        isSaved: false,
        amenities: ['Kitchenette', 'Free Parking', 'Free Internet', 'Bath'],
        extras: ['Lorem', 'Lorem Ipsum'],
        pricePerNight: 165,
        minGuests: 1,
        maxGuests: 2,
        minStay: 1,
        maxStay: 5,
        coordinates: [-41.28030489998553, 173.25053812762008],
        tagline: 'Lorem Ipsum',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac est orci. Mauris eget condimentum diam. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia porttitor leo eget eleifend. Sed facilisis ornare lectus vitae fringilla. Nullam et lacinia sapien, ac aliquet arcu. Proin interdum, tortor in congue fermentum, velit nisi vulputate felis, vel faucibus lorem eros ut libero. Phasellus ullamcorper ipsum ut ultrices hendrerit. Vestibulum rhoncus placerat enim commodo dignissim. Maecenas vitae diam in elit tristique ultricies. Mauris aliquet vestibulum nunc nec molestie. Vivamus luctus vulputate neque, nec faucibus mauris consectetur eget. Suspendisse quam nisi, eleifend vel lacus id, sollicitudin venenatis sem",
        userReviews: ['Clean and tidy.', 'Good service to be had here.', 'Plenty of afternoon sun, I had a good experience.'],
        hostName: 'Micha Shields',
        hostImg: './img/user/host-02.jpg',
        tags: ['beach', 'modern'],
    },
    {
        id: 13,
        title: 'The Grand Deluxe',
        type: 'Hotel',
        area: 'Auckland',
        img: ['./img/listing/id-13/auckland-hotel-a.jpg', './img/listing/id-13/auckland-hotel-b.jpg', './img/listing/id-13/auckland-hotel-c.jpg'],
        areaImg: './img/area/auckland.jpg',
        rating: 5,
        isSaved: false,
        amenities: ['Room Service', 'Secure Parking', 'Indoor Pool', 'Spa Bath'],
        extras: ['Lorem', 'Lorem Ipsum'],
        pricePerNight: 210,
        minGuests: 1,
        maxGuests: 2,
        minStay: 1,
        maxStay: 5,
        coordinates: [-36.84666078307892, 174.76832121815127],
        tagline: 'Lorem Ipsum',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac est orci. Mauris eget condimentum diam. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia porttitor leo eget eleifend. Sed facilisis ornare lectus vitae fringilla. Nullam et lacinia sapien, ac aliquet arcu. Proin interdum, tortor in congue fermentum, velit nisi vulputate felis, vel faucibus lorem eros ut libero. Phasellus ullamcorper ipsum ut ultrices hendrerit. Vestibulum rhoncus placerat enim commodo dignissim. Maecenas vitae diam in elit tristique ultricies. Mauris aliquet vestibulum nunc nec molestie. Vivamus luctus vulputate neque, nec faucibus mauris consectetur eget. Suspendisse quam nisi, eleifend vel lacus id, sollicitudin venenatis sem",
        userReviews: ['The restuarant here is incredible.', 'Very tidy and modern.', 'Excellent quality.'],
        hostName: 'Henry Athfield',
        hostImg: './img/user/host-15.jpg',
        tags: ['modern', 'luxury'],
    },
    {
        id: 14,
        title: 'Heart of the coast',
        type: 'Motel',
        area: 'Bay of plenty',
        img: ['./img/listing/id-14/bayofplenty-motel-a.jpg', './img/listing/id-14/bayofplenty-motel-b.jpg', './img/listing/id-14/bayofplenty-motel-c.jpg'],
        areaImg: './img/area/bayofplenty.jpg',
        rating: 3,
        isSaved: false,
        amenities: ['Kitchen', 'Free Parking', 'Kids Playground', 'One Bathroom'],
        extras: ['Lorem', 'Lorem Ipsum'],
        pricePerNight: 95,
        minGuests: 2,
        maxGuests: 4,
        minStay: 3,
        maxStay: 10,
        coordinates: [-37.68412491488541, 176.25419455954452],
        tagline: 'Lorem Ipsum',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac est orci. Mauris eget condimentum diam. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia porttitor leo eget eleifend. Sed facilisis ornare lectus vitae fringilla. Nullam et lacinia sapien, ac aliquet arcu. Proin interdum, tortor in congue fermentum, velit nisi vulputate felis, vel faucibus lorem eros ut libero. Phasellus ullamcorper ipsum ut ultrices hendrerit. Vestibulum rhoncus placerat enim commodo dignissim. Maecenas vitae diam in elit tristique ultricies. Mauris aliquet vestibulum nunc nec molestie. Vivamus luctus vulputate neque, nec faucibus mauris consectetur eget. Suspendisse quam nisi, eleifend vel lacus id, sollicitudin venenatis sem",
        userReviews: ['A good spot for vacations.', 'This place is literally above the water, really enjoyed my stay.', 'The breakfast was a highlight for me.'],
        hostName: 'Sage Vernon',
        hostImg: './img/user/host-12.jpg',
        tags: ['coast', 'east'],
    },
    {
        id: 15,
        title: 'City Culture',
        type: 'Hotel',
        area: 'Canterbury',
        img: ['./img/listing/id-15/christchurch-hotel-a.jpg', './img/listing/id-15/christchurch-hotel-b.jpg', './img/listing/id-15/christchurch-hotel-c.jpg'],
        areaImg: './img/area/canterbury.jpg',
        rating: 5,
        isSaved: false,
        amenities: ['Kitchenette', 'Free Parking', 'Spa Bath', 'Mini Bar'],
        extras: ['Lorem', 'Lorem Ipsum'],
        pricePerNight: 160,
        minGuests: 1,
        maxGuests: 2,
        minStay: 1,
        maxStay: 5,
        coordinates: [-43.5304750412552, 172.6437715599021],
        tagline: 'Lorem Ipsum',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac est orci. Mauris eget condimentum diam. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia porttitor leo eget eleifend. Sed facilisis ornare lectus vitae fringilla. Nullam et lacinia sapien, ac aliquet arcu. Proin interdum, tortor in congue fermentum, velit nisi vulputate felis, vel faucibus lorem eros ut libero. Phasellus ullamcorper ipsum ut ultrices hendrerit. Vestibulum rhoncus placerat enim commodo dignissim. Maecenas vitae diam in elit tristique ultricies. Mauris aliquet vestibulum nunc nec molestie. Vivamus luctus vulputate neque, nec faucibus mauris consectetur eget. Suspendisse quam nisi, eleifend vel lacus id, sollicitudin venenatis sem",
        userReviews: ['Right in the centre of the city where exciting things are happening.', 'A comfortable modern building.', 'The dining here is incredible.'],
        hostName: 'Yareen Vina',
        hostImg: './img/user/host-16.jpg',
        tags: ['city', 'modern'],
    },
    {
        id: 16,
        title: "Traveller's respite",
        type: 'Hostel',
        area: 'Northland',
        img: ['./img/listing/id-16/northland-hostel-a.jpg', './img/listing/id-16/northland-hostel-b.jpg', './img/listing/id-16/northland-hostel-c.jpg'],
        areaImg: './img/area/northland.jpg',
        rating: 5,
        isSaved: false,
        amenities: ['Shared Kitchen', 'Parking Available', 'Shared Bathroom', 'Outdoor Activities'],
        extras: ['Lorem', 'Lorem Ipsum'],
        pricePerNight: 70,
        minGuests: 1,
        maxGuests: 1,
        minStay: 1,
        maxStay: 10,
        coordinates: [-34.62920889540735, 172.97098452977485],
        tagline: 'Unique A-Frame Home',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac est orci. Mauris eget condimentum diam. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia porttitor leo eget eleifend. Sed facilisis ornare lectus vitae fringilla. Nullam et lacinia sapien, ac aliquet arcu. Proin interdum, tortor in congue fermentum, velit nisi vulputate felis, vel faucibus lorem eros ut libero. Phasellus ullamcorper ipsum ut ultrices hendrerit. Vestibulum rhoncus placerat enim commodo dignissim. Maecenas vitae diam in elit tristique ultricies. Mauris aliquet vestibulum nunc nec molestie. Vivamus luctus vulputate neque, nec faucibus mauris consectetur eget. Suspendisse quam nisi, eleifend vel lacus id, sollicitudin venenatis sem",
        userReviews: ['A gem of a find, a must-stay.', "The world's tiniest hostel! I met some lovely backpackers here.", 'Logan & Paula are great hosts.'],
        hostName: 'Logan & Paula',
        hostImg: './img/user/host-17.jpg',
        tags: ['unique', 'north'],
    },
    {
        id: 17,
        title: 'Snowcapped Palace',
        type: 'Hotel',
        area: 'Otago',
        img: ['./img/listing/id-17/otago-hotel-a.jpg', './img/listing/id-17/otago-hotel-b.jpg', './img/listing/id-17/otago-hotel-c.jpg'],
        areaImg: './img/area/otago.jpg',
        rating: 4,
        isSaved: false,
        amenities: ['Room Serivce', 'Mini Bar', 'Spa Bath', 'Secure Parking'],
        extras: ['Lorem', 'Lorem Ipsum'],
        pricePerNight: 235,
        minGuests: 1,
        maxGuests: 2,
        minStay: 1,
        maxStay: 5,
        coordinates: [-44.68223993375406, 169.14622683129562],
        tagline: 'Lorem Ipsum',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac est orci. Mauris eget condimentum diam. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia porttitor leo eget eleifend. Sed facilisis ornare lectus vitae fringilla. Nullam et lacinia sapien, ac aliquet arcu. Proin interdum, tortor in congue fermentum, velit nisi vulputate felis, vel faucibus lorem eros ut libero. Phasellus ullamcorper ipsum ut ultrices hendrerit. Vestibulum rhoncus placerat enim commodo dignissim. Maecenas vitae diam in elit tristique ultricies. Mauris aliquet vestibulum nunc nec molestie. Vivamus luctus vulputate neque, nec faucibus mauris consectetur eget. Suspendisse quam nisi, eleifend vel lacus id, sollicitudin venenatis sem",
        userReviews: ['Luxury at its finest.', 'Quite ideal for a family as well as couples.', 'We had a very relaxing and warm stay here.'],
        hostName: 'Jason Kegg',
        hostImg: './img/user/host-18.jpg',
        tags: ['snow', 'alpine'],
    },
    {
        id: 19,
        title: 'Golden Lodge',
        type: 'Hostel',
        area: 'Tasman',
        img: ['./img/listing/id-18/tasman-hostel-a.jpg', './img/listing/id-18/tasman-hostel-b.jpg', './img/listing/id-18/tasman-hostel-c.jpg'],
        areaImg: './img/area/tasman.jpg',
        rating: 4,
        isSaved: false,
        amenities: ['Shared Kitchen', 'Free Parking', 'Free Internet', 'Shared Bathrooms'],
        extras: ['Lorem', 'Lorem Ipsum'],
        pricePerNight: 40,
        minGuests: 1,
        maxGuests: 1,
        minStay: 1,
        maxStay: 10,
        coordinates: [-41.01738116693717, 172.9803182134436],
        tagline: 'Lorem Ipsum',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac est orci. Mauris eget condimentum diam. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia porttitor leo eget eleifend. Sed facilisis ornare lectus vitae fringilla. Nullam et lacinia sapien, ac aliquet arcu. Proin interdum, tortor in congue fermentum, velit nisi vulputate felis, vel faucibus lorem eros ut libero. Phasellus ullamcorper ipsum ut ultrices hendrerit. Vestibulum rhoncus placerat enim commodo dignissim. Maecenas vitae diam in elit tristique ultricies. Mauris aliquet vestibulum nunc nec molestie. Vivamus luctus vulputate neque, nec faucibus mauris consectetur eget. Suspendisse quam nisi, eleifend vel lacus id, sollicitudin venenatis sem",
        userReviews: ['Met some interesting people here. I mostly enjoyed my stay.', 'A good location for those driving about the area.', 'Good for people of all ages, our family really enjoyed the experience!'],
        hostName: 'Elaine Hu',
        hostImg: './img/user/host-03.jpg',
        tags: ['sunny', 'friendly'],
    },
    {
        id: 20,
        title: 'Ski & Sleep',
        type: 'Hostel',
        area: 'Otago',
        img: ['./img/listing/id-19/otago-hostel-a.jpg', './img/listing/id-19/otago-hostel-b.jpg', './img/listing/id-19/otago-hostel-c.jpg'],
        areaImg: './img/area/otago.jpg',
        rating: 5,
        isSaved: false,
        amenities: ['Shared Kitchen', 'Parking Available', 'Ski Hire', 'Free Internet'],
        extras: ['Lorem', 'Lorem Ipsum'],
        pricePerNight: 55,
        minGuests: 1,
        maxGuests: 1,
        minStay: 1,
        maxStay: 10,
        coordinates: [-45.03178568653332, 168.65897886816248],
        tagline: 'Lorem Ipsum',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac est orci. Mauris eget condimentum diam. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia porttitor leo eget eleifend. Sed facilisis ornare lectus vitae fringilla. Nullam et lacinia sapien, ac aliquet arcu. Proin interdum, tortor in congue fermentum, velit nisi vulputate felis, vel faucibus lorem eros ut libero. Phasellus ullamcorper ipsum ut ultrices hendrerit. Vestibulum rhoncus placerat enim commodo dignissim. Maecenas vitae diam in elit tristique ultricies. Mauris aliquet vestibulum nunc nec molestie. Vivamus luctus vulputate neque, nec faucibus mauris consectetur eget. Suspendisse quam nisi, eleifend vel lacus id, sollicitudin venenatis sem",
        userReviews: ['The perfect place to meet other skiers.', 'Worth the price for the quality of facilaties.', "I'd stay again, for sure."],
        hostName: 'Tau Fuimaono',
        hostImg: './img/user/host-08.jpg',
        tags: ['ski', 'snow'],
    }
];
// ================================
// end of listings object array
// ================================

// ================================
// start of filter pop-ups
// ================================

$('#typeBtn').click(function(event){
    event.preventDefault();
    $('#typePicker').toggleClass('flex');
    $('#typeBtn').toggleClass('active-btn');
    // remove other classes
    $('#pricePicker').removeClass('flex');
    $('#priceBtn').removeClass('active-btn');
    $('#ratingPicker').removeClass('flex');
    $('#ratingBtn').removeClass('active-btn');
});

$('#priceBtn').click(function(event){
    event.preventDefault();
    $('#pricePicker').toggleClass('flex');
    $('#priceBtn').toggleClass('active-btn');
    // remove other classes
    $('#typePicker').removeClass('flex');
    $('#typeBtn').removeClass('active-btn');
    $('#ratingPicker').removeClass('flex');
    $('#ratingBtn').removeClass('active-btn');
});

$('#ratingBtn').click(function(event){
    event.preventDefault();
    $('#ratingPicker').toggleClass('flex');
    $('#ratingBtn').toggleClass('active-btn');
    // remove other classes
    $('#typePicker').removeClass('flex');
    $('#typeBtn').removeClass('active-btn');
    $('#pricePicker').removeClass('flex');
    $('#priceBtn').removeClass('active-btn');
});

// ================================
// end of filter pop-ups
// ================================

// ================================
// start of google maps API setup
// ================================

function initMap(){
    const map = new google.maps.Map(document.getElementById('map'),{
        zoom: 6,
        center: {lat:-40.9006,lng:165.8860},
        disableDefaultUI: true,
    });

    for(let i = 0; i < listings.length; i++){

        const contentString = `<div class="content" id="${listings[i].id}">` +
        '<div id="siteNotice">' +
        '</div>' +
        `<h1 id="firstHeading" class="firstHeading">${listings[i].title}</h1>` +
        '<div class="content__body">' +
        `<p>${listings[i].type}</p>` +
        `<p>$${listings[i].pricePerNight} per night</p>` +
        `<img class="content__img" src="${listings[i].img[0]}">` +
        '</div>' +
        '</div>';
    
    
        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });

        let listingLng = listings[i].coordinates[1];
        let listingLat = listings[i].coordinates[0];
        let listingCoordinates = { lat: listingLat, lng: listingLng };
        let marker = new google.maps.Marker({
            position: listingCoordinates,
            icon: './img/svg/bed.png',
            map,
            title: `$${listings[i].pricePerNight} p/n`,
        });
        marker.addListener('mouseover', () => {
            infowindow.open({
              anchor: marker,
              map,
              shouldFocus: false,
            });
        });
        marker.addListener('mouseover', () => {
            infowindow.setOptions({
                disableAutoPan: true,
            });
        });
        marker.addListener('mouseout', () => {
            infowindow.close();
        });
          
    }
    
}

function tallySearchHits(){
    console.log('running hits counter');
    let hits = $('.listings-container > div').length;
    console.log(hits);
    $('#hits').html(hits);
}

// ================================
// end of google maps API setup
// ================================


// ================================
// start of date picker setup
// ================================

$(document).ready(function(){

    $('body').append(keyScript);

    $('#startDate').datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        changeYear: true,
        minDate: new Date(),
        maxDate: '+1y',

        onSelect: function(date){
            let selectDate = new Date(date);
            let msecInADay = 86400000;

            let stDate = new Date(selectDate.getTime() + msecInADay);
            $('#endDate').datepicker('option', 'minDate', stDate);

            let enDate = new Date(selectDate.getTime() + 14 * msecInADay);
            $('#endDate').datepicker('option', 'maxDate', enDate);
        }
    });
    
    $('#endDate').datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        changeYear: true,
    });

    function dateDiff(){
        let start = $('#startDate').datepicker('getDate');
        let end = $('#endDate').datepicker('getDate');
        let days = (end - start)/100/60/60/24/10;
        // console.log('datediff ' + days);
        return days;
    }

    // ================================
    // end of date picker setup
    // ================================

    // ================================
    // range sliders
    // ================================
    $( function() {
        $( '#setRatingRange' ).slider({
        range: true,
        min: 1,
        max: 5,
        values: [ 1, 5 ],
        slide: function( event, ui ) {
            $( '#amount' ).val(ui.values[ 0 ] + " - " + ui.values[ 1 ] );
        }
        });
        $( '#amount' ).val( $( '#setRatingRange' ).slider( 'values', 0 ) +
        " - " + $( '#setRatingRange' ).slider( 'values', 1 ) );
    } );

    $(function(){
        $('#setPriceRange').slider({
            range: true,
            min: 30,
            max: 500,
            values: [30,500],
            slide: function(event, ui){
                $('#priceAmount').val('$' + ui.values[0] + ' - $' + ui.values[1]);
            }
        });
        $('#priceAmount').val('$' + $('#setPriceRange').slider('values', 0) + ' - $' + $('#setPriceRange').slider('values',1));
    });

    // ================================
    // end of range sliders
    // ================================

    // ================================
    // start of default cards and card generator function
    // ================================

    function generateListingCard(i){
        $('#listings-container').append(
            `
            <div id="${listings[i].id}" class="card card--listing">
                <img class="card-img-left" src="${listings[i].img[0]}" alt="listing image">
                <div class="card-content">
                    <div class="card-body card-body--listing">
                        <h4 class="card-title">${listings[i].title}</h4>
                        <p class="card-text">${listings[i].type} in ${listings[i].area}</p>
                        <ul class="card-amenities">
                            <li class="card-amenities__li">${listings[i].amenities[0]}</li>
                            <li class="card-amenities__li">${listings[i].amenities[1]}</li>
                            <li class="card-amenities__li">${listings[i].amenities[2]}</li>
                            <li class="card-amenities__li">${listings[i].amenities[3]}</li>
                        </ul>
                    </div>
                    <div class="card-detail">
                        <h3 class="card-detail__price-l">$${listings[i].pricePerNight}</h3>
                        <div class="card-detail__price-r">
                            <div class="card-detail__per">per night</div>
                        </div>
                        <div class="star-rating">
                            <div class="star-rating__star"><i class="fas fa-star"></i></div>
                            <p class="star-rating__rating">${listings[i].rating} avg.</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        );
        showListingInfo();
        tallySearchHits();
    }

    function searchPrompt(){
        $('#listings-container').html(`
        <p class="listings-container__prompt">Enter your search details above and hit "search" to see listing results.</p>
        `);
    }
    searchPrompt();

    // ================================
    // end of default cards and card generator function
    // ================================

    // ================================
    // start of window functions
    // ================================

    function showListingInfo(){

        $('.card').click(function(){
            for(let i = 0; i < listings.length; i++){

                if(parseInt(this.id) === listings[i].id){
                    let start = $('#startDate').datepicker('getDate');
                    let end = $('#endDate').datepicker('getDate');
                    let days = (end - start)/100/60/60/24/10;
                    let guestSelection = parseInt($('#guests').val());
                    let arriveDate = $('#startDate').val();
                    let leaveDate = $('#endDate').val();
                    let totalPrice = (listings[i].pricePerNight * guestSelection);
                    $('.info-container').css({display: "flex"});
                    $('.map-search').toggle();
                    $('.map').css({filter: "blur(100px)"});
                    $('.info-container').empty();
                    $('.info-container').html(
                        `

                        <div class="close-btn"><i class="fas fa-times-circle"></i></div>
                        <div class="listing-info">

                    <div class="listing-img">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="false">
                            <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-flex w-100" src="${listings[i].img[0]}" alt="First slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-flex w-100" src="${listings[i].img[1]}" alt="Second slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-flex w-100" src="${listings[i].img[2]}" alt="Third slide">
                            </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>

                    <div class="info-l">

                        <div class="info-top">

                            <div class="info-primary">
                                <h1 class="info-primary__title">${listings[i].title}</h1>
                                <h3 class="info-primary__subtitle">${listings[i].type} IN ${listings[i].area}</h3>
                                <div class="listing-widgets">saved, starred</div>
                                <ul class="amenities">
                                    <li class="amenities__li"><div class="amenities__icon"></div>${listings[i].amenities[0]}</li>
                                    <li class="amenities__li"><div class="amenities__icon"></div>${listings[i].amenities[1]}</li>
                                    <li class="amenities__li"><div class="amenities__icon"></div>${listings[i].amenities[2]}</li>
                                    <li class="amenities__li"><div class="amenities__icon"></div>${listings[i].amenities[3]}</li>
                                </ul>
                                <h2 class="info-primary__subhead">Extras</h2>
                                <ul class="info-primary__ul">
                                    <li class="info-primary__li">${listings[i].extras[0]}</li>
                                    <div class="info-primary__spacer"></div>
                                    <li class="info-primary__li">${listings[i].extras[1]}</li>
                                </ul>
                            </div>
                            
                        </div>

                        <div class="info-bottom">

                            <h2 class="info-bottom__subhead">${listings[i].tagline}</h2>
                            <p class="info-bottom__p">${listings[i].description}</p>
                        
                            <h2 class="info-bottom__subhead">Reviews for this listing</h2>
                            <div class="reviews">

                                <div class="review-item">
                                    <img class="review-item__user" src="./img/user/user-03.jpg"></img>
                                    <div class="review-item__divider"></div>
                                    <div class="review-item__bubble">
                                        <h3 class="review-item__quote">"${listings[i].userReviews[0]}"</h3>
                                        <p class="review-item__timestamp">1 week ago</p>
                                    </div>
                                    <p class="review-item__username">Timothy</p>
                                </div>

                                <div class="review-item">
                                    <img class="review-item__user" src="./img/user/user-04.jpg"></img>
                                    <div class="review-item__divider"></div>
                                    <div class="review-item__bubble">
                                        <h3 class="review-item__quote">"${listings[i].userReviews[1]}"</h3>
                                        <p class="review-item__timestamp">2 weeks ago</p>
                                    </div>
                                    <p class="review-item__username">Rodger</p>
                                </div>

                                <div class="review-item">
                                    <img class="review-item__user" src="./img/user/user-05.jpg"></img>
                                    <div class="review-item__divider"></div>
                                    <div class="review-item__bubble">
                                        <h3 class="review-item__quote">"${listings[i].userReviews[2]}"</h3>
                                        <p class="review-item__timestamp">3 weeks ago</p>
                                    </div>
                                    <p class="review-item__username">Annelise</p>
                                </div>

                            </div>

                            <h2 class="info-bottom__subhead">About ${listings[i].area}</h2>
                            <img class="info-bottom__area-img" style="background: url(${listings[i].areaImg}); background-size: cover; background-position: center;">
                            <p class="info-bottom__p">Quisque nibh diam, viverra eget ante ac, dignissim convallis nisi. Nullam bibendum, nulla at condimentum rhoncus, nunc nunc efficitur ligula, non ultrices nibh lectus sagittis sem. Mauris sodales sagittis egestas. Suspendisse leo eros, mollis eget risus dictum, fermentum pharetra enim. Nullam laoreet sapien et feugiat molestie. Maecenas eleifend risus sapien, pulvinar fermentum felis aliquam sed. Mauris vulputate orci massa, ut placerat quam lacinia non.</p>

                            <div class="host-info">
                                <img class="host-info__img" src="${listings[i].hostImg}"></img>
                                <h2 class="host-info__heading">Host</h2>
                                <h2 class="host-info__subhead">${listings[i].hostName}</h2>
                                <a class="host-info__a">Reviews</a>
                                <a class="host-info__a">Other listings</a>
                            </div>

                        </div>

                    </div>

                    <div class="info-r">

                        <form class="booking-widget">

                            <h2 class="booking-widget__heading">Booking Details</h2>

                            <h3 class="booking-widget__guests">${guestSelection} Guests</h3>
                            <h3 id="startDateListingInfo" class="booking-widget__date">Arriving on ${arriveDate}</h3>
                            <h3 id="endDateListingInfo" class="booking-widget__date">Leaving on ${leaveDate}</h3>

                            <div class="cost-calculator">
                                <h2 class="cost-calculator__per-night">$<span id="price">${listings[i].pricePerNight}</span> per night</h2>
                                <p class="cost-calculator__total-cost">Total Cost: $${totalPrice}</p>
                            </div>

                            <button type="button" id="confirmListing" class="booking-widget__confirm">Make a booking</button>

                        </form>

                    </div>

                    </div>
                        `
                    );
                    $('.close-btn').css('display', 'flex');
                    // close listing info button
                    $('.close-btn').click(function(event){
                    	event.preventDefault();
                      $('.close-btn').css('display', 'none');
                      $('.info-container').css('display', 'none');
                      $('.map-search').toggle();
                      $('.map').css('filter', 'none');
                    });
                    // end of listing info close button
                    // confirm listing button that opens summary
                        $('#confirmListing').click(function(){
                            $('.summary-container').css('display', 'flex');
                            $('.summary-container').empty();
                            $('.summary-container').html(
                                `
                                <div class="summary-top">
                                <div class="summary-top__close" id="closeSummary">
                                    <i class="fas fa-times-circle"></i>
                                    <p class="summary-top__back">Go Back</p>
                                </div>
                            </div>
                
                            <div class="summary-l">
                                <form class="booking-widget booking-widget--summary">
                
                                    <img style="background: url(${listings[i].img[0]}); background-size: cover;" class="booking-widget__img">
                
                                    <h2 class="booking-widget__heading booking-widget__heading--summary">${listings[i].title}</h2>

                                    <div class="days-wrapper">
                                        <h3 class="booking-widget__guest-total">${guestSelection} Guests</h3>
                                        <h3 class="booking-widget__arrival">${arriveDate}</h3>
                                        <p class="booking-widget__p">to</p>
                                        <h3 class="booking-widget__leaving">${leaveDate}</h3>
                                    </div>
                
                                    <div class=" cost-calculator--summary">
                                        <h2 class="cost-calculator__per-night">$<span id="price">${listings[i].pricePerNight}</span> per night</h2>
                                        <p class="cost-calculator__total-cost cost-calculator__total-cost--summary">$${totalPrice} total</p>
                                    </div>
                
                                </form>
                            </div>
                
                            <div class="summary-r">
                
                                <form class="booking-form">
                
                                    <h1 class="booking-form__heading">Booking Info</h1>
                
                                    <label class="booking-form__label" for="fullName">Full name</label>
                                    <input required class="booking-form__input" type="text" id="fullName" placeholder="First Last">
                
                                    <label class="booking-form__label" for="homeAddress">Home address</label>
                                    <input required class="booking-form__input" type="text" id="homeAddress" placeholder="123 Street, City, Country">
                
                                    <label class="booking-form__label" for="contactNo">Contact number</label>
                                    <input required class="booking-form__input" type="tel" id="contactNo" placeholder="0123456789">
                
                                    <label class="booking-form__label" for="email">Email</label>
                                    <input required class="booking-form__input" type="text" id="email" placeholder="name@email.com">
                
                                    <label class="booking-form__label" for="mealOption">Meal options</label>
                                    <select id="mealOption" class="booking-form__select">
                                        <option class="booking-form__option" value="0">None</option>
                                        <option class="booking-form__option" value="10">Breakfast ($10 per person, per day)</option>
                                        <option class="booking-form__option" value="15">Lunch ($15 per person, per day)</option>
                                        <option class="booking-form__option" value="20">Dinner ($20 per person, per day)</option>
                                    </select>
                
                                    <button class="booking-form__confirm" id="confirmBooking" type="button">Confirm & Pay</button>
                
                                </form>
                
                            </div>
                                `
                            );
                            $('.summary-container').mouseover(function(){
                                let mealPrice = parseInt($('.booking-form__select').val());
                                let totalPriceWithFood = ((guestSelection * mealPrice) * days) + totalPrice;
                                console.log(totalPriceWithFood);
                                $('.cost-calculator__total-cost--summary').html('$' + totalPriceWithFood + ' total');
                            });
                             // close listing info button
                            $('#closeSummary').click(function(){
                            $('.summary-container').css({display: 'none'});
                            });
                            // end of listing info close button

                            // ====================================
                            // start of confirmation page functions
                            // ====================================

                            function confirmationPage(fullName, homeAddress, contactNo, email, mealOption){
                                let mealPrice = parseInt($('.booking-form__select').val());
                                let totalPriceWithFood = ((guestSelection * mealPrice) * days) + totalPrice;
                                $('.confirmation-container').css('background', `url(${listings[i].areaImg})`);
                                $('.confirmation-container').css('background-position', 'center');
                                $('.confirmation-container').css('background-size', 'cover');
                                $('.confirmation-container').html(`
                                <div class="confirmation-details">

                                <div class="confirmation-top">
                                    <h1 class="confirmation-top__heading">Thank you for booking with KiwiStay!</h1>
                                    <div class="confirmation-top__close" id="closeConfirmation">
                                        <i class="fas fa-times-circle"></i>
                                        <p class="confirmation-top__back">Go Back</p>
                                    </div>
                                </div>
                
                                <div class="confirmation-bottom">
                
                                    <div class="confirmation-titles">
                                        <h2 class="confirmation-titles__h2">Booking Details for</h2>
                                        <h3 class="confirmation-titles__h3">${listings[i].title}</h3>
                                    </div>
                
                                    <div class="booking-widget booking-widget--confirmation">
                                        <img style="background: url(${listings[i].img[0]}); background-size: cover;" class="booking-widget__img booking-widget__img--confirm">
                
                                        <div class="days-wrapper">
                                            <h3 class="booking-widget__guest-total">${guestSelection} Guests</h3>
                                            <h3 class="booking-widget__arrival">Arriving ${arriveDate}</h3>
                                            <h3 class="booking-widget__leaving">Leaving ${leaveDate}</h3>
                                        </div>
                    
                                        <div class="cost-calculator--summary">
                                            <p class="cost-calculator__meal-option"><b>Meal Option:</b> ${mealOption}</p>
                                            <p class="cost-calculator__total-cost cost-calculator__total-cost--paid">$${totalPriceWithFood} total</p>
                                            <p class="cost-calculator__paid">paid</p>
                                        </div>
                                    </div>
                
                                    <div class="confirmation-r">
                                        <div class="host-info host-info--confirm">
                                            <img class="host-info__img" src="${listings[i].hostImg}"></img>
                                            <h2 class="host-info__heading host-info__heading--confirm">Your Host</h2>
                                            <h2 class="host-info__subhead host-info__subhead--confirm">${listings[i].hostName}</h2>
                                            <p class="host-info__quote">“We hope you have a lovely stay at our home! Please feel free to get in contact if you have any more questions.”</p>
                                            <ul class="user-details">
                                                <li class="user-details__li"><b>Booking for:</b> ${fullName}</li>
                                                <li class="user-details__li"><b>Your address:</b> ${homeAddress}</li>
                                                <li class="user-details__li"><b>Your email:</b> ${email}</li>
                                            </ul>
                                            <p class="host-info__notice">You will be emailed shortly with further instructions including the listing address and tips for your trip.</p>
                                            <button class="host-info__btn">My Bookings</button>
                                            <button id="closeConfirmationBtnDark" class="host-info__btn host-info__btn--dark">Back to Home</button>
                                        </div>
                                    </div>
                
                                </div>
                                </div>
                                `);
                                $('#closeConfirmation').click(function(){
                                    console.log('close clicked');
                                    $('.confirmation-container').css('display', 'none');
                                    $('.info-container').css('display', 'none');
                                    $('.map').css('filter', 'blur(0)');
                                    $('.close-btn').css('display', 'none');
                                });
                                $('#closeConfirmationBtnDark').click(function(){
                                    console.log('close clicked');
                                    $('.confirmation-container').css('display', 'none');
                                    $('.info-container').css('display', 'none');
                                    $('.map').css('filter', 'blur(0)');
                                    $('.close-btn').css('display', 'none');
                                });
                            }

                            $('.booking-form__confirm').click(function(){
                                // check inputs are filled in
                                // collect form data in variables
                                let fullName = $('#fullName').val();
                                let homeAddress = $('#homeAddress').val();
                                let contactNo = $('#contactNo').val();
                                let email = $('#email').val();
                                let mealOption = $('#mealOption option:selected').text();
                                if(fullName === '' || homeAddress === '' || contactNo === '' || email === ''){
                                    alert('Please fill in all fields to continue.');
                                } else {
                                    $('.summary-container').css({display: 'none'});
                                    $('.confirmation-container').css({display: 'flex'});
                                    confirmationPage(fullName, homeAddress, contactNo, email, mealOption);
                                }
                            });
                        });
                } else {
                    console.log('end of array search');
                }
            }
        });
    }
    showListingInfo();

    // ================================
    // end of window functions
    // ================================

    // ================================
    // start of filter search function
    // ================================

    function filterListings(search){
        search.preventDefault();
        $('#listings-container').empty();

        let locationSelection = $('#location').val();
        let guestSelection = $('#guests').val();
        let arrivalDate = $('#startDate').val();
        let leavingDate = $('#endDate').val();
        let typeSelection = [];
        $('input[name="type"]:checked').each(function(){
            typeSelection.push(this.value);
        });
        let priceSelection = $('#setPriceRange').slider("option", "values");
        let ratingSelection = $( "#setRatingRange" ).slider( "option", "values" );

        // data validation
        if (guestSelection < 1){
            alert('You must specify at least one guest. Please change this field to continue.');
        } else if(guestSelection > 4){
            alert('Maximum guests allowed is four. Please change this field to continue.');
        } else if(arrivalDate === ""){
            alert('Please specify an arrival date to continue.');
        } else if(leavingDate === ""){
            alert('Please specify a leaving date to continue.');
        } else if (typeSelection[0] === undefined){
            alert('Please select an accommodation type to continue.');
        } else {
        // run search as normal
        // first check for location
            for(let i = 0; i < listings.length; i++){
                if(locationSelection === listings[i].area || locationSelection === 'any'){
                    // then check for guest amount
                    if(guestSelection >= listings[i].minGuests && guestSelection <= listings[i].maxGuests){
                        // then check dates chosen so that they fit within listing min & max stay
                        // using dateDiff to get returned value of day difference
                        if(dateDiff() >= listings[i].minStay && dateDiff() <= listings[i].maxStay){
                            // then check for selected types of listings
                            for(let x = 0; x < typeSelection.length; x++){
                                if((typeSelection[x] === listings[i].type) || (typeSelection[x] === 'any')){
                                    // check price per night
                                    // this will need to become a jquery UI dual range slider to get a min/max value
                                    if(listings[i].pricePerNight >= priceSelection[0] && listings[i].pricePerNight <= priceSelection[1]){
                                        // check range slider of rating selection
                                        if(listings[i].rating >= ratingSelection[0] && listings[i].rating <= ratingSelection[1]){
                                            generateListingCard(i);
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        }
        if($('#listings-container div').length === 0){
            searchPrompt();
            alert('No results found for your search');
            tallySearchHits();
        }
    }

    // ================================
    // end of filter search function
    // ================================

    // ================================
    // start of card show and filter input functions
    // ================================

    $('.content').click(function(){
        // run the card content function
    });

    // changes all other checkboxes to false if "any" type filter is picked
    $('#anyTypeFilter').click(function(){
        console.log('checkbox function is go');
        $('#houseTypeFilter').prop("checked", false);
        $('#hotelTypeFilter').prop("checked", false);
        $('#motelTypeFilter').prop("checked", false);
        $('#hostelTypeFilter').prop("checked", false);
    });

    // changes "any" type filter to false if other checkboxes are true
    $('#houseTypeFilter').click(function(){
        $('#anyTypeFilter').prop("checked", false);
    });
    $('#hotelTypeFilter').click(function(){
        $('#anyTypeFilter').prop("checked", false);
    });
    $('#motelTypeFilter').click(function(){
        $('#anyTypeFilter').prop("checked", false);
    });
    $('#hostelTypeFilter').click(function(){
        $('#anyTypeFilter').prop("checked", false);
    });

    showListingInfo();

    searchBtn.addEventListener('click', filterListings);

    // ================================
    // end of card show and filter input functions
    // ================================

});