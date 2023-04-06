import React, { Component } from "react";

class Carousel extends Component<{ images: string[] }, { active: number }> {
    static defaultProps = {
        images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
    };

    constructor(props: { images: string[] }) {
        super(props);
        this.state = { active: 0 };
    }

    render() {
        const { active } = this.state;
        const { images } = this.props;

        return (
            <div className="carousel">
                <img src={images[active]} alt="animal hero" />
                <div className="carousel-smaller">
                    {images.map((image, index) => (
                        <img
                            key={image}
                            src={image}
                            className={index === active ? "active" : ""}
                            alt="animal thumbnail"
                            onClick={() => this.setState({ active: index })}
                            data-index={index}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Carousel;
