import express from 'express';
import storage from './memory_storage.js';

const app = express(); 

//Authentification section

app.post("/api/users", async (req, res) => {
    // URL: http://localhost:3000/api/users
    // headers: Content-Type: application/json
    // body: {
    //     name: "Feliks Elezovic",
    //     email: "felikselezovic@gmail.com",
    //     password: "feliksfeliks"
    // }
    return res.send("kdajfajfčsajfajfčkajflkdaf7df8dsafakfdlajfdlksajfčlkdsajfdlsafdsafdsafdsafadfdafada")
})

app.post("/api/auth", async (req, res) => {
    // URL: http://localhost:3000/api/users
    // headers: Content-Type: application/json
    // body: {
    //     email: "felikselezovic@gmail.com",
    //     password: "feliksfeliks"
    // }
    return res.send("kdajfajfčsajfajfčkajflkdaf7df8dsafakfdlajfdlksajfčlkdsajfdlsafdsafdsafdsafadfdafada")
})

// Books Section

app.get('/api/books', (req, res) => {
    res.json(storage.books);
});

app.get('/api/books/:id', (req, res) => {
    var id = req.params.id;
    var book = storage.books.filter(c => c.id = id)
    res.json(book);
});

app.post('/api/books', (req, res) => {
    // URL: http://localhost:3000/api/books
    // headers: 
    // Content - Type: application / json
    // x - auth - token: kdajfajfčsajfajfčkajflkdaf7df8dsafakfdlajfdlksajfčlkdsajfdlsafdsafdsafdsafadfdafada
    // body: {
        // naslov: "Hamlet",
        // autorId: 1,
        // zanr: "tragedy",
        // isbn: "978-3-16-148410-0",
        // imageUrl: "https://png.pngtree.com/png-clipart/20190603/original/pngtree-water-color-ink-png-image_167673.jpg"
    //}

    res.send({
        id: 1,
        naslov: "Hamlet",
        autorId: 1,
        zanr: "tragedy",
        isbn: "978-3-16-148410-0",
        imageUrl: "https://png.pngtree.com/png-clipart/20190603/original/pngtree-water-color-ink-png-image_167673.jpg"
    })
})

app.put('/api/books/:id', (req, res) => {
    var id = req.params.id;
    // URL: http://localhost:3000/api/books/1
    // headers: 
    // Content - Type: application / json
    // x - auth - token: kdajfajfčsajfajfčkajflkdaf7df8dsafakfdlajfdlksajfčlkdsajfdlsafdsafdsafdsafadfdafada
    // body: {
    // naslov: "Hamlet",
    // autorId: 1,
    // zanr: "tragedy",
    // isbn: "978-3-16-148410-0",
    // imageUrl: "https://png.pngtree.com/png-clipart/20190603/original/pngtree-water-color-ink-png-image_167673.jpg"
    //}

    res.send({
        id: 1,
        naslov: "Hamlet",
        autorId: 1,
        zanr: "tragedy",
        isbn: "978-3-16-148410-0",
        imageUrl: "https://png.pngtree.com/png-clipart/20190603/original/pngtree-water-color-ink-png-image_167673.jpg"
    })
})

app.delete('/api/books/:id', (req, res) => {
    var id = req.params.id;
    // URL: http://localhost:3000/api/books/1
    // headers: 
    // Content - Type: application / json
    // x - auth - token: kdajfajfčsajfajfčkajflkdaf7df8dsafakfdlajfdlksajfčlkdsajfdlsafdsafdsafdsafadfdafada
    res.send(true)
})

//Author section

app.get('/api/autor', (req, res) => {
    res.json(storage.autor);
});

app.get('/api/autor/:id', (req, res) => {
    var id = req.params.id;
    var autor = storage.autor.filter(c => c.id = id)
    res.json(autor);
});

app.post('/api/autor', (req, res) => {
    // URL: http://localhost:3000/api/autor
    // headers: 
    // Content - Type: application / json
    // x - auth - token: kdajfajfčsajfajfčkajflkdaf7df8dsafakfdlajfdlksajfčlkdsajfdlsafdsafdsafdsafadfdafada
    // body: {
        // name: "William",
        // lastname: "Faulkner"
    //}

    res.send({
        id: 1,
        name: "William",
        lastname: "Faulkner"
    })
})

app.put('/api/autor/:id', (req, res) => {
    var id = req.params.id;
    // URL: http://localhost:3000/api/autor/1
    // headers: 
    // Content - Type: application / json
    // x - auth - token: kdajfajfčsajfajfčkajflkdaf7df8dsafakfdlajfdlksajfčlkdsajfdlsafdsafdsafdsafadfdafada
    // body: {
    // name: "William",
    // lastname: "Faulkner"
    //}

    res.send({
        id: 1,
        name: "William",
        lastname: "Faulkner"
    })
})

app.delete('/api/books/:id', (req, res) => {
    var id = req.params.id;
    // URL: http://localhost:3000/api/autor/1
    // headers: 
    // Content - Type: application / json
    // x - auth - token: kdajfajfčsajfajfčkajflkdaf7df8dsafakfdlajfdlksajfčlkdsajfdlsafdsafdsafdsafadfdafada
    res.send(true)
})

// Reservation section

app.get('/api/reservation', (req, res) => {
    res.json(storage.reservation);
});

app.get('/api/reservation/:id', (req, res) => {
    var id = req.params.id;
    var reservation = storage.reservation.filter(c => c.id = id)
    res.json(reservation);
});

app.post('/api/reservation', (req, res) => {
    // URL: http://localhost:3000/api/reservation
    // headers: 
    // Content - Type: application / json
    // x - auth - token: kdajfajfčsajfajfčkajflkdaf7df8dsafakfdlajfdlksajfčlkdsajfdlsafdsafdsafdsafadfdafada
    // body: {
        // bookId: 1,
        // stardDate: "2021-05-10",
        // endDate: "2021-05-15",
        // userId: 1
    //}

    res.send({
        id: 1,
        bookId: 1,
        stardDate: "2021-05-10",
        endDate: "2021-05-15",
        userId: 1
    })
})

app.put('/api/reservation/:id', (req, res) => {
    var id = req.params.id;
    // URL: http://localhost:3000/api/autor/1
    // headers: 
    // Content - Type: application / json
    // x - auth - token: kdajfajfčsajfajfčkajflkdaf7df8dsafakfdlajfdlksajfčlkdsajfdlsafdsafdsafdsafadfdafada
    // body: {
        // bookId: 1,
        // stardDate: "2021-05-10",
        // endDate: "2021-05-15",
        // userId: 1
    //}

    res.send({
        id: 1,
        bookId: 1,
        stardDate: "2021-05-10",
        endDate: "2021-05-15",
        userId: 1
    })
})

app.delete('/api/reservation/:id', (req, res) => {
    var id = req.params.id;
    // URL: http://localhost:3000/api/reservation/1
    // headers: 
    // Content - Type: application / json
    // x - auth - token: kdajfajfčsajfajfčkajflkdaf7df8dsafakfdlajfdlksajfčlkdsajfdlsafdsafdsafdsafadfdafada
    res.send(true)
})



const port = 3000
app.listen(port, () => console.log("Backend se vrti na portu: " + port));
