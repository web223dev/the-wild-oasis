<h1 align="center">The Wild Oasis</h1>
<p align="center">This application emulates the management of a hotel, providing various functionalities needed for hotel operations. It is built with React and React-Query and connects to a Supabase API. </p>
<br>

## 🌟 Key Features

<details><summary><b>See more details</b></summary>

- **Authentication & Authorization**

  - Hotel employees can log in to the application to perform tasks.
  - New users can only be signed up within the application to ensure that only actual hotel employees can create accounts.

- **User Profile Management**

	- Users can upload an avatar to personalize their profile.
	- Users can change their name and password.

	
- **Cabin Management**

  - The app provides a table view with all cabins.
  - The table view displays cabin information, including cabin photo, name, capacity, price, and current discount.
  - Users can update or delete existing cabins.
  - Users can create new cabins, including the ability to upload a photo.

- **Booking Management**

	- The app provides a table view with all bookings.
	- The table view displays booking information, including arrival and departure dates, booking status, paid amount, cabin details, and guest data.
	- Booking status can be "unconfirmed," "checked in," or "checked out."
	- The table view is filterable by booking status.
	- Additional booking data includes the number of guests, number of nights, guest observations, and whether breakfast was booked and its price.

- **Booking Operations**

	- Users can delete, check in, or check out a booking as the guest arrives.
	- On check-in, users can accept payment outside the app and then confirm the payment within the app.
	- Guests can add breakfast for the entire stay during check-in if they haven't already.

- **Guest Data Management:**

	- Guest data contains full name, email, national ID, nationality, and a country flag for easy identification.

- **Dashboard**

	- The initial app screen serves as a dashboard displaying important information for the last 7, 30, or 90 days.
	- It shows a list of guests checking in and out on the current day, and users can perform tasks related to these activities from the dashboard.
	- The dashboard provides statistics on recent bookings, sales, check-ins, and occupancy rates.
	- It includes a chart showing all daily hotel sales, distinguishing between "total" sales and "extras" sales (only breakfast at present).
	- There's also a chart displaying statistics on stay durations, an important metric for the hotel.

- **Application Settings**

	- Users can define application-wide settings such as breakfast price, minimum and maximum nights per booking, and maximum guests per booking.

- **Dark Mode**

  - The app includes a dark mode option for a different visual appearance and enhanced user experience in low-light conditions.

</details>

## 📷 Screenshots

![the-wild-oasis-login](https://github.com/user-attachments/assets/3e0f9ccc-2e8d-41d9-a6d7-3b83f238b610)
![the-wild-oasis-dashboard](https://github.com/user-attachments/assets/64c8db87-49ab-4d2d-b1d5-7ac532e300ee)
![the-wild-oasis-bookings](https://github.com/user-attachments/assets/6e0d6d7e-7eab-4856-a635-b8ac9fb6666a)
![the-wild-oasis-single-booking](https://github.com/user-attachments/assets/38911cc7-6672-4eae-bcbe-3718876836ec)

## 💻 Tech Stack Unveiled

⚡️ **React**: Crafting user interfaces like a master artist.\
⚡️ **Supabase**: Your data, securely stored and real-time ready.\
⚡️ **@tanstack/react-query**: Data-fetching? Handled with finesse.\
⚡️ **date-fns**: Date manipulation, now a piece of cake.\
⚡️ **react-router-dom**: Navigate your app like a seasoned explorer.\
⚡️ **recharts**: Charting made as elegant as a ballroom dance.\
⚡️ **styled-components**: Style that speaks your brand's language.\
⚡️ **react-hot-toast**: Notifications with a sprinkle of fun.\
⚡️ **react-icons**: Icons that add that extra sparkle.\
⚡️ **react-hook-form**: Form handling, redefined.

## 🛠️ Installation - A Breeze

```markdown
1. Clone the repository:
   git clone https://github.com/web223dev/the-wild-oasis.git

2. Install dependencies:
   npm install

3. Start the development server:
   npm run dev

4. Access the application:
   http://localhost:5173 or your specified local URL
```

## 🎮 Demo Account - Take a Test Drive

- **Email Address**: ross@example.com
- **Password**: 1234

## Contributing 💡

#### Step 1

- **Option 1**

  - 🍴 Fork this repo!

- **Option 2**
  - 👯 Clone this repo to your local machine.

#### Step 2

- **Build your code** 🔨🔨🔨

#### Step 3

- 🔃 Create a new pull request.

## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details.
