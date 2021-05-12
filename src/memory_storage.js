let storage = {
    user: [
        {
            id: 1,
            email: "felikselezovic@gmail.com",
            password: "feliksfeliks",
            mode: "user"
        },
        {
            id: 2,
            email: "ivanIvic@gmail.com",
            password: "ivanivan",
            mode: "librarian"
        },
    ],

    autor:[
        {
            id: 1,
            name: "William",
            lastname: "Shakespeare"
        },
        {
            id: 2,
            name: "William",
            lastname: "Faulkner"
        }

    ],

    books: [
        {
            id: 1,
            naslov: "Hamlet",
            autorId: 1,
            zanr: "tragedy",
            isbn: "978-3-16-148410-0",
            imageUrl: "https://png.pngtree.com/png-clipart/20190603/original/pngtree-water-color-ink-png-image_167673.jpg"
        },
        {
            id: 2,
            naslov: "Komarac",
            autorId: 2,
            zanr: "comedi",
            isbn: "978-3-16-148410-1",
            imageUrl: "https://pngimg.com/uploads/butterfly/butterfly_PNG1046.png"
        }
    ],

    reservation: [
        {
            id: 1,
            bookId: 1,
            stardDate: "2021-05-10",
            endDate: "2021-05-15",
            userId: 1
        },
        {
            id: 2,
            bookId: 2,
            stardDate: "2021-05-10",
            endDate: "2021-05-19",
            userId: 1
        },
        {
            id: 3,
            bookId: 1,
            stardDate: "2021-05-16",
            endDate: "2021-05-15",
            userId: 2
        },
    ]

}
export default storage;