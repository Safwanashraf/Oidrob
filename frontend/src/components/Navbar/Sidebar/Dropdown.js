// Dropdown.js  
import React, { useState } from 'react';  

const Dropdown = ({ titleComponent, children }) => {  
    const [isOpen, setIsOpen] = useState(false);  

    const toggleDropdown = () => {  
        setIsOpen((prev) => !prev);  
    };  

    const closeDropdown = () => {  
        setIsOpen(false);  
    };  

    return (  
        <div className="relative inline-block text-left">  
            <div>  
                <button  
                    onClick={toggleDropdown}  
                    className="w-full pl-2 hover:bg-custom-b-f hover:rounded-md flex items-center "  
                    id="menu-button"  
                    aria-expanded={isOpen}  
                    aria-haspopup="true"  
                >  
                    <svg  
                        className={`-mr-1 text-custom-gray h-5 w-5 hover:text-custom-text-b transform transition-transform duration-200 ${isOpen ? '-rotate-180' : ''}`}  
                        xmlns="http://www.w3.org/2000/svg"  
                        viewBox="0 0 20 20"  
                        fill="currentColor"  
                        aria-hidden="true"  
                        >  
                        <path  
                            fillRule="evenodd"  
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"  
                            clipRule="evenodd"  
                            />  
                    </svg>
                    {titleComponent}
                    <div className=''>
                    <svg className='' width="12" height="12" xmlns="http://www.w3.org/2000/svg">  
                        <line x1="6" y1="1" x2="6" y2="11" stroke="white" stroke-width="1" />  
                        <line x1="1" y1="6" x2="11" y2="6" stroke="white" stroke-width="1" />  
                    </svg> 
                    </div>
                </button>  
            </div>  

            {isOpen && (  
                <div    
                role="menu"  
                aria-orientation="vertical"  
            >  
                <div role="none">  
                    {children}  
                </div> 
                {/* <div className="py-1" role="none">  
                        {React.Children.map(children, (child) => {  
                            // Clone child to add onClick handler  
                            return React.cloneElement(child, {  
                                onClick: () => {  
                                    if (child.props.onClick) {  
                                        child.props.onClick();  
                                    }  
                                    closeDropdown();  
                                },  
                            });  
                        })}  
                </div>    */}
            </div>  
            )}  
        </div>  
    );  
};  

export default Dropdown;