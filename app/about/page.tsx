import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";

export default function Page() {
    return <>
        <div className="container py-4">
            <div className="row">
                <Header />
                <Nav />
                <div className="col-9">
                    <img className="d-block w-100 mb-3" src="https://fastly.picsum.photos/id/251/1280/720.jpg?hmac=YDyCcHsQDDzvzCfZ-MLi2fr2pFqpoH9OqSqmJFBwV7w" />
                    <h1>About Us!</h1>
                    <p>
                    Welcome to Brewed Awakening, your new neighborhood coffee shop where every cup tells a story! We&apos;re passionate about sourcing the finest beans from sustainable farms around the world, roasted to perfection right here in our cozy space. Whether you&apos;re looking for a bold espresso, a creamy latte, or a refreshing cold brew, we&apos;ve got something for every coffee lover. Join us for a warm atmosphere, local art, and community events that make every visit special. Let&apos;s brew something amazing together!
                    </p>
                </div>
            </div>
        </div>
    </>
}