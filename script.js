const totalSteps = 6;
const bgMusic = document.getElementById('bgMusic');

function nextStep(step) {
    // Memutar musik saat tombol START ditekan
    if (step === 1 && bgMusic.paused) {
        bgMusic.play().catch(error => console.log("Gagal memutar audio:", error));
    }

    // Sembunyikan semua step dan aktifkan step yang dipilih
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.getElementById('step' + step).classList.add('active');
    
    // Update progress bar
    const progressPercent = ((step + 1) / totalSteps) * 100;
    const progressElement = document.getElementById('progress');
    if (progressElement) {
        progressElement.style.width = progressPercent + '%';
    }
    
    // Scroll ke atas halaman dengan halus
    window.scrollTo({top: 0, behavior: 'smooth'});
}