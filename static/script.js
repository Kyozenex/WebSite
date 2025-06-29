const playYtBtn = document.getElementById('playYtBtn');
const youtubeUrlInput = document.getElementById('youtubeUrl');

playYtBtn.addEventListener('click', async () => {
    try {
        const url = youtubeUrlInput.value.trim();
        if (!url) {
            alert("Введите ссылку на YouTube!");
            return;
        }

        // Показываем загрузку
        playYtBtn.disabled = true;
        playYtBtn.textContent = "Загрузка...";

        const response = await fetch('http://localhost:5000/youtube', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url })
        });

        if (!response.ok) {
            const error = await response.text();
            throw new Error(error || "Ошибка сервера");
        }

        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        document.getElementById('audio').src = audioUrl;
        document.getElementById('audio').play();

    } catch (error) {
        console.error("Ошибка:", error);
        alert("Ошибка: " + error.message);
    } finally {
        playYtBtn.disabled = false;
        playYtBtn.textContent = "▶ Воспроизвести";
    }
});