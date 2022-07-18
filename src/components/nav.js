import * as React from 'react';
import { Link } from 'gatsby';

const Nav = () => {
    return (
        <nav>
            <ul>
                <Link to="/"><h3>Home</h3></Link>
                <Link to="/buy"><h3>Buy or Rent</h3></Link>
                <Link to="/mortgages"><h3>Our Mortgages</h3></Link>
                <Link to="/contact"><h3>Contact</h3></Link>
            </ul>
        </nav>
    )
}

export default Nav;