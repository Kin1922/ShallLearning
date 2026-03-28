const totalSteps = 5;

function nextStep(step) {
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.getElementById('step' + step).classList.add('active');
    
    const progressPercent = ((step + 1) / totalSteps) * 100;
    document.getElementById('progress').style.width = progressPercent + '%';
    
    window.scrollTo({top: 0, behavior: 'smooth'});
}