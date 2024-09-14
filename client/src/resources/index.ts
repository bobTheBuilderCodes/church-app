export const images = {
    church_logo : "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
}

export const members = [
    {
      id: 1,
      name: 'Potinge Philomena',
      href: '#',
      imageSrc: 'https://media.istockphoto.com/id/1146745072/photo/african-athletic-man-portrait.jpg?s=612x612&w=0&k=20&c=s5aMnbBNhFanlsgWGHG02fEb8qezqCIfphIGYWhG7ZU=',
      imageAlt: "Philomena Potinge",
      ministry: 'Youth',
      phoneNumber: '024 567 5943',
    },
   
  
    {
        id: 2,
        name: 'Potinge Philomena',
        href: '#',
        imageSrc: 'https://media.istockphoto.com/id/1146745072/photo/african-athletic-man-portrait.jpg?s=612x612&w=0&k=20&c=s5aMnbBNhFanlsgWGHG02fEb8qezqCIfphIGYWhG7ZU=',
        imageAlt: "Philomena Potinge",
        ministry: 'Youth',
        phoneNumber: '024 567 5943',
      },
   
  
      {
        id: 3,
        name: 'Potinge Philomena',
        href: '#',
        imageSrc: 'https://media.istockphoto.com/id/1146745072/photo/african-athletic-man-portrait.jpg?s=612x612&w=0&k=20&c=s5aMnbBNhFanlsgWGHG02fEb8qezqCIfphIGYWhG7ZU=',
        imageAlt: "Philomena Potinge",
        ministry: 'Youth',
        phoneNumber: '024 567 5943',
      },,
      {
        id: 4,
        name: 'Potinge Philomena',
        href: '#',
        imageSrc: 'https://media.istockphoto.com/id/1146745072/photo/african-athletic-man-portrait.jpg?s=612x612&w=0&k=20&c=s5aMnbBNhFanlsgWGHG02fEb8qezqCIfphIGYWhG7ZU=',
        imageAlt: "Philomena Potinge",
        ministry: 'Youth',
        phoneNumber: '024 567 5943',
      },,
    // More members...
  ]

  const member = {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '555-1234',
    membershipStatus: 'Active',
    involvement: ['Choir', 'Bible Study Group', 'Youth Fellowship'],
    joinDate: '2020-05-15',
  };


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
