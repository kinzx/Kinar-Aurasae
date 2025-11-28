$(document).ready(function() {
    
    // 1. Sidebar Toggle Logic
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    // --- LOGIKA CRUD ---

    // Inisialisasi Data (Ambil dari LocalStorage atau Array Kosong)
    let students = JSON.parse(localStorage.getItem('students')) || [];

    // Fungsi Render Tabel (Read)
    function renderTable() {
        const tbody = $("#student-table-body");
        tbody.empty(); // Kosongkan tabel sebelum render ulang

        if (students.length === 0) {
            $("#empty-state").removeClass("d-none");
        } else {
            $("#empty-state").addClass("d-none");
            
            // Loop data array
            students.forEach((student, index) => {
                const row = `
                    <tr>
                        <th scope="row">${index + 1}</th>
                        <td>${student.nim}</td>
                        <td>${student.nama}</td>
                        <td>${student.jurusan}</td>
                        <td>
                            <button class="btn btn-sm btn-white btn-edit me-1" data-id="${student.id}">
                                <i class="bi bi-pencil-square"></i>
                            </button>
                            <button class="btn btn-sm btn-dark btn-delete" data-id="${student.id}">
                                <i class="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                `;
                tbody.append(row);
            });
        }
        // Update statistik jumlah
        $("#total-students").text(students.length);
    }

    // Fungsi Simpan ke LocalStorage
    function saveData() {
        localStorage.setItem('students', JSON.stringify(students));
        renderTable();
    }

    // Panggil render saat pertama kali load
    renderTable();

    // 2. Create & Update Logic
    $("#studentForm").submit(function(e) {
        e.preventDefault();

        const id = $("#studentId").val();
        const nim = $("#nim").val(); // Mengambil nilai NIM
        const nama = $("#nama").val();
        const jurusan = $("#jurusan").val();

        // --- MULAI VALIDASI DI SINI ---
        
        // 1. Cek apakah NIM panjangnya pas 10 karakter
        if (nim.length !== 10) {
            alert("NIM harus terdiri dari 10 angka!");
            return; // Stop! Jangan lanjutkan kode di bawah
        }

        // 2. (Opsional) Cek apakah NIM sudah ada (agar tidak duplikat)
        // Kita cek hanya jika ini adalah 'Tambah Baru' (id kosong), atau jika edit tapi NIM berubah
        const existingStudent = students.find(s => s.nim === nim && s.id != id);
        if (existingStudent) {
            alert("NIM sudah terdaftar! Silakan gunakan NIM lain.");
            return; // Stop!
        }

        // --- AKHIR VALIDASI ---

        // Jika lolos validasi di atas, kode di bawah ini baru akan jalan:
        
        if (id) {
            // --- UPDATE (Edit Data) ---
            const index = students.findIndex(s => s.id == id);
            if (index !== -1) {
                students[index] = { id, nim, nama, jurusan };
            }
        } else {
            // --- CREATE (Tambah Data) ---
            const newStudent = {
                id: Date.now(),
                nim: nim,
                nama: nama,
                jurusan: jurusan
            };
            students.push(newStudent);
        }

        saveData();
        
        // Tutup Modal dan Reset Form
        const modalEl = document.getElementById('studentModal');
        const modal = bootstrap.Modal.getInstance(modalEl);
        modal.hide();
        $("#studentForm")[0].reset();
        $("#studentId").val("");
    });

    // 3. Persiapan Edit (Event Delegation jQuery untuk elemen dinamis)
    $(document).on("click", ".btn-edit", function() {
        const id = $(this).data("id");
        const student = students.find(s => s.id == id);

        if (student) {
            $("#studentModalLabel").text("Edit Mahasiswa");
            $("#studentId").val(student.id);
            $("#nim").val(student.nim);
            $("#nama").val(student.nama);
            $("#jurusan").val(student.jurusan);
            
            // Tampilkan Modal
            const modal = new bootstrap.Modal(document.getElementById('studentModal'));
            modal.show();
        }
    });

    // Reset form judul saat tombol Tambah diklik
    $("#btnAdd").click(function() {
        $("#studentModalLabel").text("Tambah Mahasiswa");
        $("#studentForm")[0].reset();
        $("#studentId").val("");
    });

    // 4. Delete Logic
    $(document).on("click", ".btn-delete", function() {
        if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
            const id = $(this).data("id");
            // Filter array untuk menghapus ID yang cocok
            students = students.filter(s => s.id != id);
            saveData();
        }
    });
});

// Fungsi Render Tabel (Read) - Updated UI
    function renderTable() {
        const tbody = $("#student-table-body");
        tbody.empty(); 

        if (students.length === 0) {
            $("#empty-state").removeClass("d-none");
        } else {
            $("#empty-state").addClass("d-none");
            
            students.forEach((student, index) => {
                const row = `
                    <tr>
                        <td class="ps-3">${index + 1}</td>
                        <td><span class="fw-bold text-dark">${student.nim}</span></td>
                        <td>
                            <div class="d-flex align-items-center">
                                <div class="bg-light rounded-circle me-2 d-flex align-items-center justify-content-center fw-bold text-secondary" style="width:35px; height:35px;">
                                    ${student.nama.charAt(0).toUpperCase()}
                                </div>
                                ${student.nama}
                            </div>
                        </td>
                        <td><span class="badge bg-light text-dark fw-normal border">${student.jurusan}</span></td>
                        <td class="text-end pe-3">
                            <button class="btn btn-action btn-edit-custom btn-edit me-1" data-id="${student.id}">
                                <i class="bi bi-pencil-fill"></i>
                            </button>
                            <button class="btn btn-action btn-delete-custom btn-delete" data-id="${student.id}">
                                <i class="bi bi-trash-fill"></i>
                            </button>
                        </td>
                    </tr>
                `;
                tbody.append(row);
            });
        }
        $("#total-students").text(students.length);
    }