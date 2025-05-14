# Profile Viewer with Interactive Map

## Overview

This is a web application built using **React** that allows users to view a collection of profiles. Each profile contains essential information such as name, photo, description, and address. The application integrates an interactive map to display the geographical location of each profile. It also provides functionality to search, filter, and manage profiles, making it a user-friendly and dynamic platform.

The application offers the following features:

- Display a list of profiles with essential information.
- View geographical locations of profiles on an interactive map.
- Search and filter profiles based on specific criteria.
- Admin dashboard to add, edit, or delete profiles.
- Profile details page for in-depth information about each profile.

## Features

1. **Profile Display**: A collection of profiles with name, photograph, description, and address.
2. **Interactive Mapping**: Use **Mapbox API** to render an interactive map with markers indicating the addresses of each profile.
3. **Profile Summary Button**: Click the "Summary" button to display the map with a marker showing the selected profile’s address.
4. **Search and Filter Functionality**: Users can search for profiles by name or filter based on location.
5. **Admin Dashboard**: Admins can add, edit, or delete profiles, and the changes will be stored in local storage.
6. **Responsive Design**: The app is designed to be responsive, providing a seamless experience across desktop and mobile devices.
7. **Error Handling**: Robust error handling, especially for invalid addresses or failed map service requests.
8. **Profile Details Page**: A separate page with detailed information about the profile, including interests and contact information.

## Technologies Used

- **React**: Frontend framework to build the user interface.
- **Mapbox API**: Used to render the interactive map with geographic locations of profiles.
- **Tailwind CSS**: A utility-first CSS framework for styling the components.
- **UUID**: To generate unique IDs for profiles.
- **Local Storage**: To store profiles persistently on the client side.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- **Node.js**: Ensure that you have Node.js and npm installed. You can download them from [here](https://nodejs.org/).

### Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/profile-viewer.git
   ```

2.cd profile-viewer

3.npm install

4.npm start

admin route- localhost:3000/admin

FILE STRUCTURE

/src
/components
/Admin.js # Admin dashboard for adding/editing profiles
/Home.js # Home page where profiles are displayed
/SearchFilter.js # Search bar component to filter profiles
/ProfileDetails.js # Profile details page
/App.js # Main entry point of the application
/index.js # Rendering the React app
/styles.css # Custom styles (if any)
