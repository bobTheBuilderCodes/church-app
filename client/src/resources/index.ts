export const images = {
    church_logo : "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
}

export const members = [
  {
    id: 1,
    name: 'Potinge Philomena',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    imageAlt: 'Philomena Potinge',
    ministry: 'Youth',
    phoneNumber: '024 567 5943',
  },
  {
    id: 2,
    name: 'Kwame Boateng',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6',
    imageAlt: 'Kwame Boateng',
    ministry: 'Men\'s Fellowship',
    phoneNumber: '024 123 4567',
  },
  {
    id: 3,
    name: 'Akosua Asare',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61',
    imageAlt: 'Akosua Asare',
    ministry: 'Women\'s Ministry',
    phoneNumber: '024 987 6543',
  },
  {
    id: 4,
    name: 'Yaw Osei',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    imageAlt: 'Yaw Osei',
    ministry: 'Evangelism',
    phoneNumber: '024 765 4321',
  },
  {
    id: 5,
    name: 'Serwaa Mensah',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
    imageAlt: 'Serwaa Mensah',
    ministry: 'Choir',
    phoneNumber: '024 332 1123',
  },
  {
    id: 6,
    name: 'Kofi Antwi',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    imageAlt: 'Kofi Antwi',
    ministry: 'Ushering',
    phoneNumber: '024 876 5432',
  },
  {
    id: 7,
    name: 'Ama Nkrumah',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    imageAlt: 'Ama Nkrumah',
    ministry: 'Children\'s Ministry',
    phoneNumber: '024 121 1112',
  },
  {
    id: 8,
    name: 'Kojo Mensah',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    imageAlt: 'Kojo Mensah',
    ministry: 'Technical Team',
    phoneNumber: '024 333 4444',
  },
  {
    id: 9,
    name: 'Adjoa Addai',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef',
    imageAlt: 'Adjoa Addai',
    ministry: 'Women\'s Ministry',
    phoneNumber: '024 555 6666',
  },
  {
    id: 10,
    name: 'Michael Dapaah',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    imageAlt: 'Michael Dapaah',
    ministry: 'Youth',
    phoneNumber: '024 777 8888',
  },
  {
    id: 11,
    name: 'Dela Afriyie',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
    imageAlt: 'Dela Afriyie',
    ministry: 'Choir',
    phoneNumber: '024 876 4321',
  },
  {
    id: 12,
    name: 'Akwasi Appiah',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1532074205216-d0e1f4b0fbab',
    imageAlt: 'Akwasi Appiah',
    ministry: 'Evangelism',
    phoneNumber: '024 444 5678',
  },
  {
    id: 13,
    name: 'Gifty Owusu',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6',
    imageAlt: 'Gifty Owusu',
    ministry: 'Women\'s Ministry',
    phoneNumber: '024 876 1111',
  },
  {
    id: 14,
    name: 'Samuel Adjei',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    imageAlt: 'Samuel Adjei',
    ministry: 'Ushering',
    phoneNumber: '024 111 2222',
  },
  {
    id: 15,
    name: 'Mercy Dede',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1562074289-632d5dcd1f95',
    imageAlt: 'Mercy Dede',
    ministry: 'Youth',
    phoneNumber: '024 232 3434',
  },
  {
    id: 16,
    name: 'Kwabena Kyei',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1562074289-632d5dcd1f95',
    imageAlt: 'Kwabena Kyei',
    ministry: 'Men\'s Fellowship',
    phoneNumber: '024 444 5555',
  },
  {
    id: 17,
    name: 'Selasi Fafa',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1517841905240-472988bab',
    imageAlt: 'Selasi Fafa',
    ministry: 'Men\'s Fellowship',
    phoneNumber: '058 695 3943'
  }
  ]
 

  export const chartData = {
    labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Donations",
        data: [50, 90, 70, 80, 85, 100, 78, 68, 89, 60, 98, 89, 87],
        // backgroundColor: "#4F45E4",
        borderColor: "#4F45E4",
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
       tension:0.5
      },
    ],
  };


// Chart options
export const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,  // This ensures the chart will fill its container
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      // text: "Donations Over Time",
    },
  },
};


export const barChartData = {
  labels: ['Men', 'Women', "Children", "Youth"],
  datasets: [
    {
      // label: 'Gender Distribution',
      data: [100, 50, 70, 90], // Example data
      backgroundColor: ['rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)'],
    },
  ],
};

export const pieChartData = {
  labels: ['Music Ministry', 'Prayer Force', 'Evangelism', 'Welfare Committee'],
  datasets: [
    {
      // label: 'Ministry Distribution',
      data: [30, 25, 20, 25], // Example data
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1,
    },
  ],
};


