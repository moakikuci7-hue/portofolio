function prosesPerhitungan() {
    // Pastikan ID ini benar-benar ada di index.html: 'startNum' dan 'endNum'
    const startNum = parseInt(document.getElementById('startNum').value);
    const endNum = parseInt(document.getElementById('endNum').value);
    
    // Pastikan Anda memiliki radio button dengan name="operation"
    const selectedOperation = document.querySelector('input[name="operation"]:checked');

    // !!! Cek Penting di Sini !!!
    // Jika tidak ada radio button yang terpilih, 'selectedOperation' bisa bernilai null, 
    // yang akan menyebabkan kode error saat mencoba mengakses '.value'.
    
    if (!selectedOperation) {
        alert("ERROR: Harap pilih salah satu operasi (Daftar, Total, atau Persentase).");
        return; // Hentikan eksekusi jika tidak ada yang dipilih
    }
    
    const operationValue = selectedOperation.value; // Ambil nilai setelah memastikan sudah ada pilihan
    
    const hasil = hitungData(startNum, endNum);
    let popUpMessage = "";

    // ... sisa logika switch case menggunakan 'operationValue' ...
    switch (operationValue) {
        case 'list':
            // ...
            break;
            
        // ... dst.
    }
    
    // 5. TAMPILKAN HASIL MENGGUNAKAN ALERT BOX
    alert(popUpMessage);
}