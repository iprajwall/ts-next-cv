export type ProfileDataProps = {
  title: string
  items: {
    title: string
    subTitle: string
    date: string
    description?: string
  }[]
}

export const profileData = [
  {
    title: 'Work Experience',
    items: [
      {
        title: 'Web Development Intern',
        subTitle: 'Saara IT Solutions',
        date: '02/23 - 04/23',
      },
      {
        title: 'College Research Internship',
        subTitle: 'NMAMIT', 
        date: '03/22 - 05/22',
      },
    ],
  },
  {
    title: 'Education',
    items: [
      {
        title: "Bachelor's Degree in Electronics and Communication",
        subTitle: 'NMAM Institute of Technology',
        date: '2021 - 2025*',
        description: 'Electronics and software engineering principles.',
      },
      {
        title: "Pre-University Education",
        subTitle: 'PRN Amratha Bharathi',
        date: '2019 - 2021',
        description: 'Foundational computer science and web development basics.',
      },
    ],
  },
  {
    title: 'Projetcs',
    items: [
      {
        title: 'Customer Relationship Management (CRM)',
        subTitle: 'Django and MySQL',
        date: '2024',
      },
      {
        title: '4-bit ALU Design and Simulation',
        subTitle: 'Cadence Virtuoso',
        date: '2024',
      },
      {
        title: 'Speech Enhancement Using Deep Learning',
        subTitle: 'Deep Learning and Neural Networks',
        date: '2023',
      },
      {
        title: 'Stock Price Trend Prediction',
        subTitle: 'Random Forest and KNN',
        date: '2023',
      },
    ],
  },
]
