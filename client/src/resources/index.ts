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