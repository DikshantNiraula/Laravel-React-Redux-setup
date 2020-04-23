import React from "react";

function Navbar() {
    return (
        <div>
            <nav>
                <div className="nav-wrapper px-5  teal lighten-2">
                    <a href="#" className="brand-logo">
                        React Made
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <a href="sass.html">Posts</a>
                        </li>
                        <li>
                            <a href="badges.html">Other Links</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
