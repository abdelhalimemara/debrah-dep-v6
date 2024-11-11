# Debrah - your Properties well managed

A modern property management system built for real estate offices in Saudi Arabia, powered by React, Vite, and Supabase.

## Features

### Property Management
- **Multi-Office Support**: Each real estate office has its own secure workspace
- **Comprehensive Property Management**:
  - Property Owners
  - Buildings
  - Units (Rental & Sale)
  - Tenants
  - Contracts
  - Payables & Receipts
- **Dashboard Analytics**: Real-time insights into property statistics
- **Global Search**: Find any resource quickly with unified search

### Unit Management
- **Dual Listing Types**: Support for both rental and sale properties
- **Property Categories**: Villa, House, Apartment, Duplex, Floor, Plot, Office, Commercial
- **Detailed Information**:
  - Basic details (size, bedrooms, bathrooms)
  - Room details (kitchens, living rooms, storage)
  - Outdoor spaces (balcony, roof, garden)
  - Street details (width, type, corner plot)
  - Amenities and features
  - Utilities (water/electricity meters)
- **Document Management**: Upload and manage ownership certificates and documents

### Financial Management
- **Comprehensive Payment Tracking**:
  - Rent payments
  - Security deposits
  - Insurance fees
  - Maintenance fees
  - Service charges
- **Multiple Payment Methods**: Bank transfer, cash, check
- **Financial Reports**: Generate detailed financial statements
- **Owner Payouts**: Track and manage owner payments
- **Office Expenses**: Monitor and categorize office expenses

### Marketplace Integration
- **Public Listings**: List vacant properties on the marketplace
- **Rich Property Details**:
  - High-quality photos
  - Virtual tours
  - Detailed amenities
  - Location information
- **Contact Information**: Direct inquiries to the office

### User Management
- **Role-based Access**: Admin and user roles
- **Team Management**: Invite and manage team members
- **Profile Settings**: Personal user settings
- **Office Settings**: Manage office profile and branding

### Notifications
- **Real-time Updates**: Get notified about important events
- **Payment Reminders**: Due date notifications
- **Contract Updates**: Contract creation and termination alerts
- **Custom Notifications**: Configurable notification preferences

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Icons**: Lucide React
- **Storage**: Supabase Storage for documents and images
- **Charts**: Recharts for analytics

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── auth/         # Authentication components
│   ├── buildings/    # Building management components
│   ├── common/       # Shared components
│   ├── dashboard/    # Dashboard widgets
│   ├── finances/     # Financial management components
│   ├── layout/       # Layout components
│   ├── listings/     # Marketplace listing components
│   ├── owners/       # Property owner components
│   ├── payables/     # Payment management components
│   ├── profile/      # Profile and settings components
│   ├── search/       # Global search components
│   ├── tenants/      # Tenant management components
│   └── units/        # Unit management components
├── hooks/            # Custom React hooks
├── lib/             # Utilities and API functions
├── pages/           # Page components
└── types/           # TypeScript type definitions
```

## Recent Updates (v0.0.6)

- Added comprehensive marketplace listings
- Enhanced unit management with sale properties support
- Added document management for ownership certificates
- Improved financial tracking and reporting
- Enhanced notification system with real-time updates
- Added office expense management
- Improved owner payout system
- Enhanced unit details with outdoor spaces
- Added street details for properties
- Improved search functionality
- Enhanced UI/UX across all components

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License