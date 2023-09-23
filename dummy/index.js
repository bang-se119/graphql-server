export default {
    creators: [
        {
            id: "1",
            name: "Đặng Duy Bằng",
            dateOfBirth: "2001-12-26T00:00:00.000Z",
            position: "director"
        }
    ],
    products: [
        {
            id: "1",
            name: "Hada Labo",
            short_name: "HL",
            creatorId: "1",
            categoryId: "2"
        },
        {
            id: "2",
            name: "Sunplay",
            short_name: "Sun",
            creatorId: "2",
            categoryId: "1"
        },
        {
            id: "3",
            name: "Giay Sai Gon",
            short_name: "Giay SG",
            creatorId: "1",
            categoryId: "1"
        }
    ],
    categories: [
        {
            id: "1",
            name: "Body",
            creatorId: "1"
        },
        {
            id: "2",
            name: "Face",
            creatorId: "1"
        },
    ]
}