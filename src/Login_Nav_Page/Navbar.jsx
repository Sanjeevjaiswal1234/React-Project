import React from 'react';

const Navbar = () => {
  return (
    <div>
        <nav class="navbar">
    <div class="logo">MySite</div>

    <ul class="nav-links">
      <li><a href="/home">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="/login" class="login">Login</a></li>
      <li><a href="/" class="signup">Sign Up</a></li>
    </ul>
  </nav>
    </div>
  )
}

export default Navbar