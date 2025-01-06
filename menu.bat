@echo off

:: Cambia al directorio donde se encuentra tu servidor (por ejemplo, el backend en Node.js)
cd C:\Users\win\Desktop\menu

:: Ejecuta el backend (suponiendo que el backend esté en Node.js)
start npm start

:: Espera un poco para asegurarse de que el servidor esté en marcha antes de abrir el archivo HTML
timeout /t 10 /nobreak  :: Aumenté el tiempo de espera a 10 segundos

:: Abre el archivo HTML en el navegador (reemplaza la ruta con la ubicación de tu archivo HTML)
start "" "C:\Users\win\Desktop\menu\menu.html"
