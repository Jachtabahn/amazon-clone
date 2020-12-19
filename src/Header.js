import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="Header">
            {/* Logo */}
            <div className="Header-logo">
                <img src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png" />
            </div>
            {/* Address */}
            <div className="Header-optionAddress">
                {/* icon */}
                <div className="Header-option">
                    <span className="Header-optionLineOne">Hello,</span>
                    <span className="Header-optionLineTwo">Select your address</span>
                </div>
            </div>
            {/* Search */}
            <div className="Header-search">
                <input className="Header-searchInput" type="text"></input>
                <div className="Header=searchIconContainer">
                    {/* Icon */}

                </div>
            </div>
            <div className="Header-navItems">
                {/* Login name */}
                <div className="Header-option">
                    <span className="Header-optionLineOne">Hello, Dimitri</span>
                    <span className="Header-optionLineTwo">Accounts & Lists</span>
                </div>
                {/* Orders */}
                <div className="Header-option">
                    <span className="Header-optionLineOne">Returns</span>
                    <span className="Header-optionLineTwo">& Orders</span>
                </div>
                {/* Cart */}
            </div>
        </div>
    )
}

export default Header
