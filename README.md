# HR Automation Portal

A comprehensive HR management system built with Next.js, featuring AI-powered tools for recruitment, candidate assessment, and workforce management.

## 🚀 Features

### Admin Panel
- **Job Listings Management**: Create, edit, and delete job postings with real-time updates
- **CV Screening Dashboard**: AI-powered candidate shortlisting with relevance scoring
- **Social Media Automation**: Schedule and post job openings across multiple platforms (LinkedIn, Facebook, Twitter)
- **Candidate Assessment Generator**: AI-powered question generation for interviews and assessments
- **Real-time Analytics**: Track application counts and candidate metrics

### Client Portal
- **Job Listings**: Browse available positions with detailed descriptions
- **Application System**: Submit applications with resume upload functionality
- **Company Information**: Learn about company culture, achievements, and testimonials
- **Responsive Design**: Optimized for desktop and mobile devices

### AI-Powered Features
- **Smart Question Generation**: Uses Google's Gemini AI to create role-specific interview questions
- **Candidate Scoring**: Automated CV screening with relevance percentage
- **Social Media Scheduling**: Automated posting with hashtag management
- **Assessment Creation**: Generate both multiple-choice and open-ended questions

## 🛠️ Technology Stack

- **Frontend**: Next.js 13+ with App Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React, React Icons
- **AI Integration**: Google Generative AI (Gemini)
- **State Management**: React Hooks with localStorage persistence
- **Authentication**: Simple role-based authentication system
- **Animations**: Framer Motion

## 📦 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd hr-automation-portal
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   \`\`\`env
   GOOGLE_AI_API_KEY=your_gemini_api_key_here
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔐 Authentication

The system includes two user roles:

### Admin Access
- **Username**: `admin`
- **Password**: `admin123`
- **Access**: Full administrative capabilities

### Client Access
- **Username**: `client`
- **Password**: `client123`
- **Access**: Job browsing and application submission

## 📁 Project Structure

\`\`\`
hr-automation-portal/
├── app/
│   ├── admin/                 # Admin panel pages
│   │   ├── job-listings/      # Job management
│   │   ├── cv-shortlisting/   # Candidate screening
│   │   ├── social-media/      # Social media automation
│   │   └── question-generator/ # AI question generation
│   ├── client/                # Client portal pages
│   │   ├── job-listings/      # Job browsing
│   │   ├── apply/             # Application form
│   │   └── company-info/      # Company information
│   ├── components/            # Reusable components
│   │   ├── admin/             # Admin-specific components
│   │   └── client/            # Client-specific components
│   ├── login/                 # Authentication page
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Landing page
├── public/                    # Static assets
├── package.json
└── README.md
\`\`\`

## 🎯 Key Features Explained

### Job Management System
- **Persistent Storage**: Jobs are stored in localStorage for demo purposes
- **Real-time Updates**: Changes reflect immediately across admin and client views
- **Application Tracking**: Automatic increment of application counts

### AI Question Generator
- **Role-based Generation**: Creates questions specific to job roles
- **Multiple Question Types**: Supports both MCQ and open-ended questions
- **Customizable Parameters**: Adjust number of questions and difficulty

### Social Media Automation
- **Multi-platform Support**: LinkedIn, Facebook, Twitter integration
- **Scheduling System**: Date and time-based post scheduling
- **Media Upload**: Support for images and videos
- **Hashtag Management**: Dynamic label/hashtag system

### CV Screening Dashboard
- **Automated Scoring**: AI-powered relevance scoring for candidates
- **Skills Matching**: Match candidate skills with job requirements
- **Detailed Analytics**: Comprehensive candidate evaluation metrics

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The application can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔧 Configuration

### Environment Variables
\`\`\`env
# Required for AI question generation
GOOGLE_AI_API_KEY=your_gemini_api_key

# Optional: Database connection (for production)
DATABASE_URL=your_database_url

# Optional: File upload service
UPLOAD_SERVICE_URL=your_upload_service_url
\`\`\`

### Customization
- **Colors**: Modify `globals.css` for theme customization
- **Branding**: Update logo references in layout files
- **Content**: Modify company information in respective components

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience with sidebar navigation
- **Tablet**: Adapted layouts with touch-friendly interfaces
- **Mobile**: Streamlined mobile experience with collapsible navigation

## 🔒 Security Features

- **Role-based Access Control**: Separate admin and client interfaces
- **Input Validation**: Form validation and sanitization
- **Secure File Upload**: File type and size restrictions
- **Session Management**: Secure authentication state management

## 🧪 Testing

Run the test suite:
\`\`\`bash
npm run test
\`\`\`

For end-to-end testing:
\`\`\`bash
npm run test:e2e
\`\`\`

## 📈 Performance

- **Optimized Images**: Next.js Image component for automatic optimization
- **Code Splitting**: Automatic code splitting for faster load times
- **Lazy Loading**: Components loaded on demand
- **Caching**: Efficient caching strategies for better performance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the development team
- Check the documentation for common solutions

## 🔮 Future Enhancements

- **Database Integration**: PostgreSQL/MongoDB for production data storage
- **Email Notifications**: Automated email alerts for applications
- **Advanced Analytics**: Comprehensive reporting dashboard
- **API Integration**: Third-party job board integrations
- **Video Interviews**: Built-in video interview scheduling
- **Mobile App**: React Native mobile application
- **Multi-language Support**: Internationalization features

## 📊 System Requirements

- **Node.js**: Version 16.0 or higher
- **npm**: Version 7.0 or higher
- **Browser**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **Memory**: Minimum 4GB RAM for development

---

**Built with ❤️ by the HR Automation Team**

*Revolutionizing HR processes through cutting-edge technology and AI-powered solutions.*
