import React from "react";
import { useNavigate } from 'react-router-dom'
import './directory-category.styles.scss'

const DirectoryCategory = ({ route, imageUrl, title }) => {

    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate(route)
    }
    return (
        <div className="directory-item-container" onClick={navigateHandler}>
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="body">
                <h2>{title.charAt(0).toUpperCase() + title.slice(1)}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
};

export default DirectoryCategory;
