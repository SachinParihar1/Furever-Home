 // Sample data structure matching the database
        const pets = [
            {id: 1, name: 'Buddy', species: 'Dog', breed: 'Golden Retriever', age: 3, gender: 'Male', health: 'Healthy', shelter: 'Happy Paws Shelter', image:'images/Golden retriever.jpeg' },
            {id: 2, name: 'Luna', species: 'Cat', breed: 'Persian', age: 2, gender: 'Female', health: 'Healthy', shelter: 'Happy Paws Shelter', image:'images/Persian.jpeg'},
            {id: 3, name: 'Max', species: 'Dog', breed: 'German Shepherd', age: 5, gender: 'Male', health: 'Healthy', shelter: 'Rescue Haven', image:'images/German Shephard.jpeg'},
            {id: 4, name: 'Bella', species: 'Cat', breed: 'Siamese', age: 1, gender: 'Female', health: 'Vaccinated', shelter: 'Rescue Haven', image:'images/Siamese.jpeg'},
            {id: 5, name: 'Charlie', species: 'Dog', breed: 'Labrador', age: 4, gender: 'Male', health: 'Minor Injury', shelter: 'Animal Care Center', image:'images/Labrador.jpeg'},
            {id: 6, name: 'Daisy', species: 'Cat', breed: 'Maine Coon', age: 3, gender: 'Female', health: 'Healthy', shelter: 'Animal Care Center', image:'images/Maine Coon.jpeg'},
            {id: 7, name: 'Rocky', species: 'Dog', breed: 'Beagle', age: 2, gender: 'Male', health: 'Healthy', shelter: 'Safe Haven Shelter', image: 'images/Beagle.jpeg'},
            {id: 8, name: 'Molly', species: 'Cat', breed: 'British Shorthair', age: 4, gender: 'Female', health: 'Healthy', shelter: 'Pet Paradise', image:'images/British Short haired.jpeg'},
            {id: 9, name: 'Cooper', species: 'Dog', breed: 'Bulldog', age: 6, gender: 'Male', health: 'Senior Care', shelter: 'Love & Care Shelter', image:'images/Bull Dog.jpeg'},
            {id: 10, name: 'Sophie', species: 'Cat', breed: 'Ragdoll', age: 1, gender: 'Female', health: 'Healthy', shelter: 'Guardian Angels', image:'images/Rag Doll.jpeg'}
        ];

        const shelters = [
            {id: 1, name: 'Happy Paws Shelter', location: '123 Main St, Mumbai', phone: '022-12345678' ,image:'images/Shelter 1.jpeg'},
            {id: 2, name: 'Rescue Haven', location: '456 Park Ave, Delhi', phone: '011-23456789', image:'images/Shelter 22.jpeg'},
            {id: 3, name: 'Animal Care Center', location: '789 Lake Road, Bangalore', phone: '080-34567890',image:'images/Shelter 3.jpeg'},
            {id: 4, name: 'Safe Haven Shelter', location: '321 Hill St, Chennai', phone: '044-45678901' ,image:'images/Shelter 4.jpeg'},
            {id: 5, name: 'Pet Paradise', location: '654 Beach Road, Goa', phone: '0832-5678901',image:'images/Shelter 5.jpeg'},
            {id: 6, name: 'Love & Care Shelter', location: '987 Garden St, Pune', phone: '020-67890123', image:'images/Shelter 6.jpeg'},
            {id: 7, name: 'Guardian Angels', location: '147 Valley Road, Kolkata', phone: '033-78901234', image:'images/Shelter 7.jpeg'},
            {id: 8, name: 'Furry Friends Home', location: '258 River St, Hyderabad', phone: '040-89012345', image:'images/Shelter 8.jpeg'},
            {id: 9, name: 'Compassion Shelter', location: '369 Forest Ave, Jaipur', phone: '0141-90123456',image:'images/Shelter 9.jpeg'},
            {id: 10, name: 'Second Chance Rescue', location: '741 Mountain Road, Ahmedabad', phone: '079-01234567', image:'images/Shelter 10.jpeg'}
        ];

        const medicalRecords = [
            {pet: 'Buddy', date: '2024-01-10', diagnosis: 'Routine Checkup', treatment: 'Vaccination - Rabies', vet: 'Dr. Sunil Mehta',image:'images/Golden retriever.jpeg'},
            {pet: 'Luna', date: '2024-02-15', diagnosis: 'Ear Infection', treatment: 'Antibiotics prescribed', vet: 'Dr. Anjali Verma',image:'images/Persian.jpeg'},
            {pet: 'Max', date: '2024-03-05', diagnosis: 'Routine Checkup', treatment: 'Vaccination - Distemper', vet: 'Dr. Ravi Iyer', image:'images/German Shephard.jpeg'},
            {pet: 'Bella', date: '2024-04-01', diagnosis: 'Dental Cleaning', treatment: 'Teeth cleaning performed', vet: 'Dr. Lakshmi Nair', image:'images/Siamese.jpeg'},
            {pet: 'Charlie', date: '2024-05-10', diagnosis: 'Minor Leg Injury', treatment: 'Bandage and pain relief', vet: 'Dr. Arjun Rao', image:'images/Labrador.jpeg'},
            {pet: 'Daisy', date: '2024-06-18', diagnosis: 'Routine Checkup', treatment: 'Vaccination - FVRCP', vet: 'Dr. Neha Joshi', image:'images/Maine Coon.jpeg'}
        ];

        let currentSpeciesFilter = 'All';

        function showPage(pageName) {
            document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
            document.getElementById(pageName).classList.add('active');
            
            document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
            event.target.classList.add('active');

            if (pageName === 'pets') loadPets();
            if (pageName === 'adopt') loadAdoptForm();
            if (pageName === 'donate') loadDonateForm();
            if (pageName === 'surrender') loadSurrenderForm();
            if (pageName === 'shelters') loadShelters();
            if (pageName === 'medical') loadMedical();
        }

        function setSpeciesFilter(btn) {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSpeciesFilter = btn.dataset.species;
            filterPets();
        }

        function filterPets() {
            const searchTerm = document.getElementById('searchBreed').value.toLowerCase();
            
            let filtered = pets.filter(pet => {
                const matchesSearch = pet.breed.toLowerCase().includes(searchTerm);
                const matchesSpecies = currentSpeciesFilter === 'All' || pet.species === currentSpeciesFilter;
                return matchesSearch && matchesSpecies;
            });

            const grid = document.getElementById('petsGrid');
            if (filtered.length === 0) {
                grid.innerHTML = '<div style="text-align: center; padding: 3rem; color: #ff6b9d; font-size: 1.2rem;">😢 No pets found matching your criteria. Try different filters!</div>';
            } else {
                grid.innerHTML = filtered.map(pet => `
                    <div class="card">
                        <div class="card-image">
                        
                         <img src="${pet.image}" alt="${pet.name}"class="card-content"> </div>
                        <div class="card-content">
                            <h3>${pet.name}</h3>
                            <p><strong>Species:</strong> ${pet.species}</p>
                            <p><strong>Breed:</strong> ${pet.breed}</p>
                            <p><strong>Age:</strong> ${pet.age} years</p>
                            <p><strong>Gender:</strong> ${pet.gender}</p>
                            <p><strong>Shelter:</strong> ${pet.shelter}</p>
                            <span class="pet-badge badge-${pet.health.toLowerCase().replace(' ', '-')}">${pet.health}</span>
                        </div>
                    </div>
                `).join('');
            }
        }

        function loadPets() {
            filterPets();
        }

        function loadAdoptForm() {
            const select = document.getElementById('petSelect');
            select.innerHTML = '<option value="">Choose a pet...</option>' + 
                pets.map(pet => `<option value="${pet.id}">${pet.name} (${pet.species} - ${pet.breed})</option>`).join('');
        }

        function loadDonateForm() {
            const select = document.getElementById('shelterSelect');
            select.innerHTML = '<option value="">Choose a shelter...</option>' + 
                shelters.map(shelter => `<option value="${shelter.id}">${shelter.name}</option>`).join('');
        }

        function loadSurrenderForm() {
            const select = document.getElementById('shelterSelectSurrender');
            select.innerHTML = '<option value="">Choose a shelter...</option>' + 
                shelters.map(shelter => `<option value="${shelter.id}">${shelter.name}</option>`).join('');
        }

        function loadShelters() {
            const grid = document.getElementById('sheltersGrid');
            grid.innerHTML = shelters.map(shelter => `
                <div class="card">
                   <div class="card-image">
                        
                         <img src="${shelter.image}" alt="${shelter.name}"class="card-content"> </div>
                    <div class="card-content">
                        <h3>${shelter.name}</h3>
                        <p><strong>📍 Location:</strong> ${shelter.location}</p>
                        <p><strong>📞 Contact:</strong> ${shelter.phone}</p>
                    </div>
                </div>
            `).join('');
        }

        function loadMedical() {
            const grid = document.getElementById('medicalGrid');
            grid.innerHTML = medicalRecords.map(record => `
                <div class="card">
                   <div class="card-image">
                        
                         <img src="${record.image}" alt="${record.name}"class="card-content"> </div>
                    <div class="card-content">
                        <h3>${record.pet}</h3>
                        <p><strong>Date:</strong> ${record.date}</p>
                        <p><strong>Diagnosis:</strong> ${record.diagnosis}</p>
                        <p><strong>Treatment:</strong> ${record.treatment}</p>
                        <p><strong>Vet:</strong> ${record.vet}</p>
                    </div>
                </div>
            `).join('');
        }

        document.getElementById('adoptionForm').addEventListener('submit', function(e) {
           
        });

        document.getElementById('donationForm').addEventListener('submit', function(e) {
           
        });

        document.getElementById('surrenderForm').addEventListener('submit', function(e) {
           
        });

        // Initialize
        loadPets();
   