export const prayerRequests = [
  {
    memberName: "Sarah Williams",
    description: "Pray for healing and strength as I recover from surgery.",
    date: "September 16, 2024",
    avatar: "https://example.com/avatar1.jpg",
  },
  {
    memberName: "Michael Brown",
    description: "Seeking prayers for guidance in my career decisions.",
    date: "September 17, 2024",
    avatar: "https://example.com/avatar2.jpg",
  },
  {
    memberName: "Rebecca Thompson",
    description: "Please pray for my family’s financial stability.",
    date: "September 18, 2024",
    avatar: "https://example.com/avatar3.jpg",
  },
  {
    memberName: "David Johnson",
    description: "Pray for peace and reconciliation in my marriage.",
    date: "September 19, 2024",
    avatar: "https://example.com/avatar4.jpg",
  },
  {
    memberName: "Jennifer Lee",
    description: "Praying for comfort after the loss of a loved one.",
    date: "September 20, 2024",
    avatar: "https://example.com/avatar5.jpg",
  },
  {
    memberName: "Anthony Green",
    description: "Please pray for strength and wisdom as I face difficult decisions.",
    date: "September 21, 2024",
    avatar: "https://example.com/avatar6.jpg",
  },
  {
    memberName: "Jessica White",
    description: "Praying for protection and safety during my travels.",
    date: "September 22, 2024",
    avatar: "https://example.com/avatar7.jpg",
  },
  {
    memberName: "Christopher Taylor",
    description: "Please pray for spiritual growth and clarity in my faith.",
    date: "September 23, 2024",
    avatar: "https://example.com/avatar8.jpg",
  },
  {
    memberName: "Laura Adams",
    description: "Pray for patience and understanding in my parenting journey.",
    date: "September 24, 2024",
    avatar: "https://example.com/avatar9.jpg",
  },
  {
    memberName: "Matthew Clark",
    description: "Please pray for healing from chronic illness and pain.",
    date: "September 25, 2024",
    avatar: "https://example.com/avatar10.jpg",
  },
  {
    memberName: "Olivia Martinez",
    description: "Seeking prayers for strength as I care for my aging parents.",
    date: "September 26, 2024",
    avatar: "https://example.com/avatar11.jpg",
  },
  {
    memberName: "Brian Wilson",
    description: "Pray for direction in my business and wisdom in leadership.",
    date: "September 27, 2024",
    avatar: "https://example.com/avatar12.jpg",
  },
  {
    memberName: "Emily Rodriguez",
    description: "Please pray for peace and comfort as I grieve a miscarriage.",
    date: "September 28, 2024",
    avatar: "https://example.com/avatar13.jpg",
  },
  {
    memberName: "Joshua Hall",
    description: "Pray for forgiveness and restoration in broken friendships.",
    date: "September 29, 2024",
    avatar: "https://example.com/avatar14.jpg",
  },
  {
    memberName: "Elizabeth King",
    description: "Praying for courage and strength as I start a new chapter in life.",
    date: "September 30, 2024",
    avatar: "https://example.com/avatar15.jpg",
  },
  {
    memberName: "Daniel Wright",
    description: "Please pray for deliverance from anxiety and fear.",
    date: "October 1, 2024",
    avatar: "https://example.com/avatar16.jpg",
  },
  {
    memberName: "Megan Scott",
    description: "Seeking prayers for my son’s healing and protection.",
    date: "October 2, 2024",
    avatar: "https://example.com/avatar17.jpg",
  },
  {
    memberName: "Andrew Perez",
    description: "Praying for wisdom in navigating a difficult legal situation.",
    date: "October 3, 2024",
    avatar: "https://example.com/avatar18.jpg",
  },
  {
    memberName: "Sophia Harris",
    description: "Please pray for peace and strength during my job search.",
    date: "October 4, 2024",
    avatar: "https://example.com/avatar19.jpg",
  },
  {
    memberName: "James Robinson",
    description: "Seeking prayers for my upcoming medical procedure.",
    date: "October 5, 2024",
    avatar: "https://example.com/avatar20.jpg",
  },
  {
    memberName: "Charlotte Young",
    description: "Praying for guidance as I pursue my studies.",
    date: "October 6, 2024",
    avatar: "https://example.com/avatar21.jpg",
  },
  {
    memberName: "Ethan Scott",
    description: "Pray for protection over my family and our home.",
    date: "October 7, 2024",
    avatar: "https://example.com/avatar22.jpg",
  },
  {
    memberName: "Victoria Brown",
    description: "Please pray for strength and faith in overcoming depression.",
    date: "October 8, 2024",
    avatar: "https://example.com/avatar23.jpg",
  },
  {
    memberName: "Benjamin Moore",
    description: "Praying for good health for my parents as they age.",
    date: "October 9, 2024",
    avatar: "https://example.com/avatar24.jpg",
  },
  {
    memberName: "Grace Turner",
    description: "Pray for a peaceful resolution to a family conflict.",
    date: "October 10, 2024",
    avatar: "https://example.com/avatar25.jpg",
  },
];

