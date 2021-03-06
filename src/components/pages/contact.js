import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div className="contact-bullet-points">
                <div className="bullet-point-group">
                    <div className="icon">
                    <FontAwesomeIcon icon="phone" />
                    </div>

                    <div className="text">808-347-0035</div>
                </div>

                <div className="bullet-point-group">
                    <div className="icon">
                    <FontAwesomeIcon icon="envelope" />
                    </div>

                    <div className="text">william.r.fontanez@gmail.com</div>
                </div>

                <div className="bullet-point-group">
                    <div className="icon">
                    <FontAwesomeIcon icon="map-marked-alt" />
                    </div>

                    <div className="text">Scott AFB, IL</div>
                </div>
            </div>
        </div>
    );
}