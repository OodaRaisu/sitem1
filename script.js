// **BURAYI DEĞİŞTİRİN**: Önceden belirlenen gizli şifre
const correctPassword = "Aşkım";"Birtanem";"Sevgilim"

// HTML elementlerini alıyoruz
const actionButton = document.getElementById('actionButton'); // Artık tek bir aksiyon butonu var
const passwordInputArea = document.getElementById('passwordInputArea'); // Şifre inputu ve hata mesajını içeren div
const passwordInput = document.getElementById('passwordInput');
const messageDisplay = document.getElementById('messageDisplay');
const errorMessage = document.getElementById('errorMessage');

let isPasswordScreenActive = false; // Şifre ekranının aktif olup olmadığını tutan değişken

// 1. Aksiyon düğmesine tıklandığında
actionButton.addEventListener('click', () => {
    if (!isPasswordScreenActive) {
        // Eğer şifre ekranı aktif değilse (yani "Şifre Gir" durumundaysa)
        actionButton.textContent = 'Tamam'; // Buton metnini "Tamam" olarak değiştir
        passwordInputArea.classList.remove('hidden'); // Şifre giriş alanını göster
        passwordInput.focus(); // Şifre giriş alanına odaklan
        isPasswordScreenActive = true; // Şifre ekranını aktif olarak işaretle
        
    } else {
        // Eğer şifre ekranı aktifse (yani "Tamam" durumundaysa)
        const enteredPassword = passwordInput.value.trim();

        // Şifre kontrolü
        if (enteredPassword === correctPassword) {
            // Doğru şifre
            actionButton.classList.add('hidden'); // "Tamam" butonunu gizle
            passwordInputArea.classList.add('hidden'); // Şifre giriş alanını gizle
            messageDisplay.classList.remove('hidden'); // Mesajı göster
            errorMessage.textContent = ''; // Hata mesajını temizle
        } else {
            // Yanlış şifre
            errorMessage.textContent = 'Yanlış şifre. Lütfen tekrar deneyin.';
            passwordInput.value = ''; // Şifre giriş alanını temizle
            passwordInput.focus();
        }
    }
});

// Kullanıcı Enter tuşuna bastığında da kontrolü yap
passwordInput.addEventListener('keypress', (event) => {
    // Enter tuşu (keyCode 13)
    if (event.key === 'Enter' && isPasswordScreenActive) { 
        actionButton.click(); // 'Tamam' butonunun tıklama olayını tetikle
    }
});