export const churchEvents = [
  {
    id: 1,
    title: "Sunday Worship Service",
    date: "2024-09-15",
    time: "10:00 AM",
    venue: "Main Sanctuary",
    description: "Join us for a powerful time of worship and fellowship.",
    imageUrl: "https://images.unsplash.com/photo-1651492111555-8be7d155c189?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fENodXJjaCUyMHBpY3R1cmVzfGVufDB8fDB8fHww", // Worship Service Image
  },
  {
    id: 2,
    title: "Midweek Prayer Meeting",
    date: "2024-09-20",
    time: "7:00 PM",
    venue: "Prayer Room",
    description: "An evening dedicated to prayer and spiritual growth.",
    imageUrl: "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENodXJjaCUyMHBpY3R1cmVzfGVufDB8fDB8fHww", // Men's Breakfast Image
  },
  {
    id: 3,
    title: "Youth Fellowship Night",
    date: "2024-09-22",
    time: "5:00 PM",
    venue: "Youth Hall",
    description: "Youth gathering for worship, word, and fun activities.",
    imageUrl: "https://images.unsplash.com/photo-1669644289033-67e143793ebc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2h1cmNoJTIwcGljdHVyZXN8ZW58MHx8MHx8fDA%3D", // Youth Fellowship Image
  },
  {
    id: 4,
    title: "Men's Breakfast Meeting",
    date: "2024-09-25",
    time: "8:00 AM",
    venue: "Community Hall",
    description: "A special gathering for men with breakfast and discussions.",
    imageUrl: "https://images.unsplash.com/photo-1576502200916-3808e07386a5", // Men's Breakfast Image
  },
  {
    id: 5,
    title: "Women's Conference",
    date: "2024-09-28",
    time: "9:00 AM",
    venue: "Main Auditorium",
    description: "Empowering women through faith and leadership teachings.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1676576742250-1293c94c1a65?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fENodXJjaCUyMHBpY3R1cmVzfGVufDB8fDB8fHww", // Women's Conference Image
  },
  {
    id: 6,
    title: "Marriage Enrichment Seminar",
    date: "2024-10-01",
    time: "6:30 PM",
    venue: "Conference Room 3",
    description: "An insightful seminar for couples to strengthen their marriages.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1723826751660-717811d0fbc6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8", // Marriage Seminar Image
  },
  {
    id: 7,
    title: "Children's Bible School",
    date: "2024-10-05",
    time: "10:00 AM",
    venue: "Children's Church",
    description: "A fun and engaging bible school for kids of all ages.",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Children's Bible School Image
  },
  {
    id: 8,
    title: "Church Picnic",
    date: "2024-10-10",
    time: "12:00 PM",
    venue: "Riverside Park",
    description: "A family-friendly church picnic with games and fellowship.",
    imageUrl: "https://images.unsplash.com/photo-1573421706309-8e71afba54a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2h1cmNoJTIwcGljdHVyZXN8ZW58MHx8MHx8fDA%3D", // Church Picnic Image
  },
  {
    id: 9,
    title: "Thanksgiving Service",
    date: "2024-10-15",
    time: "9:00 AM",
    venue: "Main Sanctuary",
    description: "A service to give thanks for the blessings of the year.",
    imageUrl: "https://images.unsplash.com/photo-1520629716099-d147346eb224?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fENodXJjaCUyMHBpY3R1cmVzfGVufDB8fDB8fHww", // Thanksgiving Service Image
  },
  {
    id: 10,
    title: "Christmas Eve Candlelight Service",
    date: "2024-12-24",
    time: "6:00 PM",
    venue: "Main Sanctuary",
    description: "Celebrate the birth of Christ in a beautiful candlelight service.",
    imageUrl: "https://images.unsplash.com/photo-1531944252668-83d381a30b26?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2h1cmNoJTIwcGljdHVyZXN8ZW58MHx8MHx8fDA%3D", // Christmas Eve Image
  },
];
