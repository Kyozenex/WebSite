from flask import Flask, request, send_file
from pytube import YouTube
import os

app = Flask(__name__)

@app.route('/youtube', methods=['POST'])
def youtube_audio():
    url = request.json.get('url')  # Получаем ссылку из запроса
    yt = YouTube(url)
    audio = yt.streams.filter(only_audio=True).first()  # Берём аудиопоток
    audio.download(filename="temp_audio.mp3")  # Скачиваем временный файл
    return send_file("temp_audio.mp3")  # Отправляем его пользователю

if __name__ == '__main__':
    app.run(debug=True)