import React, { useState } from 'react';
import styles from "./DropDownMenu.module.scss";


function DropDownMenu({taskStatus, statuses, onChange}) {

    const [isOpen, setIsOpen] = useState(false)

    function handleStatusChange(status){
        onChange(status)
        setIsOpen(false)
    }

    function handleToggle(){
        setIsOpen(!isOpen)
    }

    const buttonClass = taskStatus === statuses.onPause ? `${styles.dropdownButton} ${styles.paused}` : styles.dropdownButton;

    return (
        <div className={styles.dropdown}>
            <button className={buttonClass} onClick={handleToggle} >
                {taskStatus}
                <span className={styles.arrow} >{isOpen ? '▲' : '▼'}</span>
            </button>
            {isOpen && (
                <div className={styles.dropdownContent}>
                    {Object.values(statuses).map((stat, index) =>(
                        <div 
                        key={index}
                        className={styles.dropdownItem}
                        onClick={() => handleStatusChange(stat)}
                        >
                            {stat}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropDownMenu;