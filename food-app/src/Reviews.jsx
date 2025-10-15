import React from 'react';

const Reviews = () => {

    const Review = [
        {
            id: 1,
            comment: "This restaurant has the best food in India and I recommend it.",
            image_url: "https://randomuser.me/api/portraits/men/32.jpg",
            name: "John Mike"
        },
        {
            id: 2,
            comment: "I ate at AR Restaurant last week and I really enjoyed it.",
            image_url: "https://randomuser.me/api/portraits/women/44.jpg",
            name: "Maria Cruz"
        },
        {
            id: 3,
            comment: "A friend recommended this restaurant to me and I'm really glad I came!",
            image_url: "https://www.shutterstock.com/image-photo/confident-smiling-middle-aged-business-600nw-2451544833.jpg",
            name: "Anna Gold"
        },
        {
            id: 4,
            comment: "Very nice restaurant, tasty food and professional staff.",
            image_url: "https://randomuser.me/api/portraits/men/65.jpg",
            name: "Nick Burn"
        }
    ];

    return (
        <div className='background-styles mt-5'>
            <h2 className="text-center mb-5 fw-bold black-icon">Customer Reviews</h2>

            <div className="d-flex flex-wrap justify-content-center gap-5">
                {Review?.map((item) => (
                    <div
                        key={item?.id}
                        className="card shadow-sm bg-light text-dark"
                        style={{ width: "40%" }}
                    >
                        <div className="card-body d-flex flex-column justify-content-between fs-5">
                            <p className="card-text">“{item?.comment}”</p>
                        </div>
                        <div className="card-footer border-0 d-flex align-items-center bg-secondary-subtle">
                            <img
                                src={item?.image_url}
                                alt={item?.name}
                                className="rounded-circle me-2"
                                style={{ width: "60px", height: "60px", objectFit: "cover" }}
                            />
                            <strong className='fs-5'>{item?.name}</strong>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Reviews