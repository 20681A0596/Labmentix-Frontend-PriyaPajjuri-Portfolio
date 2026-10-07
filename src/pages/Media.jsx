/*import React, { useEffect, useState } from "react";
import { getMedia } from "../services/mediaService";
import "./Media.jsx";

function Media() {
    const [media, setMedia] = useState([]);

    useEffect(() => {
        getMedia().then((data) => setMedia(data));
    }, []);

    return (
        <section className="media">
            <h2>Media Gallery</h2>
            <p className="media-intro">
                Explore highlights from my projects, certifications, and portfolio visuals.
            </p>
            <div className="media-grid">
                {media.map((m) => (
                    <div key={m.id} className="media-card">
                        <div className="media-img-wrapper">
                            <img src={m.url} alt={m.title} className="media-img" />
                            <div className="media-overlay">
                                <span>View</span>
                            </div>
                        </div>
                        <p className="media-title">{m.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Media;*/
import React from "react";
import "./Media.jsx";

// Example certificate images (place them in src/assets/)
import cert1 from "../assets/certificate1.jpg";
import cert2 from "../assets/certificate2.jpg";

function Media() {
    const certificates = [
        {
            id: 1,
            title: "Great Learning Java Programming",
            description: "Completed an jave learning at an begineer level  .",
            image: cert1
        },
        {
            id: 2,
            title: "Codsoft Java Development Internship",
            description: "Worked on Java projects including OOP concepts, data structures, and backend development.",
            image: cert2
        }
    ];

    return (
        <section className="media">
            <h2>Certificates</h2>
            <div className="media-grid">
                {certificates.map((c) => (
                    <div key={c.id} className="media-card">
                        <img src={c.image} alt={c.title} className="media-img" />
                        <div className="media-info">
                            <h3>{c.title}</h3>
                            <p>{c.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Media;


