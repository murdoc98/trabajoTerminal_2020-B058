echo "Creando contenedor de la base de datos"
docker-compose up -d
echo "Transpilando el backend..."
cd back
ls -la
npm run clear
npm run lint
npm run build
npm start
