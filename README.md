# Book-Vibe 📚

**Book-Vibe** is an online book reader Single Page Application (SPA) built with **React**.  

It allows users to explore books, keep track of their reading, manage a wishlist, and visualize their reading progress.  

---

## Features ✨

- **Static Navbar**: The navbar remains fixed across all pages.  

- **Home Page**:  
  - Displays all books as cards.  
  - Clicking a card opens the book's **Details Page**.  

- **Book Details Page**:  
  - Two buttons: **Read** and **Wishlist**  
  - Clicking **Read** adds the book to the **Read Books** tab.  
  - Clicking **Wishlist** adds the book to the **Wishlist** tab.  
  - Each action triggers a **Toastify** notification.  

- **Listed Books Page**:  
  - Two tabs: **Read Books** and **Wishlist Books**  
  - Sort books by **Rating**, **Number of Pages**, or **Publishing Year**  

- **Pages to Read Page**:  
  - Shows a **Triangular Bar Chart** representing books read.  
  - X-axis: Book Name, Y-axis: Total Pages  
  - Initially hidden; updates dynamically when a book is marked as read.  

- **Local Storage Integration**:  
  - All book data, read status, and wishlist are saved in the browser.  

---

## Tech Stack 🛠️

- **Frontend**: React.js  
- **Styling**: Tailwind CSS  
- **Notifications**: React-Toastify  
- **Charts**: Chart.js (Triangular Bar Chart)  
- **Data Persistence**: Local Storage  

---

## How to Run 🚀

1. Clone the repository  
```bash
git clone https://github.com/alfu-git/m-39-book-vibe